import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

export default class Page1 extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			dataSource: [],
			text:'',
		}
		
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.white}>タブ作るのって</Text>
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
		fontSize: 20,
		color: 'white'
	},
});
