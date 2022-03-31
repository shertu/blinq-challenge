import {ScoredNodeSelectionExtension} from './scored-node-selection';

export interface NodeSelectionGamePlayer {
  readonly id: string | number;
  name?: string;
  readonly scores: ScoredNodeSelectionExtension[];
}
