import { Text, View } from 'react-native';
import React from 'react';

const Header = (props) => {
	const { viewStyle, textStyle } = styles;

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
