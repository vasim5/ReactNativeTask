import React from 'react';
import { StatusBar, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import MainContainer from '../components/MainContainer';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';

const Splash: React.FC<any> = ({ navigation }) => {

    return (
        <MainContainer header={{}}>
            <StatusBar backgroundColor={Colors.colorRed}
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
                <Text style={{ color: Colors.colorWhite }}>Demo</Text>
            </View>
        </MainContainer>
    );
};

export default Splash;

const styles = StyleSheet.create({
    clickableView: {
        width: "80%",
        height: 80,
        marginVertical: 16,
        borderRadius: 30,
        backgroundColor: Colors.colorRed,
        alignItems: "center",
        justifyContent: "center"
    },
    clickableText: {
        color: Colors.colorWhite,
        fontSize: Fonts.size.size20
    }
})
