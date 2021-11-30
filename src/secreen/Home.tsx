    import React, { useState, useEffect } from 'react'
    import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native'

    const List = ({ navigation }) => {

        const Separator = () => (
            <View style={styles.separator} />
        );

        const [nombre, setNombre] = useState<string>('')
        const [nombres, setNombres] = useState<string[]>([])

        const [parcial1, setParcial1] = useState<string>("")
        const [parcial2, setParcial2] = useState<string>("")
        const [resultado, setResultado] = useState<number>(0);

        const [notasFinales, setNotasFinales] = useState<string[]>([]);
        

        const crearNombre = () => {
            
            setNombres([...nombres, nombre])
            
            let calculo = parseFloat(parcial1) + parseFloat(parcial2)
            let calcul = calculo / 2
            let resultado = calcul
            setNotasFinales([...notasFinales, resultado.toString()])
            setResultado(resultado)
        }
        // useEffect(crearNombre,[parcial1, parcial2, resultado]);

        return (
        
            <View>
            <ScrollView style={styles.scrollView}>
            <View>
                <Text style={styles.text1}> Nombre del Estudiante</Text>
            </View>

            <View style={styles.container}>
                <TextInput
                placeholder={"Ingresar"}
                style={styles.text}
                onChangeText={setNombre}
                />
            </View>
            <View style={styles.fixToImput}>
                <View style={styles.container3}>
                <Text style={styles.text1}>I Parcial</Text>
                <TextInput
                    placeholder={"I P"}
                    style={styles.text}
                    onChangeText={setParcial1}
                />
                </View>

                <View style={styles.container3}>
                <Text style={styles.text1}>II Parcial</Text>
                <TextInput
                    placeholder={"II P"}
                    style={styles.text}
                    onChangeText={setParcial2}
                />
                </View>
                <View style={styles.container3}>
                <Text style={styles.text1}>Final</Text>
                <Text>{resultado}</Text>
                </View>
                <View style={styles.scrollView}>
                    <View style={styles.separator}>
                <Button title="Agregar" onPress={crearNombre} color="#8C8A8A" />
                </View>
                </View>
            </View>

                {nombres.map((lista, index) => (
                <View style={styles.container} key={index}>
                <Text style={styles.text2}>{lista}</Text>
                <Separator />

                <Text style={notasFinales[index]<'60'?styles.textReprobado:styles.text3}>Nota Final: {notasFinales[index]}</Text>
                </View>
            ))}
            <View style={{ marginHorizontal: 100 }}></View>
            </ScrollView>
            </View>
        
        );

    }


    export default List;

    const styles = StyleSheet.create({

        container: {
            width: '95%',
            justifyContent: 'space-between',
            marginBottom :5,
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 20,
            marginLeft: 10,
            borderColor: 'black',
            borderWidth: 2
        },
        container3: {
            width: '24%',
            justifyContent: 'space-between',
            marginBottom: 4,
            paddingVertical: 4,
            paddingHorizontal: 5,
            borderRadius: 4,
            marginLeft: 3,
            borderColor: 'black',
            borderWidth: 2
        },
        text: {
            fontSize: 20,
            color: '#05786A',    
        },
        text3: {
            fontSize: 20,
            color: '#05786A',
            textAlign: 'right',
            
        },
        text2: {
            fontSize: 20,
            color: '#05786A',
        },
        text1: {
            color: '#05786A',
        },
        textReprobado: {
            fontSize: 20,
            color: '#B52222',
            textAlign: 'right',
        }, 
        inputs: {
            borderRadius: 8,
            padding: 10,
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
        },
        scrollView: {
            marginHorizontal: 10
        },
        titlekevin: {
            marginTop: 1,
            paddingVertical: 10,
        },
        fixToImput: {
            flexDirection: 'row',
            paddingVertical: 5,

        },
        container1: {
            flex: 2,
            justifyContent: 'center',
        },
        separator: {
            marginVertical: 8,
            borderBottomColor: '#737373',
            borderBottomWidth: StyleSheet.hairlineWidth,
        },
        textocaja: {
            textAlign: 'left',
            paddingVertical: 20,
            marginLeft: 150,
            fontSize: 20,
            color: '#05786A',
        }
    })