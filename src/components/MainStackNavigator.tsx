import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../secreen/Home';
import Home2 from '../secreen/Home2';



const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Home2" component={Home2} />

       </Stack.Navigator>

    </NavigationContainer>
  )
}

export default MainStackNavigator