import React, {Component} from "react";
import { StyleSheet,TouchableOpacity,StatusBar, ImageBackground, View, Text, Button, Image,ToastAndroid  } from "react-native";

import Throws from './Throws';
import Rank from './Rank';


export default class Index extends Component {
    static navigationOptions = {
        header: null,
    }

    state = {
        currentIndex: 1
    }

    _check = (index) => {
        // ToastAndroid.show(index+'!', ToastAndroid.SHORT)
        this.props.navigation.navigate(['StarGift','Index', 'Me'][index])
    }
    _checkNav = (index) => {
        this.setState({
            currentIndex: index
        })
        // this.props.navigation.navigate(['Throws','Index', 'Rank'][index])
    }
    render() {
        const { currentIndex } = this.state
        const listName = ['星河好礼', '捞取漂流瓶', '我的瓶子']
        const navName = ['投放瓶子', '捞取瓶子', '排行榜']
        return (
            <View style={{flex: 1}}>
                <StatusBar barStyle="light-content" backgroundColor="#000848" hidden={false} animated={true}/>
                {/* 根据导航，进行imageBackground组件的切换 */}
                {

                    // 这里使用三元运算符，在js代码内双斜线注释方式可用
                    currentIndex == 0 ? 
                    <Throws /> :
                    currentIndex == 1 ?
                    <ImageBackground source={require('../assets/images/index/background_lao.png')} style={styles.container} imageStyle={{ resizeMode: 'cover' }}>
                        <View style={styles.header}>
                            {
                                listName.map((item, index) => {
                                    return (
                                        <TouchableOpacity key={item} activeOpacity={0.75} style={styles.buttonWarper} onPress={() => {this._check(index)}}>
                                            <Text style={styles.headerTitle}>{item}</Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>
                    </ImageBackground> :
                    <Rank />
                }
                
                <View style={styles.footer}>
                    {
                        navName.map((item, index) => {
                            return (
                                <TouchableOpacity key={item} activeOpacity={0.75} style={styles.buttonWarper} onPress={() => {this._checkNav(index)}}>
                                    {
                                        currentIndex == index ?
                                        <Text style={{...styles.headerTitle,...styles.headerTitleActive}}>{item}</Text> :
                                        <Text style={styles.headerTitle}>{item}</Text>
                                    }
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
        height: 50,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 70
    },
    buttonWarper: {
        flex: 1,
        height: '100%'
    },
    headerTitle: {
        textAlign: 'center',
        lineHeight: 50,
        color: '#eee',
        fontSize: 18,
    },
    headerTitleActive: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 20,
        textShadowColor: '#fff',
        textShadowOffset: {
            width: 0,
            height: 0,
        },
        textShadowRadius: 12
    }
});