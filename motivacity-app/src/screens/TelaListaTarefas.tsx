import { View, TouchableOpacity, Text, TextInput, SafeAreaView, ScrollView, StatusBar, StyleSheet, Modal, Image } from "react-native";
import React, { useState, useCallback } from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Screen";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";

export function TelaListaTarefas({navigation, route}: any){
  
    return ( 
        <SafeAreaView style={styles.container}>
            <View style={{backgroundColor: route.params.Background}}>
            <View style={[styles.viewCima, {backgroundColor: route.params.backgroundCima}]}>
            <View style={styles.viewCabecalho}>
              <TouchableOpacity onPress={()=>navigation.navigate('Inicial')}>
              <AntDesign name="left" style={styles.btnVoltar}/>
              </TouchableOpacity>
              <Text style = {styles.viewTitulo}>{route.params.titulo}</Text>
              <Text style = {styles.viewSubTitulo}>{route.params.subtitulo}</Text>
              </View>
            </View> 
            <View style={styles.viewblocotarefas}>
                <ScrollView>
                  <View style={[styles.itemsTarefas,{backgroundColor: route.params.itemsBackground, borderBottomColor: route.params.itemBordatxt, borderLeftColor: route.params.itemBordatxt,}]}>
                    <Text style={[styles.txtTarefa, {color: route.params.itemcolorTxt}]}>Estudar matemática                          Fácil</Text>
                    <View style={{flexDirection: 'row'}}>
                      <View>
                        <Text style={[styles.txtSubTarefa, {color: route.params.itemcolorSubTxt}]}>30/11/2023</Text>
                        <Text style={[styles.txtSubTarefa, {color: route.params.itemcolorSubTxt}]}>14h00-15h00</Text>
                      </View>
                      <TouchableOpacity style = {[styles.btnConcluir, {backgroundColor: route.params.btnConcluirbg}]}>
                      <Text style={{color: '#fff', fontFamily: 'Poppins-Bold'}}>
                        Concluir
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  
                  </ScrollView>
            </View>
            </View>
    </SafeAreaView>
  ); 
};
//<Image style = {styles.tituloimage} source={route.params.imagendereco}/>

/*
<View style={{backgroundColor: route.params.background, flex: 1}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Início')}>
              <AntDesign name="left" style={styles.btnVoltar}/>
              </TouchableOpacity>
            <View style={styles.viewImage}>
              <Image style = {styles.tituloimage} source={route.params.imagendereco}/>
            </View>
            <View style={styles.viewblocotarefas}>
                <Text style={styles.tituloTarefas}>MINHAS TAREFAS</Text>
            </View>
            </View>*/ 
            
//<Image style = {styles.tituloimage} source={require(route.params.imagendereco)}/>
//onPress={()=>navigation.navigate('Início')}
const styles = StyleSheet.create({
  container: {
    //backgroundColor:"green",
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    paddingTop: StatusBar.currentHeight,
  }, 
  viewCabecalho:{
    //backgroundColor: 'red',
    flexDirection: 'row',
  },
  viewCima:{
    height: SCREEN_HEIGHT*0.475,
    width: SCREEN_WIDTH*0.975,
    borderRadius: SCREEN_WIDTH*0.075,
    alignSelf: 'center',
  },
  viewTitulo:{
    fontSize: SCREEN_WIDTH*0.09,
    marginLeft: SCREEN_WIDTH*0.075,
    marginTop: SCREEN_HEIGHT*0.325,
    position: 'absolute',
    color: '#fff',
    fontFamily: 'Poppins-Bold',
  },
  viewSubTitulo:{
    fontSize: SCREEN_WIDTH*0.0365,
    position: 'absolute',
    marginLeft: SCREEN_WIDTH*0.075,
    marginTop: SCREEN_HEIGHT*0.4,
    color: '#fff',
    fontFamily: 'Poppins',
  },
  tituloimage:{
    height: SCREEN_HEIGHT*0.17,
    width: SCREEN_WIDTH*0.65,
    position: 'absolute',
    marginTop: SCREEN_HEIGHT*0.12,
    marginLeft: SCREEN_WIDTH*0.165
  },
  viewImage:{
    //backgroundColor: 'blue',
    width: SCREEN_WIDTH*0.875,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    //backgroundColor: '#97ff97',
    alignItems: 'center',
  },
  btnVoltar:{
    fontSize: 40,
    color: '#fff',
    //backgroundColor: 'red',
    width: SCREEN_WIDTH*0.075,
    marginLeft: SCREEN_WIDTH*0.05,
    marginTop: SCREEN_HEIGHT*0.02,
    textAlign: 'center',
    justifyContent: 'center'
  },
  viewblocotarefas:{
    //#cfffae
    backgroundColor: '#ecfdec',
    height: SCREEN_HEIGHT*0.525,
    width: SCREEN_WIDTH*0.925,
    borderTopStartRadius: SCREEN_WIDTH*0.1,
    borderTopEndRadius: SCREEN_WIDTH*0.1,
    marginTop: SCREEN_HEIGHT*0.02,
    alignSelf: "center",
    alignItems: 'center'
  },
 
  tituloTarefas:{
    fontSize: SCREEN_HEIGHT*0.045,
    textAlign: 'center',
    color: '#1b9c1b',
    marginTop: SCREEN_HEIGHT*0.02,
    fontFamily: 'Poppins'
  },
  itemsTarefas:{
    marginBottom: SCREEN_HEIGHT*0.015,
    alignSelf: 'center',
    height: SCREEN_HEIGHT*0.175,
    width: SCREEN_WIDTH*0.9,
    backgroundColor: '#cbffa8',
    borderLeftWidth: 5,
    borderBottomWidth: 5,
    borderLeftColor: '#119e11',
    borderBottomColor: '#119e11',
    borderRadius: 10
  },
  btnAddTarefas:{
    height: SCREEN_HEIGHT*0.075,
    borderRadius: SCREEN_WIDTH*0.1,
    width: SCREEN_WIDTH*0.275,
    marginTop: SCREEN_HEIGHT*0.345,
    marginLeft: SCREEN_WIDTH*0.545,
    backgroundColor: '#106610',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTarefa:{
    color: '#5da32e',
    fontFamily: 'Poppins-Bold',
    marginLeft: SCREEN_WIDTH*0.04,
    marginTop: SCREEN_HEIGHT*0.0125,
    fontSize: SCREEN_HEIGHT*0.0225,
    paddingBottom: SCREEN_HEIGHT*0.01
  },
  txtSubTarefa:{
    color: '#106610',
    fontFamily: 'Poppins',
    marginLeft: SCREEN_WIDTH*0.04,
    fontSize: SCREEN_HEIGHT*0.0175
  },
  txtAddTarefas:{
    fontSize: SCREEN_HEIGHT*0.0175,
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  btnConcluir:{
    backgroundColor: '#5da32e',
    alignItems: "center",
    justifyContent: 'center',
    width: SCREEN_WIDTH*0.225,
    borderRadius: SCREEN_WIDTH*0.035, 
    marginLeft: SCREEN_WIDTH*0.4
  }
});