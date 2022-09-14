import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, SafeAreaView, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import Message from '../components/Message';

function Chat({ route, navigation }) {
    const [messages, setMessages] = useState([{ id: Math.random(), name: 'Paula', text: 'bla bla' }]);
    const [input, setInput] = useState('');

    const user = useSelector(state => state)

    const { socket } = route.params

    useEffect(() => {
        navigation.setOptions({
            title: user.room,
            headerLeft: null
        })
    }, [])

    useEffect(() => {
        console.log('Messages')
        console.log(messages);

        socket.on("message", (data) => {
            let temp = messages;
            temp.push({
                userId: data.id,
                name: data.name,
                id: Math.random(),
                text: data.text,
            });
            setMessages([...temp].reverse());
        });
    }, [socket]);

    const onSend = () => {
        if (input !== "") {
            console.log(messages)
            socket.emit("chat", { userId: user.id, text: input });
            setInput("");
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <SafeAreaView style={styles.chatArea}>
                <FlatList
                    data={messages}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => {
                        return <Message message={item} />;
                    }}
                    inverted
                />
            </SafeAreaView>

            <View style={styles.inputArea}>
                <TextInput
                    style={styles.input}
                    placeholder="Escreva sua mensagem..."
                    value={input}
                    onChangeText={(text) => setInput(text)}
                    onSubmitEditing={onSend}
                    autoFocus={true}
                />
                <TouchableOpacity onPress={onSend} style={styles.button}>
                    <Text>Enviar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    chatArea: {
        backgroundColor: '#f5f5f5', 
        width: '100%', 
        flex: 1
    },
    inputArea: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    input: {
        backgroundColor: '#f5f5f5',
        flex: 1,
        marginRight: 10,
        padding: 10,
        borderColor: '#00467F',
        borderWidth: 2,
        borderRadius: 10
    },
    button: {
        backgroundColor: '#00467F',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Chat;