import React from 'react'
import { View, Text, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Setting from '../screens/Setting';
import Notifications from '../screens/Notifications';

const Drawer = createDrawerNavigator();

const Drawers = () => {
    return (
        <Drawer.Navigator
        initialRouteName="Home"
        >
            <Drawer.Screen name="Setting" component={Setting} />
            <Drawer.Screen name="Notifications" component={Notifications} />
        </Drawer.Navigator>
    )
}
export default Drawers;
