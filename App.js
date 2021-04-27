import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Home } from './src/screens'
import Login from './src/components/Login';
import Tabs from './src/navigation/Tab';
import Drawers from './src/navigation/drawer'
import Boarding from './src/components/Onboarding';
import Chart from './src/screens/Chart';


const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.color,
    border: "transparent"
  }
}

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{
        //headerShown: false
      }}
        initialRouteName={'Onboarding'}
      >
        <Stack.Screen name="Boarding" component={Boarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={Login}
         options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Tabs} 
         options={{ headerShown: false }}/>
        <Stack.Screen name="Drawer" component={Drawers} 
         options={{ headerShown: false }}/>
        <Stack.Screen name="Chart" component={Chart}
          options={({ route }) => ({
            title: route.params.userName, headerBackTitleVisible:false
          })}
         
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;