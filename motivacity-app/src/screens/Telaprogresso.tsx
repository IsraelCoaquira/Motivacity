import { View, Text, TextInput, SafeAreaView, FlatList, Modal, ScrollView, StatusBar, StyleSheet, TouchableOpacity } from "react-native";
import React,{useState, useCallback} from 'react'
import { Calendar, LocaleConfig, CalendarList, Agenda } from "react-native-calendars";
import eventos from "../hooks/eventos.json";
import { format, addHours } from 'date-fns';
import { AntDesign, Feather } from "@expo/vector-icons";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Screen";
import { horario } from "../constants/horarios";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


LocaleConfig.locales.fr = {
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro", 
    "Novembro",
    "Dezembro"
  ],
  monthNamesShort: [
    "Jan.",
    "Fev.",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul", 
    "Ago",
    "Set.",
    "Out.",
    "Nov.",
    "Dez."
  ],
  dayNames: [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado"
  ],
  dayNamesShort: ["Dom.", "Seg.", "Ter.", "Qua.", "Qui.", "Sex.", "Sáb."]
};

LocaleConfig.defaultLocale = "fr";

export function Telaprogresso({navigation}: any){

    return ( 
      <SafeAreaView style={styles.container} >
        <View style={styles.viewVoltar}>
          <TouchableOpacity onPress={()=>navigation.navigate('Inicial')}>
              <AntDesign name='left' style={styles.btn}/>
            </TouchableOpacity>
        </View>
        <View style={styles.cabecalho}>
        <View>
            <Text style={styles.titulo}>Sua agenda</Text>
            <Text style={styles.subtitulo}>suas tarefas para o dia!</Text>
          </View>
        </View>
        <View style={styles.conteudo}>
          <Text style={styles.procurar}>
            Procure o dia:
          </Text>
          <TouchableOpacity>
          <View style={styles.dataPicker}>
          <View style={styles.dataView}>
            <Text style={styles.txtData}>02/10/2023
            </Text>
            <Feather name='calendar' style={styles.calendarIcon}/>
          </View>
          </View>
          </TouchableOpacity>
          <FlatList 
            showsVerticalScrollIndicator={false} 
            style={styles.flatlist}
            keyExtractor={(item)=>item.id.toString()}
            data={horario}
            renderItem={({item})=>(
              <TouchableOpacity style={styles.horaContainer}>
                  <View style={styles.viewHora}>
                    <Text style={styles.textHora}>
                      {item.hora}
                    </Text>
                  </View>
                  <View style={styles.viewTarefa}>
                    <Text style={styles.textTarefa}>
                      {item.tarefa}
                    </Text>
                  </View>
              </TouchableOpacity>
            )}/>
        </View>
      </SafeAreaView>
  );
};

/*<TouchableOpacity style = {styles.addTarefas} onPress={abrirAddTarefas}>
            <Text style = {styles.txtAddTarefas}>
              Adicionar{'\n'}Tarefas
            </Text>
          </TouchableOpacity>
          */ 
//<ScrollView style={{backgroundColor: 'red',}}></ScrollView>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    
  },
  scrollView: {
    backgroundColor: '#fff',
    marginHorizontal: 0,
  },
  //<Calendar style={styles.calendario} onDayPress={date => console.log(date)}/>
  text: {
    fontSize: 20,
  }, 
  btn:{
    justifyContent: 'center',
    fontSize: 28,
    color: '#7e7e7e', 
    //backgroundColor: 'black',      
    //marginTop: 14,
    //marginBottom: 14,
    marginTop: SCREEN_HEIGHT*(1/20),
    marginLeft: SCREEN_WIDTH*(1/25),
},
  view:{
    height: 120,
    width: 120,
    //position: 'absolute',
    //bottom: 200,
    borderRadius: 16,
    backgroundColor: '#b54545'
  },
  viewVoltar:{
    flexDirection: 'row',
  },
  cabecalho:{
    flexDirection: 'row',
    marginLeft: SCREEN_WIDTH * (1/15),
    marginTop: SCREEN_WIDTH * (1/20),
  },
  titulo:{
    fontSize: 26,
    //fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
    //backgroundColor: 'gray'
  },
  subtitulo:{
    fontSize: 12,
    fontFamily: 'Poppins',
    color: '#777777',
  },
  addTarefas:{
    backgroundColor: '#3333ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28,
    width: SCREEN_WIDTH*0.275,
    height: SCREEN_HEIGHT*0.0675,
    marginLeft: SCREEN_WIDTH*0.2,
    marginTop: SCREEN_WIDTH*0.02
  },
  txtAddTarefas:{
    color: '#fff',
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
  },
  conteudo:{
    marginTop:  SCREEN_HEIGHT*0.04,
    marginBottom:  SCREEN_HEIGHT *0.44
  },
  dataPicker:{
    alignSelf: 'center',
    marginTop:  SCREEN_HEIGHT*0.03,
    justifyContent: 'center',
    paddingHorizontal:SCREEN_WIDTH*0.04,
    borderRadius:14,
    borderBottomWidth: 4,
    borderBottomColor: '#2323fd',
    height: SCREEN_HEIGHT*0.065,
    width: SCREEN_WIDTH*0.9,
    backgroundColor: '#dfe9ff',
  },
  dataView:{
    justifyContent: 'space-between',
    flexDirection:'row',
  },
  procurar:{
    fontSize: 16,
    marginLeft: SCREEN_WIDTH*0.06,
    fontFamily: 'Poppins',
  },
  txtData:{
    color: '#2323fd',
    fontFamily: 'Poppins',
  },
  calendarIcon:{
    fontSize: 20,
    color: '#2323fd'
  },
  flatlist:{
    marginHorizontal: SCREEN_WIDTH*0.025,
    marginTop: SCREEN_WIDTH*0.05
  },
  calendario:{
    backgroundColor: 'yellow',
    borderRadius: 10,
    margin: 20
    
  },
  viewHora:{
    height: SCREEN_HEIGHT*0.095,
    width:SCREEN_WIDTH*0.175,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eeeeee'
  },
  textHora:{
    fontFamily: 'Poppins-Extralight',
    fontSize: 15
    //backgroundColor: 'gray'
  },
  viewTarefa:{
    height: SCREEN_HEIGHT*0.095,
    width:SCREEN_WIDTH*0.725,
    borderLeftWidth: 5,
    borderLeftColor: '#949494',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee'
  },
  textTarefa:{
    fontFamily: 'Poppins-Extralight',
    fontSize: 14
    //backgroundColor: 'gray'
  },
  horaContainer:{
    flexDirection: 'row',
    width: SCREEN_WIDTH * 0.85,
    height: SCREEN_HEIGHT*0.075,
    alignItems: 'center',
    //backgroundColor: 'red',
    marginBottom: SCREEN_HEIGHT*0.03,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#d30000',
  },
  cima:{
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT*(1/4),
    backgroundColor: 'blue'
  },
  meio:{
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT*(1/2.15),
    backgroundColor: 'green'
  },
  baixo:{
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT*(1/3.031),
    backgroundColor: 'pink'
  },
});