import * as React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import EditScreenInfo from '../components/edit-screen-info/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/images/squatch.png')} resizeMode='contain' style={styles.squatch} />
        <Text style={styles.title}>Spot-A-Squatch</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="/screens/TabOneScreen.tsx" />
        <View style={styles.helpContainer}>
            <TouchableOpacity onPress={handleHelpPress}>
                <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
                    We could make this screen a map of sightings with a button for adding a new one?
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}


function handleHelpPress() {
    WebBrowser.openBrowserAsync(
      'https://www.bfro.net/GDB/state_listing.asp?state=wa'
    );
  }
  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    squatch: {
        height: 150,
        width: 150,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    helpContainer: {
        marginTop: 15,
        marginHorizontal: 20,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
        helpLinkText: {
            paddingVertical: 14,
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 'bold',
            color: 'blue',
    }
});
