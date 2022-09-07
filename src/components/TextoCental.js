import { Text, View } from 'react-native';
import React from 'react';

const TextoCental = (props) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: props.corFundo || '#000',
      }}
    >
      <Text style={{ fontSize: 50, color: props.corTexto || '#FFF' }}>
        {props.children}
      </Text>
    </View>
  );
};

export default TextoCental;
