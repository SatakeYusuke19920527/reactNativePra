import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
//ローカルインポート
import Login from './Login';
import PageController from '../PageController';

const AppNavigator = createStackNavigator(
	{
		Login: { screen: Login },
		PageController: { screen: PageController }
	},
	{ initialRouteName: 'Login'}
);

class LoginController extends React.Component {
	render() {
		return (
			<AppNavigator />
		);
	}
}

