import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import ReactImage from './ReactImage';

export default class Page3 extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.white}>やるのね</Text>
			 </View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent:'center',
		backgroundColor: '#000022'
	},
	white: {
		fontSize: 50,
		color: 'white'
	},
});