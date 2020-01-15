import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default class Blink extends React.Component {
	componentDidMount = () => {
		setInterval(() => this.setState((previousState) => ({ isShowingText: !previousState.isShowingText })), 1000);
	};

	state = { isShowingText: true };

	render() {
		if (!this.state.isShowingText) {
			return null;
		}
		return (
			<View>
				
				<Text>{this.props.text}</Text>
			</View>
		);
	}
}