import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView } from "react-native";
import useStorage from "../../hooks/useStorage";
import { MMKV } from "react-native-mmkv";
import React,{ useState } from "react";


export function ModalAddTarefa({fecharModal}){
    //const { saveItem } = useStorage();
    const { nomeTarefa, setNomeTarefa} = useState()
    const { prazoTarefa, setPrazoTarefa} = useState()
    const { descTarefa, setDescTarefa} = useState()
    
    //function salvarTarefa(){
    //    storage.set('user', JSON.stringify((nomeTarefa, prazoTarefa, descTarefa)));
    //}
    return(
        <View style = {styles.container}> 
        <KeyboardAvoidingView>
            <View style = {styles.Quadradinho}>
                <Text style = {styles.Titulo}>NOVA TAREFA</Text><View style={styles.ViewInput}>
                <TextInput style = {styles.Input} placeholder="Nome da tarefa" onChangeText={setNomeTarefa}></TextInput>
                <TextInput style = {styles.Input} placeholder="Prazo para tarefa" onChangeText={setNomeTarefa}></TextInput>
                <TextInput style = {styles.Input} placeholder="Descrição tarefa" onChangeText={setNomeTarefa}></TextInput>
                </View>
                <View style = {styles.btnsArea}>
                    <TouchableOpacity style={styles.btn} onPress={fecharModal}>
                        <Text>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, styles.btnSalvar]} onPress={ fecharModal}>
                        <Text style={styles.textSalvar}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </KeyboardAvoidingView>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        flex: 1,
        alialignSelf: 'center',
        justifyContent: 'center',
    },
    Quadradinho:{
        borderRadius: 32,
        backgroundColor: "#FFF",
        marginBottom: "0%",
        marginTop:"0%",
        marginHorizontal: '0%',
        //alignItems: 'center',
        alignSelf: 'center',
        //justifyContent: 'center',
        height: '90%',
        width: '80%'
    },
    ViewInput:{
        borderRadius: 32,
        backgroundColor: "#FFF",
        marginBottom: "0%",
        marginTop:40,
        marginHorizontal: '0%',
        //alignItems: 'center',
        alignSelf: 'center',
        //justifyContent: 'center',
        height: '49%',
        width: '100%'
    },
    Titulo:{
        fontSize: 30,
        fontWeight: 'bold',
        color: "#af3131",
        marginBottom: "8%",
        alignSelf: 'center',
        marginTop: 20
    },
    text:{
        fontSize: 14,
        marginLeft: "10%",
        //marginBottom: "2%",
        marginTop:20,
        color: "#000"
    },
    Input:{
        marginTop: 10,
        alignSelf: 'center',
        backgroundColor: "#FFF",
        width: "84%",
        height: 48,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: "#af3131",
        padding: 10,
    },
    btn:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FFF",
        //marginTop: 14,
        //marginBottom: 14,
        padding: 10,
    },
    btnSalvar:{
        backgroundColor: "#8f2b2b",
        borderRadius: 16,
        padding: 10, 
    },
    textSalvar:{
        color: "#FFF",
        fontWeight: 'bold',
        fontSize: 15
    },
    btnsArea:{
        flexDirection: 'column',
        alignSelf: 'center',
        width: "84%",
        height: "13%",
        justifyContent: 'center',
        marginTop: 80,
        //backgroundColor: "#000"
    },
})
