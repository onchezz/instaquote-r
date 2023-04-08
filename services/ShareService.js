import { Share,Alert } from "react-native";
async function shareQuote(quote) {

   try {
      const result = Share.share({ message: quote });
      return result;
   } catch (error) {
      Alert.alert(error);
   }
   
}
export default shareQuote;