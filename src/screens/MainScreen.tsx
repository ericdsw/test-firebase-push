import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
	View,
	StyleSheet,
	Text,
	Button
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import RootStackParamList from '../RootStackParamList';

const styles = StyleSheet.create({
	root: {
		alignItems: 'center',
		justifyContent: 'center',
		flexGrow: 1,
	}
});

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Main'
>;


const MainScreen = (): React.ReactElement => {
	const navigation = useNavigation<ProfileScreenNavigationProp>();
	console.log('im the main screen');
	return (
		<View style={styles.root}>
			<Text>Main Screen</Text>
			<Button 
				title="Go to next screen"
				onPress={() => { navigation.navigate("Sub") }} />
		</View>
	);
}

export default MainScreen;
