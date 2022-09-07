import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import PassoStack from '../components/PassoStack';
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';

const Stack = createNativeStackNavigator();

export default (props) => (
  <Stack.Navigator>
    <Stack.Screen name="TelaA">
      {(props) => (
        <PassoStack {...props} avancar="TelaB">
          <TelaA />
        </PassoStack>
      )}
    </Stack.Screen>
    <Stack.Screen name="TelaB">
      {(props) => (
        <PassoStack {...props} avancar="TelaC">
          <TelaB />
        </PassoStack>
      )}
    </Stack.Screen>
    <Stack.Screen name="TelaC" component={TelaC} />
  </Stack.Navigator>
);
