import *  as Speech from "expo-speech";

const speak = (quote,) => { 
   Speech.stop();
   Speech.speak(quote);
    
   // setIsSpeaking(Speech.isSpeakingAsync());
}


export default speak;