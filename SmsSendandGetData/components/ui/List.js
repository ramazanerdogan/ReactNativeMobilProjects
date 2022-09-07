import React from "react";
import { StyleSheet, Text, View} from 'react-native';

const List = props =>{
    return(
        <View style={styles.container}>
              <Text style={styles.text}>
                {props._id}
            </Text>
            <Text style={styles.text}>
                {props.telNo}
            </Text>
        </View>
    )
};
export default List;

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:'#eceff1',
        marginVertical:5,
        padding:5,
        alignContent:'center'
    },
    text:{
        backgroundColor:'#eceff1',
        marginVertical:5,
        padding:5,
        alignContent:'center'
    }
});