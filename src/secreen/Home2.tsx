import React, { useEffect } from  'react'
import { StyleSheet, Text, TextInput, View, Button, ScrollView } from 'react-native';
import { useState } from 'react'

const Home = ({navigation}) => {
    const newform2 = () => {
        navigation.navigate('Home')
      }

    return (
        
        <View>
            
         <Text>Hola2</Text>
         <Button
          title="Boton"
          onPress={newform2}
        />
            
            </View>   
    )
}

export default Home

const styles = StyleSheet.create({
    
    
  });