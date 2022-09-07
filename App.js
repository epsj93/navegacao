import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextoCental from './src/components/TextoCental';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TextoCental>App</TextoCental>
    </SafeAreaView>
  );
};

export default App;
