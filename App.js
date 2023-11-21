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

import { Link } from 'expo-router';

function App() {



  return (
    <>
      <View style = {{ justifyContent : 'center' , alignItems : 'center' , width : '100%' , height : '100%'}}>
        <Link href='/Imports/Components/Pages/Dashboard'>Test</Link>
      </View>
    </>
  );
}

export default App;
