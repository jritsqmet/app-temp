import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'



export default function Ejercicio1Screen({ navigation }) {
  const [numero1, setNumero1] = useState(0)
  const [numero2, setNumero2] = useState(0)
  const [resultado, setResultado] = useState(0)

  //////HOOK USEEFFECT
  useEffect(() => {
    if( numero1 >10 ){
      Alert.alert("error")
      setNumero1(10)
    }

    if (numero1 < -10){
      Alert.alert("Error", "No se permiten números menores que 10")
      setNumero1(-10)
    }

   
  }, [numero1, numero2])
  

  /////////////////////////
  function aumentar() {
    setNumero1(numero1 + 1)
  }

  function restar() {
    setNumero1(numero1 - 1)
  }

  function operacion( tipoOperacion){
    //////SWITCH
    if(tipoOperacion === "+"){
      setResultado( numero1 + numero2 )
    }
    
    if(tipoOperacion === "-"){
      setResultado( numero1 - numero2 )
    }
  }

  return (
    <View style={styles.container}>
      <Text>Ejercicio1Screen</Text>
      <Button title='Ejercicio2 =>' onPress={() => navigation.navigate('Ejercicio2')} />

      <View style={styles.fila}>
        <Button title='-' onPress={() => restar()} />
        <Text>  {numero1}  </Text>
        <Button title='+' onPress={() => aumentar()} />
      </View>

      <View style={styles.fila}>
        <Button title='-' onPress={()=> setNumero2(numero2-1)}/>
        <Text>  {numero2}  </Text>
        <Button title='+' onPress={()=> setNumero2(numero2+1)}/>
      </View>

      <View style={styles.linea}/>
      <Text>{resultado}</Text>
      <View style={styles.linea}/>
      <Button title='SUMAR' onPress={()=> operacion('+')}/>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fila:{
    flexDirection:'row'
  },
  linea:{
    borderWidth:1,
    width: "80%"
  }
})