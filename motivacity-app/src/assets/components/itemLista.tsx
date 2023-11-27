import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants/Screen";

export function itemLista({ data, route }: any){
    return(
        <View style={[styles.itemsTarefas,{backgroundColor: route.params.itemsBackground, borderBottomColor: route.params.itemBordatxt, borderLeftColor: route.params.itemBordatxt,}]}>
            <Text style={[styles.txtTarefa, {color: route.params.itemcolorTxt}]}>Vencer campeonato de Vôlei       Difícil</Text>
                <View style={{flexDirection: 'row'}}>
                    <View>
                        <Text style={[styles.txtSubTarefa, {color: route.params.itemcolorSubTxt}]}>18/10/2023</Text>
                        <Text style={[styles.txtSubTarefa, {color: route.params.itemcolorSubTxt}]}>20h00-21h00</Text>
                    </View>
                    <TouchableOpacity style = {[styles.btnConcluir, {backgroundColor: route.params.btnConcluirbg}]}>
                        <Text style={{color: '#fff', fontFamily: 'Poppins-Bold'}}>
                            Concluir
                        </Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
}
const styles = StyleSheet.create({
tituloTarefas:{
    fontSize: SCREEN_HEIGHT*0.045,
    textAlign: 'center',
    marginTop: SCREEN_HEIGHT*0.02,
    fontFamily: 'Poppins'
  },
  itemsTarefas:{
    marginBottom: SCREEN_HEIGHT*0.015,
    alignSelf: 'center',
    height: SCREEN_HEIGHT*0.175,
    width: SCREEN_WIDTH*0.9,
    borderLeftWidth: 5,
    borderBottomWidth: 5,
    borderRadius: 10
  },
  btnAddTarefas:{
    height: SCREEN_HEIGHT*0.075,
    borderRadius: SCREEN_WIDTH*0.1,
    width: SCREEN_WIDTH*0.275,
    marginTop: SCREEN_HEIGHT*0.345,
    marginLeft: SCREEN_WIDTH*0.545,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTarefa:{
    fontFamily: 'Poppins-Bold',
    marginLeft: SCREEN_WIDTH*0.04,
    marginTop: SCREEN_HEIGHT*0.0125,
    fontSize: SCREEN_HEIGHT*0.0225,
    paddingBottom: SCREEN_HEIGHT*0.01
  },
  txtSubTarefa:{
    fontFamily: 'Poppins',
    marginLeft: SCREEN_WIDTH*0.04,
    fontSize: SCREEN_HEIGHT*0.0175
  },
  txtAddTarefas:{
    fontSize: SCREEN_HEIGHT*0.0175,
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  btnConcluir:{
    alignItems: "center",
    justifyContent: 'center',
    width: SCREEN_WIDTH*0.225,
    borderRadius: SCREEN_WIDTH*0.035,
    marginLeft: SCREEN_WIDTH*0.4
  }
});