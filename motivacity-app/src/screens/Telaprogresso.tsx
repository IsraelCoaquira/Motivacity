import React, {useState} from 'react';
import {View, TouchableOpacity, Text, Modal, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
import { ModalAddTarefa } from "../assets/modal";

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};
/*const [modalVisible, setModalVisible] = useState(false)
function abriraddTarefas(){
  setModalVisible(true)
}*/
const Schedule: React.FC = () => {
  const [items, setItems] = useState({});

  const [modalVisible, setModalVisible] = useState(false);

  const abriraddTarefas = () =>{setModalVisible(true)}
  

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
                //Nome da atividade no card
              name: 'Tarefa para: ' + strTime + ' nº' + (j+1),
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>{item.name}</Text>
              <Avatar.Text label="40%" />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
        <View style = {styles.viewCabeçalho}>
        <View style = {styles.viewTitulo}>
        <View><Text style={styles.tituloCabecalho}>Progressos</Text>
        <Text style={styles.subTituloCabecalho}>Progressos de suas tarefas</Text>
        </View>
        <TouchableOpacity style={styles.btnAddTarefas} onPress={abriraddTarefas}><Text style={styles.textBtnAdd}>+Add Tarefas</Text></TouchableOpacity>
        <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalAddTarefa  fecharModal = {() => setModalVisible(false)}/>
        </Modal>
        </View>
      </View>

      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={'2023-09-16'}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    viewCabeçalho: {
      height: "20%",
      width: "100%",
      backgroundColor: "#fff",
      justifyContent: 'flex-end'
    },
    viewTitulo: {
      marginHorizontal: 16,
      marginBottom: 10,
      //backgroundColor: "green",
      flexDirection: 'row',
      height:52
    },
    tituloCabecalho: {
      fontSize: 24,
      color: '#203864',
      fontWeight: 'bold'
    },
    subTituloCabecalho: {
      fontSize: 12,
      color: '#203864',
      //backgroundColor: "yellow"
    },
    btnAddTarefas:{
      borderRadius: 24,
      paddingHorizontal: 14,
      justifyContent: 'center',
      backgroundColor: "#5b9bd5",
      alignItems: 'center',
      marginLeft: 80,
      height: '100%'
    },
    textBtnAdd: {
      fontSize: 16,
      fontWeight: 'bold',
      color: "#203864"
    },
    scrollView: {
      backgroundColor: '#fff',
      marginHorizontal: 0,
    },
    text: {
      fontSize: 20,
    },
  });
export default Schedule;