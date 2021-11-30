import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, TextInput, ScrollView} from 'react-native'

const List = ({ navigation }) => {

    const [nombre, setNombre] = useState<string>('')
    const [nombres, setNombres] = useState<string[]>([])
    const [parcial1, setParcial1] = useState<string>("")
    const [parcial2, setParcial2] = useState<string>("")
    const [parcial3, setParcial3] = useState<string>("")
    const [resultado, setResultado] = useState<number>(0);
   
    const crearNombre = () => {
        setNombres([...nombres, nombre])
        let calculo =parseFloat(parcial1) + parseFloat(parcial2) + parseFloat(parcial3)
        let calcul = calculo / 3
                let resultado = calcul
        setResultado(resultado)
    }



    return (
        <ScrollView style={styles.scrollView}>
      <View>

      <View style={styles.titlekevin}>
          <Text style={styles.text}>  Calificaciones</Text>
        </View>


        <View >
          <Text style={styles.text1}>   Nombre del Estudiante</Text>
        </View>


            
        <View style={styles.container}>
            
          <TextInput
            placeholder={"Ingresar"}
            style={styles.text}
            onChangeText={setNombre}
          />
       
        </View>
        <View>
        <Text style={styles.text1}>I Parcial</Text>
        <TextInput
            placeholder={"I P"}
            style={styles.text}
            onChangeText={setParcial1}
          />
              <Text style={styles.text1}>I Parcial</Text>
            <TextInput
            placeholder={"II P"}
            style={styles.text}
            onChangeText={setParcial2}
          />
        <Text style={styles.text1}>I Parcial</Text>
         <TextInput
            placeholder={"III P"}
            style={styles.text}
            onChangeText={setParcial3}
          />
      </View>
      
        <View style={styles.container1}>
        <View style={styles.fixToImput}>
        <Button 
          title="Agregar" 
          onPress={crearNombre}
          
          color="#8C8A8A"
           />
        </View>
        </View>
        
        {nombres.map((lista,index) => (
          <View style={styles.container} key={index}>
            <Text style={styles.text}>{lista}</Text>
            <Text style={styles.text}>La nota Final es {resultado}</Text>  
        
          </View>
          
        ))}
        <View style={{ marginHorizontal:100}}>

      </View>
      
        </View>

        </ScrollView>
    );
}

export default List;

const styles = StyleSheet.create({

    container: {
        width: '95%',
        justifyContent: 'space-between',
        marginBottom: 5,
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
    text1: {
        color: '#05786A',

    },
    containerBase: {
        flex: 1,

    },
    inputs: {
        borderRadius: 8,
        padding: 10,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
    },
    scrollView: {
        marginHorizontal: 20
    },
    titlekevin: {
        marginTop: 1,
        paddingVertical: 10,
        backgroundColor: "#C4C4C4",
    },
    fixToImput: {
        flexDirection: 'row',
        paddingVertical: 5,

    },
    container1: {
        flex: 2,
        justifyContent: 'center',
        marginLeft: 280
    }
})