import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Chat from '../screens/Chat';

const Stack = createNativeStackNavigator();

function AuthRoutes({socket}) {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Chat" component={Chat} initialParams={{ socket }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AuthRoutes;