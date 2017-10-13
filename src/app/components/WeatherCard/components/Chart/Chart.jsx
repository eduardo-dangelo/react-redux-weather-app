import React from 'react';
import { sum, round } from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function avarage(data) {
  return round(sum(data)/data.length);
}

export default (props) => {
  return (
    <div>
      <Sparklines data={props.data} width={100} height={30}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{avarage(props.data)} {props.unity}</div>
    </div>
  );
}