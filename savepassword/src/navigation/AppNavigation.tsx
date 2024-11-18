import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/login";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            
            <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
                
                <Stack.Screen name="Login" component={Login} />
                
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}