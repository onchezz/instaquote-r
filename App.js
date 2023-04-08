import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import QouteCard from "./pages/Quotespage";
import AllQuotes from "./pages/AllQuotesPage";
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();
export default function App() {
  
  return (
    <NavigationContainer >
    
      <Tab.Navigator screenOptions={{ headerShown: false, }}>
        
        
        <Tab.Screen name="Settings" component={AllQuotes} />
        <Tab.Screen name="Home" component={QouteCard} />
        </Tab.Navigator>
    
    </NavigationContainer>
    

  );
}
