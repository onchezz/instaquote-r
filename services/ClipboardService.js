import { Alert } from "react-native";
import * as Clipboard from "expo-clipboard";
const copyToClipboard = async (quote) => {
      
   await Clipboard.setStringAsync(quote);
   alert("Copied to clipboard");
}

export default copyToClipboard;