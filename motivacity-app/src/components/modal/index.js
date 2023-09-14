import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView } from "react-native";
import useStorage from "../../hooks/useStorage";
import { MMKV } from "react-native-mmkv";


export function ModalAddTarefa({fecharModal}){
    const { saveItem } = useStorage();
    const { nomeTarefa, setNomeTarefa} = useState()
    const { prazoTarefa, setPrazoTarefa} = useState()
    const { descTarefa, setDescTarefa} = useState()
    
    function salvarTarefa(){
        storage.set('user', JSON.stringify((nomeTarefa, prazoTarefa, descTarefa)));
    }
    return(
        <View style = {styles.container}> 
        <KeyboardAvoidingView>
            <View style = {styles.Quadradinho}>
                <Text style = {styles.Titulo}>NOVA TAREFA</Text>
                <TextInput style = {styles.Input} placeholder="Nome da tarefa" onChangeText={setNomeTarefa}></TextInput>
                <TextInput style = {styles.Input} placeholder="Prazo para tarefa" onChangeText={setNomeTarefa}></TextInput>
                <TextInput style = {styles.Input} placeholder="Descrição tarefa" onChangeText={setNomeTarefa}></TextInput>

                <View style = {styles.btnsArea}>
                    <TouchableOpacity style={styles.btn} onPress={fecharModal}>
                        <Text>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, styles.btnSalvar]} onPress={{salvarTarefa, fecharModal}}>
                        <Text style={styles.textSalvar}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </KeyboardAvoidingView>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        flex: 1,
        alialignSelf: 'center',
        justifyContent: 'center',
    },
    Quadradinho:{
        borderRadius: 32,
        backgroundColor: "#FFF",
        marginBottom: "0%",
        marginTop:"0%",
        marginHorizontal: '5%',
        //alignItems: 'center',
        justifyContent: 'center',
    },
    Titulo:{
        fontSize: 30,
        fontWeight: 'bold',
        color: "#af3131",
        marginBottom: "8%",
        alignSelf: 'center'
    },
    text:{
        fontSize: 14,
        marginLeft: "10%",
        marginBottom: "2%",
        color: "#000"
    },
    Input:{
        marginBottom: "4%",
        alignSelf: 'center',
        backgroundColor: "#FFF",
        width: "84%",
        height: "9%",
        borderWidth: 1,
        borderRadius: 12,
        borderColor: "#af3131",
        padding: 10
    },
    btn:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FFF",
        //marginTop: 14,
        //marginBottom: 14,
        padding: 0
    },
    btnSalvar:{
        backgroundColor: "#8f2b2b",
        borderRadius: 16,
    },
    textSalvar:{
        color: "#FFF",
        fontWeight: 'bold',
        fontSize: 15
    },
    btnsArea:{
        flexDirection: 'row',
        alignSelf: 'center',
        width: "84%",
        height: "13%",
        justifyContent: 'space-between',
        marginTop: "05%",
        //backgroundColor: "#000"
    },
})
