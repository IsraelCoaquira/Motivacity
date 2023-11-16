import { View, Text, StyleSheet, StatusBar, Image, ScrollView, TouchableOpacity } from "react-native";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../constants/Screen";
import { FontAwesome5, Entypo, Feather } from "@expo/vector-icons";

export function TelaTerrenos(){
    return(
        <ScrollView style={styles.container} horizontal pagingEnabled>
        <View style={[styles.container, {backgroundColor:"#c6fdc6",}]}>
            <Text style={[styles.Titulo,{color: "#28a328",}]}>Terrenos</Text>
            <View style={styles.blocoImagens}>
                <Image style={styles.imgterrenos} source={require("../assets/images/cidadeMapa.png")}/>
                <Text style={[styles.txtTerreno,{color: "#28a328",}]}>Terreno de cidade</Text>
                <TouchableOpacity style={[styles.btnComprar, {backgroundColor: "#3bcc3b",}]}>
                    <Text style={styles.txtComprar}>COMPRAR</Text>
                    <View style={styles.viewPreco}>
                        <FontAwesome5 style={styles.coins} name="coins"/>
                        <Text style={styles.txtDinheiro}>2 000</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        <View style={[styles.container, {backgroundColor:"#ffcd8b",}]}>
            <Text style={[styles.Titulo, {color: "#a7640e",}]}>Terrenos</Text>
            <View style={styles.blocoImagens}>
                <Image style={styles.imgterrenos} source={require("../assets/images/cidadeDeserto.png")}/>
                <Text style={[styles.txtTerreno, {color: "#a7640e",}]}>Terreno de deserto</Text>
                <TouchableOpacity style={[styles.btnComprar, {backgroundColor: "#b86c09",}]}>
                    <Text style={styles.txtComprar}>COMPRAR</Text>
                    <View style={styles.viewPreco}>
                        <FontAwesome5 style={styles.coins} name="coins"/>
                        <Text style={styles.txtDinheiro}>2 000</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        <View style={[styles.container, {backgroundColor:"#c1ffff",}]}>
            <Text style={[styles.Titulo,{color: "#0A9EFA",}]}>Terrenos</Text>
            <View style={styles.blocoImagens}>
                <Image style={styles.imgterrenos} source={require("../assets/images/cidadeGelo.png")}/>
                <Text style={[styles.txtTerreno,{color: "#0A9EFA",}]}>Terreno de gelo</Text>
                <TouchableOpacity style={[styles.btnComprar, {backgroundColor: "#4fa8e0",}]}>
                    <Text style={styles.txtComprar}>COMPRAR</Text>
                    <View style={styles.viewPreco}>
                        <FontAwesome5 style={styles.coins} name="coins"/>
                        <Text style={styles.txtDinheiro}>2000</Text>
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
            fontSize: SCREEN_WIDTH*0.05,
        },
        btnComprar:{
            marginTop: SCREEN_HEIGHT*0.06,
            height: SCREEN_HEIGHT*0.11,
            width: SCREEN_WIDTH*0.5,
            borderRadius: SCREEN_WIDTH*0.05,
            alignItems: "center",
            //justifyContent: "center",
        },
        viewPreco:{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 20,
            marginTop: SCREEN_HEIGHT*0.06
        },
        txtComprar: {
            position: 'absolute',
            color: "#fff",
            fontFamily: "Poppins-Bold",
            fontSize: SCREEN_WIDTH*0.06,
            marginTop: SCREEN_HEIGHT*0.02
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
