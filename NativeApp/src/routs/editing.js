import React, {useState} from "react";
import { StyleSheet, View, TextInput, TouchableOpacity, Text  } from "react-native";

export default function AddEditing(prop) {
    const [word, setWord] = useState('');
    const [description,setDescription] = useState('');
    
    return(
        <View style={styles.container}>
            <TextInput style={styles.word}
                placeholder="New word"
                onChangeText={newText => setWord(newText)}
            />
            <View style={styles.hairline} />
            <TextInput style={styles.description}
                placeholder="Description"
                onChangeText={newText => setDescription(newText)}
            />
             <View style={styles.savebutton}>
                <TouchableOpacity 
                style={styles.save}>
                    <Text style={styles.button}>Save</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.deletebutton}>
                <TouchableOpacity 
                style={styles.delete}>
                    <Text style={styles.button}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    word: {
        fontWeight: 'bold',
        right: 100,
        fontSize: 25,
        paddingBottom: 50,
    },
    description: {
        fontWeight: 'bold',
        right: 95,
        fontSize: 25,
        paddingTop: 50,
    },
    hairline: {
        backgroundColor: '#A2A2A2',
        height: 2,
        width: '90%',
        backgroundColor: 'rgba(146, 69, 236, 1)',
      },
      savebutton: {
        backgroundColor: 'lightgreen',
        borderRadius: 100,
        marginTop: '40%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      save: {
        width: 350,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        top: 10,
    },
      button: {
        fontSize: 35,
        bottom: 10,
        color: 'white',
    },
    deletebutton: {
        backgroundColor: 'red',
        borderRadius: 100,
        marginTop: '5%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      delete: {
        width: 350,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        top: 10,
    },
      button: {
        fontSize: 35,
        bottom: 10,
        color: 'white',
    },
  });