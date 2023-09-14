import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {

    const getItem = async (key) => {
        try{
            const passwords = await AsyncStorage.getItem(key);
            return JSON.parse(passwords) || [];

        }catch(error){
            console.log("Erro ao buscar", error)
            return [];
        }
    }

    const saveItem = async (key) => {
        try{
            let passwords = await getItem(key);

            passwords.push(value)

            await AsyncStorage.setItem(key, JSON.stringify(passwords))

        }catch(error){
            console.log("ERRO AO SALVAR", error)
        }
    }

    const removeItem = async (key, item) => {
        try{
            let passwords = await getItem(key);

            let myPasswords = passwords.filter((password) =>{
                return (password !== item)
            })
            await AsyncStorage.setItem(key, JSON.stringify(myPasswords))
            return myPasswords;
            
        }catch(error){
            console.log("ERRO AO DELETAR", error)
        }
    }
    return{
        getItem,
        saveItem,
        removeItem,
    }
}

export default useStorage;