import { View, TouchableOpacity, Text, TextInput, SafeAreaView, ScrollView, StatusBar, StyleSheet, Modal } from "react-native";
import React, { useState } from 'react'
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { ModalAddTarefa } from "../assets/modal";


export function Telatarefas(){

  const [modalVisible, setModalVisible] = useState(false)

  function abriraddTarefas(){
    setModalVisible(true)
  }
  function mostrarTarefas() {
    //const data = storage.getString('user')
  }

    return (
        <SafeAreaView style={styles.container}>
          <View>
          </View>
          <View style={styles.viewTitulo}>
          <View><Text style={styles.textTitulo}>Minhas Tarefas</Text>
          <Text style={styles.textSubtitulo}>Tarefas em andamento</Text>
          </View>
          <TouchableOpacity style = {styles.btnAdd} onPress={abriraddTarefas}>
            <FontAwesome name="calendar-o" style = {styles.icons}/></TouchableOpacity>
          </View>
          <View style={styles.viewOpcoes}>
            <TouchableOpacity>
            <View style={styles.styleOpcoes}>
              <FontAwesome name="star" style = {[styles.iconsOpcoes, styles.iconsOpcoes2]}/>
              <View><Text style={styles.textOptions}>Prioridades</Text>
              <Text style={styles.subtextOptions}>Tarefas em prioridade</Text></View></View>
              </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.styleOpcoes}>
              <FontAwesome name="exclamation" style = {[styles.iconsOpcoes, styles.iconsOpcoes2]}/>
              <View><Text style={styles.textOptions}>Atrasadas</Text>
              <Text style={styles.subtextOptions}>Tarefas atrasadas</Text></View></View></TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.styleOpcoes}>
              <Entypo name="trophy" style = {[styles.iconsOpcoes, styles.iconsOpcoes2]}/>
              <View><Text style={styles.textOptions}>Premiadas</Text>
              <Text style={styles.subtextOptions}>Tarefas com melhores prêmios</Text></View></View></TouchableOpacity>
          </View>
          <ScrollView style={styles.viewConteudo}>
          <View style={styles.miniviews}>
            <TouchableOpacity style={[styles.buttonsLeft,{backgroundColor: '#70ad47'}]}>
              <Text style={styles.textButtons}>Esportes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonsRight, {backgroundColor: '#b54545'}]}>
              <Text style={styles.textButtons}>Desafios</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.miniviews}>
            <TouchableOpacity style={[styles.buttonsLeft, {backgroundColor: '#ed7d31'}]}>
              <Text style={styles.textButtons}>Pessoais</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonsRight, {backgroundColor: '#5e97fd'}]}>
              <Text style={styles.textButtons}>Escolares</Text>
            </TouchableOpacity>
          </View>
          </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  textTitulo: {
    fontSize: 32,
    marginLeft: 20,
    fontWeight: 'bold'
  },
  textSubtitulo: {
    fontSize: 14 ,
    marginLeft: 20,
  },
  
  viewTitulo: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 10,
    flexDirection: 'row',
  },
  viewOpcoes:{
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
    backgroundColor: '#97b6ee',
    height: 30,
    width: 30,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  iconsOpcoes2: {  
    color: '#4472c4' ,
    fontSize: 16,
    textAlign:'center',
    textAlignVertical:'center',
    }, 
    textOptions: {  
      marginLeft: 10,
      fontWeight: 'bold',
      fontSize: 14
      }, 
      subtextOptions: {  
        marginLeft: 10,
        fontSize: 11
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
    fontWeight: 'bold',
    marginBottom: 60,
    marginLeft: 30
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
    marginTop: 20,
    marginLeft: 60,
    borderRadius: 18,  
    backgroundColor: '#97b6ee',
    height: 36,
    width: 36,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icons: {  
    borderRadius: 20,  
    color: '#4472c4' ,
    fontSize: 20,
    alignSelf: 'center',
    justifyContent:'center'
    }, 
});