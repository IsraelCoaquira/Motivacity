import { View, TouchableOpacity, Text, KeyboardAvoidingView, Image, TextInput, SafeAreaView, ScrollView, StatusBar, StyleSheet, Modal } from "react-native";
import React, { useState } from 'react'
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Screen";



export function Modaloja({navigation, route}){

    return(
        <SafeAreaView style={styles.container}>
        <View style = {styles.tela}> 
        <KeyboardAvoidingView>
            <View style = {styles.Quadradinho}>
                <Image source={require("../assets/images/shopCortina4.png")} 
                    style={{
                        height: SCREEN_HEIGHT*0.135, 
                        width: SCREEN_WIDTH, 
                        marginTop: SCREEN_HEIGHT*0}}/>
                <View style={styles.produtosView}>
                    <ScrollView style={styles.produtos}>
                
                <Text style = {styles.produtosTitulo}>Residêncial</Text>
                <ScrollView style={styles.produtosScroll} horizontal>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#73c23e'}]}><Image style = {styles.produtosimg} source={require('../assets/images/CasaCinza.png')}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#73c23e'}]}><Image style = {styles.produtosimg} source={require('../assets/images/CasaRustica.png')}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#73c23e'}]}><Image style = {styles.produtosimg} source={require('../assets/images/CasaMadeira.png')}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#73c23e'}]}><Image style = {styles.produtosimg} source={require('../assets/images/Casa1.png')}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#73c23e'}]}><Image style = {styles.produtosimg} source={require('../assets/images/CasaAutomatica.png')}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#73c23e'}]}><Image style = {styles.produtosimg} source={require('../assets/images/CasaModerna.png')}/></View>
                </ScrollView>
                
                <Text style = {styles.produtosTitulo}>Comercial</Text>
                <ScrollView style={styles.produtosScroll} horizontal>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#e44343'}]}><Image style = {styles.produtosimg} source={require('../assets/images/loja6.png')}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#e44343'}]}><Image style = {styles.produtosimg} source={require('../assets/images/loja7.png')}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#e44343'}]}><Image style = {styles.produtosimg} source={require('../assets/images/loja12.png')}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#e44343'}]}><Image style = {styles.produtosimg} source={require('../assets/images/loja5.png')}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#e44343'}]}><Image style = {styles.produtosimg} source={require('../assets/images/loja8.png')}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#e44343'}]}><Image style = {styles.produtosimg} source={require('../assets/images/loja9.png')}/></View>
                </ScrollView>
                
                <Text style = {styles.produtosTitulo}>Industrial</Text>
                <ScrollView style={styles.produtosScroll} horizontal>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#fc7a23'}]}><Image style = {styles.produtosimg} source={require('../assets/images/loja5.png')}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#fc7a23'}]}><Image style = {styles.produtosimg} source={require('../assets/images/Casa1.png')}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#fc7a23'}]}><Image style = {styles.produtosimg}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#fc7a23'}]}><Image style = {styles.produtosimg}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#fc7a23'}]}><Image style = {styles.produtosimg}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#fc7a23'}]}><Image style = {styles.produtosimg}/></View>
                </ScrollView>
                
                <Text style = {styles.produtosTitulo}>Lazer e Turismo</Text>
                <ScrollView style={styles.produtosScroll} horizontal>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#5e97fd'}]}><Image style = {styles.produtosimg}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#5e97fd'}]}><Image style = {styles.produtosimg} source={require('../assets/images/Casa1.png')}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#5e97fd'}]}><Image style = {styles.produtosimg}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#5e97fd'}]}><Image style = {styles.produtosimg}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#5e97fd'}]}><Image style = {styles.produtosimg}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#5e97fd'}]}><Image style = {styles.produtosimg}/></View>
                </ScrollView>
                
                <Text style = {styles.produtosTitulo}>Agricultura</Text>
                <ScrollView style={styles.produtosScroll} horizontal>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#94d763'}]}><Image style = {styles.produtosimg}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#94d763'}]}><Image style = {styles.produtosimg} source={require('../assets/images/Casa1.png')}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#94d763'}]}><Image style = {styles.produtosimg}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#94d763'}]}><Image style = {styles.produtosimg}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#94d763'}]}><Image style = {styles.produtosimg}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#94d763'}]}><Image style = {styles.produtosimg}/></View>
                </ScrollView>
                
                <Text style = {styles.produtosTitulo}>Transporte</Text>
                <ScrollView style={styles.produtosScroll} horizontal>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#fbc82e'}]}><Image style = {styles.produtosimg}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#fbc82e'}]}><Image style = {styles.produtosimg} source={require('../assets/images/Casa1.png')}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#fbc82e'}]}><Image style = {styles.produtosimg}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#fbc82e'}]}><Image style = {styles.produtosimg}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#fbc82e'}]}><Image style = {styles.produtosimg}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#fbc82e'}]}><Image style = {styles.produtosimg}/></View>
                </ScrollView>
                
                <Text style = {styles.produtosTitulo}>Infraestrutura</Text>
                <ScrollView style={styles.produtosScroll} horizontal>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#ffa060'}]}><Image style = {styles.produtosimg}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#ffa060'}]}><Image style = {styles.produtosimg} source={require('../assets/images/Casa1.png')}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#ffa060'}]}><Image style = {styles.produtosimg}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#ffa060'}]}><Image style = {styles.produtosimg}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#ffa060'}]}><Image style = {styles.produtosimg}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#ffa060'}]}><Image style = {styles.produtosimg}/></View>
                </ScrollView>
                
                <Text style = {styles.produtosTitulo}>Educação e saúde</Text>
                <ScrollView style={styles.produtosScroll} horizontal>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#ff6262'}]}><Image style = {styles.produtosimg}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#ff6262'}]}><Image style = {styles.produtosimg} source={require('../assets/images/Casa1.png')}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#ff6262'}]}><Image style = {styles.produtosimg}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#ff6262'}]}><Image style = {styles.produtosimg}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#ff6262'}]}><Image style = {styles.produtosimg}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#ff6262'}]}><Image style = {styles.produtosimg}/></View>
                </ScrollView>
                
                <Text style = {styles.produtosTitulo}>Energia</Text>
                <ScrollView style={styles.produtosScroll} horizontal>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#256be7'}]}><Image style = {styles.produtosimg}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#256be7'}]}><Image style = {styles.produtosimg} source={require('../assets/images/Casa1.png')}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#256be7'}]}><Image style = {styles.produtosimg}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#256be7'}]}><Image style = {styles.produtosimg}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#256be7'}]}><Image style = {styles.produtosimg}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#256be7'}]}><Image style = {styles.produtosimg}/></View>
                </ScrollView>
            </ScrollView>
            </View>
            </View>
            </KeyboardAvoidingView>
        </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
    },
    tela:{
        //backgroundColor: "green",
        height: '100%',
        width: '100%',
        //alignSelf: 'center',
        //justifyContent: 'center',
    },
    Quadradinho:{
        //borderRadius: 32,
        backgroundColor: "#858585",
        //marginBottom: "7%",
        //alignItems: 'center',
        alignSelf: 'center',
        alignItems:'center',
        //justifyContent: 'center',
        height: SCREEN_HEIGHT*0.9325,
        width: '100%',
    },
    btnVoltar:{
        fontSize: 50,  
        color: '#c47c00',
        //backgroundColor: '#e74e4e',
        borderRadius:20,
    },
    Titulo:{
        fontSize: 36,  
        color: '#ffeed0',
        backgroundColor: '#f1a21a',
        paddingHorizontal: 10,
        borderRadius: SCREEN_WIDTH*0.04,
        borderWidth: 4,
        textAlign: "center",
        borderColor: '#c47c00',
        textAlignVertical: 'center',
        fontWeight: 'bold',
        position: 'absolute',
        marginTop: SCREEN_HEIGHT*0.1
    },
    produtosView:{
        //backgroundColor: 'red',
        marginTop: 10,
        marginBottom: 70,
    },
    produtos:{
        width: '100%',
    },
    produtosTitulo:{
        marginTop: 15,
        fontSize: 24,
        fontWeight: "bold",
        marginLeft: 20,
        color: '#09275a',
    },
    produtosScroll:{
        marginTop: 10,
        height: SCREEN_HEIGHT*0.225,
        width: SCREEN_WIDTH*0.8,
        //marginLeft: 40,
        //backgroundColor: 'blue'
    },
    produtosviewimg:{
        height: SCREEN_HEIGHT*0.2,
        width: SCREEN_WIDTH*0.375,
        marginRight: 20,
        borderRadius: 40,
        //backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    produtosimg:{
        height: 120,
        width: 120,
    },
})