import React, {Component} from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";



export default class Rank extends Component {
    render() {
        return (
            <ImageBackground style={styles.container} source={require('../assets/images/index/background_lao.png')} imageStyle={{ resizeMode: 'cover' }}>
                <Text style={{color: '#fff',fontSize: 20}}>Rank</Text>
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