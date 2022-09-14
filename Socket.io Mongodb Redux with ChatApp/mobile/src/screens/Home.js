import React, { useState } from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

function Home({ route }) {
    const navigation = useNavigation();

    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    const dispatch = useDispatch()
    
    const handleSubmit = () => {
        const { socket } = route.params
        
        dispatch({ type: 'ADD_USER', payload: { id: socket.id, name, room } })

        if (name != '' && room != '') {
            socket.emit('join', { name, room })
            navigation.navigate('Chat')
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View>
                <Text>Nome</Text>
                <TextInput onChangeText={(text) => setName(text)} />

                <Text>Sala</Text>
                <TextInput onChangeText={(text) => setRoom(text)} />

                <TouchableHighlight onPress={handleSubmit}>
                    <Text>Entrar</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default Home;