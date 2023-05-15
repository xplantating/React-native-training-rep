import React from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Button} from 'react-native';
import { Card, ListItem, Text } from 'react-native-elements';
import homeData from './homeData';
import Icon from 'react-native-vector-icons/AntDesign';
import { BackgroundImage } from 'react-native-elements/dist/config';

const MyIcon = <Icon name="delete" size={30} color="red" />;
export default function Home() {
  return (
    <ScrollView style={styles.container}>
      {homeData.map((row) => (
        <Card key={row} containerStyle={styles.card}>
          <View>
            <TouchableOpacity size={40} style={styles.icon}>
            <Icon name="delete" size={35} color="rgba(146, 69, 236, 1)" /> 
            </TouchableOpacity>
            <TouchableOpacity size={40} style={styles.icon2}>
            <Icon name="form" size={35} color="rgba(146, 69, 236, 1)" />
            </TouchableOpacity>
          </View>
          <Text style={styles.word}>{row.word}</Text>
          <ListItem style={styles.description}>
            <ListItem.Subtitle >
            <Text style={styles.description}>{row.description}</Text>
            </ListItem.Subtitle>
          </ListItem>
        </Card>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    marginTop: 100,
  },
  icon: {
    left: 270,
  },
  icon2: {
    left: 270,
    top: 20,
  },
  card: {
    height: 125,
    width: 350,
    borderRadius: 40,
    borderColor: 'rgba(146, 69, 236, 1)',
    elevation: 9,
    shadowColor: 'black',
  },
  word: {
    fontSize: 18,
    fontWeight: 'normal',
    marginTop: 5,
    marginBottom: 4,
    marginLeft: 15,
    bottom: 65,
  },  
  description: {
    fontSize: 22,
    maxWidth: 200,
    bottom: 75,
  },
});


