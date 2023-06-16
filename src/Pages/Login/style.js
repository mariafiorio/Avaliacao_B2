import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    
    },
    inputs: {
        padding: 10,
    },
    inputEmail: {
        height: 30,
        padding: 5,
        color: 'black',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 4,
        marginBottom: 6,
    },
    inputSenha: {
        height: 30,
        padding: 5,
        color: 'black',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 4,
    },
    viewConfirmar:{
        padding: 5,
    },
    btnConfirmar:{
        height: 30,
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 4,
        color: 'black',
        fontWeight: 'bold',
    },
    viewLink:{
        flexDirection: 'row',
        padding: 5,
    },
    link:{
        color: 'black',
        padding: 5
    },
    titulo:{
        color: 'black',
        padding: 5
    },
    viewTitulo:{
        flexDirection: 'row',
        padding: 5
    }
})
export default styles;
