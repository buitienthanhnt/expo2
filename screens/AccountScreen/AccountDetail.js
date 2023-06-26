import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import Config from "../../config/Config";

class AccountDetail extends Component {
    constructor(props) {
        super(props);
    }

    getTestData = async function(){
        const data = await fetch(Config.url+Config.api_request.testJson);
        const result = await data.json();
        console.log(result);
    }

    render() {
        this.getTestData();
        return (
            <View>
                <Text>account detail</Text>
                <Button title="to Detail product" onPress={() => {
                    this.props.navigation.navigate("ProductScreen", {screen: "Detail"});
                }}></Button>

                {/* render nhiều phần tử */}
                {(() => {
                    var res = [];
                    for (let index = 0; index < 6; index++) {
                        res.push(<Text key={index} >123</Text>);
                    }
                    return res;
                })()}

                {/* render có điều kiện */}
                {false && <Text>eeeeee</Text>}

                {/* render thường */}
                {<Text>bbbb</Text>}

                {/* render với 1 thẻ cha trống */}
                <>
                    <Text>zxc</Text>
                    <Text>ppppppppp</Text>
                </>

                <>
                    <Button title="to Product" onPress={() => {
                        this.props.navigation.navigate("Product");
                    }}></Button>
                </>
            </View>
        );
    }
}

export default AccountDetail;