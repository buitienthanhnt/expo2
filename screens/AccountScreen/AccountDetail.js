import React, { Component } from "react";
import { Button, Text, View } from "react-native";

class AccountDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>account detail</Text>
                <Button title="to login" onPress={() => {
                    this.props.navigation.navigate("Login");
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