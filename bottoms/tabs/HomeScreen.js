import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/HomeScreen/Home';

const Stack = createNativeStackNavigator();
const HomeScreen = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default HomeScreen;