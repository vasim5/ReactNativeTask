import React from "react";
import { Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";
import { getStatusBarHeight } from "../constants/StatusbarHeight";

interface header {
    title?: string;
    showBackIcon?: boolean;
}

const MainContainer: React.FC<any> = ({ children, navigation, header }) => {
    return (
        <View style={{ flex: 1, backgroundColor: Colors.colorWhite }}>
            <View>
                <StatusBar translucent={true} />
            </View>
            <SafeAreaView
                style={{
                    backgroundColor: Colors.colorRed,
                    height: Platform.OS === "ios" ? 64 : 56,
                    marginTop: getStatusBarHeight()
                }}>
                {header !== undefined && <View style={{
                    flex: 1,
                    flexDirection: "row"
                }}>
                    <View style={styles.leftStyle}>
                        <View style={{ paddingStart: 5, alignSelf: "flex-start" }} >
                            {header.showBackIcon ?
                                <TouchableHighlight onPress={header.navigation.goBack}>
                                    <Image source={require("../../assets/images/back.png")}
                                        style={styles.backImage} />
                                </TouchableHighlight>
                                : null}
                        </View>
                    </View>
                    <View style={styles.middleStyle}>
                        {
                            header.title != undefined ?
                                <Text numberOfLines={1}
                                    style={{
                                        color: Colors.colorWhite, alignSelf: 'center',
                                        ...styles.titleStyle
                                    }}>{header.title}
                                </Text> : null
                        }
                    </View>
                    <View style={styles.rightStyle}>

                    </View>
                </View>}
            </SafeAreaView >
            {children}
        </View >
    )
}

export default MainContainer

const styles = StyleSheet.create({
    leftStyle: {
        flex: 1,
        justifyContent: "center"
    },
    middleStyle: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    rightStyle: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    textStyle: {
        marginHorizontal: 4,
        fontSize: Fonts.size.size20,
        color: Colors.colorWhite
    },
    titleStyle: {
        fontSize: Fonts.size.size20,
    },
    iconStyle: {
        marginHorizontal: 4,
        padding: 4
    },
    backImage: {
        marginHorizontal: 8,
        resizeMode: "contain",
        width: 18,
        height: 18,
        tintColor: Colors.colorWhite
    }
})