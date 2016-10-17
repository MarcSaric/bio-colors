/* @flow */

import React from 'react';
import BioColors from '@ncigdc/bio-colors';

const Root = (): React.Element =>
  <div>
    <h1>Standard Colors for Standard Terminology</h1>
    {Object.keys(BioColors).map(type =>
      Object.keys(BioColors[type]).map(term =>
        <div
          style={{
            color: BioColors[type][term],
            marginTop: '5px',
          }}
        >
          {term}: {BioColors[type][term]}
        </div>
      )
    )}
  </div>;


export default Root;
