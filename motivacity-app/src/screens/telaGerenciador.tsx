import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, StatusBar} from "react-native";
import { Feather, FontAwesome5, Entypo } from "@expo/vector-icons";
import React from "react";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../constants/Screen";
import { Telajogo } from "../screens/Telajogo";
import { Modaloja } from "../screens/Telaloja";
import { TelaTerrenos } from "../screens/TelaTerrenos";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

    const Tab = createBottomTabNavigator();

export function ItensJogo({navigation}: any) {
    
    return(
        <SafeAreaView  style={{
            height: '100%',
            width:  '100%',
            paddingTop: StatusBar.currentHeight,
            backgroundColor: "#ff0000"
        }}>
        <View style={styles.viewBotoes}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Feather name="menu" style = {styles.iconDrawer}/>
      </TouchableOpacity>
      <View style={styles.viewCoins}>
        <FontAwesome5 name="coins" style={styles.moneyIcon}/>
        <Text style={styles.text}>20 000</Text></View> 
      </View>
      <TabsJogo />
      </SafeAreaView>
    )
}
function TabsJogo() {
    return(
        <Tab.Navigator 
        initialRouteName = "Cidade"
        screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarStyle:{
                height: 70,
                position: 'absolute',
                //bottom: 10,
                //right: 16,
                //left: 16,
                //borderRadius: 20,
                backgroundColor: '#Fff',
            },
            tabBarLabelStyle:{
                bottom: 8,
                fontWeight: 'bold',
                fontSize: 11,
            },}}>
            <Tab.Screen
                name="Loja"
                component={Modaloja}
                options={{
                    tabBarIcon: ({ color, size }) => 
                    <Entypo name="shop" color={color} size={size}/>,
                    tabBarActiveTintColor: "#f92e2e",
                    tabBarInactiveTintColor: '#3b0909',}}/>
            <Tab.Screen
                name="Cidade"
                component={Telajogo}
                options={{
                    tabBarIcon: ({ color, size }) => 
                    <FontAwesome5 name="building" color={color} size={size}/>,
                    tabBarActiveTintColor: '#ffa200',
                    tabBarInactiveTintColor: '#522507',}} />
            <Tab.Screen
                name="Terrenos"
                component={TelaTerrenos}                    
                options={{
                    tabBarIcon: ({ color, size }) => 
                    <Feather name="move" color={color} size={size}/>,
                    tabBarActiveTintColor: '#4c9400',
                    tabBarInactiveTintColor: '#142601',}}/>
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    viewItens:{
        
    },
    viewBotoes:{
        flexDirection: 'row',
        alignItems: 'center',
      },
    iconDrawer:{
        marginLeft: SCREEN_WIDTH*0.06,
        marginTop: SCREEN_HEIGHT*0.025,
        fontSize: SCREEN_WIDTH*0.06,
        color: '#3a68ff',
        backgroundColor: '#85a1ff',
        borderWidth: 2,
        borderColor: '#3a68ff',
        textAlign: 'center',
        textAlignVertical: 'center',
        padding: 4,
        borderRadius: 10
      },
      viewCoins: {
        //backgroundColor: 'green',
        backgroundColor: '#ffd894',
        flexDirection: 'row',
        borderRadius:16,
        height:SCREEN_HEIGHT*0.055,
        width:SCREEN_WIDTH*0.375,
        marginTop: 20,
        marginLeft:SCREEN_WIDTH*0.05,
        borderWidth: 3,
        borderColor: '#c47c00',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
        //alignSelf: 'center',
      },
      moneyIcon:{
        fontSize: 20,
        color: '#c47c00'
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
        fontSize: 20,
        color: '#925d00',
      },
})