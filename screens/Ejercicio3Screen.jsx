import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Ejercicio3Screen() {

  

  //////////////////
  const [listaUsuarios, setListaUsuarios] = useState([])
  const API_USUARIOS = "https://jritsqmet.github.io/web-api/usuarios.json"

  useEffect(() => {
    fetch(API_USUARIOS)
    .then( ( response ) =>  response.json() )
    .then( ( datos ) => setListaUsuarios(datos) )
    .catch( (error) => 
    console.log(error) )

    console.log(listaUsuarios);
  }, [listaUsuario])
  


  return (
    <View>
      <Text>Ejercicio3Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})