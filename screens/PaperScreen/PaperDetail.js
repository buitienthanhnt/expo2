import react, { useEffect, useState } from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";
import RenderHTML from "react-native-render-html";

const PaperDetail = ({ navigation, route }) => {

    const [html, setHtml] = useState(route.params.data.conten);
    useEffect(() => {
        console.log('====================================');
        console.log('====================================');
    }, []
    );

    return (
        <ScrollView 
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            style={{ flex: 1, padding: 8 }}>
            <Text style={{fontSize: 18, fontWeight: "600", color: "green", textDecorationLine: "underline"}}>{route.params.data.title}</Text>
            <RenderHTML contentWidth={Dimensions.get("screen").width} source={{html}}></RenderHTML>
        </ScrollView>
    );
}

export default PaperDetail;