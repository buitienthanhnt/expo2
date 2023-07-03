import react, { useEffect, useState } from "react";
import { Dimensions, Image, ScrollView, RefreshControl, Text, View } from "react-native";
import Config from "../../config/Config";

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
    const [detail, setDetail] = useState(null);

    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        getDetailPaper(route.params.data.id);
    }, []
    );

    const getDetailPaper = async (paper_id = 0) => {
        if (paper_id) {
            try {
                const detail = await fetch(Config.url + Config.api_request.getPaperDetail + paper_id);
                var result = await detail.json();
                if (result) {
                    setDetail(result);
                }else{
                    navigation.goBack();
                } 
            } catch (error) {
                navigation.goBack();
            }
            
        }
    };

    const onRefresh = ()=>{
        // alert("refresh");
        getDetailPaper(route.params.data.id);

    }

    if (detail) {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                style={{ flex: 1, padding: 8 }}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >
                <Text style={{ fontSize: 18, fontWeight: "600", color: "green", textDecorationLine: "underline" }}>{detail.title}</Text>
                {/* <RenderHTML contentWidth={Dimensions.get("screen").width} source={{ html }}></RenderHTML> */}
                <RenderHTML
                    renderers={renderers}
                    WebView={WebView}
                    source={{ html: detail.conten }}
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
    } else {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Image source={require("../../assets/DoubleRing-1s-200px.gif")} style={{ width: 100, height: 100 }}></Image>
                <Text>loading...</Text>
            </View>);
    }
}

export default PaperDetail;