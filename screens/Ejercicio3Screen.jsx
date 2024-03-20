import { StyleSheet, Text, View, TouchableOpacity, Alert , Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'


export default function Ejercicio3Screen() {

  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("")

  //////////////////
  const [listaUsuarios, setListaUsuarios] = useState([])
  const API_USUARIOS = "https://jritsqmet.github.io/web-api/usuarios.json"
  useEffect(() => {
    if ( listaUsuarios.length === 0 ) {
      fetch(API_USUARIOS)
        .then((response) => response.json())
        .then((datos) => setListaUsuarios(datos))
        .catch((error) =>
          console.log(error))
    }

    //console.log(listaUsuarios);
  }, [listaUsuarios])

  function verificarUsuario( usuarioLogin, passLogin){

    for( let usuario of listaUsuarios.users){
        if( usuario.username === usuarioLogin){
          if( usuario.password === passLogin){
            Alert.alert("Mensaje", "Acceso correcto")
            break;
          }else{
            Alert.alert("Mensaje", "Acceso denegado")
          }
        }
    }
  }

  return (
    <View style={styles.container}>
      <Text>Ejercicio3Screen</Text>
      <TextInput 
        placeholder='Usuario'
        onChangeText={ (texto)=> setUsuario(texto) }
        style={styles.input}
      />

      <TextInput 
        placeholder='clave'
        onChangeText={ (texto)=> setClave(texto) }
        style={styles.input}
      />

      <TouchableOpacity 
        onPress={ () => verificarUsuario( usuario, clave ) }
        style={ styles.btn }
      >
        <View style={styles.fila}>
          <Text style={{ fontSize:30}}>LOGIN</Text>
          <Image 
            source={{ uri: "https://ps.w.org/login-customizer/assets/icon-256x256.png?rev=2455454"}} 
            style={ styles.img }
          />
        </View>
       
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input:{
    borderWidth:1,
    width:"80%",
    height:50,
    marginBottom:10,
    borderRadius:40,
    paddingHorizontal:40

  },
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  btn:{
    backgroundColor: "#6ea690",
    width: "60%",
    height:80,
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center'
  },
  img:{
    width:70,
    height:70,
  },
  fila:{
    flexDirection:'row'
  }
})