import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, View, ImageBackground, BackHandler } from "react-native";
import { WebView } from 'react-native-webview';         // npm i react-native-webview 
// https://github.com/react-native-webview/react-native-webview/blob/891e595bcf5cafe4a903d5aa643e8361d0c3d467/docs/Reference.md

import Config from "../../config/Config";

const Login = (props) => {
    const webViewRef = useRef(null);
    const onAndroidBackPress = () => {
        if (webViewRef.current) {
            // webViewRef.current.goBack(); // https://github.com/react-native-webview/react-native-webview/blob/HEAD/docs/Guide.md
            webViewRef.current.clearCache();
            return true; // prevent default behavior (exit app)
        }
        return false;
    };

    return (
        <View style={styles.container}>
            <WebView
                ref={webViewRef}
                source={{ uri: Config.url + Config.url_request.userLogin }}
                thirdPartyCookiesEnabled={false}
                cacheEnabled={false}
            />
            <Text>123</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    loginWebView: {
        flex: 1,
        marginTop: 30,
        marginBottom: 20
    }
});

export default Login;