import React, { Component } from "react";
import { Animated, StyleSheet, View,StatusBar, Text, ImageBackground, Image, TouchableOpacity, Easing } from "react-native";



export default class Start extends Component {
    state = {
        transY: new Animated.Value(0),
        scale: new Animated.Value(0),
    }
    static navigationOptions = {
        title: '星空漂流瓶 你好陌生人',
        headerStyle: {
            textAlign: 'center',
        },
        headerTitleStyle: {
            alignSelf: 'center',
            textAlign: 'center',
            flex: 1,
        },
    };

    // animation = null;


    componentDidMount() {
        const animationSlider = Animated.sequence([
            Animated.timing(                  // 随时间变化而执行动画
                this.state.transY,            // 动画中的变量值
                {
                    toValue: 20,                   // 透明度最终变为1，即完全不透明
                    duration: 5000,              // 让动画持续一段时间
                }
            ),
            Animated.timing(                  // 随时间变化而执行动画
                this.state.transY,            // 动画中的变量值
                {
                    toValue: 0,                   // 透明度最终变为1，即完全不透明
                    duration: 5000,              // 让动画持续一段时间
                }
            )
        ]);
        Animated.loop(animationSlider).start()


        const scaleAnimation = Animated.timing(
            this.state.scale,
            {
                toValue: 1,
                duration: 8000,
                easing: Easing.linear
            },
        )
        Animated.loop(scaleAnimation).start()
    }

    _Enter = () => {
        this.props.navigation.replace('Index')
    }

    render() {
        let { transY, scale } = this.state;
        const spin = scale.interpolate({
            inputRange: [0, 1],//输入值
            outputRange: ['0deg', '360deg'] //输出值
        })
        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor="#ffffff" hidden={false} animated={true} />
                {/* <View style={styles.header}>
                    <Text style={styles.headertext}>星空漂流瓶 - 你好陌生人</Text>
                </View> */}
                <ImageBackground
                    source={require('../assets/images/start/background.png')}
                    style={styles.content}
                    imageStyle={{ resizeMode: 'cover' }}
                >
                    {/* 音乐控件 */}
                    <Animated.View style={{ ...styles.musicwarper, transform: [{ rotate: spin }] }}>
                        <Image source={require('../assets/images/start/openmusic.png')} style={styles.musicplay}></Image>
                    </Animated.View>

                    <Animated.View style={{ ...styles.person, transform: [{ translateY: transY }] }}>
                        <Image source={require('../assets/images/start/prince.png')} style={styles.enter}></Image>
                    </Animated.View>



                    {/* banner */}
                    <View style={styles.banner}>
                        <View style={styles.headerImg}>
                            <Image source={require('../assets/images/start/title.png')} style={styles.enter}></Image>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ color: '#fff', fontSize: 16, color: '#dedede', textAlign: 'center' }}>你好，陌生人</Text>
                            <Text style={{ color: '#fff', fontSize: 16, color: '#dedede', textAlign: 'center' }}>把心声放在漂流瓶里</Text>
                            <Text style={{ color: '#fff', fontSize: 16, color: '#dedede', textAlign: 'center' }}>随着星河</Text>
                        </View>

                    </View>

                    {/* 开始按钮 */}
                    <TouchableOpacity activeOpacity={0.75} style={styles.enterwarper} onPress={this._Enter}>
                        <Image source={require('../assets/images/start/openbutton.png')} style={styles.enter} />
                    </TouchableOpacity>

                </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 54,
        backgroundColor: '#fff',
        color: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headertext: {
        fontSize: 20,
    },
    headerImg: {
        marginTop: 41,
        width: 247,
        height: 129,
    },
    banner: {
        width: '100%',
        height: 300,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    content: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    musicwarper: {
        width: 50,
        height: 50,
        position: 'absolute',
        right: 15,
        top: 15,
        padding: 6
    },
    musicplay: {
        height: '100%',
        width: '100%'
    },
    enterwarper: {
        width: 155,
        height: 48,
        marginBottom: 41,
    },
    enter: {
        width: '100%',
        height: '100%',
    },
    person: {
        position: 'absolute',
        top: 245,
        left: 0,
        width: '100%',
        height: 350,
    }
});