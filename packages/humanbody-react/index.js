/* @flow */

import React from 'react';

import createHumanBody from '@ncigdc/humanbody';

type TProps = {|
  caseCountKey?: string,
  clickHandler?: (e: any) => void,
  data?: mixed,
  fileCountKey?: string,
  height?: number,
  labelSize?: string,
  offsetLeft?: number,
  offsetTop?: number,
  primarySiteKey?: string,
  selector?: string,
  width?: number,
|};

const Humanbody = (props: TProps) => (
  <div>{createHumanBody(props)}</div>
);

export default Humanbody;
