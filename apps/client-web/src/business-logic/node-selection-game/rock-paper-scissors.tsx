import {NodeAttributes, GraphExtension} from './graph';

import {NounPaperHandIcon} from 'icons/noun-paper-hand-352752';
import {NounRockHandIcon} from 'icons/noun-rock-hand-341561';
import {NounScissorsHandIcon} from 'icons/noun-scissors-hand-341563';
import React from 'react';

const data: {[node: string]: NodeAttributes} = {
  rock: {
    createElement: p => <NounRockHandIcon {...p} />,
  },
  paper: {
    createElement: p => <NounPaperHandIcon {...p} />,
  },
  scissors: {
    createElement: p => <NounScissorsHandIcon {...p} />,
  },
};

const graph = new GraphExtension();

for (const [node, attr] of Object.entries(data)) {
  graph.addNode(node, attr);
}

const nodeArr: string[] = ['rock', 'scissors', 'paper'];
for (let i = 0; i < nodeArr.length; i++) {
  const nodeSource = nodeArr[i];
  const nodeTarget = nodeArr[(i + 1) % nodeArr.length];
  const edgeWeight = 1;
  graph.addEdge(nodeSource, nodeTarget, {weight: edgeWeight});
}

export default graph;
