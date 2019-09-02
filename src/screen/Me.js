import React, {Component} from "react";
import { StyleSheet, View, Text, StatusBar,ScrollView, ImageBackground,Dimensions,ToastAndroid } from "react-native";



export default class Me extends Component {
    static navigationOptions = {
        // header: null,
        title: '我的瓶子',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center',
          flex: 1,
        },
        headerRight: <View />
    }
    render() {
        const { width, height} = Dimensions.get('screen');
        const k = width / 750
        // ToastAndroid.show(width+'!'+height, ToastAndroid.SHORT)
        return (
            <ImageBackground style={styles.container} source={require('../assets/images/me/bg.png')} mageStyle={{ resizeMode: 'cover' }}>
                <StatusBar barStyle="dark-content" backgroundColor="#ffffff" hidden={false} animated={true} />
                <ScrollView style={{flex: 1,padding:k*30}}>
                    {
                        Array(8).fill(0).map((item, index) => {
                            return (<View key={index}style={{borderRadius: 12*k,width:690*k, height: k*200, padding: k*30, backgroundColor: '#ffffff33', marginTop: k*20}}></View>)
                        })
                    }
                </ScrollView>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
});