import { View, Text, Button } from 'react-native';
import React from 'react';

const PassoStack = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <View>
        {props.avancar ? (
          <Button
            title="Avançar"
            onPress={() => {
              props.navigation.navigate(props.avancar);
            }}
          />
        ) : (
          false
        )}
      </View>
      <View style={{ flex: 1 }}>{props.children}</View>
    </View>
  );
};

export default PassoStack;
