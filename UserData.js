import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function UserData() {
    return (
        <Drawer.Navigator initialRouteName="Feed">
            <Drawer.Screen
                name="Feed"
                component={Feed}
                options={{ drawerLabel: 'Home' }}
            />
            <Drawer.Screen
                name="Notifications"
                component={Notifications}
                options={{ drawerLabel: 'Updates' }}
            />
            <Drawer.Screen
                name="Profile"
                component={Profile}
                options={{ drawerLabel: 'Profile' }}
            />
        </Drawer.Navigator>

    )
}