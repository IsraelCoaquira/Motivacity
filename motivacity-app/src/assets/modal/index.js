import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Modal, Pressable } from "react-native";
import React,{ useState } from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants/Screen";
import { TextInputMask } from "react-native-masked-text";
import uudi from "react-native-uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";


export function AddTarefas({navigation, route}){
    const [nome, setNome] = useState("");
    const [LabelDificil, setLabelDificil] = useState("FÁCIL");
    const [Horario, setHorario] = useState("00:00 - 01:00");
    const [Categoria, setCategoria] = useState("ESPORTES")
    const [data, setData] = useState("Clique aqui para escolher uma data")
    const [modalhorarios, setModalhorarios] = useState(false);
    const [modaldificuldade, setModaldificuldade] = useState(false);
    
    async function novaTarefa() {
        const id = uudi.v4();
        const novosDados = {
            id,
            nome,
            data,
            LabelDificil,
            Horario,
            Categoria
        }

    await AsyncStorage.setItem();

        console.log(novosDados);
        
        navigation.navigate('Inicial')
    }

    return(
        <SafeAreaView style={styles.container}>
        <View style = {styles.container}>
 
            <View style = {styles.Quadradinho}>
                <View style={styles.ViewCabeçalho}>
                <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('Inicial'
                )}>
                        <AntDesign name='left' style={styles.btn}/>
                    </TouchableOpacity>
                <Text style = {styles.Titulo}>Criando Nova Tarefa</Text>
                <Text style = {styles.labelNome}>NOME</Text>
                <View style = {[styles.inputContainer, {width: 350}]}>
                    <TextInput 
                        placeholder = "Digite um nome para a tarefa" 
                        placeholderTextColor = "#9699aa" 
                        style = {styles.inputNome} 
                        value={nome} 
                        onChangeText={text=>setNome(text)}
                        />
                </View>
                <Text style = {styles.labelData}>DATA</Text>
                    <View style = {styles.viewData}>
                        <TextInputMask 
                            style={styles.selectData}
                            placeholder="Digite uma data para a tarefa"
                            placeholderTextColor= "#9699aa"
                            type= {"datetime"} 
                            options={{
                                format: 'DD/MM/YYYY'
                            }}
                            value={data}
                            onChangeText={ text => setData(text)}/>
                        <AntDesign style = {styles.calendarView} name="calendar"/>
                    </View>
                <View style={styles.ViewInput}>
                </View>
                </View>
                <View style = {styles.viewMetadeInferior}>
                    <View style = {styles.viewPrazos}>
                        <View style = {styles.viewInicio}>
                            <Text style = {styles.TextInicio}>HORÁRIO</Text>
                            <TouchableOpacity style = {styles.horario} onPress={() => {setModalhorarios(true)}}>
                                <Text style={styles.txtHorario}>{Horario}</Text>
                            </TouchableOpacity>
                            <Modal 
                                mostrarHorarios
                                animationType="fade" 
                                visible={modalhorarios}
                                onRequestClose={() => setModalhorarios(false)}
                                transparent={true}>
                                    <View style={styles.horariosOpcoes}>
                                        <View style={styles.viewHorarios}>
                                            <ScrollView>
                                            <TouchableOpacity style={styles.opcaoHorarios} onPress={() => {[setModalhorarios(false), setHorario("00:00 - 01:00")]}}><Text style={{color: "#9699aa"}}>00:00 - 01:00</Text></TouchableOpacity>
                                            <TouchableOpacity style={styles.opcaoHorarios} onPress={() => {[setModalhorarios(false), setHorario("01:00 - 02:00")]}}><Text style={{color: "#9699aa"}}>01:00 - 02:00</Text></TouchableOpacity>
                                            <TouchableOpacity style={styles.opcaoHorarios} onPress={() => {[setModalhorarios(false), setHorario("02:00 - 03:00")]}}><Text style={{color: "#9699aa"}}>02:00 - 03:00</Text></TouchableOpacity>
                                            <TouchableOpacity style={styles.opcaoHorarios} onPress={() => {[setModalhorarios(false), setHorario("03:00 - 04:00")]}}><Text style={{color: "#9699aa"}}>03:00 - 04:00</Text></TouchableOpacity>
                                            <TouchableOpacity style={styles.opcaoHorarios} onPress={() => {[setModalhorarios(false), setHorario("04:00 - 05:00")]}}><Text style={{color: "#9699aa"}}>04:00 - 05:00</Text></TouchableOpacity>
                                            <TouchableOpacity style={styles.opcaoHorarios} onPress={() => {[setModalhorarios(false), setHorario("05:00 - 06:00")]}}><Text style={{color: "#9699aa"}}>05:00 - 06:00</Text></TouchableOpacity>
                                            <TouchableOpacity style={styles.opcaoHorarios} onPress={() => {[setModalhorarios(false), setHorario("06:00 - 07:00")]}}><Text style={{color: "#9699aa"}}>06:00 - 07:00</Text></TouchableOpacity>
                                            <TouchableOpacity style={styles.opcaoHorarios} onPress={() => {[setModalhorarios(false), setHorario("07:00 - 08:00")]}}><Text style={{color: "#9699aa"}}>07:00 - 08:00</Text></TouchableOpacity>
                                            <TouchableOpacity style={styles.opcaoHorarios} onPress={() => {[setModalhorarios(false), setHorario("08:00 - 09:00")]}}><Text style={{color: "#9699aa"}}>08:00 - 09:00</Text></TouchableOpacity>
                                            <TouchableOpacity style={styles.opcaoHorarios} onPress={() => {[setModalhorarios(false), setHorario("09:00 - 10:00")]}}><Text style={{color: "#9699aa"}}>09:00 - 10:00</Text></TouchableOpacity>
                                            <TouchableOpacity style={styles.opcaoHorarios} onPress={() => {[setModalhorarios(false), setHorario("10:00 - 11:00")]}}><Text style={{color: "#9699aa"}}>10:00 - 11:00</Text></TouchableOpacity>
                                            <TouchableOpacity style={styles.opcaoHorarios} onPress={() => {[setModalhorarios(false), setHorario("11:00 - 12:00")]}}><Text style={{color: "#9699aa"}}>11:00 - 12:00</Text></TouchableOpacity>
                                            <TouchableOpacity style={styles.opcaoHorarios} onPress={() => {[setModalhorarios(false), setHorario("12:00 - 13:00")]}}><Text style={{color: "#9699aa"}}>12:00 - 13:00</Text></TouchableOpacity>
                                            <TouchableOpacity style={styles.opcaoHorarios} onPress={() => {[setModalhorarios(false), setHorario("13:00 - 14:00")]}}><Text style={{color: "#9699aa"}}>13:00 - 14:00</Text></TouchableOpacity>
                                            <TouchableOpacity style={styles.opcaoHorarios} onPress={() => {[setModalhorarios(false), setHorario("14:00 - 15:00")]}}><Text style={{color: "#9699aa"}}>14:00 - 15:00</Text></TouchableOpacity>
                                            <TouchableOpacity style={styles.opcaoHorarios} onPress={() => {[setModalhorarios(false), setHorario("15:00 - 16:00")]}}><Text style={{color: "#9699aa"}}>15:00 - 16:00</Text></TouchableOpacity>
                                            <TouchableOpacity style={styles.opcaoHorarios} onPress={() => {[setModalhorarios(false), setHorario("16:00 - 17:00")]}}><Text style={{color: "#9699aa"}}>16:00 - 17:00</Text></TouchableOpacity>
                                            <TouchableOpacity style={styles.opcaoHorarios} onPress={() => {[setModalhorarios(false), setHorario("17:00 - 18:00")]}}><Text style={{color: "#9699aa"}}>17:00 - 18:00</Text></TouchableOpacity>
                                            <TouchableOpacity style={styles.opcaoHorarios} onPress={() => {[setModalhorarios(false), setHorario("18:00 - 19:00")]}}><Text style={{color: "#9699aa"}}>18:00 - 19:00</Text></TouchableOpacity>
                                            <TouchableOpacity style={styles.opcaoHorarios} onPress={() => {[setModalhorarios(false), setHorario("19:00 - 20:00")]}}><Text style={{color: "#9699aa"}}>19:00 - 20:00</Text></TouchableOpacity>
                                            <TouchableOpacity style={styles.opcaoHorarios} onPress={() => {[setModalhorarios(false), setHorario("20:00 - 21:00")]}}><Text style={{color: "#9699aa"}}>20:00 - 21:00</Text></TouchableOpacity>
                                            <TouchableOpacity style={styles.opcaoHorarios} onPress={() => {[setModalhorarios(false), setHorario("21:00 - 22:00")]}}><Text style={{color: "#9699aa"}}>21:00 - 22:00</Text></TouchableOpacity>
                                            <TouchableOpacity style={styles.opcaoHorarios} onPress={() => {[setModalhorarios(false), setHorario("22:00 - 23:00")]}}><Text style={{color: "#9699aa"}}>22:00 - 23:00</Text></TouchableOpacity>
                                            <TouchableOpacity style={styles.opcaoHorarios} onPress={() => {[setModalhorarios(false), setHorario("23:00 - 00:00")]}}><Text style={{color: "#9699aa"}}>23:00 - 00:00</Text></TouchableOpacity>
                                            </ScrollView>
                                        </View>
                                    </View>
                            </Modal>
                        </View>
                        <View style = {styles.viewFim}>
                            <Text style = {styles.textRecompensas}>DIFICULDADE</Text>
                                <TouchableOpacity style = {styles.horario} onPress={() => {setModaldificuldade(true)}}>
                                            <Text style={styles.txtHorario}>{LabelDificil}</Text>
                                </TouchableOpacity>
                                    <Modal 
                                        mostrarHorarios
                                        animationType="fade" 
                                        visible={modaldificuldade}
                                        onRequestClose={() => setModalhorarios(false)}
                                        transparent={true}>
                                            <View style={styles.dificuldadeOpcoes}>
                                            <View style={styles.viewDificuldade}>
                                                <TouchableOpacity style={styles.opcaoDificuldade} onPress={() => {[setModaldificuldade(false), setLabelDificil("FÁCIL")]}}><Text style={{color: "#9699aa"}}>FÁCIL</Text></TouchableOpacity>
                                                <TouchableOpacity style={styles.opcaoDificuldade} onPress={() => {[setModaldificuldade(false), setLabelDificil("MÉDIA")]}}><Text style={{color: "#9699aa"}}>MÉDIA</Text></TouchableOpacity>
                                                <TouchableOpacity style={styles.opcaoDificuldade} onPress={() => {[setModaldificuldade(false), setLabelDificil("DIFÍCIL")]}}><Text style={{color: "#9699aa"}}>DIFÍCIL</Text></TouchableOpacity>
                                            </View>
                                            </View>
                                    </Modal>
                        </View>
                    </View>
                    <View style = {styles.viewCategoria}>
                        <Text style = {styles.textCategoria}>CATEGORIA: {Categoria}</Text>
                        <View style = {styles.coluna1ComCategorias}>
                        <TouchableOpacity onPress={() => {setCategoria("ESPORTES")}}><View style = {[styles.viewComCategorias, {backgroundColor: '#c1fc9a',}]}>
                            <Text style={[styles.txtCategoria, {color: '#5da32e'}]}>ESPORTES</Text></View></TouchableOpacity>
                            <TouchableOpacity onPress={() => {setCategoria("DESAFIOS")}}><View style = {[styles.viewComCategorias, {backgroundColor: '#fd8080'}]}>
                            <Text style={[styles.txtCategoria,{color: '#bd2121'}]}>DESAFIOS</Text>
                            </View></TouchableOpacity>
                        </View>
                        <View style = {styles.coluna2ComCategorias}>
                        <TouchableOpacity onPress={() => {setCategoria("PESSOAIS")}}><View style = {[styles.viewComCategorias, {backgroundColor:  '#ffb685'}]}>
                            <Text style={[styles.txtCategoria, {color: '#e06c1f'}]}>PESSOAIS</Text></View></TouchableOpacity>
                            <TouchableOpacity onPress={() => {setCategoria("ESTUDOS")}}><View style = {[styles.viewComCategorias, {backgroundColor: '#90b9ff'}]}>
                            <Text style={[styles.txtCategoria, {color: '#3379f3'}]}>ESTUDOS</Text></View></TouchableOpacity>
                        </View>
                    </View>
                    <Pressable style = {styles.btnSalvar} onPress={novaTarefa}>
                            <Text style={styles.textSalvar}>Criar Tarefa</Text>
                        </Pressable>
                </View>
            </View>
        </View>
        </SafeAreaView>
    )
} 
const styles = StyleSheet.create({
    container:{
        //backgroundColor: "rgba(24, 24, 24, 0.6)",
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
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: '6.5%',
        marginLeft: '1%',
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
        marginTop: SCREEN_HEIGHT*0.02
    },
    viewData:{
        flexDirection: 'row',
    },
    calendario:{
        width: SCREEN_WIDTH*0.5
    },
    txtData:{
        color: "#9699aa",
        fontSize: SCREEN_WIDTH*0.035
    },
    inputNome:{
        height: SCREEN_HEIGHT*0.05,
        marginLeft: SCREEN_WIDTH*0.05,
        backgroundColor: 'transparent',
        paddingTop: SCREEN_HEIGHT*0.02,
        fontSize: 12,
        color: '#bcbfca',
        fontFamily: "Poppins",
        borderBottomWidth: 1,
        borderBottomColor: '#a7abb9',
    },
    inputEmail:{
        fontSize: 16,
        color: '#bcbfca',
        //backgroundColor: 'green'
    },
    calendarView:{
        marginTop: SCREEN_HEIGHT*0.015,
        fontSize: SCREEN_WIDTH*0.07,
        marginLeft: SCREEN_WIDTH*0.02,
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
    horario: {
        marginTop: SCREEN_HEIGHT*0.01,
        height: SCREEN_HEIGHT * 0.05,
        width: SCREEN_WIDTH * 0.275,
        backgroundColor: "#fff",
        borderColor: "#bcbfca",
        //borderLeftWidth: 1,
        //borderRightWidth: 1,
        borderBottomWidth: 1,
        //borderTopWidth: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    horariosOpcoes:{
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
        backgroundColor: "rgba(24,24,24,0.4)",
    },
    viewHorarios:{
        marginTop: SCREEN_HEIGHT*0.535,
        marginLeft: SCREEN_WIDTH*0.05,
        height: SCREEN_HEIGHT*0.3,
        width: SCREEN_WIDTH*0.3,
        backgroundColor: "#ebebeb"
    },
    dificuldadeOpcoes:{
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
        backgroundColor: "rgba(24,24,24,0.4)",
    },
    viewDificuldade:{
        marginTop: SCREEN_HEIGHT*0.535,
        marginLeft: SCREEN_WIDTH*0.5,
        width: SCREEN_WIDTH*0.3,
        alignItems: "center",
        backgroundColor: "#ebebeb"
    },
    opcaoHorarios:{
        alignItems: "center",
        justifyContent: "center",
        height: SCREEN_HEIGHT*0.05,
        width: SCREEN_WIDTH*0.3,
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: '#a7abb9'
    },
    opcaoDificuldade:{
        alignItems: "center",
        justifyContent: "center",
        height: SCREEN_HEIGHT*0.05,
        width: SCREEN_WIDTH*0.3,
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: '#a7abb9'
    },
    selectData:{
        //backgroundColor: "red",
        height: SCREEN_HEIGHT*0.04,
        width: SCREEN_WIDTH*0.75,
        marginLeft: SCREEN_WIDTH*0.05,
        marginTop: SCREEN_HEIGHT*0.015,
        paddingTop: SCREEN_HEIGHT*0.01,
        borderBottomWidth: 1,
        backgroundColor: 'transparent',
        fontSize: 12,
        color: '#bcbfca',
        borderBottomColor: '#a7abb9',
        fontFamily: "Poppins"
    },
    txtHorario: {
        color: "#8f9197",
    },
    viewInicio:{
        //backgroundColor: "#000",
        height: SCREEN_HEIGHT*0.03,
        width: SCREEN_WIDTH * 0.275,
    },
    TextInicio:{
        color: "#9699aa",
        marginLeft: SCREEN_WIDTH*0.03
    },
    viewFim:{
        //backgroundColor: '#fff',
        height: SCREEN_HEIGHT*0.03,
        width: 100,
        marginLeft: SCREEN_WIDTH*0.2,
        alignItems: 'center',
    },
    TextFim:{
        color: "#9699aa",        
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
        marginLeft: SCREEN_WIDTH*0.015
    },
    sliderRecompensas:{
        height: SCREEN_HEIGHT*0.05,
        //backgroundColor: "red",
        marginTop:SCREEN_HEIGHT*0.01
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
        marginTop: SCREEN_HEIGHT*0.02
    },
    coluna1ComCategorias:{
        marginTop: SCREEN_HEIGHT*0.01,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    coluna2ComCategorias:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewComCategorias:{
        marginTop: SCREEN_HEIGHT*0.015,
        height: SCREEN_HEIGHT*0.06,
        width: SCREEN_WIDTH*0.435,
        //backgroundColor: 'green',
        borderRadius: 12,
        justifyContent: 'center'

    },
    btnSalvar:{
        backgroundColor: "#3a54c9",
        borderRadius: 30,
        padding: 10, 
        marginTop: SCREEN_HEIGHT*0.1,
        height: SCREEN_HEIGHT*0.1,
        width: SCREEN_WIDTH*0.8,
        alignSelf: 'center',
        justifyContent: 'center',
        fontFamily: "Poppins"
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