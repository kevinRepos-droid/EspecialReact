import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../secreen/Home';
import separator from '../secreen/separator';




const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Inicio'>
        <Stack.Screen name="Inicio" component={Home} 
        options={{
          title: 'Calificaciones',
          headerStyle: {
            backgroundColor: '#C4C4C4',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',    
        },
        }}/>
        
       </Stack.Navigator>

    </NavigationContainer>
  )
}

export default MainStackNavigator