import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function LoginScreen( {navigation} ) {
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button title='TopTab' onPress={()=> navigation.navigate('TOP')} />
    </View>
  )
}

const styles = StyleSheet.create({})