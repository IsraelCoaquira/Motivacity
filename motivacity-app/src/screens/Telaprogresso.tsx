import { View, Text, TextInput, SafeAreaView, FlatList, ScrollView, StatusBar, StyleSheet, TouchableOpacity } from "react-native";
import React,{useState} from 'react'
import { Calendar, LocaleConfig, CalendarList, Agenda } from "react-native-calendars";
import eventos from "../hooks/eventos.json";
import { format, addHours } from 'date-fns';
import { AntDesign, Feather } from "@expo/vector-icons";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Screen";
import { horario } from "../constants/horarios";

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
    "Jul.",
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

export function Telaprogresso(){
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.viewVoltar}>
          <TouchableOpacity>
              <AntDesign name='left' style={styles.btn}/>
            </TouchableOpacity>
        </View>
        <View style={styles.cabecalho}>
        <View>
            <Text style={styles.titulo}>Sua agenda</Text>
            <Text style={styles.subtitulo}>suas tarefas para o dia!</Text>
          </View>
          <TouchableOpacity style = {styles.addTarefas}>
            <Text style = {styles.txtAddTarefas}>
              Adicionar{'\n'}Tarefas
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.conteudo}>
          <Text style={styles.procurar}>
            Procure o dia:
          </Text>
          <View style={styles.dataPicker}>
          <View style={styles.dataView}>
            <Text style={styles.txtData}>02/10/2023
            </Text>
            <Feather name='calendar' style={styles.calendarIcon}/>
          </View>
          </View>
          <FlatList 
            showsVerticalScrollIndicator={false} 
            style={styles.flatlist}
            keyExtractor={(item)=>item.id.toString()}
            data={horario}
            renderItem={({item})=>(
              <TouchableOpacity>
                <View>
                  <Text>{item.hora}</Text>
                  <Text></Text>
                </View>
              </TouchableOpacity>
            )}/>
        </View>
      </SafeAreaView>
  );
};
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
    fontWeight: 'bold'
  },
  subtitulo:{
    fontSize: 13,
    color: '#777777',
  },
  addTarefas:{
    backgroundColor: '#3333ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28,
    width: SCREEN_WIDTH*(1/3.6),
    height: SCREEN_HEIGHT*(1/15),
    marginLeft: SCREEN_HEIGHT*(1/8)
  },
  txtAddTarefas:{
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  },
  conteudo:{
    marginTop:  SCREEN_HEIGHT*0.04
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
  },
  txtData:{
    color: '#2323fd',
  },
  calendarIcon:{
    fontSize: 20,
    color: '#2323fd'
  },
  flatlist:{
    marginLeft: SCREEN_WIDTH*0.075,
    marginTop: SCREEN_WIDTH*0.025
  },
  calendario:{
    backgroundColor: 'yellow',
    borderRadius: 10,
    margin: 20
    
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
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