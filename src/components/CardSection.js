import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
   const { cardSectionStyle} = styles;

   return (
      <View style={cardSectionStyle}>
         {props.children}
      </View>
   );
}

const styles = {
   cardSectionStyle: {
      borderBottomWidth: 2,
      padding: 5,
      backgroundColor: '#010709',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      borderColor: '#020E13',
      position: 'relative'
   }
}

export default CardSection;