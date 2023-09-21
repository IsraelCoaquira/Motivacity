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
                <Image source={require('../assets/images/casa2.webp')} style={styles.imageBloco}/>
                <View style={[styles.viewtxt, {backgroundColor: '#e43030',}]}>
                    <FontAwesome name="shopping-bag" style={[styles.txtbloco, {color: '#ffbfbf'}]}/>
                    </View>
                    </View>
                    <View style={[styles.bloco, {backgroundColor: '#ffbfbf'}]}>
                <Image source={require('../assets/images/casa2.webp')} style={styles.imageBloco}/>
                <View style={[styles.viewtxt, {backgroundColor: '#e43030',}]}>
                    <FontAwesome name="shopping-bag" style={[styles.txtbloco, {color: '#ffbfbf'}]}/>
                    </View>
                    </View>
                    <View style={[styles.bloco, {backgroundColor: '#ed7d31'}]}>
                <Image source={require('../assets/images/casa2.webp')} style={styles.imageBloco}/>
                <View style={[styles.viewtxt, {backgroundColor: '#e43030',}]}>
                    <FontAwesome name="shopping-bag" style={[styles.txtbloco, {color: '#ffbfbf'}]}/>
                    </View>
                    </View>
                    <View style={[styles.bloco, {backgroundColor: '#5e97fd'}]}>
                <Image source={require('../assets/images/casa2.webp')} style={styles.imageBloco}/>
                <View style={[styles.viewtxt, {backgroundColor: '#e43030',}]}>
                    <FontAwesome name="shopping-bag" style={[styles.txtbloco, {color: '#ffbfbf'}]}/>
                    </View>
                    </View>
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
        marginHorizontal:16,
        alignItems: 'center',
        justifyContent: 'space-between',
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
    imageBloco:{
        alignSelf: 'center',
        height: 160,
        width:340,
        borderRadius: 40,
        justifyContent:'center',
        alignSelf:'center',
        position: 'absolute'
    },
    bloco:{
        alignSelf: 'center',
        justifyContent: 'center',
        height: 200,
        width:340,
        borderRadius: 40,
        marginTop:20,
        justifyContent:'flex-end'
    },
    txtbloco:{
        
        fontSize: 30,
        alignSelf: 'center',
        alignItems:'center',
        fontWeight: 'bold',
        color:'#720000',
        borderRadius:40,
        //backgroundColor:'green'
    },
    viewtxt:{
        marginLeft: 30,
        marginBottom: 20,
        height: 70,
        width: 70,
        padding: 16,
        alignItems:"center",
        fontWeight: 'bold',
        borderRadius: 30
    },
    Titulo:{
        fontSize: 30,  
        color: '#750606',
        fontWeight: 'bold',
        marginRight: 150
    },
    text:{
        fontSize: 14,
        alignSelf:'center',
        //marginBottom: "2%",
       
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