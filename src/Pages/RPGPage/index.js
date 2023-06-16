import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View,SafeAreaView } from 'react-native';
import CardRPG from '../../components/CardRPG';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function RPGPage(){
    const cartoes = [
      {
        titulo: 'Facão',
        ataque: '4 pontos',
        defesa: '2 pontos',
        imgUrl: 'https://i.pinimg.com/originals/2d/b1/01/2db1014b79acfb3d810f316a175a2064.jpg'
      },
      {
        titulo: 'Machado',
        ataque: '8 pontos',
        defesa: '4 pontos',
        imgUrl: 'https://i.pinimg.com/originals/ee/b5/39/eeb53998535b0fd81e6c48abbeda4f55.jpg'
      },
      {
        titulo: 'Espada',
        ataque: '6 pontos',
        defesa: '3 pontos',
        imgUrl: 'https://lojauf.weebly.com/uploads/3/7/0/1/37012679/952782279.jpg?383'
      }
    ];


return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Cartões de RPG:</Text>
      {
        cartoes.map(cartao => <CardRPG cartao={cartao}/>)
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    titulo:{
      color: 'black',
      fontSize: 18 
    }
  });
