import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

/**
 *
 *
 * @class Login
 * @extends {React.Component}
 */
class Login extends React.Component {
	_handleToPageController = () => {
		navigation.navigate('PageController');
	};
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.white}>Login画面</Text>
				<View style={styles.buttonContainer}>
					<Button
						onPress={() => this._handleToPageController()}
						transparent
						style={styles.button}
						title="LOGIN"
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#000022'
	},
	white: {
		fontSize: 20,
		color: 'white'
	},
	buttonContainer: {
		margin: 20,
		paddingHorizontal: 60,
		backgroundColor: 'white'
	},
	button: {
		color: 'white',
		shadowOpacity: 0.25
	}
});

export default Login;
