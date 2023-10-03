import { View, TouchableOpacity, Text, TextInput, SafeAreaView, ScrollView, StatusBar, StyleSheet, Modal, Image } from "react-native";
import React, { useState, useCallback } from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Screen";



export function TelaListaTarefas({navigation, route}){

    const { imagendereco } = route.params;
    return (
        <SafeAreaView style={styles.container}>
            <View style={{backgroundColor: route.params.background, flex: 1}}>
            <View style={styles.viewImage}>
              <Image style = {styles.tituloimage} source={route.params.imagendereco}/>
            </View>
            <View style={styles.viewblocotarefas}>
                <Text style={styles.tituloTarefas} onPress={()=>navigation.navigate('Início')}>MINHAS TAREFAS</Text>
            </View>
            </View>
    </SafeAreaView>
  ); 
};
//<Image style = {styles.tituloimage} source={require(route.params.imagendereco)}/>
//onPress={()=>navigation.navigate('Início')}
const styles = StyleSheet.create({
  container: {
    //backgroundColor:"green",
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  viewcabecalho:{
  },
  viewblocotarefas:{
    backgroundColor: '#fff',
    height: SCREEN_HEIGHT*0.55,
    width: SCREEN_WIDTH*0.9,
    borderRadius: SCREEN_WIDTH*0.1,
    marginTop: SCREEN_HEIGHT*0.025,
    alignItems: 'center',
    alignSelf: "center"
  },
  tituloimage:{
    height: SCREEN_HEIGHT*0.225,
    width: SCREEN_WIDTH*0.875,
  },
  viewImage:{
    height: SCREEN_HEIGHT*0.32,
    width: SCREEN_WIDTH,
    justifyContent: 'flex-end',
    //backgroundColor: '#97ff97',
    alignItems: 'center',
  },
  tituloTarefas:{
    fontSize: 24,
    fontWeight: "bold"
  }
});