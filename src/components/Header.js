import { Text, View } from 'react-native';
import React from 'react';

const Header = (props) => {
	const { headerStyle, textStyle } = styles;

   return (
		<View style={headerStyle}>
			<Text style={textStyle}>{props.title}</Text>
		</View>
	);
};

const styles = {

   headerStyle: {
      alignItems: 'center',
      backgroundColor: '#010709'
   },

   textStyle: {
      color: '#85A4AF',
      fontSize: 25,
      padding: 5
   }
};

export default Header;
