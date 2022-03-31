import {WeightedDirectedGraph} from '@zukte/node-selection-game';
import {SvgIconProps} from '@mui/material';

export interface NodeAttributes {
  createElement: (props: SvgIconProps) => JSX.Element;
}

export class GraphExtension extends WeightedDirectedGraph<NodeAttributes> {}
