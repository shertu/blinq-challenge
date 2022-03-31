import {
  ApplicationUser,
  ApplicationUserServiceApi,
  ApplicationUserServiceGetListRequest,
} from '@zukte/api-client';

import {ZUKTE_CONFIGURATION} from 'logic/configuration/zukte';
import {Page} from './page';

type P = Page<ApplicationUser>;

export async function* applicationUserServiceGetListGenerator(
  request: ApplicationUserServiceGetListRequest
): AsyncGenerator<P, P, unknown> {
  const {continuationToken, pageSizeHint = 0} = request;
  const api = new ApplicationUserServiceApi(ZUKTE_CONFIGURATION);

  let current: P = {
    values: [],
    continuationToken: continuationToken,
  };

  do {
    const response = await api.applicationUserServiceGetList({
      ...request,
      pageSizeHint: pageSizeHint,
      continuationToken: current.continuationToken,
    });

    current = {
      values: response.items ?? [],
      continuationToken: response.continuationToken,
    };

    if (current.values.length === 0) {
      return current;
    } else {
      yield current;
    }
  } while (current.values.length > 0 && current.values.length >= pageSizeHint);

  return current;
}
