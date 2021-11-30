import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, TextInput, ScrollView} from 'react-native'

const List = ({ navigation }) => {

    const [tarea, setTarea] = useState<string>('')
    const [tareas, setTareas] = useState<string[]>([])

    const crearTarea = () => {
        setTareas([...tareas, tarea])
    }
  
    const getUser =() => {
        alert(tarea)
    }
    
    const eliminarTarea = (id:number) => {
        tareas.splice(id,1)
        getTareas()
    }
    const getTareas= () =>{
        setTareas([...tareas])
    }
    return (
        <ScrollView style={styles.scrollView}>
       
      <View style={styles.containerBase}>
      <View style={styles.titlekevin}>
          <Text style={styles.text}>Usuario</Text>
        </View>
        <View style={styles.container}>
            
          <TextInput
            placeholder={"Escriba aqui"}
            style={styles.text}
            onChangeText={setTarea}
          />
          <Button title="Agregar" onPress={crearTarea} />
        </View>
        {tareas.map((lista,index) => (
          <View style={styles.container} key={index}>
            <Text style={styles.text}>{lista}</Text>
            
            <Button
              title="Eliminar"
              onPress={() => eliminarTarea(index)}
              color="red"
            />
            
          </View>
          
        ))}

        <View style={{ marginHorizontal: 120 }}>
          <Button title="ver Datos" onPress={getUser} />
        </View>
        <View style={{ marginHorizontal:120}}>
        <Button title="Regresar" onPress={() => navigation.goBack()} />
      </View>
        </View>
        </ScrollView>
    );
}

export default List;

const styles = StyleSheet.create({

    container: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#C2DDF5',
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginLeft: 10,
        borderColor: 'black',
        borderWidth: 2
    },

    text: {
        fontSize: 20,
        color: '#000000',
        width: '70%'
    },
    containerBase: {
        flex: 1,
        backgroundColor: '#AED9FF',
    },
        inputs: {
        borderRadius: 8,
        padding: 10,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        },
        scrollView: {
            backgroundColor: '#8FB5C3',
            marginHorizontal: 20
        },
        titlekevin: {
            marginTop: 1,
            paddingVertical: 8,
            backgroundColor: "#C4C4C4",
            textAlign: 'center',
        },
})