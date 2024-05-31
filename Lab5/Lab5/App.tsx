import React from "react";
import LoginScreen from "./src/Login";
import Home from "./src/Home";
import AddService from "./src/AddService";
import ServiceDetails from "./src/ServiceDetail";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import Customer from "./src/Customer";
import AddCustomer from "./src/AddCustomer";
import { MenuProvider } from "react-native-popup-menu";
import UpdateService from "./src/EditService";

const Stack = createStackNavigator();

const AllScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />

      <Stack.Screen name="TabNavigator" component={TabNavigator} />

    </Stack.Navigator>
  )
}
const HomeScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: true }} >


      <Stack.Screen name="Home" component={Home}
        options={{ title: 'Home' }} />

      <Stack.Screen name="AddService" component={AddService}
        options={{ title: 'Add Service' }} />

      <Stack.Screen name="Service Details" component={ServiceDetails} options={{
        title: 'Service Details'
      }} />

      <Stack.Screen name="EditService" component={UpdateService} options={{
        title: 'Edit Service '
      }} />
    </Stack.Navigator>
  )
}

const CustomerScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Customer" screenOptions={{ headerShown: true }}   >
      <Stack.Screen name="Customer" component={Customer} />
      <Stack.Screen name="AddCustomer" component={AddCustomer} />
    </Stack.Navigator>
  )
}

const Tab = createMaterialBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home" labeled={false} inactiveColor={"greyDark"} >
      <Tab.Screen name="Home" component={HomeScreen}
        options={{ tabBarIcon: 'home' }} />
      <Tab.Screen name="Customer" component={CustomerScreen}
        options={{ tabBarIcon: 'account-multiple' }} />
    </Tab.Navigator>
  )
}
const App = () => {
  return (
    <MenuProvider>
      <NavigationContainer>
        <AllScreen />
      </NavigationContainer>
    </MenuProvider>
  )
}

export default App;