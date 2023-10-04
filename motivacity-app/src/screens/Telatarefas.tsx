import { View, TouchableOpacity, Text, TextInput, SafeAreaView, ScrollView, StatusBar, StyleSheet, Modal } from "react-native";
import React, { useState, useCallback } from 'react'
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Routes } from "../routes/index";
import { NavigationContainer } from "@react-navigation/native";
import { StackActions, TabRouter } from "@react-navigation/native";
import { Telaprogresso } from "./Telaprogresso";
import { Telajogo } from "./Telajogo";
import { useNavigation } from '@react-navigation/native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Screen";


SplashScreen.preventAutoHideAsync();

export function Telatarefas({navigation}){

   

  const [fontsLoaded, fontError] = useFonts({
    'Poppins': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Extralight': require('../../assets/fonts/Poppins-ExtraLight.ttf'),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

    return (
        <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
          <View>
          </View>
          <View style={styles.viewTitulo}>
          <View><Text style={styles.textTitulo}>Minhas Tarefas</Text>
          <Text style={styles.textSubtitulo}>Tarefas em andamento</Text>
          </View>
          <TouchableOpacity style = {styles.btnAdd}>
            <FontAwesome name="calendar-o" style = {styles.icons}/></TouchableOpacity>
          </View>
          <View style={styles.viewOpcoes}>
            <TouchableOpacity>
            <View style={styles.styleOpcoes}>
              <FontAwesome name="star" style = {[styles.iconsOpcoes, styles.iconsOpcoes2, {backgroundColor: "#ff95b5", color: '#ff004e', borderColor: '#ff004e'}]}/>
              <View><Text style={styles.textOptions}>Prioridades</Text>
              <Text style={styles.subtextOptions}>Tarefas em prioridade - 4 tarefas marcadas</Text></View></View>
              </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.styleOpcoes}>
              <Entypo name="trophy" style = {[styles.iconsOpcoes, styles.iconsOpcoes2, {backgroundColor: "#fff1ad", color: '#ddaa02', borderColor: '#ddaa02'}]}/>
              <View><Text style={styles.textOptions}>Premiadas</Text>
              <Text style={styles.subtextOptions}>Tarefas de melhores prêmios - 5 tarefas marcadas</Text></View></View></TouchableOpacity>
          </View>
          <ScrollView style={styles.viewConteudo}>
          <View style={styles.miniviews}>
            <TouchableOpacity 
              style={[styles.buttonsLeft,{backgroundColor: '#70ad47'}]} 
              onPress={() => {navigation.navigate('ListaTarefas', {
                imagendereco: require('../assets/images/Esportes2.png'),
                Background: "#fff",
                backgroundCima: '#5da32e',
                itemsBackground: '#cbffa8',
                itemcolorTxt: '#5da32e',
                itemBordatxt:'#119e11',
                titulo: 'Esportes',
                subtitulo: 'Minhas tarefas esportivas!',
              });}}>
              <Text style={styles.textButtons}>Esportes</Text>
              <Text style={styles.subTextButtons}>2 em andamento</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonsRight, {backgroundColor: '#b51515'}]}
              onPress={() => {navigation.navigate('ListaTarefas', {
                imagendereco: require('../assets/images/Esportes2.png'),
                Background: "#fff",
                backgroundCima: '#b51515',
                itemsBackground: '#f79c9c',
                itemcolorTxt: '#b51515',
                itemBordatxt:'#a41111',
                titulo: 'Desafios',
                subtitulo: 'Minhas tarefas desafiadoras!',
              });}}>
              <Text style={styles.textButtons}>Desafios</Text>
              <Text style={styles.subTextButtons}>5 em andamento</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.miniviews}>
            <TouchableOpacity style={[styles.buttonsLeft, {backgroundColor: '#ed7d31'}]}
              onPress={() => {navigation.navigate('ListaTarefas', {
                imagendereco: require('../assets/images/Esportes2.png'),
                Background: "#fff",
                backgroundCima: '#ed7d31',
                itemsBackground: '#feae78',
                itemcolorTxt: '#ed7d31',
                itemBordatxt:'#cc641d',
                titulo: 'Pessoais',
                subtitulo: 'Minhas tarefas pessoais!',
              });}}>
              <Text style={styles.textButtons}>Pessoais</Text>
              <Text style={styles.subTextButtons}>1 em andamento</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonsRight, {backgroundColor: '#5e97fd'}]}
              onPress={() => {navigation.navigate('ListaTarefas', {
                imagendereco: require('../assets/images/Esportes2.png'),
                Background: "#fff",
                backgroundCima: '#5e97fd',
                itemsBackground: '#99d7ff',
                itemcolorTxt: '#5e97fd',
                itemBordatxt:'#2d61bf',
                titulo: 'Estudos',
                subtitulo: 'Meus estudos para hoje',
              });}}>
              <Text style={styles.textButtons}>Estudos</Text>
              <Text style={styles.subTextButtons}>0 em andamento </Text>
            </TouchableOpacity>
          </View>
          </ScrollView><View style={styles.viewRodape}>

          </View>
    </SafeAreaView>
  ); 
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#fff",
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  textTitulo: {
    fontSize: 32,
    marginLeft: 12,
    //fontWeight: 'bold',
    color: '#09275a',
    fontFamily: 'Poppins'
  },
  textSubtitulo: {
    fontSize: 14 ,
    marginLeft: 12,
    color: '#09275a',
    fontFamily: 'Poppins'
  },
  
  viewTitulo: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 10,
    flexDirection: 'row',
  },
  viewOpcoes:{
    backgroundColor: '#fff',
    width: "100%",
    paddingHorizontal:10,
  },
  styleOpcoes:{
    marginLeft: 0,
    flexDirection: 'row',
    padding:8,
    marginVertical:5,
    alignItems: 'center'
  },
  iconsOpcoes:{
    borderRadius: 20,
    alignItems:'center',
    height: 36,
    width: 36,
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 3,
  },
  iconsOpcoes2: {  
    fontSize: 16,
    textAlign:'center',
    textAlignVertical:'center',
    }, 
    textOptions: {  
      marginLeft: 12,
      //fontWeight: 'bold',
      fontSize: 14,
      color: '#18438d',
      fontFamily: 'Poppins-Bold'
      }, 
      subtextOptions: {  
        marginLeft: 12,
        fontSize: 11,
        fontFamily: 'Poppins'
        }, 
  viewConteudo: {
    backgroundColor: '#fff',
    flex:1,
    marginTop: 0,
  },
  miniviews: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignSelf: 'center',
    height:260,
    width: '100%',
    justifyContent: 'space-between',
  },
  buttonsLeft: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    height: 240,
    width: 164,
    borderRadius: 24,
    marginLeft: 20,
    //alignItems: 'center',
    justifyContent: 'flex-end'
  },
  textButtons: {
    color: "#fff",
    fontSize: 18,
    //fontWeight: 'bold',
    marginLeft: 20,
    fontFamily: 'Poppins-Bold',
  },
  subTextButtons: {
    color: "#fff",
    fontSize: 12,
    marginBottom: 30,
    marginLeft: 20,
    fontFamily: 'Poppins',
  },
  buttonsRight: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    height: 240,
    width: 164,
    borderRadius: 20,
    marginRight: 20,
    //alignItems: 'center',
    justifyContent: 'flex-end'
  },
  itemStyle: {  
    backgroundColor: '#e68789',  
    padding: 40,  
    marginTop: 20,  
    marginHorizontal: 30,
    borderRadius: 24,  
    color: '#8f2b2b', 
  },
  titleStyle: {  
    marginVertical: 20, 
    textAlign: 'center',
    borderRadius: 20,  
    color: '#e68789', 
    fontSize: 30,
    fontWeight: 'bold',
  },
  btnAdd: {  
    marginTop: 14,
    marginLeft: 60,
    borderRadius: 20,  
    backgroundColor: '#97b6ee',
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icons: {  
    borderRadius: 20,  
    color: '#4472c4' ,
    fontSize: 24,
    alignSelf: 'center',
    justifyContent:'center'
    }, 
    viewRodape: {
      backgroundColor: '#ffffff',
//      justifyContent: 'flex-end',  
      height: 70,
      width: "100%"  
    },
});