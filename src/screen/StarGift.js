import React, {Component} from "react";
import { ScrollView, StyleSheet, View, StatusBar, ImageBackground, Image } from "react-native";



export default class StarGift extends Component {
    static navigationOptions = {
        title: '星河好礼',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center',
          flex: 1,
        },
        headerRight: <View />
    }
    render() {
        return (
            <ImageBackground style={styles.container} source={require('../assets/images/star-gift/allgifts_bg.png')} mageStyle={{ resizeMode: 'cover' }}>
                <StatusBar barStyle="dark-content" backgroundColor="#ffffff" hidden={false} animated={true} />
                <ScrollView style={{flex: 1}} contentContainerStyle={{paddingVertical: 0}}>
                    <Image source={require('../assets/images/star-gift/allgifts.png')}></Image>
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