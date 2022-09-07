import axios from 'axios';
import { useState } from 'react';
import { StyleSheet, Text, View, Button , FlatList,SafeAreaView} from 'react-native';
import List from '../components/ui/List';
import SendSMS from 'react-native-sms'
import React from 'react';
const API_KEY = 'df1027e6-6328-4cff-990e-e7d3c56618a2';
const url = `https://messagesend-app.herokuapp.com/getnumbers?key=${API_KEY}`;
function WelcomeScreen() {
  const [userList, setUserList] = useState([]);

  async function fetchData(){
  const response=await axios.get(url,);
  setUserList(response.data.array);
  console.log(userList[0].telNo);
  for(let i=0; i<userList.length; i++)
    {
      let deger='0'; 
      const son=deger.concat(userList[0].telNo);
      console.log(son);
    }
  }
  const renderTelNo=({item}) => <List telNo={item.telNo} _id={item._id}/>
  
const pressed = async () => {
  // asdasdaCheck for perfect 10 digit length
   if (userList.length == 0) {
    alert('SMS Body is empty');
    return;
  } 
  else
  {
    for(let i=0; i<userList.length; i++)
    {
      let deger='0'; 
      //const son=deger.concat(userList[0].telNo)
      const son=deger.concat('5051072770')
      await SendSMS.send({
        body: 'Merhaba Lütfen Değişikliği Takip Edin',
        recipients: [son],
        successTypes: ['sent', 'queued'],
        allowAndroidSendWithoutReadPermission: true
      }, (completed, cancelled, error) => {
        console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + '  error: ' + error);
    }); 
    }
  }
};
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Button onPress={fetchData} styles={styles.sectionContainer} title="Veri Çek" ></Button>
      <Button onPress={pressed} styles={styles.sectionContainer2} title="Mesaj Gönder" ></Button>
      <FlatList data={userList} renderItem={renderTelNo} keyExtractor={item => item._id} />
    </View>
  );
}

export default WelcomeScreen;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sectionContainer: {
    marginTop: 8,
    paddingHorizontal: 12,
  },
  sectionContainer2: 
  {
    paddingStart:8,
    marginTop: 8,
    paddingHorizontal: 12,
    backgroundColor:'red',
  }
});
/* 
     */