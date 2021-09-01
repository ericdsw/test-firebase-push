import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
	MainScreen,
	SubScreen
} from './screens';
import RootStackParamList from './RootStackParamList';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigationContainer = (): React.ReactElement => (
	<NavigationContainer >
		<Stack.Navigator initialRouteName="Main">
			<Stack.Screen name="Main" component={MainScreen} />
			<Stack.Screen name="Sub" component={SubScreen} />
		</Stack.Navigator>
	</NavigationContainer>
);

export default MainNavigationContainer;