import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import AccountDetail from '../../screens/AccountScreen/AccountDetail';

const Stack = createNativeStackNavigator();
const AccountScreen = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="AccountDetail" component={AccountDetail} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: true }} />
        </Stack.Navigator>
    );
};

export default AccountScreen;