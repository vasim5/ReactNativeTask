import React, { useRef } from "react";
import { Alert, Text, View, TouchableWithoutFeedback, ToastAndroid, StyleSheet, Platform } from "react-native";
import {
  LineChart
} from "react-native-chart-kit";
import ViewShot from "react-native-view-shot";
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import MainContainer from "../components/MainContainer";

const PdfDownload: React.FC<any> = ({ navigation }) => {

  const ref: any = useRef()

  const DownloadPdf = () => {
    if (ref.current != null) {
      ref.current.capture().then(async (uri: string) => {
        console.log("SS uri", uri);

        let options = {
          html: `<html>
          <body>
          <h1>Name : Test User</h1>
          <img src=${uri}>
          </body>
          </html>`,
          fileName: 'test',
          directory: 'Documents',
        };
        await RNHTMLtoPDF.convert(options).then((path) => {
          console.log(path.filePath);
          if (Platform.OS === 'android') {
            ToastAndroid.show(`Your file saved at ${path.filePath}`, ToastAndroid.SHORT)
          } else {
            Alert.alert(`Your file saved at ${path.filePath}`);
          }
        })
      })
    }
  }

  return (
    <MainContainer header={{
      title: "Pdf Download",
      showBackIcon: true,
      navigation: navigation
    }}>
      <ViewShot ref={ref} options={{ fileName: "chart", format: "jpg", quality: 0.9 }}>
        <View style={styles.viewShotMain}>
          <LineChart
            data={{
              labels: ["January", "February", "March", "April", "May", "June"],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100
                  ]
                }
              ]
            }}
            width={380} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#fb8c00",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726"
              }
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
          />
        </View>
      </ViewShot>
      <TouchableWithoutFeedback onPress={DownloadPdf}>
        <View style={styles.btnStyle}>
          <Text style={{ color: "#000000" }}>Download Pdf</Text>
        </View>
      </TouchableWithoutFeedback>
    </MainContainer>
  )
}
export default PdfDownload;

const styles = StyleSheet.create({
  viewShotMain: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  btnStyle: {
    height: 48,
    backgroundColor: "#F66257",
    marginHorizontal: 16,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  }
})