import React, { useRef } from "react";
import { Alert, Text, View, TouchableWithoutFeedback, ToastAndroid, StyleSheet, Platform } from "react-native";
import {
  LineChart
} from "react-native-chart-kit";
import ViewShot from "react-native-view-shot";
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import MainContainer from "../components/MainContainer";
import Colors from "../constants/Colors";

const PdfDownload: React.FC<any> = ({ navigation }) => {

  const ref: any = useRef()

  const DownloadPdf = () => {
    //checking ViewShot reference is not null
    if (ref.current != null) {
      //Capturing SS of graph
      ref.current.capture().then(async (uri: string) => {
        //Captured graph SS.
        console.log("SS uri", uri);
        
        //Creating object with html string to save as pdf
        let options = {
          html: `<html>
          <body>
          <h1>Name : Test User</h1>
          <h1>Age : ScreenSizes.size30</h1>
          <h1>Height : 5.6ft</h1>
          <h1>Weight : 70Kg</h1>
          <img src=${uri}>
          </body>
          </html>`,
          fileName: 'test',
          directory: 'Documents',
        };
        //Generating pdf from options
        await RNHTMLtoPDF.convert(options).then((path) => {
          //Pdf generated
          console.log(path.filePath);
          //If platform is android will show Toast otherwise will show alert dialog for completed acknowledgement.
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
              backgroundColor: Colors.colorChartBG,
              backgroundGradientFrom: Colors.colorChartGradientFrom,
              backgroundGradientTo: Colors.colorChartGradientTo,
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: Colors.colorChartGradientTo
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
          <Text style={{ color: Colors.colorBlack }}>Download Pdf</Text>
        </View>
      </TouchableWithoutFeedback>
    </MainContainer>
  )
}
export default PdfDownload;

const styles = StyleSheet.create({
  viewShotMain: {
    backgroundColor: Colors.colorWhite,
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  btnStyle: {
    height: 48,
    backgroundColor: Colors.colorRed,
    marginHorizontal: 16,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  }
})