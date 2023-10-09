import { View, Text, TextInput, SafeAreaView, Image, StatusBar, Modal } from "react-native";
import { StyleSheet } from "react-native";
import React, {useState} from 'react'
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { Routes } from "../routes/index";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Screen";

export function Telajogo({navigation}: any){

    return (
        <SafeAreaView style={styles.container}><View style={styles.viewPagina}>
      <ScrollView style={styles.scrollCabecalho} horizontal>
      <View style={styles.viewCabecalho}><Image 
      source={require('../assets/images/BgCidade.png')}
      style={styles.imageCabecalho}/>
      </View></ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width:  '100%',
  },
  iconDrawer:{
    marginLeft: SCREEN_WIDTH*0.06,
    marginTop: SCREEN_HEIGHT*0.025,
    fontSize: SCREEN_WIDTH*0.06,
    color: '#3a68ff',
    backgroundColor: '#85a1ff',
    borderWidth: 2,
    borderColor: '#3a68ff',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 4,
    borderRadius: 10
  },
  viewPagina:{
    height: '100%',
    width: '100%',
    backgroundColor: 'red',
  },
  scrollCabecalho: {
    position:'absolute',
    flex: 1,

    height:SCREEN_HEIGHT*0.921,
    width: SCREEN_WIDTH,
    backgroundColor: '#5cc065'
  },
  viewCabecalho: {
    //backgroundColor: 'green',
    //backgroundColor: '#ffd690'
    alignSelf: 'center',
    height:800,
    //height:'100%',
    width: 980,
    justifyContent: 'center',
  },
  
  imageCabecalho:{
    
    height: SCREEN_HEIGHT*0.92,
    //height: '100%',
    width: SCREEN_WIDTH*2.5,
  },
  scrollView: {
    backgroundColor: '#fff',
    marginHorizontal: 0,
  },
  viewBotoes:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewCoins: {
    //backgroundColor: 'green',
    backgroundColor: '#ffd894',
    flexDirection: 'row',
    borderRadius:16,
    height:SCREEN_HEIGHT*0.055,
    width:SCREEN_WIDTH*0.375,
    marginTop: 20,
    marginLeft:SCREEN_WIDTH*0.05,
    borderWidth: 3,
    borderColor: '#c47c00',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10
    //alignSelf: 'center',
  },
  moneyIcon:{
    fontSize: 20,
    color: '#c47c00'
  },
  viewBtnLoja: {
    //backgroundColor: 'green',
    backgroundColor: '#57a6f0',
    borderRadius:20,
    height:64,
    width:64,
    marginTop: 10,
    //marginTop: 15,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'space-between'
    //alignSelf: 'center',
  },
  viewBtnSelecionar: {
    //backgroundColor: 'green',
    backgroundColor: '#57a6f0',
    borderRadius:20,
    height:64,
    width:64,
    marginTop: 10,
    //marginTop: 15,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center'
    //alignSelf: 'center',
  },
  viewIconLoja: {
    //backgroundColor: 'green',
    backgroundColor: '#57a6f0',
    borderRadius:24,
    height:50,
    width:50,
    alignItems: 'center',
    justifyContent: 'center'
    //alignSelf: 'center',
  },
  text: {
    fontSize: 20,
    color: '#925d00',
  },
});