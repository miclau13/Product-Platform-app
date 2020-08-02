import React from 'react';

import CalculatorComponent from '../../components/CalculatorComponent';

export interface CalculatorViewProps {};

const CalculatorView: React.ComponentType<CalculatorViewProps> = (props) => {

  return (
    <CalculatorComponent />
  );
}
export default React.memo(CalculatorView);