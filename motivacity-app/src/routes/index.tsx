import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Telajogo } from '../screens/Telajogo'
import { Telatarefas } from "../screens/Telatarefas";
import {Telaprogresso} from "../screens/Telaprogresso";
import { AddTarefas } from "../assets/modal/index";
import { Modaloja } from "../screens/Telaloja";
import { TelaTerrenos } from "../screens/TelaTerrenos";
import { TelaListaTarefas } from "../screens/TelaListaTarefas";
import { ItensJogo } from "../screens/telaGerenciador";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome5, Entypo, Feather } from "@expo/vector-icons";
import { TouchableOpacity, Text, View, StyleSheet, SafeAreaView, StatusBar} from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Screen";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const MatTab = createMaterialBottomTabNavigator();

export function Routes(){

    return(
        <NavigationContainer> 
            <Drawer.Navigator screenOptions={{headerShown: false, }}>
                <Drawer.Screen name="Gerenciador" component={AppStack}/>
                <Drawer.Screen name="Jogo" component={TabsJogo}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
    function AppStack() {
        return(
        <Stack.Navigator screenOptions={{headerShown:false}} >
                <Stack.Screen name="Inicial" component={Telatarefas}/>
                <Stack.Screen name="Agenda" component={Telaprogresso}/>
                <Stack.Screen name="ListaTarefas" component={TelaListaTarefas}/>
                <Stack.Screen name="AddTarefas" component={AddTarefas}/>
        </Stack.Navigator>
        )
    }
    function TabsJogo({navigation}: any) {
        return(
            <SafeAreaView  style={{
                height: '100%',
                width:  '100%',
                paddingTop: StatusBar.currentHeight,
                //backgroundColor: "#ff0000"
            }}>
                <View style={{height: '100%', width: '100%',}}>
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
                        tabBarInactiveTintColor: '#3b0909',
                        tabBarActiveBackgroundColor: '#fff7e7',
                        tabBarInactiveBackgroundColor: '#fff7e7'}}/>
                <Tab.Screen
                    name="Cidade"
                    component={Telajogo}
                    options={{
                        tabBarIcon: ({ color, size }) => 
                        <FontAwesome5 name="building" color={color} size={size}/>,
                        tabBarActiveTintColor: '#ffa200',
                        tabBarInactiveTintColor: '#522507',
                        tabBarActiveBackgroundColor: '#fff7e7',
                        tabBarInactiveBackgroundColor: '#fff7e7'}} />
                <Tab.Screen
                    name="Terrenos"
                    component={TelaTerrenos}                    
                    options={{
                        tabBarIcon: ({ color, size }) => 
                        <Feather name="move" color={color} size={size}/>,
                        tabBarActiveTintColor: '#4c9400',
                        tabBarInactiveTintColor: '#142601',
                        tabBarActiveBackgroundColor: '#fff7e7',
                        tabBarInactiveBackgroundColor: '#fff7e7'}}/>
            </Tab.Navigator>
            <View style={styles.viewBotoes}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Feather name="menu" style = {styles.iconDrawer}/>
      </TouchableOpacity>
      <View style={styles.viewCoins}>
        <FontAwesome5 name="coins" style={styles.moneyIcon}/>
        <Text style={styles.text}>20 000</Text></View></View>
            </View>
            </SafeAreaView>
        );
}
const styles = StyleSheet.create({
    viewItens:{
        
    },
    viewBotoes:{
        flexDirection: 'row',
        alignItems: 'center',
        position:'absolute'
      },
    iconDrawer:{
        marginLeft: SCREEN_WIDTH*0.03,
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
        marginLeft:SCREEN_WIDTH*0.05,
        marginTop: SCREEN_HEIGHT*0.0075,
        borderWidth: 3,
        borderColor: '#c47c00',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
        //alignSelf: 'center',
      },
      moneyIcon:{
        fontSize: 20,
        color: '#c47c00',
        textAlignVertical: 'center'
      },
      text: {
        fontSize: 20,
        color: '#925d00',
      },
})
/**
 * /*<Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Início" component={Tabs}/>
                <Stack.Screen name="ListaTarefas" component={TelaListaTarefas}/>
            </Stack.Navigator>
            */
 
