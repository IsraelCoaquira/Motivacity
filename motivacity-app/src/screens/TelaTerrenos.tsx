import { View, Text, StyleSheet, StatusBar, Image, ScrollView, TouchableOpacity } from "react-native";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../constants/Screen";
import { FontAwesome5, Entypo, Feather } from "@expo/vector-icons";
import { useState } from "react";
import { Telajogo } from "./Telajogo";


    export function TelaTerrenos(){    
        const [BgCidade, setBgCidade] = useState(require('../assets/images/Bg_Inverno.jpg'))
        const [selecionado, setSelecionado] = useState("classico");
        const [bgBtnClassico, setBgBtnClassico] = useState("#c6fdc6");
        const [txtBtnClassico, setTxtBtnClassico] = useState("#62da62");
        const [bgBtnInverno, setBgBtnInverno] = useState("#73bfee");
        const [txtBtnInverno, setTxtBtnInverno] = useState("#e1fdfd");
        const [classicoSelecionado, setClassicoSelecionado] = useState("SELECIONADO");
        const [InvernoSelecionado, setInvernoSelecionado] = useState("SELECIONAR")

        return( 
            <ScrollView style={styles.container} horizontal pagingEnabled>
            <View style={[styles.container, {backgroundColor:"#c6fdc6", }]}>
                <Text style={[styles.Titulo,{color: "#28a328",}]}>Terrenos</Text>
                <View style={styles.blocoImagens}>
                    <Image style={styles.imgterrenos} source={require("../assets/images/cidadeMapa.png")}/>
                    <Text style={[styles.txtTerreno,{color: "#28a328",}]}>Terreno clássico</Text>
                    <TouchableOpacity onPress={()=>{setSelecionado("classico"),  
                                                    setBgBtnClassico("#c6fdc6"), 
                                                    setTxtBtnClassico("#62da62"),
                                                    setBgBtnInverno("#73bfee"),
                                                    setTxtBtnInverno("#e1fdfd"),
                                                    setClassicoSelecionado("SELECIONADO"),
                                                    setInvernoSelecionado("SELECIONAR"),
                                                    setBgCidade(require('../assets/images/BgCidade2.png')),
                                                    console.log(selecionado)}} 
                                    style={[styles.btnComprar, {backgroundColor: bgBtnClassico}]}>
                        <Text style={[styles.txtComprar, {color: txtBtnClassico,}]}>{classicoSelecionado}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.container, {backgroundColor:"#c1ffff",}]}>
                <Text style={[styles.Titulo,{color: "#0A9EFA",}]}>Terrenos</Text>
                <View style={styles.blocoImagens}>
                    <Image style={styles.imgterrenos} source={require("../assets/images/cidadeGelo.png")}/>
                    <Text style={[styles.txtTerreno,{color: "#0A9EFA",}]}>Terreno de inverno</Text>
                    <TouchableOpacity onPress={()=>{setSelecionado("inverno"), 
                                                    setBgBtnClassico("#62da62"), 
                                                    setTxtBtnClassico("#dbffdb"),
                                                    setBgBtnInverno("#c1ffff"),
                                                    setTxtBtnInverno("#73bfee"),
                                                    setClassicoSelecionado("SELECIONAR"),
                                                    setInvernoSelecionado("SELECIONADO"),
                                                    setBgCidade(require('../assets/images/Bg_Inverno.jpg')),
                                                    console.log(selecionado)}} 
                                    style={[styles.btnComprar, {backgroundColor: bgBtnInverno,}]}>
                        <Text style={[styles.txtComprar, {color: txtBtnInverno}]}>{InvernoSelecionado}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.container, {backgroundColor:"rgba(255,205,139,0.6)",}]}>
                <Text style={[styles.Titulo, {color: "#a7640e",}]}>Terrenos</Text>
                <View style={styles.blocoImagens}>
                    <Image style={styles.imgterrenos} source={require("../assets/images/cidadeDeserto2.png")}/>
                    <Text style={[styles.txtTerreno, {color: "#a7640e",}]}>Terreno de deserto{'\n'} (Bloqueado)</Text>
                    <TouchableOpacity style={[styles.btnComprar, {backgroundColor: "#e49a39",}]}>
                        <Text style={[styles.txtComprar, {color: "#fff"}]}>COMPRAR</Text>
                        <View style={[styles.viewPreco]}>
                            <FontAwesome5 style={styles.coins} name="coins"/>
                            <Text style={styles.txtDinheiro}>8 000</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        );
    } 
    const styles = StyleSheet.create({
        container: {
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT,
        },
        Titulo:{
            marginTop: SCREEN_HEIGHT*0.15,
            alignSelf:"center",
            fontSize: SCREEN_WIDTH*0.08,
            //backgroundColor: "#fff",
            fontFamily: 'Poppins-Bold'
        },
        scrollTerrenos:{
            position: "absolute",
            backgroundColor: "#000",
            height: SCREEN_HEIGHT*0.6,
            marginTop: SCREEN_HEIGHT*0.225,
            marginLeft: SCREEN_WIDTH*0.13,
            width: SCREEN_WIDTH*0.75,
        },
        blocoImagens:{ 
            //backgroundColor:  "#fff",
            marginTop: SCREEN_HEIGHT*0.035,
            height: SCREEN_HEIGHT*0.55,
            width: SCREEN_WIDTH*0.75,
            alignItems: 'center',
            alignSelf: "center",
            justifyContent: 'center'
        },
        imgterrenos:{
            height: SCREEN_HEIGHT*0.3,
            width: SCREEN_WIDTH*0.725,
            alignSelf: "center"
        },
        txtTerreno:{
            marginTop: SCREEN_HEIGHT*0.025,
            fontFamily: 'Poppins',
            alignSelf: "center",
            textAlign: 'center',
            fontSize: SCREEN_WIDTH*0.05,
        },
        btnComprar:{
            marginTop: SCREEN_HEIGHT*0.06,
            height: SCREEN_HEIGHT*0.11,
            width: SCREEN_WIDTH*0.5,
            borderRadius: SCREEN_WIDTH*0.05,
            alignItems: "center",
            justifyContent: "center",
        },
        viewPreco:{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 20,
        },
        txtComprar: {
            fontFamily: "Poppins-Bold",
            fontSize: SCREEN_WIDTH*0.06,
        },
        txtDinheiro: {
            color: "#fff",
            fontSize: SCREEN_WIDTH*0.04,
            fontFamily: 'Poppins'
        },
        coins:{
            color: "#fff",
            fontSize: SCREEN_WIDTH*0.04,
        }
    })
