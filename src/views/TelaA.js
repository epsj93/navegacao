import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextoCental from '../components/TextoCental'

const TelaA = ({navigation}) => {
  navigation.navigate("TelaB")
  return (
    <TextoCental corFundo='#E53935'>Tela A</TextoCental>
  )
}

export default TelaA

const styles = StyleSheet.create({})