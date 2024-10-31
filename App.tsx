/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import CodePush from 'react-native-code-push';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>test</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  textStyle: {
    color: 'red',
  },
});

export default CodePush(App);
