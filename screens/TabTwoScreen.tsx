import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/edit-screen-info/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';

export default function TabTwoScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tab Two</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
            <View style={styles.helpContainer}>
                <Text style={styles.someText} lightColor={Colors.light.tint}>
                    I don't know what to make this but hey it's another screen.
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
    someText: {
        paddingVertical: 14,
        textAlign: 'center',
        fontSize: 16,
        color: 'red',
    }
});
