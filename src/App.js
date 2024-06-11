import logo from './logo.svg';
import './App.css';
import React, { useState ,useEffect} from "react";
import {StyleSheet, Text, View} from 'react-native';

function App() {
  const [color,setColor] = useState("blue");

  useEffect(() => {
    document.body.style.backgroundColor = color
}, [color]);
  return (
    <>
    <h1 style={styles.textColor}>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("yellow")}
      >Yellow</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
    </>
  );
}
const styles = StyleSheet.create({
  textColor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
  },
  
});
export default App;
