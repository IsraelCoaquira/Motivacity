import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Telajogo } from '../screens/Telajogo'
import { Telatarefas } from "../screens/Telatarefas";
import { Telaprogresso } from "../screens/Telaprogresso";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Animated, PlatformColor, View, Text, TouchableOpacity, ScrollView, Image, Dimensions } from "react-native";

const Tab = createBottomTabNavigator();


export function Routes(){

    return(
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true
            }}>
                <Tab.Screen
                    name="Tarefas"
                    component={Telatarefas}
                    options={{
                        tabBarIcon: ({ size, color }) => 
                        <FontAwesome5 name="tasks" size={size} color={color}/>,
                        tabBarActiveTintColor: "#f92e2e",
                        tabBarInactiveTintColor: '#3b0909',
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
                <Tab.Screen
                    name="Progresso"
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
                        tabBarActiveTintColor: '#142601',
                        tabBarInactiveTintColor: '#142601',
                        tabBarStyle: {
                            height: 60,
                            position: 'absolute',
                            bottom: 10,
                            right: 16,
                            left: 16,
                            borderRadius: 16,
                            backgroundColor: '#446f28', 
                        },tabBarLabelStyle:{
                            bottom: 8,
                            fontWeight: 'bold',
                            fontSize: 11
                        }}}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}