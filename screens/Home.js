import React, { useEffect, useState } from "react";
import { Text, View, FlatList, TouchableOpacity, Image } from "react-native";

import PageList from "../config/PageList";

const Home = (props) => {
    const [load, setLoad] = useState(false);
    const [data, setData] = useState(PageList);

    useEffect(() => {
        setTimeout(() => {
            console.log(222);
            setData({ values: data.values.reverse() });
        }, 3000);
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
                <Text>
                    home screen
                </Text>
            </View>
            <View style={{ flex: 8 }}>
                <FlatList
                    data={data.values}
                    numColumns={2}
                    horizontal={false}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={{ flex: 1, padding: 3 }} onPress={() => {
                                console.log(123);
                            }}>
                                <View style={{ width: "100%", height: 120, borderWidth: 1 }}>
                                    {/* <View style={{justifyContent: "center", flexDirection: "row"}}><Text>qwe</Text></View> */}
                                    <Image source={{ uri: item.img_path }} style={{ flex: 1 }} resizeMode="cover"></Image>
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