import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
	root: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

const SubScreen = (): React.ReactElement => (
	<View style={styles.root}>
		<Text>Sub Screen</Text>
	</View>
);

export default SubScreen;