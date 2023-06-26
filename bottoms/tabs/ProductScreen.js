import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Product from '../../screens/ProductScreen/Product';
import Detail from '../../screens/ProductScreen/Detail';

const Stack = createNativeStackNavigator();
const ProductScreen = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Product" component={Product} options={{ headerShown: false }} />
            <Stack.Screen name="Detail" component={Detail} options={{ headerShown: true }} />
        </Stack.Navigator>
    );
};

export default ProductScreen;