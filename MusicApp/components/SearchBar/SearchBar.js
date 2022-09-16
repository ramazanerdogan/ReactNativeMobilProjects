import React from "react";
import {TextInput,View} from 'react-native';
import styles from './SearcBar.styles';

const SearchBar = props =>{
    return(
        <View style={styles.container} >
            <TextInput>
                <TextInput placeholder="Ara..." onChangeText={props.onSearch} />
            </TextInput>
        </View>
    );
};

export default SearchBar;