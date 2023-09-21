import { View, TouchableOpacity, Text, KeyboardAvoidingView, Image, TextInput, SafeAreaView, ScrollView, StatusBar, StyleSheet, Modal } from "react-native";
import React, { useState } from 'react'
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";



export function Modaloja({fecharLoja}){

    return(
        <View style = {styles.container}> 
        <KeyboardAvoidingView>
            <View style = {styles.Quadradinho}><View style={styles.viewTitulo}>
                <View style = {styles.areaTitulo}>
                    <TouchableOpacity style={styles.btn} onPress={fecharLoja}>
                        <AntDesign name="caretleft" style={styles.btnVoltar}/>
                    </TouchableOpacity>
                <Text style = {styles.Titulo}>Loja</Text>
                </View>
                </View><ScrollView style={styles.produtos}>
                <View style={[styles.bloco, {backgroundColor: '#70ad47'}]}>
                    <Text style={styles.txtbloco}>COMPRE</Text>
                    <Image source={require('../assets/images/casa2.webp')}/></View>
                <View style={[styles.bloco, {backgroundColor: '#b54545'}]}>
                    <Text style={styles.txtbloco}>COMPRE</Text>
                    <Image/></View>
                <View style={[styles.bloco, {backgroundColor: '#ed7d31'}]}>
                    <Text style={styles.txtbloco}>COMPRE</Text>
                    <Image/></View>
                <View style={[styles.bloco, {backgroundColor: '#5e97fd'}]}>
                    <Text style={styles.txtbloco}>COMPRE</Text>
                    <Image/></View>
            </ScrollView>
            </View>
            </KeyboardAvoidingView>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        height: '100%',
        width: '100%',
        //marginBottom:30,

        //alignSelf: 'center',
        //justifyContent: 'center',
    },
    Quadradinho:{
        //borderRadius: 32,
        backgroundColor: "#FFF",
        //marginBottom: "7%",
        //alignItems: 'center',
        alignSelf: 'center',
        alignItems:'center',
        //justifyContent: 'center',
        height: '100%',
        width: '100%'
    },
    areaTitulo:{
        //backgroundColor: 'green',
        flexDirection:'row',
        marginHorizontal:10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    viewTitulo:{
        //backgroundColor: 'green',
        height: 60,
        justifyContent:'center',
        width: '100%',
    },
    btnVoltar:{
        fontSize: 30,  
        color: '#750606',
        //backgroundColor: '#e74e4e',
        padding:10,
        borderRadius:30,
        fontWeight:'bold'
    },
    produtos:{
        width: '100%',
    },
    bloco:{
        alignSelf: 'center',
        height: 200,
        width:340,
        borderRadius: 40,
        marginTop:20,
        justifyContent:'flex-end'
    },
    txtbloco:{
        marginLeft: 40,
        marginBottom: 40,
        fontSize: 24,
        fontWeight: 'bold',
        color:'#fff'
    },
    Titulo:{
        fontSize: 30,  
        color: '#750606',
        fontWeight: 'bold',
        marginRight: 150
    },
    text:{
        fontSize: 14,
        marginLeft: "10%",
        //marginBottom: "2%",
        marginTop:20,
        color: "#000"
    },
    Input:{
        marginTop: 10,
        alignSelf: 'center',
        backgroundColor: "#FFF",
        width: "84%",
        height: 48,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: "#af3131",
        padding: 10,
    },
    
    
    
})