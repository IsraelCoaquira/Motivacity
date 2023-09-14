import { View, Text, TextInput, SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native";
import React from 'react'

export function Telajogo(){
    return (
        <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <View style= {{
            height: 120,
            position: 'absolute',
            bottom: 500,
            right: 32,
            left: 32,
            borderRadius: 16,
            backgroundColor: 'red'
        }}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: '#679c43',
    marginHorizontal: 0,
  },
  text: {
    fontSize: 20,
  },
});