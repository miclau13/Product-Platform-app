import React, { useCallback, useState } from 'react';
import { Text, View, StatusBar, SafeAreaView } from 'react-native';

import Row from './components/Row';
import Button, { ButtonProps } from './components/Button';
import styles from './styles';

export interface CalculatorComponentProps {};

interface CalculatorComponent {
  handleButtonOnPress(type: string, value?: number | string): ButtonProps['onPress'];
};

const CalculatorComponent: React.ComponentType<CalculatorComponentProps> = (props) => {
  const [ currVal, setCurrVal ] = useState("0");
  const [ operator, setOperator ] = useState(null);
  const [ prevVal, setPrevVal ] = useState(null);

  const handleButtonOnPress = useCallback<CalculatorComponent['handleButtonOnPress']>((type, value) => _ => {
    if(type === "number") {
      if (currVal === "0") {
        setCurrVal(`${value}`);
      } else {
        setCurrVal(`${currVal}${value}`);
      }
    }

    if(type === "operator") {
      setOperator(value);
      setPrevVal(currVal);
      setCurrVal("0");
    }

    if(type === "clear") {
      setCurrVal("0");
      setOperator(null);
      setPrevVal(null);
    }

    if(type === "posneg") {
      setCurrVal(`${parseFloat(currVal) * -1}`);
    }

    if(type === "percentage") {
      setCurrVal(`${parseFloat(currVal) * 0.01}`);
    }

    if(type === "equal") {
      const current = parseFloat(currVal);
      const previous = parseFloat(prevVal);

      if(operator === "+") {
          setCurrVal((previous + current).toString());
          setOperator(null);
          setPrevVal(null);
      }

      if(operator === "/") {
          setCurrVal((previous / current).toString());
          setOperator(null);
          setPrevVal(null);
      }

      if(operator === "-") {
          setCurrVal((previous - current).toString());
          setOperator(null);
          setPrevVal(null);
      }

      if(operator === "*") {
          setCurrVal((previous * current).toString());
          setOperator(null);
          setPrevVal(null);
      }
    }
  }, [currVal, operator, prevVal]);

  return (
    <View style={styles.container}>
    <StatusBar barStyle="light-content" />
    <SafeAreaView>
      <Text style={styles.value}>{currVal}</Text>
      <Row>
        <Button text="C" theme="secondary" onPress={handleButtonOnPress("clear")} />
        <Button text="+/-" theme="secondary" onPress={handleButtonOnPress("posneg")} />
        <Button text="%" theme="secondary" onPress={handleButtonOnPress("percentage")} />
        <Button text="/" theme="accent" onPress={handleButtonOnPress("operator","/")} />
      </Row>
      <Row>
        <Button text="7" onPress={handleButtonOnPress("number",7)} />
        <Button text="8" onPress={handleButtonOnPress("number",8)} />
        <Button text="9" onPress={handleButtonOnPress("number",9)} />
        <Button text="x" theme="accent" onPress={handleButtonOnPress("operator","*")} />
      </Row>
      <Row>
        <Button text="4" onPress={handleButtonOnPress("number",4)} />
        <Button text="5" onPress={handleButtonOnPress("number",5)} />
        <Button text="6" onPress={handleButtonOnPress("number",6)} />
        <Button text="-" theme="accent" onPress={handleButtonOnPress("operator","-")} />
      </Row>
      <Row>
        <Button text="1" onPress={handleButtonOnPress("number",1)} />
        <Button text="2" onPress={handleButtonOnPress("number",2)} />
        <Button text="3" onPress={handleButtonOnPress("number",3)} />
        <Button text="+" theme="accent" onPress={handleButtonOnPress("operator","+")} />
      </Row>
      <Row>
        <Button text="0" size="double" onPress={handleButtonOnPress("number",0)} />
        <Button text="." onPress={handleButtonOnPress("number",".")} />
        <Button text="=" theme="accent" onPress={handleButtonOnPress("equal")} />
      </Row>
    </SafeAreaView>
    </View>
  );
}; 

export default CalculatorComponent;