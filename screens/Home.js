import React, { useState } from "react";
import { Text, View, FlatList, TouchableOpacity, Image } from "react-native";

import PageList from "../config/PageList";

const Home = (props) => {
    const [load, setLoad] = useState(false);

    const sleep = async (milliseconds) => {
        await new Promise(resolve => {
            return setTimeout(resolve, milliseconds)
        });
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, flexDirection: "row", justifyContent:"center" }}>
                <Text>
                    home screen
                </Text>
            </View>
            <View style={{ flex: 8 }}>
                <FlatList
                    data={PageList.values}
                    numColumns={2}
                    horizontal={false}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={{ flex: 1, padding: 8 }} onPress={() => {
                                console.log(123);
                            }}>
                                <View style={{ width: "100%", height: 120, borderWidth: 1 }}>
                                    {/* <View style={{justifyContent: "center", flexDirection: "row"}}><Text>qwe</Text></View> */}
                                    <Image source={{ uri: item.img_path }} style={{flex:1 }} resizeMode="cover"></Image>
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                    refreshing={load}
                    onRefresh={() => {
                        setLoad(true);
                        console.log(123123);
                        setLoad(false);
                    }}

                ></FlatList>
            </View>
            <View style={{ flex: 1 }}>
            </View>
        </View>
    )
}

export default Home;