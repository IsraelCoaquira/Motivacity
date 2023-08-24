import * as React from 'react';
import { Text, View, Button, Alert, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

function TelaTarefas() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lista de tarefas</Text>
      <Button 
        title="+"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      
    </View>
  );
}

function TelaProgresso() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tela de progresso</Text>
    </View>
  );
}


function TelaJogo() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Jogo de cidade</Text>
    </View>
  );
}



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ tabBarActiveTintColor: 'blue', tabBarInactiveTintColor: 'gray', tabBarShowLabel: false}}>
        <Tab.Screen name="Tarefas" component={TelaTarefas} options={{tabBarIcon: ({ size, color }) => <FontAwesome5 name="tasks" size={size} color={color}/>}}/>
        <Tab.Screen name="Progresso" component={TelaProgresso} options={{tabBarIcon: ({ size, color }) => <FontAwesome name="calendar" size={size} color={color}/>}} />
        <Tab.Screen name="Cidade" component={TelaJogo} options={{tabBarIcon: ({ size, color }) => <FontAwesome5 name="building" size={size} color={color}/>}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
