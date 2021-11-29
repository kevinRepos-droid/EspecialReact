import React, { useEffect } from  'react'
import { StyleSheet, Text, TextInput, View, Button, ScrollView } from 'react-native';
import { useState } from 'react'

const Home = ({navigation}) => {
    const newform = () => {
        navigation.navigate('Home2')
      }

    return (
        
        <View>
            
         <Text>Hola1</Text>
         <Button
          title="Boton"
          onPress={newform}
        />
            
            </View>   
    )
}

export default Home

const styles = StyleSheet.create({
    
    
  });