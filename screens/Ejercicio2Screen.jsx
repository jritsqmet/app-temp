import { Button, FlatList, StyleSheet, Text, View, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import Card from '../components/Card';

export default function Ejercicio2Screen() {
  const [descripcion, setdescripcion] = useState("");
  const [url, seturl] = useState("")
  const [lista, setlista] = useState([])

  function agregar(){
    if ( descripcion.trim() !== "" && url.trim() !== '' ){
      let listaTemporal = [ ...lista, { descripcion, url } ]
      setlista( listaTemporal )
      setdescripcion("")
    | seturl("")
    }else{
      Alert.alert("Error", "Llene los campos")
    }
    
  }

  ///////////////
  useEffect(() => {
    Alert.alert("Mensaje", "Lista ACtualizada")

  }, [lista])
  
  //////////////

  return (
    <View>
      <Text>Ejercicio2Screen</Text>
      <TextInput 
        placeholder='Descripción'
        onChangeText={ (texto)=> setdescripcion(texto) }
        value={descripcion}
      />

      <TextInput
        placeholder='URL'
        onChangeText={ (texto)=> seturl(texto) }
        value={url}
      />

      <Button title='Agregar' onPress={()=> agregar()}/>

      <FlatList
        data={lista}
        renderItem={ ( {item} ) => (
          <View>
              <Card  datos={item} />
              
         </View>
        ) }
      
      />
    </View>
  )
}

const styles = StyleSheet.create({
  img:{
    width:200,
    height:100
  }
})