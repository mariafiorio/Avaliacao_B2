import { Link } from "@react-navigation/native";
import { TouchableOpacity, Image, StyleSheet, Text, View, Dimensions} from "react-native";


export default function CardRPG(props){
    return (
        <View style={styles.container}>
         <View style ={styles.viewImg}>
            <Image style={styles.image} source=
            {{uri:  props.cartao.imgUrl}}/>
            </View>
            <View style={styles.viewData}>
            <Text style={styles.titulo}>{props.cartao.titulo}</Text>
            <Text style={styles.ataque}> Ataque:  {props.cartao.ataque}</Text>
            <Text style={styles.defesa}> Defesa:  {props.cartao.defesa}</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.btnText}>Trocar</Text>
            </TouchableOpacity>
        </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'pink',
        padding: 10,
        flexDirection: "row",
        borderRadius:20,
        margin: 5,
        height: 180,
        width: '95%',
     
    },
    image: {
        height: '100%'

    },

    viewImg: {
        padding: 10,
        width: '30%',
        height: '100%',

      
    },
    viewData:{
        padding: 10,
        width: '70%',
    },
    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10
    },
    ataque : {
        marginBottom: 10

    },
    defesa : {
        marginBottom: 10

    },
    button: {
        height: 50,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'purple'

    },
    btnText: {
        fontSize: 20,
        fontWeight: "bold",
        height: 40    

    }
})
