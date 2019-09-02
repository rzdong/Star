import React, { Component } from "react";
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';

export default class MeItem extends Component {
    render() {
        const { width } = Dimensions.get('screen');
        const k = width / 750;
        const { index } = this.props;
        return (
            <View key={index} style={{paddingLeft: 40 * k, borderRadius: 12 * k, 'width': 690 * k, height: k * 200,  marginTop: k * 20, ...styles.content }}>
                <Image source={require('../assets/images/star-gift/bicycle.png')} style={{width:120*k,height:120*k}}></Image>
                <View style={{width:400*k,height:200*k,paddingLeft:40*k, ...styles.textWarpper }}>
                    <Text style={{lineHeight: 45*k,color: '#fff',fontSize:26*k,}}>288K豆</Text>
                    <Text style={{lineHeight: 45*k,color: '#fff',fontSize:26*k,}}>捞取时间: 2019-05-29</Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff33'
    },
    textWarpper: {
        justifyContent: 'center',
        alignItems: 'flex-start',
    }
})

