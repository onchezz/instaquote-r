import { View,StyleSheet,Text, ActivityIndicator, Button, TouchableOpacity, ScrollView, Pressable, Alert } from "react-native";
import { Fontisto,Ionicons,MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import copyToClipboard from "../services/ClipboardService";
import shareQuote from "../services/ShareService";
import *  as Speech from "expo-speech";
import fetchradomQuote from "../data/fetchdata";
import speak from "../services/TexttoSpeechService";

const QouteCard = () => {
   const [quote, setQuote] = useState();
   const [author, setAuthor] = useState();
   const [isloadingQuote, setLoadingQuote] = useState(true);
   const [isSpeaking, setIsSpeaking] = useState(true);
   const _speak = () => speak(quote);
   const fetchData = async () => {
     
         setLoadingQuote(true);
         const randomQuote = await fetchradomQuote();
         setQuote(randomQuote.content);
         setAuthor(randomQuote.author);
         setLoadingQuote(false); 
         // if (quote === undefined||quote === "") {
         //    setLoadingQuote(true);
          
         // }
   }

   

   useEffect(() => {
      fetchData();
   }, []);

   return (
      <View style={styles.home}>
            <View style={styles.card}>
         <Text style={styles.headerText}>
            Quote of the Day
         </Text>
         <View>
            <Fontisto name="quote-a-right" color="#9159DA"size={28} />
            <ScrollView style={styles.textcard}>
               {!isloadingQuote ? (<Text style={styles.qoute}> "{quote}" </Text>):
                  <ActivityIndicator color="#9159DA" size="large" style={styles.indicator} />}
            </ScrollView>
            <Fontisto name="quote-a-left" style={styles.icons} size={28} />
            <Text style={styles.author}>
    -- {!isloadingQuote? `${author}` : " ...Loading" }
            </Text>
            <TouchableOpacity onPress={fetchData} style={styles.button}>
               <View>
               <Text  style={styles.buttonText}> {!isloadingQuote? "New Note": " ...Loading" }</Text>
               </View>
            </TouchableOpacity>

            
            <View style={styles.iconsRow}> 
              {isSpeaking? (<TouchableOpacity onPress={_speak}>
               <Ionicons name="md-volume-high-sharp" color="#9E73E9" size={38} />
            </TouchableOpacity>): (<TouchableOpacity onPress={_speak}>
               <Ionicons name="md-volume-high"  color={isSpeaking? "#9E73E9":"#56525E"}  size={38} />
            </TouchableOpacity>)}
               
               <TouchableOpacity onPress={()=>copyToClipboard(quote)}>
               <MaterialCommunityIcons name="clipboard-multiple-outline" color="#792AE0"size={38} />
               </TouchableOpacity>
               <TouchableOpacity onPress={()=>shareQuote(quote)}>
               <Ionicons name="share-social-sharp" color="#792AE0" size={38} />
              </TouchableOpacity>
               
            </View>
         </View>

</View>
     
</View>
   );
    
}

const styles = StyleSheet.create({
   home: {
      width: "100%",
      height: "100%",
      justifyContent: "center",
      backgroundColor: "#9159DA",
       
   },
   card: {
      alignSelf: "center",
      padding: 29,
      width: "90%",
      height: "50%",
      backgroundColor: "#FFFFFF",
      borderColor: "#A5CD5B",
      borderRadius:15,
      marginVertical: 10,
   },
   headerText: {
      color: "#9159DA",
      fontSize: 30,
      fontWeight: "bold",
      // fontFamily: "Helvetica",
      alignSelf: "center",
   },
   indicator: {
      // justifyContent: "bottom",
   },
   icons: {
      color: "#792AE0",
      alignSelf: "flex-end",
      
      
   },
   textcard: {
      maxHeight: "34%",
      minHeight: "34%",

   },
   qoute: {
      paddingVertical: 10,
      paddingHorizontal:10,
      fontSize: 20,
      fontWeight: "100",
      // fontFamily: "Helvetica",
      alignSelf: "center",
      lineHeight: 30,
   },
   author: {
      fontSize: 16,
      alignSelf: "flex-end",
      marginVertical:10,
   },
   button: {
      width: "90%",
      height: "20%",
      backgroundColor: "#2231D9",
      alignSelf: "center",
      justifyContent: "center",
      borderRadius: 20,
      
   },
   buttonText: {
      color: "#FFFFFF",
      fontSize: 20,
      fontWeight: "400",
      // fontFamily: "Helvetica",
      alignSelf: "center",
   },
   iconsRow: {
      marginTop: 20,
      flexDirection: "row",
      justifyContent:"space-around"
   }
 })

export default QouteCard;