import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function TabLayout(){
    const theme = useColorScheme() ?? 'light';
    return(
        <Tabs screenOptions={{ tabBarActiveTintColor: Colors[theme].tint, headerShown: false
          }}>
            <Tabs.Screen
            name="index"
            options={{
                title: 'Home',
                tabBarIcon: ({color}) =><FontAwesome size={28} name="home" color={color}/>
            }}
            />
            <Tabs.Screen
            name="yoga"
            options={{
                title: 'Yoga',
                tabBarIcon: ({color}) =><FontAwesome size={28} name="male" color={color}/>
            }}
            />
            <Tabs.Screen
            name="account"
            options={{
                title: 'Account',
                tabBarIcon: ({color}) =><FontAwesome size={28} name="user" color={color}/>
            }}
            />
        </Tabs>


    );
}