import React, { useState } from 'react';
import {View, StyleSheet,Image,Text,ScrollView, _ScrollView,Modal,Button,TouchableHighlight} from 'react-native';
const App = () =>{
  const[modalvisisibleplaya,setmodalvisibleplaya]=useState(false);
  const[modalcomida,setcomida]=useState(false);
  const[modalviaje,setviaje]=useState(false);
 return(
 <>

<ScrollView>
<Modal trasparente={true} animationType="slide" visible={modalvisisibleplaya} onRequestClose={()=>{

  alert('Modal has been closed .');

}}>
  <View style={styles.vistaModal}>
  <View style={styles.Modal}>
  <Text style={styles.subtitulo}>Suite Familiar</Text>
  <Text>En el Hotel La Mafia Duerme tranquila, encuentras una gran cantidad de habitaciones disponibles para grandes y pequeños</Text>
  <Button title="cerrar" onPress={()=>{setmodalvisibleplaya(!modalvisisibleplaya)}}></Button>
  </View>
  </View>
</Modal>

<Modal trasparente={true} animationType="slide" visible={modalcomida} onRequestClose={()=>{

alert('Modal has been closed .');
}}>
<View style={styles.vistaModal}>
<View style={styles.Modal}>
<Text style={styles.subtitulo}>Cuartos matrimoniales </Text>
<Text>Contamos con las mejores habitaciones muy amuebladas ademas de camas matrimoniales de 2 metros</Text>

<Button title="cerrar" onPress={()=>{setcomida(!modalcomida)}}></Button>
</View>
</View>
</Modal>
<Modal trasparente={true} animationType="slide" visible={modalviaje} onRequestClose={()=>{
alert('Modal has been closed .');
}}>
<View style={styles.vistaModal}>
<View style={styles.Modal}>
<Text style={styles.subtitulo}>Grandes Piscinas </Text>
<Text>Puedes disfrutar de Piscinas para todo publico, ademas de albercas con Jacuzzi</Text>

<Button title="cerrar" onPress={()=>{setviaje(!modalviaje)}}></Button>
</View>
</View>
</Modal>

 <View style={{flexDirection:'row'}} >
 <Image
 style={styles.banner}
 source={require('./src/img/hotel6.jpg')} />
 </View>

<View style={styles.contenedor}>
<Text style ={styles.titulo}>Hotel La Mafia Duerme tranquila</Text>
<ScrollView horizontal>
  <View>
  <TouchableHighlight
  onPress={()=>{setmodalvisibleplaya(!modalvisisibleplaya)}}>
  <Image
  style={styles.ciudad}
  source={require('./src/img/hotel1.jpg')}
  ></Image>
  </TouchableHighlight>
  </View>
  <View>
  <Image
  style={styles.ciudad}
  source={require('./src/img/hotel2.jpg')}
  ></Image>
  </View>
  <View>
  <Image
  style={styles.ciudad}
  source={require('./src/img/hotel3.jpg')}
  ></Image>
  </View>
  <View>
  <Image
  style={styles.ciudad}
  source={require('./src/img/hotel4.jpg')}
  ></Image>
  </View>
  <View>
  <Image
  style={styles.ciudad}
  source={require('./src/img/hotel5.jpg')}
  ></Image>
  </View>
</ScrollView>
</View>

<Text style ={styles.titulo}>Cuartos grandes y comodos</Text>
  <View>
  <TouchableHighlight
  onPress={()=>{setcomida(!modalcomida)}}>
  <Image
  style={styles.mejores}
  source={require('./src/img/hotel9.jpg')}
  ></Image>
  </TouchableHighlight>
  </View>
  <View>
  <Image
  style={styles.mejores}
  source={require('./src/img/hotel7.jpg')}
  ></Image>
  </View>
  <View>
  <Image
  style={styles.mejores}
  source={require('./src/img/hotel8.jpg')}
  ></Image>
  </View>

<Text style={styles.titulo}>Pisajes y Miradores</Text>
<View style={styles.listado}>
  <View style={styles.listaItem}>
  <TouchableHighlight
  onPress={()=>{setviaje(!modalviaje)}}>
  <Image
  style={styles.mejores}
  source={require('./src/img/image4.jpg')}
  ></Image>
  </TouchableHighlight>
  </View>
  <View style={styles.listaItem}>
  <Image
  style={styles.mejores}
  source={require('./src/img/image1.jpg')}
  ></Image>
  </View>
  <View style={styles.listaItem}>
  <Image
  style={styles.mejores}
  source={require('./src/img/image2.jpg')}
  ></Image>
  </View>
  <View style={styles.listaItem}>
  <Image
  style={styles.mejores}
  source={require('./src/img/image3.jpg')}
  ></Image>
  </View>
  </View>
  </ScrollView>
</>
 );
};
const styles = StyleSheet.create({
banner:{
 height:250,
 flex:1
},
titulo:{
  fontWeight:'bold',
  fontSize:24,
  marginVertical:10
},
contenedor:{
  marginHorizontal:10,
},
ciudad:{
  width:250,
  height:300,
  marginRight:10
},

mejores:{
  width:'100%',
  height:200,
  marginVertical:5
},
listaItem:{
  flexBasis:'49%'
},
listado:{
  flexDirection:'row',
  flexWrap:'wrap',
  justifyContent:'space-between'
},
vistaModal:{
  backgroundColor:'#000000aa',
  flex:1
},
Modal:{
  backgroundColor:'#fff',
  margin:50,
  padding:40,
  borderRadius:10,
  flex:1
},
subtitulo:{
  fontWeight:'bold',
  fontSize:14,
  justifyContent:'center'
}

});
export default App;