import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

function Message({ message }) {
    const user = useSelector(state => state)

    console.log(user)
    console.log(message)
    console.log(user.id === message.userId);

    return user.id === message.userId ? (
        <View style={[styles.messageContainer, styles.messageContainerFromMe]}>
            <LinearGradient
                colors={['#00467F', '#A5CC82']}
                end={{ x: 0, y: 0 }}
                locations={[0.4, 0]}
                style={styles.messageFromMe}
            >
                <Text style={styles.nameMe}>{message.name}:</Text>
                <Text style={styles.textMe}>{message.text}</Text>
            </LinearGradient>
        </View>
    ) : (
        <View style={[styles.messageContainer, styles.messageContainerFromOther]}>
            <View style={styles.messageFromOther}>
                <Text style={styles.nameOther}>{message.name}:</Text>
                <Text style={styles.textOther}>{message.text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    messageContainer: {
        flex: 1,
    },
    messageContainerFromMe: {
        alignItems: 'flex-end'
    },
    messageContainerFromOther: {
        alignItems: 'flex-start'
    },
    messageFromMe: {
        marginVertical: 5,
        marginHorizontal: 20,
        padding: 10,
        borderRadius: 10,
        width: '70%'
    },
    messageFromOther: {
        backgroundColor: '#7bb3e0',
        marginVertical: 5,
        marginHorizontal: 20,
        padding: 10,
        borderRadius: 10,
        width: '70%'
    },
    nameMe: {
        color: '#f5f5f5',
        fontWeight: 'bold',
        marginBottom: 8
    },
    nameOther: {
        color: '#333', 
        fontWeight: 'bold', 
        marginBottom: 10
    },
    textMe: { color: '#f5f5f5' },
    textOther: { color: '#333' },
})

export default Message