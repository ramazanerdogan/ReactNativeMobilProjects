import { StyleSheet, Text, View,FlatList,SafeAreaView } from 'react-native';
import music_data from './music-data.json'
import SongCard from './components/SongCard';
import SearchBar from './components/SearchBar/SearchBar';
import { useState } from 'react';

export default function App() {

  const [list,SetList]=useState([music_data]);

  const renderSong = ({item})=><SongCard song={item}/>;

  const renderSperator=() => <View style={styles.seperator} ></View>;

  const handleSearch= text => {
      const filteredList=music_data.filter(song => {
      const searchedText=text.toLowerCase();
      const currentTitle=song.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });  
      SetList(filteredList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <SearchBar onSearch={handleSearch} />
        <FlatList  
          keyExtractor={(item)=> item.id}
          data={list}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSperator}
        />
      </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  seperator:{
    borderWidth:1,
    borderColor:'#e0e0e0'
  },
});
