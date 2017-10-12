import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from 'expo';

export default class Weather extends Component{
    render(){
        return (
            <LinearGradient colors={['#00c6fb', '#005bea']} style={style.container}>

                <View style={style.upper}>
                    <Text>Icon here!</Text>
                    <Text style={style.temp}>35°</Text>
                </View>
                <View style={style.lower}>
                    <Text style={style.title}>Rainging TT TT</Text>
                    <Text style={style.subtitle}>For more info look outside</Text>
                </View>

            </LinearGradient>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex:1
    },
    upper:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    temp:{
        fontSize: 38,
        backgroundColor:'transparent',
        color:'white',
        marginTop: 10,
    },
    lower:{
        flex:1,
        alignItems:'flex-start',
        justifyContent:'flex-end',
        paddingLeft: 25
    },
    title:{
        fontSize: 38,
        backgroundColor:'transparent',
        color:'white',
        marginBottom: 10,
        fontWeight: '300'
    },
    subtitle:{
        fontSize: 24,
        backgroundColor:'transparent',
        color:'white',
        marginBottom: 24
    }
});