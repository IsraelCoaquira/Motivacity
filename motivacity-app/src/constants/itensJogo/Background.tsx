import React from "react";
import { View, Image, Text } from "react-native";

const grama1 = "#72cc6a";
const grama2 = "#56b050";

interface RowProps {
  row: number;
};

const Row = ({row}: RowProps) => {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      {new Array(8).fill(0).map((_, col) => (<Square key={col} row={row} col={col}/>))}
    </View>
  );
}

interface SquareProps extends RowProps{
  col: number;
};

const Square = ({ row, col}: SquareProps) =>{
  const offset = row % 2 === 0 ? 1 : 0
  const backgroundColor = col % 2 === 0? grama1 : grama2
  return(
    <View style={{flex: 1, backgroundColor}}>
      <Text>{row}</Text>
      <Text>{col}</Text>
    </View>
  )
}


const Background = () => {
  
  <View style={{flex: 1}}>
    {
      new Array(8).fill(0).map((_, row) =>(
        <Row key={row} row={row} />
      ))
    }
  </View>
};
export default Background;
