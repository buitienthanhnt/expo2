import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ColorIcon from '../../screens/MoreScreen/ColorIcon';

const Stack = createNativeStackNavigator();
const MoreScreen = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name='ColorIcon' component={ColorIcon} options={{headerShown: false}} />
        </Stack.Navigator>
    );
};

export default MoreScreen;