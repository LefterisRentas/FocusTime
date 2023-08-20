/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  /*
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  */
} from 'react-native';

import tw from 'twrnc';
/*
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
*/
function App(): React.JSX.Element {
  return (
    <SafeAreaView style={tw`bg-black h-full w-full`}>
      <View style={tw`bg-black h-full w-full`}>
        <Text style={tw`text-center flex-auto p-5 m-30 text-2xl text-white`}>
          Hello World
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
