import React, { useEffect } from 'react';
import { StatusBar, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainContainer from '../components/MainContainer';

const Splash: React.FC<any> = ({ navigation }) => {
    useEffect(() => {
        console.log("yes in splash");

        /* setTimeout(async () => {
          navigation.push("Pdf");
        }, 200); */

    }, []);

    return (
        <MainContainer header={{}}>
            <StatusBar backgroundColor={'#191C20'}
                translucent={true} barStyle={'light-content'} />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableHighlight style={styles.clickableView}
                    onPress={() => navigation.push("Scale")}>
                    <Text style={styles.clickableText}>Scale</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.clickableView}
                    onPress={() => navigation.push("PdfDownload")}>
                    <Text style={styles.clickableText}>Pdf</Text>
                </TouchableHighlight>
                <Text style={{ color: "#FFFFFF" }}>Demo</Text>
            </View>
        </MainContainer>
    );
};

export default Splash;

const styles = StyleSheet.create({
    clickableView: {
        width: "80%",
        height: 80,
        marginVertical:16,
        borderRadius: 30,
        backgroundColor: "#F66257",
        alignItems: "center",
        justifyContent: "center"
    },
    clickableText: {
        color: "#FFFFFF",
        fontSize: 20
    }
})
