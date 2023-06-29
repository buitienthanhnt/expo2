import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Paper             from '../../screens/PaperScreen/Paper';
import Detail            from '../../screens/PaperScreen/Detail';
import PaperList         from '../../screens/PaperScreen/PaperList';
import PaperDetail       from '../../screens/PaperScreen/PaperDetail';
import PaperListCategory from '../../screens/PaperScreen/PaperListCategory';

const Stack = createNativeStackNavigator();
const PaperScreen = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="PaperList" component={PaperList} options={{ headerShown: false }} />
            <Stack.Screen name="PaperDetail" component={PaperDetail} options={{ headerShown: true }} />
            <Stack.Screen name="PaperListCategory" component={PaperListCategory} options={{ headerShown: false }} />
            <Stack.Screen name="Paper" component={Paper} options={{ headerShown: false }} />
            <Stack.Screen name="Detail" component={Detail} options={{ headerShown: true }} />
        </Stack.Navigator>
    );
};

export default PaperScreen;