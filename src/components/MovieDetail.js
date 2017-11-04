import React from 'react';
import { Image, Text, View } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const MovieDetail = (props) => {
	console.log(props);
   
	return (
		<View>
			<Card>
				<CardSection>
					<View>
						<Image
							style={{ width: 150, height: 75 }}
							source={{ uri: `https://image.tmdb.org/t/p/w500${props.movies.backdrop_path}` }}
                  />
					</View>               

					<View style={styles.headerContentStyle}>
						<Text style={styles.titleTextStyle}>{props.movies.title}</Text>
						<Text style={styles.dateTextStyle}>Release: {props.movies.release_date}</Text>
						<Text style={styles.dateTextStyle}>Ratings: {props.movies.vote_average}</Text>
					</View>
				</CardSection>

				<CardSection>
					<Image
						style={{ height: 500, width: '100%' }}
						source={{ uri: `https://image.tmdb.org/t/p/w500${props.movies.poster_path}` }}
					/>
				</CardSection>
            
				<CardSection>
					<View>
						<Text style={styles.dateTextStyle}>{props.movies.overview}</Text>
					</View>
				</CardSection>
			</Card>
		</View>
   );
};

const styles = {
   dateTextStyle: {
		color: '#85A4AF',
		fontSize: 14,
		padding: 2
   },

   headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around',
		paddingLeft: 10
	},
	
	titleTextStyle: {
		color: '#EAF9FF',
		fontSize: 14,
		padding: 1,
		fontWeight: 'bold'
   }
};

export default MovieDetail;
