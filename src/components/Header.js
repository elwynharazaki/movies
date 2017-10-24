import { Text, View } from 'react-native';
import React from 'react';
import axios from 'axios';

const Header = (props) => {
   const { viewStyle, textStyle } = styles;

   const movies = 'https://api.themoviedb.org/3/movie/top_rated?api_key=eea85db15baebd083012741bef30dd93&language=en-US&page=1'

   return (
  <View style={viewStyle}>
    <Text style={textStyle}>{props.title}</Text>
  </View>
  );
};

const styles = {
   textStyle: {
      color: '#85A4AF',
      fontSize: 35,
      padding: 10,
   },

   viewStyle: {
      backgroundColor: '#010709',
      alignItems: 'center',
   }
};
export default Header;