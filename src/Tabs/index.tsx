import Ionicos from 'react-native-vector-icons/Ionicons';
import { background } from "native-base/lib/typescript/theme/styled-system";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Perfil from "./Perfil";
import Principal from "./Principal";

const Tab = createBottomTabNavigator();
const screenOptions = {
    tabBarStyle:{
        backgroundColor:"#001489"
    },
    tabBarActiveTintColor:"#339cff",
    tabBarInactiveTintColor:"#FFF"
}

const tabs = [
    {
      name: 'Principal',
      component: Principal,
      icon: 'home'
    },
    {
      name: 'Perfil',
      component: Perfil,
      icon: 'person'
    },
  ]

export default function Tabs(){
    return(
        <Tab.Navigator screenOptions={screenOptions}>
        {tabs.map((tab) => (
        <Tab.Screen
        key={tab.name}
            name={tab.name}
            component={tab.component}
            options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <Ionicons name={tab.icon} color={color} 
                    size={size}/>
            )
        }}
        />
    ))
}
        </Tab.Navigator>
    )
}
