import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Product from '../../screens/Product';

const Stack = createNativeStackNavigator();
const ProductScreen = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Product" component={Product} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default ProductScreen;