import { View, TouchableOpacity, Text, KeyboardAvoidingView, Image, TextInput, SafeAreaView, ScrollView, StatusBar, StyleSheet, Modal } from "react-native";
import React, { useState } from 'react'
import { FontAwesome5 } from "@expo/vector-icons";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Screen";



export function Modaloja({navigation, route}: any){

    return(
        <SafeAreaView style={styles.container}>
        <View style = {styles.tela}> 
        <KeyboardAvoidingView>
            <View style = {styles.Quadradinho}>
                <View style={styles.produtosView}>
                    <View style ={styles.Produtosquadrado}>
                    <ScrollView style={styles.produtos}>
                <Text style = {[styles.produtosTitulo, {marginTop: SCREEN_HEIGHT*0.085}]}>Residêncial</Text>
                <ScrollView style={styles.produtosScroll} horizontal pagingEnabled>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#bfe1e2'}]}>
                        <TouchableOpacity>
                            <Text style = {styles.btnTxtComprar}><FontAwesome5 name="coins"/>   2 000</Text>
                        </TouchableOpacity>
                        <Image style = {styles.produtosimg} source={require('../assets/images/CasaCinza.png')}/>
                    </View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#bfe1e2'}]}>
                        <TouchableOpacity>
                            <Text style = {styles.btnTxtComprar}><FontAwesome5 name="coins"/>   2 000</Text>
                        </TouchableOpacity>
                        <Image style = {styles.produtosimg} source={require('../assets/images/CasaMadeira.png')}/>
                    </View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#bfe1e2'}]}>
                        <TouchableOpacity>
                            <Text style = {styles.btnTxtComprar}><FontAwesome5 name="coins"/>   2 000</Text>
                        </TouchableOpacity>
                        <Image style = {styles.produtosimg} source={require('../assets/images/Casa1.png')}/>
                    </View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#bfe1e2'}]}>
                        <TouchableOpacity>
                            <Text style = {styles.btnTxtComprar}><FontAwesome5 name="coins"/>   2 000</Text>
                        </TouchableOpacity>
                        <Image style = {styles.produtosimg} source={require('../assets/images/CasaAutomatica.png')}/>
                    </View>
                </ScrollView>
                
                <Text style = {styles.produtosTitulo}>Comercial</Text>
                <ScrollView style={styles.produtosScroll} horizontal pagingEnabled>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#c0e2bf'}]}>
                        <TouchableOpacity>
                            <Text style = {styles.btnTxtComprar}><FontAwesome5 name="coins"/> 2 000</Text>
                        </TouchableOpacity>
                        <Image style = {styles.produtosimg} source={require('../assets/images/loja6.png')}/>
                    </View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#c0e2bf'}]}>
                        <TouchableOpacity>
                            <Text style = {styles.btnTxtComprar}><FontAwesome5 name="coins"/> 2 000</Text>
                        </TouchableOpacity>
                        <Image style = {styles.produtosimg} source={require('../assets/images/loja7.png')}/>
                    </View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#c0e2bf'}]}>
                        <TouchableOpacity>
                            <Text style = {styles.btnTxtComprar}><FontAwesome5 name="coins"/> 2 000</Text>
                        </TouchableOpacity>
                        <Image style = {styles.produtosimg} source={require('../assets/images/loja12.png')}/>
                    </View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#c0e2bf'}]}>
                        <TouchableOpacity>
                            <Text style = {styles.btnTxtComprar}><FontAwesome5 name="coins"/> 2 000</Text>
                        </TouchableOpacity>
                        <Image style = {styles.produtosimg} source={require('../assets/images/loja5.png')}/>
                    </View>
                </ScrollView>
                
                <Text style = {styles.produtosTitulo}>Industrial</Text>
                <ScrollView style={styles.produtosScroll} horizontal pagingEnabled>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#e2d3bf'}]}>
                        <Image style = {styles.produtosimg} source={require('../assets/images/loja5.png')}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#e2d3bf'}]}>
                        <Image style = {styles.produtosimg} source={require('../assets/images/Casa1.png')}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#e2d3bf'}]}>
                        <Image style = {styles.produtosimg} source={require('../assets/images/Casa1.png')}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#e2d3bf'}]}>
                        <Image style = {styles.produtosimg} source={require('../assets/images/Casa1.png')}/></View>
                </ScrollView>
                
                <Text style = {styles.produtosTitulo}>Lazer e Turismo</Text>
                <ScrollView style={styles.produtosScroll} horizontal pagingEnabled>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#feffd3'}]}>
                        <Image style = {styles.produtosimg} source={require('../assets/images/Casa1.png')}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#feffd3'}]}>
                        <Image style = {styles.produtosimg} source={require('../assets/images/Casa1.png')}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#feffd3'}]}>
                        <Image style = {styles.produtosimg} source={require('../assets/images/Casa1.png')}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#feffd3'}]}>
                        <Image style = {styles.produtosimg} source={require('../assets/images/Casa1.png')}/></View>
                </ScrollView>
                
                <Text style = {styles.produtosTitulo}>Agricultura</Text>
                <ScrollView style={styles.produtosScroll} horizontal pagingEnabled>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#e3adcb'}]}>
                        <Image style = {styles.produtosimg} source={require('../assets/images/Casa1.png')}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#e3adcb'}]}>
                        <Image style = {styles.produtosimg} source={require('../assets/images/Casa1.png')}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#e3adcb'}]}>
                        <Image style = {styles.produtosimg} source={require('../assets/images/Casa1.png')}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#e3adcb'}]}>
                        <Image style = {styles.produtosimg} source={require('../assets/images/Casa1.png')}/></View>
                </ScrollView>
                
                <Text style = {styles.produtosTitulo}>Transporte</Text>
                <ScrollView style={styles.produtosScroll} horizontal pagingEnabled>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#ade3ca'}]}>
                    <Image style = {styles.produtosimg} source={require('../assets/images/Casa1.png')}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#ade3ca'}]}>
                        <Image style = {styles.produtosimg} source={require('../assets/images/Casa1.png')}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#ade3ca'}]}>
                        <Image style = {styles.produtosimg} source={require('../assets/images/Casa1.png')}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#ade3ca'}]}>
                        <Image style = {styles.produtosimg} source={require('../assets/images/Casa1.png')}/></View>
                </ScrollView>
                
                <Text style = {styles.produtosTitulo}>Infraestrutura</Text>
                <ScrollView style={styles.produtosScroll} horizontal pagingEnabled>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#d9a1f3'}]}>
                    <Image style = {styles.produtosimg} source={require('../assets/images/Casa1.png')}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#d9a1f3'}]}>
                        <Image style = {styles.produtosimg} source={require('../assets/images/Casa1.png')}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#d9a1f3'}]}>
                        <Image style = {styles.produtosimg} source={require('../assets/images/Casa1.png')}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#d9a1f3'}]}>
                        <Image style = {styles.produtosimg} source={require('../assets/images/Casa1.png')}/></View>
                </ScrollView>
                
                <Text style = {styles.produtosTitulo}>Educação e saúde</Text>
                <ScrollView style={styles.produtosScroll} horizontal pagingEnabled>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#f77171'}]}>
                        <Image style = {styles.produtosimg} source={require('../assets/images/Casa1.png')}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#f77171'}]}>
                        <Image style = {styles.produtosimg} source={require('../assets/images/Casa1.png')}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#f77171'}]}>
                        <Image style = {styles.produtosimg} source={require('../assets/images/Casa1.png')}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#f77171'}]}>
                        <Image style = {styles.produtosimg} source={require('../assets/images/Casa1.png')}/></View>
                </ScrollView>
                
                <Text style = {styles.produtosTitulo}>Energia</Text>
                <ScrollView style={[styles.produtosScroll, {marginBottom: SCREEN_HEIGHT*0.025}]} horizontal pagingEnabled>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#b3b3dd'}]}>
                        <Image style = {styles.produtosimg} source={require('../assets/images/Casa1.png')}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#b3b3dd'}]}>
                        <Image style = {styles.produtosimg} source={require('../assets/images/Casa1.png')}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#b3b3dd'}]}>
                        <Image style = {styles.produtosimg} source={require('../assets/images/Casa1.png')}/></View>
                    <View style = {[styles.produtosviewimg, {backgroundColor: '#b3b3dd'}]}>
                        <Image style = {styles.produtosimg} source={require('../assets/images/Casa1.png')}/></View>
                </ScrollView>
            </ScrollView>
            </View>
            <Image source={require("../assets/images/shopCortina7.png")} 
                    style={{
                        height: SCREEN_HEIGHT*0.1725, 
                        width: SCREEN_WIDTH*1, 
                        position: 'absolute',}}/>
            </View>
            </View>
            </KeyboardAvoidingView>
            <View style={styles.lojape}></View>
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
        backgroundColor: "#7ed6ff",
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
        marginTop: 50,
        width: '100%',
        marginBottom: 55,
        alignItems: 'center',
        
    },
    produtos:{
        width: '100%',
        height: SCREEN_HEIGHT*0.7
    },
    Produtosquadrado:{
        marginTop: SCREEN_HEIGHT*0.1,
        backgroundColor: '#e7d1a8',
        alignItems: 'center',
        width:  SCREEN_WIDTH*0.95
    },
    produtosTitulo:{
        marginTop: SCREEN_HEIGHT*0.025,
        fontSize: 24,
        height: SCREEN_HEIGHT*0.07,
        width: SCREEN_WIDTH*0.6,
        borderRadius: 20,
        alignSelf: 'center',
        backgroundColor: '#be934e',
        //fontWeight: "bold",
        textAlign: 'center',
        borderWidth: 4,
        borderColor: '#8b5804',
        textAlignVertical: 'center',
        color: '#8b5804',
        fontFamily: 'Poppins-Bold'
    },
    produtosScroll:{
        marginTop: 10,
        height: SCREEN_HEIGHT*0.2,
        width: SCREEN_WIDTH*0.8,
        alignSelf: 'center',
        //marginLeft: 40,
        //backgroundColor: 'blue'
    },
    produtosviewimg:{
        height: SCREEN_HEIGHT*0.2,
        width: SCREEN_WIDTH*0.8,
        
        borderRadius: 20,
        borderWidth: 6,
        borderColor: '#926215',
        //backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center'
    },
    produtosimg:{
        height: SCREEN_HEIGHT*0.15,
        width: SCREEN_WIDTH*0.3,
        marginLeft: SCREEN_WIDTH*0.1
    },
    /*btnComprar:{
        height: SCREEN_HEIGHT*0.05,
        width: SCREEN_WIDTH * 0.4,
        backgroundColor:
    },*/
    btnTxtComprar:{
        fontSize: 14,
        backgroundColor: '#2cc5ca',
        marginLeft: SCREEN_WIDTH*0.075,
        marginTop: SCREEN_HEIGHT*0.075,
        borderRadius: 10,
        height: SCREEN_HEIGHT*0.05,
        width: SCREEN_WIDTH*0.25,
        textAlign: 'center',
        color: '#ecdc94',
        fontFamily: 'Poppins',
        textAlignVertical: 'center',
    },
    lojape:{
        height: SCREEN_HEIGHT*0.1, 
        width: SCREEN_WIDTH*0.975,
        alignSelf: 'center', 
        marginTop: SCREEN_HEIGHT*0.845,
        backgroundColor: '#af8b52', 
        position: 'absolute',
        borderRadius: 20,
    }
})