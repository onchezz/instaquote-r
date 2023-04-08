import { Text, StyleSheet, View, ScrollView, } from 'react-native';

const  CardView = ({item})=>   {
   // console.log(item.content);
   return (
      <View style={styles.card}>
            <ScrollView >
               <Text style={styles.qoute}>
         {item.content}
            </Text>
            <Text style={styles.author}>
               -- {item.author}
            </Text>
            </ScrollView>
        
      </View>
   );
}

const styles = StyleSheet.create({
   card: {
      width: '88%',
      justifyContent: 'center',
      backgroundColor: '#777EE3',
      padding: 10,
      marginVertical: 5,
      marginHorizontal: 10,
      alignSelf: 'center',
      borderRadius: 27,
      shadowColor: '#8F8F96',
      shadowOffset: {
         width: 10,
         height: 20,
       }, 
   },
   qoute: {  
      paddingVertical: 5,
      paddingHorizontal:10,
      fontSize: 20,
      fontWeight: "100",
      // fontFamily: "Helvetica",
      alignSelf: "center",
      lineHeight: 30,
      color: "white",
   },
   author: {
      fontWeight: "300",
      alignSelf: "flex-end",
      color: "white",
      paddingRight:"3%"
   }

});

export default CardView;