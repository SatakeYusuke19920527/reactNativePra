import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.bigword}>ネイティブアプリ開発</Text>
			</View>
		);
	}
}

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'black'
	},
	bigword: {
		fontSize: 60
	}
});
