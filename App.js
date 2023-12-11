import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { usePushNotifications } from './app/Imports/Hooks/usePushNotifications';


import { Link } from 'expo-router';

function App() {

  const { expoPushToken , notification } = usePushNotifications();

  useEffect(() => {
    console.log(1);
    console.log(expoPushToken);
  }, [expoPushToken]);

  return (
    <>
      <View style = {{ justifyContent : 'center' , alignItems : 'center' , width : '100%' , height : '100%'}}>
        <Link href='/Imports/Components/Pages/Dashboard'>Test</Link>
      </View>
    </>
  );
}

export default App;
