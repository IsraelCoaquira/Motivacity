import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, Button, Alert, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Routes } from './src/routes';
import { Telatarefas } from './src/screens/Telatarefas';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Routes></Routes>
  );
}

