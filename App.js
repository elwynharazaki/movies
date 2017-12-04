import React from 'react';
import { StatusBar, View } from 'react-native';

import Header from './src/components/Header';
import MovieList from './src/components/MovieList';

const App = () => {
	return (
		<View style={{ flex: 1, backgroundColor: '#010709' }}>
         <StatusBar
            barStyle='default'
            translucent
         />
         <Header />
			<MovieList />
		</View>
	);
};

export default App;