/**
 * function Tabs() {
        return(
            <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                
            }}>
                <Tab.Screen
                    name="Início"
                    component={Telatarefas}
                    options={{
                        tabBarIcon: ({ size, color,focused}) => 
                        <FontAwesome5 name="tasks" size={size} color={color}/>,
                        tabBarActiveTintColor: "#f92e2e",
                        tabBarInactiveTintColor: '#3b0909',
                        tabBarStyle: {
                            height: 60,
                            position: 'absolute',
                            bottom: 10,
                            right: 16,
                            left: 16,
                            borderRadius: 20,
                            backgroundColor: '#fff',
                        },tabBarLabelStyle:{
                            bottom: 8,
                            fontWeight: 'bold',
                            fontSize: 11,
                        }}}/>
                <Tab.Screen
                    name="Agenda"
                    component={Telaprogresso}
                    options={{
                        tabBarIcon: ({ size, color }) => 
                        <FontAwesome name="calendar" size={size} color={color}/>,
                        tabBarActiveTintColor: '#ffa200',
                        tabBarInactiveTintColor: '#522507',
                        tabBarStyle: {
                            height: 60,
                            position: 'absolute',
                            bottom: 10,
                            right: 16,
                            left: 16,
                            borderRadius: 16,
                            backgroundColor: '#fff', 
                        },tabBarLabelStyle:{
                            bottom: 8,
                            fontWeight: 'bold',
                            fontSize: 11
                        }}} />
                <Tab.Screen
                    name="Jogo"
                    component={Telajogo}
                    options={{
                        tabBarIcon: ({ size, color}) => 
                        <FontAwesome5 name="building" size={size} color={color}/>,
                        tabBarActiveTintColor: '#4c9400',
                        tabBarInactiveTintColor: '#142601',
                        tabBarStyle: {
                            height: 60,
                            position: 'absolute',
                            bottom: 10,
                            right: 16,
                            left: 16,
                            borderRadius: 16,
                            backgroundColor: '#fff', 
                        },tabBarLabelStyle:{
                            bottom: 8,
                            fontWeight: 'bold',
                            fontSize: 11
                        }}}/>
            </Tab.Navigator>
        );
}
 */
/*
    <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true
            }}>
                <Tab.Screen
                    name="Início"
                    component={Stacks}
                    options={{
                        tabBarIcon: ({ size, color,focused}) => 
                        <FontAwesome5 name="tasks" size={size} color={color}/>,
                        tabBarActiveTintColor: "#f92e2e",
                        tabBarInactiveTintColor: '#3b0909',
                        tabBarStyle: {
                            height: 60,
                            position: 'absolute',
                            bottom: 10,
                            right: 16,
                            left: 16,
                            borderRadius: 20,
                            backgroundColor: '#fff',
                        },tabBarLabelStyle:{
                            bottom: 8,
                            fontWeight: 'bold',
                            fontSize: 11,
                        }}}/>
                <Tab.Screen
                    name="Agenda"
                    component={Telaprogresso}
                    options={{
                        tabBarIcon: ({ size, color }) => 
                        <FontAwesome name="calendar" size={size} color={color}/>,
                        tabBarActiveTintColor: '#ffa200',
                        tabBarInactiveTintColor: '#522507',
                        tabBarStyle: {
                            height: 60,
                            position: 'absolute',
                            bottom: 10,
                            right: 16,
                            left: 16,
                            borderRadius: 16,
                            backgroundColor: '#fff', 
                        },tabBarLabelStyle:{
                            bottom: 8,
                            fontWeight: 'bold',
                            fontSize: 11
                        }}} />
                <Tab.Screen
                    name="Jogo"
                    component={Telajogo}
                    options={{
                        tabBarIcon: ({ size, color}) => 
                        <FontAwesome5 name="building" size={size} color={color}/>,
                        tabBarActiveTintColor: '#4c9400',
                        tabBarInactiveTintColor: '#142601',
                        tabBarStyle: {
                            height: 60,
                            position: 'absolute',
                            bottom: 10,
                            right: 16,
                            left: 16,
                            borderRadius: 16,
                            backgroundColor: '#fff', 
                        },tabBarLabelStyle:{
                            bottom: 8,
                            fontWeight: 'bold',
                            fontSize: 11
                        }}}/>
            </Tab.Navigator>
            */