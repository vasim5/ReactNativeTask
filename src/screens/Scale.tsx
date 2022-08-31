import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { Dimensions, ImageBackground, NativeScrollEvent, NativeSyntheticEvent, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import MainContainer from "../components/MainContainer";

const deviceWidth = Dimensions.get('window').width;
const width = deviceWidth / 35;

const getScale = () => {
    const scale: number[] = [];
    for (let i = 23; i < 518; ++i) {
        scale[i - 23] = i;
    }
    return scale;
}

const Scale: React.FC<any> = ({ navigation }) => {
    const [scale] = useState<number[]>(getScale())
    const [selectedValue, setSelectedValue] = useState<string>("40")

    const ref: any = useRef()


    const onScrollEndDrag = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        setSelectedValue((event.nativeEvent.contentOffset.x / width + 40).toFixed(0));
    }

    const onScrollAnimationEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        setSelectedValue((event.nativeEvent.contentOffset.x / width + 40).toFixed(0));
        ref.current?.scrollTo({ x: Math.ceil(event.nativeEvent.contentOffset.x) })
    }

    return (
        <MainContainer header={{
            title: "Scale",
            showBackIcon: true,
            navigation: navigation
        }}>
            <View style={styles.scaleViewStyle}>
                <View
                    style={[
                        {
                            position: 'absolute',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 30
                        },
                        StyleSheet.absoluteFill,
                    ]}>
                    <ImageBackground
                        source={require("../../assets/images/square.png")}
                        style={styles.counterView}>
                        <Text style={styles.selectedValueText}>{selectedValue}</Text>
                    </ImageBackground>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}
                    ref={ref}
                    style={styles.scrollView}
                    onScroll={onScrollEndDrag}
                    onMomentumScrollEnd={onScrollAnimationEnd}
                    scrollEventThrottle={16}
                    contentContainerStyle={styles.scrollViewContainer}>
                    {
                        scale.map((i, ind) => {
                            let isWhiteDot = i % 5 == 0;
                            return <View key={'1' + ind}>
                                <View style={styles.dotView}>
                                    <View style={isWhiteDot ? styles.whiteDotStyle : styles.dotStyle} />
                                </View>
                                {isWhiteDot ? <Text style={styles.text}>{i}</Text> : null}
                            </View>
                        })
                    }
                </ScrollView>
            </View>
        </MainContainer>
    )
}

export default Scale;

const styles = StyleSheet.create({
    scrollView: {
        height: 200,
        paddingHorizontal: 2
    },
    scrollViewContainer: {
        alignItems: "center",
        marginTop: 30
    },
    counterView: {
        width: 50,
        height: 50,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center"
    },
    selectedValueText: {
        color: "#000000"
    },
    scaleViewStyle: {
        backgroundColor: "#F66257",
        height: 200,
        marginTop: 100
    },
    dotView: {
        width: width,
        height: 10,
        justifyContent: "center"
    },
    dotStyle: {
        backgroundColor: "#000000",
        width: 4,
        height: 4,
        borderRadius: 2,
    },
    whiteDotStyle: {
        backgroundColor: "#FFFFFF",
        width: 8,
        height: 8,
        borderRadius: 4
    },
    text: {
        position: "absolute",
        width: 40,
        textAlign: "center",
        marginTop: 15,
        marginStart: -15
    }
})