import react, { useEffect, useState } from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";

import IframeRenderer, { iframeModel } from '@native-html/iframe-plugin';
import RenderHTML from 'react-native-render-html';
import WebView from 'react-native-webview';

const renderers = {
    iframe: IframeRenderer
};

const customHTMLElementModels = {
    iframe: iframeModel
};

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
            <Text style={{ fontSize: 18, fontWeight: "600", color: "green", textDecorationLine: "underline" }}>{route.params.data.title}</Text>
            {/* <RenderHTML contentWidth={Dimensions.get("screen").width} source={{ html }}></RenderHTML> */}
            <RenderHTML
                renderers={renderers}
                WebView={WebView}
                source={{ html }}
                contentWidth={Dimensions.get("screen").width}
                customHTMLElementModels={customHTMLElementModels}
                defaultWebViewProps={
                    {
                        /* Any prop you want to pass to all WebViews */
                    }
                }
                renderersProps={{
                    iframe: {
                        scalesPageToFit: true,
                        webViewProps: {
                            /* Any prop you want to pass to iframe WebViews */
                        }
                    }
                }}
            />
        </ScrollView>
    );
}

export default PaperDetail;