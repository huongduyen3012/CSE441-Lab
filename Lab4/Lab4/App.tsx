import 'react-native-gesture-handler';
import React from 'react';
import Contact from './src/Contact';
import Store from './src/Store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileContact from './src/ProfileContact';
import Favorite from './src/Favories';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Stack = createStackNavigator();

const ContactScreens = () => {
  return (
    <Stack.Navigator initialRouteName='Contacts'
      screenOptions={{ headerShown: true }}>
      <Stack.Screen name='Contact List' component={Contact}
        options={{ title: "Contact List", headerTintColor: '#3C459A' }} />

      <Stack.Screen name='ProfileContact' component={ProfileContact}
        options={{ title: "Profile contact" }} />
    </Stack.Navigator>
  );
}

const FavoriteScreen = () => {
  return (
    <Stack.Navigator initialRouteName='Favorites'
      screenOptions={{ headerShown: true }}>
      <Stack.Screen name='Favorite Contacts' component={Favorite}
        options={{ title: "Favorite Contacts" }} />

      <Stack.Screen name='ProfileContact' component={ProfileContact}
        options={{ title: "Profile contact" }} />
    </Stack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName='ContactsScreens'
      barStyle={{ backgroundColor: "#567CDF" }}
      labeled={false}
      inactiveColor={"greyDark"}>

      <Tab.Screen name='Contacts' component={ContactScreens}
        options={{ tabBarIcon: 'format-list-bulleted' }} />

      <Tab.Screen name='Favorites' component={FavoriteScreen}
        options={{ tabBarIcon: 'star-check' }} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;