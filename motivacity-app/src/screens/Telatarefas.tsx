import { View, TouchableOpacity, Text, TextInput, SafeAreaView, ScrollView, StatusBar, StyleSheet, Modal } from "react-native";
import React, { useState } from 'react'
import { FontAwesome } from "@expo/vector-icons";
import { ModalAddTarefa } from "../components/modal"
import {  } from '../components/modal'


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
          <View style = {styles.views }>
      <ScrollView>
        <Text style={styles.titleStyle}>TAREFAS PENDENTES</Text>
          <Text style = {styles.itemStyle}>Tarefas</Text>
      </ScrollView>
      <TouchableOpacity style = {styles.btnAdd} onPress={abriraddTarefas}><FontAwesome name="plus" style = {styles.icons}/></TouchableOpacity>
      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalAddTarefa  fecharModal = {() => setModalVisible(false)}/>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  text: {
    fontSize: 20,
  },
  views: {
    backgroundColor: '#b54545',
    flex: 1
  },
  itemStyle: {  
    backgroundColor: '#e68789',  
    padding: 40,  
    marginTop: 20,  
    marginHorizontal: 30,
    borderRadius: 20,  
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
    marginLeft: 300,
    marginBottom: 90,
    borderRadius: 24,  
    backgroundColor: '#e68789',
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icons: {  
    marginTop: 20, 
    borderRadius: 20,  
    color: '#8f2b2b' ,
    fontSize: 30,
    height: 50,
    }, 
});