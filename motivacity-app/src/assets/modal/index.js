import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from "react-native";
import useStorage from "../../hooks/useStorage";
import { MMKV } from "react-native-mmkv";
import React,{ useState } from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
//KeyboardAvoidingView

export function ModalAddTarefa({fecharModal}){
    //const { saveItem } = useStorage();
//    const { nomeTarefa, setNomeTarefa} = useState()
//    const { prazoTarefa, setPrazoTarefa} = useState()
//    const { descTarefa, setDescTarefa} = useState()
    
    //function salvarTarefa(){
    //    storage.set('user', JSON.stringify((nomeTarefa, prazoTarefa, descTarefa)));
    //}

//<TextInput style = {styles.Input} placeholder="Nome da tarefa" onChangeText={setNomeTarefa}></TextInput>
                //<TextInput style = {styles.Input} placeholder="Prazo para tarefa" onChangeText={setNomeTarefa}></TextInput>
                //<TextInput style = {styles.Input} placeholder="Descrição tarefa" onChangeText={setNomeTarefa}></TextInput>

    return(
        <View style = {styles.container}>

            <View style = {styles.Quadradinho}>
                <View style={styles.ViewCabeçalho}>
                <TouchableOpacity style={styles.btn} onPress={fecharModal}>
                        <AntDesign name='left' style={styles.btn}/>
                    </TouchableOpacity>
                <Text style = {styles.Titulo}>Criando Nova Tarefa</Text>
                <Text style = {styles.labelNome}>NOME</Text>
                <View style = {[styles.inputContainer, {width: 350}]}>
                    <TextInput style = {styles.inputNome}/></View>
                <Text style = {styles.labelNome}>DATA</Text>
                <View style = {styles.viewData}>
                    <View style = {[styles.inputContainer, {width: 303}]}>
                    <TextInput style = {styles.inputEmail}/></View>
                    <Feather name='calendar' style={styles.calendarView}/>
                </View>
                <View style={styles.ViewInput}>
                </View>
                </View>
                <View style = {styles.viewMetadeInferior}>
                    <View style = {styles.viewPrazos}>
                        <View style = {styles.viewInicio}>
                            <Text style = {styles.TextInicio}>INÍCIO</Text>
                            <View style = {styles.inicioContainer}>
                            <TextInput style = {styles.inicioInput}/></View>
                        </View>
                        <View style = {styles.viewFim}>
                            <Text style = {styles.TextFim}>FIM</Text>
                            <View style = {styles.fimContainer}>
                            <TextInput style = {styles.fimInput}/></View>
                        </View>
                    </View>
                    <View style = {styles.viewRecompensas}>
                        <Text style = {styles.textRecompensas}>RECOMPENSAS</Text>
                        <View style = {styles.viewInputRecompensas}>
                            <View style = {styles.recompensasContainer}>
                            <TextInput style = {styles.recompensasInput}/></View>
                        </View>
                    </View>
                    <View style = {styles.viewCategoria}>
                        <Text style = {styles.textCategoria}>CATEGORIA</Text>
                        <View style = {styles.coluna1ComCategorias}>
                        <TouchableOpacity><View style = {[styles.viewComCategorias, {backgroundColor: '#c1fc9a',}]}>
                            <Text style={[styles.txtCategoria, {color: '#5da32e'}]}>ESPORTES</Text></View></TouchableOpacity>
                            <TouchableOpacity><View style = {[styles.viewComCategorias, {backgroundColor: '#fd8080'}]}>
                            <Text style={[styles.txtCategoria,{color: '#bd2121'}]}>DESAFIOS</Text>
                            </View></TouchableOpacity>
                        </View>
                        <View style = {styles.coluna2ComCategorias}>
                        <TouchableOpacity><View style = {[styles.viewComCategorias, {backgroundColor:  '#ffb685'}]}>
                            <Text style={[styles.txtCategoria, {color: '#e06c1f'}]}>PESSOAIS</Text></View></TouchableOpacity>
                            <TouchableOpacity><View style = {[styles.viewComCategorias, {backgroundColor: '#90b9ff'}]}>
                            <Text style={[styles.txtCategoria, {color: '#3379f3'}]}>ESTUDOS</Text></View></TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.btnSalvar} onPress={ fecharModal}>
                        <Text style={styles.textSalvar}>Criar Tarefa</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
} 
const styles = StyleSheet.create({
    container:{
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        //justifyContent: 'center',
    },
    Quadradinho:{
        backgroundColor: "yellow",
        //alignItems: 'center',
        alignSelf: 'center',
        //justifyContent: 'center',
        //height: '%',
        width: '100%',
    },
    ViewCabeçalho:{
        height: 330,
        width: '100%',
        backgroundColor: '#363953'
    },
    btn:{
        justifyContent: 'center',
        //backgroundColor: "green",
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: '6.5%',
        marginLeft: '1%',       
        //marginTop: 14,
        //marginBottom: 14,
    },
    Titulo:{
        fontSize: 28,
        color: "#fff",
        marginTop: '6%',
        marginLeft: '4%',
        fontFamily: 'Poppins'
    },
    labelNome:{
        fontSize: 10,
        color: "#9699aa",
        marginTop: '6%',
        marginLeft: '5%'
    },
    labelData:{
        fontSize: 10,
        color: "#9699aa",
        marginLeft: '5%',
    },
    viewData:{
        flexDirection: 'row',
        marginTop: '4%',
    },
    inputContainer:{
        height: '10%',
        marginLeft: "5%",
        justifyContent:'flex-end',
        marginTop: '1%',
        borderBottomWidth: 1, // Adiciona uma borda inferior de 1 pixel
        borderBottomColor: '#a7abb9', // Define a cor da borda inferior
        backgroundColor: 'transparent', // Define o fundo como transparente
        paddingVertical: "2%", // Espaçamento interno horizontal
    },
    inputNome:{
        fontSize: 16,
        color: '#bcbfca',
    },
    inputEmail:{
        fontSize: 16,
        color: '#bcbfca',
        //backgroundColor: 'green'
    },
    calendarView:{
        fontSize: 22,
        marginLeft: 25,
        color: '#bcbfca',
    },
    viewMetadeInferior:{
        height: 390,
        width:'100%',
        backgroundColor: '#fff'
    },
    viewPrazos:{
        marginLeft: '5%',
        marginTop: '7%',
        height: '15%',
        width: '90%',
        //backgroundColor: 'green',
        flexDirection: 'row'
    },
    viewInicio:{
        //backgroundColor: "#000",
        height: 60,
        width: 100,
        //alignItems: 'center',
        marginRight: 50
    },
    TextInicio:{
        color: "#9699aa"
    },
    inicioContainer:{
        height: '60%',
        width: '100%',
       justifyContent:'center',
        marginTop: '0%',
        borderBottomWidth: 1, // Adiciona uma borda inferior de 1 pixel
        borderBottomColor: '#9699aa', // Define a cor da borda inferior
        backgroundColor: 'transparent', // Define o fundo como transparente
        paddingVertical: "6%", // Espaçamento interno horizontal
    },
    inicioInput:{
        fontSize: 16,
        fontWeight:'bold',
        height: 30,
        //backgroundColor: '#000',
    },
    viewFim:{
        //backgroundColor: '#fff',
        height: 60,
        width: 100,
        //alignItems: 'center',
    },
    TextFim:{
        color: "#9699aa",
        //backgroundColor: "#000"
        
    },
    fimContainer:{
        height: '60%',
        width: '100%',
       justifyContent:'center',
        marginTop: '0%',
        borderBottomWidth: 1, // Adiciona uma borda inferior de 1 pixel
        borderBottomColor: '#9699aa', // Define a cor da borda inferior
        backgroundColor: 'transparent', // Define o fundo como transparente
        paddingVertical: "6%", // Espaçamento interno horizontal
    },
    fimInput:{
        fontSize: 16,
        fontWeight:'bold',
        height: 30,
        //backgroundColor: '#000',
    },
    viewRecompensas:{
        marginLeft: '5%',
        marginTop: '5%',
        height: '15%',
        width: '90%',
        //backgroundColor: 'blue'
    },
    textRecompensas:{
        color: "#9699aa",
    },
    viewInputRecompensas:{
        //backgroundColor: 'green'
    },
    recompensasContainer:{
        height: '10%',
        width: '100%',
       justifyContent:'center',
        marginTop: '0%',
        borderBottomWidth: 1, // Adiciona uma borda inferior de 1 pixel
        borderBottomColor: '#9699aa', // Define a cor da borda inferior
        backgroundColor: 'transparent', // Define o fundo como transparente
        paddingVertical: "6%", // Espaçamento interno horizontal
    },
    recompensasInput:{
        fontSize: 16,
        fontWeight:'bold',
        height: 20,
        //backgroundColor: '#000',
    },
    viewCategoria:{
        marginLeft: '5%',
        marginTop: '5%',
        height: '28%',
        width: '90%',
        //backgroundColor: 'blue'
    },
    textCategoria:{
        color: "#9699aa",
    },
    coluna1ComCategorias:{
        marginTop: 12,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    coluna2ComCategorias:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewComCategorias:{
        marginTop: 7,
        height: 35,
        width: 173,
        //backgroundColor: 'green',
        borderRadius: 12,
        justifyContent: 'center'

    },
    btnSalvar:{
        backgroundColor: "#3a54c9",
        borderRadius: 30,
        padding: 10, 
        marginTop: '5%',
        height: '15%',
        width: '80%',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    
    txtCategoria:{
        alignSelf: 'center',
        //color: '#fff',
        fontSize: 14,
        fontWeight: 'bold'
    },
    textSalvar:{
        alignSelf: 'center',
        color: '#fff',
        fontSize: 18,
        //fontWeight: 'bold',
        fontFamily: 'Poppins-Bold'
    }
})
