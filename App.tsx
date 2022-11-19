import React from 'react';
import { View } from 'react-native';
import KeyBoard from './src/components/Keyboard';
import { Styles } from './src/styles/styles';

const App = () => {
  return (
    <View style={(Styles.container, Styles.viewBottom)}>
      <KeyBoard />
    </View>
  );
};

export default App;
