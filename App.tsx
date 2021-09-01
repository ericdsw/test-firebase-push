import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Alert } from 'react-native';

import messaging from '@react-native-firebase/messaging';

import MainNavigationContainer from './src/MainNavigationContainer';

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

async function reportToken() {
  const token = await messaging().getToken();
  console.log(token);
}

export default function App() {

  useEffect(() => {
    requestUserPermission();
    reportToken();
  }, []);
  
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    return unsubscribe;
  }, []);

  return (
    <MainNavigationContainer />
  );
}
