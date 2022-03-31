import {
  ImageStorageServiceApi,
  ImageStorageServiceGetListRequest,
} from '@zukte/api-client';

import {ZUKTE_CONFIGURATION} from 'logic/configuration/zukte';
import {Page} from './page';

type P = Page<string>;

export async function* imageStorageServiceGetListGenerator(
  request: ImageStorageServiceGetListRequest
): AsyncGenerator<P, P, unknown> {
  const {continuationToken, pageSizeHint = 0} = request;
  const api = new ImageStorageServiceApi(ZUKTE_CONFIGURATION);

  let current: P = {
    values: [],
    continuationToken: continuationToken,
  };

  do {
    const response = await api.imageStorageServiceGetList({
      ...request,
      pageSizeHint: pageSizeHint,
      continuationToken: current.continuationToken,
    });

    current = {
      values: response.urls ?? [],
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
