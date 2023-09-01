import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Telajogo } from '../screens/Telajogo'
import { Telatarefas } from "../screens/Telatarefas";
import { Telaprogresso } from "../screens/Telaprogresso";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const { Navigator, Screen } = createBottomTabNavigator();

export function Routes(){
    return(
        <NavigationContainer>
            <Navigator>
                <Screen
                    name="Telajogo"
                    component={Telajogo}
                    options={{
                        tabBarIcon: ({ size, color}) => <FontAwesome5 name="building" size={size} color={color}/>}}/>
                <Screen
                    name="Telatarefas"
                    component={Telatarefas}
                    options={{tabBarIcon: ({ size, color }) => <FontAwesome5 name="tasks" size={size} color={color}/>}}/>
                <Screen
                    name="Telaprogresso"
                    component={Telaprogresso}
                    options={{tabBarIcon: ({ size, color }) => <FontAwesome name="calendar" size={size} color={color}/>}} />
            </Navigator>
        </NavigationContainer>
    )
}