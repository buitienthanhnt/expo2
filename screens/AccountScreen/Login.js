import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { WebView } from 'react-native-webview';         // npm i react-native-webview 
                                                        // https://github.com/react-native-webview/react-native-webview/blob/891e595bcf5cafe4a903d5aa643e8361d0c3d467/docs/Reference.md

const Login = (props) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={requi}></ImageBackground>
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