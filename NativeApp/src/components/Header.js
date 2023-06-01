import React from "react";
import { StyleSheet, View, TouchableOpacity  } from "react-native";
import { Text } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';



export default function Header(prop) {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Learning language app
            </Text>
            <View style={styles.circlebutton}>
                <TouchableOpacity onPress={() =>
                navigation.navigate('AddScrean')}
                style={styles.roundButton}>
                    <Text style={styles.button}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'linear-gradient(180deg, rgba(61, 71, 215, 0.8) 2%, #9245EC 100%)',
        color: '#FFF',
        width: '100%',
        height: '40%',
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        top: 150,
        fontSize: 35,
        color: '#fff',
    },
    circlebutton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 300,
    },
    roundButton: {
        marginTop: 20,
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: '#fff',
        elevation: 30,
        shadowColor: 'black',
    },
    button: {
        fontSize: 100,
        bottom: 10,
        color: 'rgba(146, 69, 236, 1)',
    },
  });

