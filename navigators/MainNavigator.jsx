import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Ejercicio1Screen from "../screens/Ejercicio1Screen";
import Ejercicio2Screen from "../screens/Ejercicio2Screen";
import Ejercicio3Screen from "../screens/Ejercicio3Screen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();

function MyStack(){
    return(
        <Stack.Navigator initialRouteName="TOP">
            <Stack.Screen name='Login' component={LoginScreen}/>
            <Stack.Screen name="TOP" component={ MyTabs } />
        </Stack.Navigator>
    )
}

/////////////////////////////
const Tab = createMaterialTopTabNavigator()

function MyTabs(){
    return(
        <Tab.Navigator initialRouteName="Ejercicio2">
            <Tab.Screen name="Ejercio1" component={Ejercicio1Screen}/>
            <Tab.Screen name ='Ejercicio2' component={ Ejercicio2Screen}/>
            <Tab.Screen name= 'Ejercicio3' component={Ejercicio3Screen}/>
        </Tab.Navigator>
    )
}

///////////////////////////////////

export default function MainNavigator(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}