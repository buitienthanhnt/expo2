import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/Login';

const Stack = createNativeStackNavigator();
const AccountScreen = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default AccountScreen;