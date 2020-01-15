import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default class ReactImage extends React.Component {
	render() {
		let pic = {
			url: 'https://facebook.github.io/react-native/img/tiny_logo.png'
		};
		return (
			<View>
				<Image source={pic} style={styles.picture} />
				<Text>{this.props.name}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	picture: {
		width: 200,
		height: 200
	}
});
