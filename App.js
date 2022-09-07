import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import TelaA from './src/views/TelaA';
import TelaB from './src/views/TelaB';
import TelaC from './src/views/TelaC';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TelaA />
      <TelaB />
      <TelaC />
    </SafeAreaView>
  );
};

export default App;
