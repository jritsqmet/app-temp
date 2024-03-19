import { StyleSheet, Text, View, Image, Modal, Button } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Card(props) {
    //console.log(props);
    const [modalVisible, setModalVisible] = useState(false)

    //console.log(props)
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text>Descripción: {props.datos.descripcion}</Text>
                <Image source={{ uri: props.datos.url }} style={styles.img} />
            </TouchableOpacity>

            <Modal
                visible={modalVisible}
                transparent={true}
            >
                <View style={styles.modal}>
                    <Text>HOLAAAAAA</Text>
                    <Image source={{ uri: props.datos.url }} style={styles.img} />
                    <Button title='cerrar' onPress={() => setModalVisible(false)} />
                </View>
            </Modal>

        </View>
    )
}


const styles = StyleSheet.create({
    img: {
        width: 200,
        height: 100
    },
    container: {
        flex: 1,
        backgroundColor: '#666',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 10
    },
    modal:{
        flex:1,
        backgroundColor:'rgba(112,0,0,0.7)',
        justifyContent:'center',
        alignItems:'center'
    }

})