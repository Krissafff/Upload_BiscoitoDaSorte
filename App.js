import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Touchable } from 'react-native';

function App(){
   const [img, setImg] = useState(require('./src/biscoito.png'));
   const [textoFrase, setTextoFrase] = useState('');

   let frases = [
      'Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar.',
      'Eu acredito demais na sorte. E tenho constatado que, quanto mais duro eu trabalho, mais sorte eu tenho.',
      'Homens fracos acreditam na sorte. Homens fortes acreditam em causa e efeito.',
      'A sorte não existe. Aquilo a que chamas sorte é o cuidado com os pormenores.',
      'A perseverança é a mãe da boa sorte.',
      'Sorte é estar pronto quando a oportunidade vem.',
      'A sorte favorece a mente bem preparada.',
      'A sorte ajuda os audazes.'
   ];
   

   function quebraBiscoito(){
      let numeroAleatorio = Math.floor(Math.random() * frases.length)
      
      setTextoFrase(' " ' + frases[numeroAleatorio] +' " ');
      setImg(require('./src/biscoitoAberto.png'));
   }

   function reiniciar(){

      setImg(require('./src/biscoito.png'));
      setTextoFrase('');
   }


   return(
   <View style={styles.container}>

   <Image
   source={img}
   style={styles.img}
   />

   <Text style={styles.textofrase}> {textoFrase} </Text>
     
     <TouchableOpacity style={styles.botao} onPress={ quebraBiscoito }>
        <View style={styles.btnArea}>
           <Text style={styles.btnTexto}>Quebrar o Biscoito</Text>
        </View>
     </TouchableOpacity>

     <TouchableOpacity style={[styles.botao, { marginTop: 15, borderColor: '#121212'}]} onPress={ reiniciar }>
        <View style={styles.btnArea}>
           <Text style={[styles.btnTexto, { color:'#121212' }]}>Reiniciar o biscoito</Text>
        </View>
     </TouchableOpacity>

     </View>
      );
}

const styles = StyleSheet.create({
   container:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
   },
   img:{
      width: 230,
      height: 230,
   },
   textofrase:{
     fontSize: 20,
     color: '#244521',
     margin: 30,
     fontStyle: 'italic',
     textAlign: 'center'
   },
   botao:{
      width: 230,
      height: 50,
      borderColor: '#569599',
      borderWidth: 2,
      borderRadius: 25
   },
   btnArea:{
      flex:1,
      justifyContent:'center',
      alignItems: 'center'
   },
   btnTexto:{
      fontSize: 17,
      fontWeight: 'bold',
      color: '#569599'
   }
})


export default App;