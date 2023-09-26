import { View, Text, TextInput, SafeAreaView, Image, StatusBar, StyleSheet, Modal } from "react-native";
import React, {useState} from 'react'
import { ImageViewer } from "react-native-image-zoom-viewer";
import { FontAwesome } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { Modaloja } from "./Telaloja";

export function Telajogo(){

  const [lojaVisible, setLojaVisible] = useState(false);

    const abrirLoja = () =>{setLojaVisible(true)}

    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.viewPagina}>
      <ScrollView style={styles.scrollCabecalho} horizontal>
      <View style={styles.viewCabecalho}><Image 
      source={require('../assets/images/BgCidade.png')}
      style={styles.imageCabecalho}/>
      </View></ScrollView>
      <View style={styles.viewBotoes}>
      <View style={styles.viewCoins}><Text style={styles.text}>$ 2000,00</Text></View>
      <TouchableOpacity onPress={abrirLoja}>
        <View style={styles.viewBtnLoja}>
        <Image style={styles.viewIconLoja} source={require('../assets/images/compras.png')}></Image>
        </View>
        </TouchableOpacity>
      <Modal visible={lojaVisible} animationType="fade" transparent={true}>
        <Modaloja fecharLoja = {() => setLojaVisible(false)}/>
        </Modal>
      </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width:  '100%',
    paddingTop: StatusBar.currentHeight,
  },
  viewPagina:{
    height: '100%',
    width: '100%',
    //marginStart:0,
    backgroundColor: 'red'
  },
  scrollCabecalho: {
    position:'absolute',
    
    height:'100%',
    width: '100%',
    //marginTop:48,
    //justifyContent: 'center',
    backgroundColor: '#5cc065'
  },
  viewCabecalho: {
    //backgroundColor: 'green',
    //backgroundColor: '#ffd690'
    alignSelf: 'center',
    height:'100%',
    width: 1000,
    justifyContent: 'center',
  }, 
  imageCabecalho:{
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
  },
  scrollView: {
    backgroundColor: '#fff',
    marginHorizontal: 0,
  },
  viewBotoes:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewCoins: {
    //backgroundColor: 'green',
    backgroundColor: '#ffd690',
    borderRadius:16,
    height:40,
    width:140,
    marginTop: 20,
    marginLeft:20,
    alignItems: 'center',
    justifyContent: 'center'
    //alignSelf: 'center',
  },
  viewBtnLoja: {
    //backgroundColor: 'green',
    backgroundColor: '#57a6f0',
    borderRadius:20,
    height:64,
    width:64,
    marginTop: 15,
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
    fontSize: 28,
    color: '#925d00',
  },
});