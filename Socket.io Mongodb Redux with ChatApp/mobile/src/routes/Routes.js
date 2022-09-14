import React from 'react';
import { useSelector } from 'react-redux';
import { io } from "socket.io-client";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Chat from '../screens/Chat';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const socket = io('http://ipadress:port');// your ip adress and socket
socket.on('connect', () => {
    console.log(`I'm connected with the back-end ${socket.id}`)
});

const globalScreenOptions = {
    headerStyle: {
        backgroundColor: '#00467F',
        shadowOpacity: 0,
        elevation: 1,
        height: 52,
    },
    headerTintColor: '#f2f2f2',
    headerTitleAlign: 'center',
};

function Routes() {
    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={globalScreenOptions}>
                <Stack.Screen name="Home" component={Home} initialParams={{ socket }} />
                <Stack.Screen
                    name="Chat"
                    component={Chat}
                    initialParams={{ socket }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;