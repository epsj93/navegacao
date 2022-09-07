import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';

const Stack = createNativeStackNavigator();

export default (props) => (
  <Stack.Navigator>
    <Stack.Screen name="TelaA" component={TelaA} />
    <Stack.Screen name="TelaB" component={TelaB} />
    <Stack.Screen name="TelaC" component={TelaC} />
  </Stack.Navigator>
);
