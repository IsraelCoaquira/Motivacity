import { createStackNavigator } from "@react-navigation/stack";

import { TelaListaTarefas } from "../screens/TelaListaTarefas";

const Stack = createStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen 
                name="ListaTarefas" 
                component={TelaListaTarefas}
            />
        </Stack.Navigator>
    )
}