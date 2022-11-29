import React, { useState } from "react";
import "./App.css";
import styled from 'styled-components';
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import TextField from '@mui/material/Button';


let mainArray = [] ;


function App() {

  return ( 
<SafeAreaView>
  
  <TextField id="outlined-basic" label="Kingdom" variant="outlined" />

  <div>
  Kingdom Cards:
</div>
<div>
  {
    [mainArray]
  }
</div>
<div> 
  ---
</div>
<div>
  Landscape Cards:
</div>
</SafeAreaView>
  );

}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;