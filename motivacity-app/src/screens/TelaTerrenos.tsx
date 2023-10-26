import { View, Text, StyleSheet, StatusBar, Image, ScrollView, TouchableOpacity } from "react-native";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../constants/Screen";
import { FontAwesome5, Entypo, Feather } from "@expo/vector-icons";

export function TelaTerrenos(){
    return(
        <View style={styles.container}>
            <Text style={styles.Titulo}>Terrenos</Text>
            <View style={styles.blocoImagens}>
                <Image style={styles.imgterrenos} source={require("../assets/images/cidadeGelo.png")}/>
                <Text style={styles.txtTerreno}>Terreno de gelo</Text>
                <TouchableOpacity style={styles.btnComprar}>
                    <Text style={styles.txtComprar}>COMPRAR</Text>
                    <View style={styles.viewPreco}>
                        <FontAwesome5 style={styles.coins} name="coins"/>
                        <Text style={styles.txtDinheiro}>2000</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
} 
    const styles = StyleSheet.create({
        container: {
            backgroundColor:"#C7F9FA",
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT,
            alignItems: 'center',
            paddingTop: StatusBar.currentHeight,
        },
        Titulo:{
            marginTop: SCREEN_HEIGHT*0.04,
            alignSelf:"center",
            fontSize: SCREEN_WIDTH*0.07,
            color: "#0A9EFA",
            fontFamily: 'Poppins-Bold'
        },
        blocoImagens:{
            marginTop: SCREEN_HEIGHT*0.05, 
            height: SCREEN_HEIGHT*0.7,
            width: SCREEN_WIDTH*0.9,
            alignItems: 'center',
            justifyContent: 'center'
        },
        imgterrenos:{
            height: SCREEN_HEIGHT*0.3,
            width: SCREEN_WIDTH*0.725,
        },
        txtTerreno:{
            marginTop: SCREEN_HEIGHT*0.01,
            fontFamily: 'Poppins',
            color: "#0A9EFA",
            fontSize: SCREEN_WIDTH*0.05,
        },
        btnComprar:{
            marginTop: SCREEN_HEIGHT*0.04,
            height: SCREEN_HEIGHT*0.11,
            width: SCREEN_WIDTH*0.5,
            backgroundColor: "#496DFA",
            borderRadius: SCREEN_WIDTH*0.05,
            alignItems: "center",
            justifyContent: "center",
        },
        viewPreco:{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 20,
            marginTop: SCREEN_HEIGHT*0.065
        },
        txtComprar: {
            position: 'absolute',
            color: "#fff",
            fontFamily: "Poppins-Bold",
            fontSize: SCREEN_WIDTH*0.06
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
