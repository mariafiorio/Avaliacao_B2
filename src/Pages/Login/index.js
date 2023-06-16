import { Link } from "@react-navigation/native";
import styles from "./style";
import { TextInput, SafeAreaView, View, Image} from "react-native";

export default function Login(){
    return(
        <SafeAreaView style={styles.container}>
    
        <View style={styles.inputs}>
            <TextInput style={styles.inputEmail} placeholder='Email'/>
            <TextInput style={styles.inputSenha} placeholder='Senha'/>
        </View>
        <View style={styles.viewConfirmar}>
            <Link style={styles.btnConfirmar} to={{screen: "RPGPage"}}>Confirmar</Link>
        </View>
        <View style={styles.viewLink}>
            <Link style={styles.link} to={{screen: "Registrar"}}>Faça seu cadastro</Link>
        </View> 
        
        <Link style={styles.link} to={{screen: "EsqueciSenha"}}>Esqueceu sua senha?</Link>

        </SafeAreaView>
    )
}
     
