import { useEffect, useState } from 'react';
import {  StyleSheet, View,TouchableHighlight,Text,  FlatList } from 'react-native';
import CardView from '../components/CardView';
import fetchradomQuote from '../data/fetchdata';

function AllQuotes() {
   const [quotes ,setQuote] = useState()
   const [randomQuotes, setAllrandomQuotes] = useState([]);
   const getListofQuotes = async () => {
      const randomlistQuote = await fetch('https://api.quotable.io/quotes/random?limit=20');
      const list =await randomlistQuote.json();
      setAllrandomQuotes(list);
      
   }
   
   useEffect(() => {
   
      getListofQuotes();
   }, []);
   return (
      <View style={styles.allCards}>
         <FlatList
            data={randomQuotes}
         renderItem={CardView}
        />
  
      </View>
       
     
   );

}

const styles = StyleSheet.create({
   allCards: {
      
      paddingTop: "11%",

   },
  
});
 
export default AllQuotes;