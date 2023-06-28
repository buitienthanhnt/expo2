import react, { Component } from "react";
import { FlatList, StyleSheet, View, Dimensions, Image, Text, TouchableOpacity, LogBox } from "react-native";

import Config from "../../config/Config";

class PaperList extends Component {
    constructor(props) { // https://viblo.asia/p/superprops-trong-constructor-cua-react-component-gGJ59eA15X2
        super(props);
        this.state = {
            items: [],
            refreshing: false,
            page: 1
        };
    }

    componentDidMount() {
        this.getTestData();
        // tắt cảnh báo màu vàng trên màn hình dùng: LogBox.
        LogBox.ignoreAllLogs();
        // LogBox.ignoreLogs(["Failed %s type: %s%s, prop, Invalid prop `color` supplied to `Text`", 'The "source" tag is a valid HTML element but is not handled by this library']);
    }

    getTestData = async function (paper = false, refresh = false) {
        if (!this.state.refreshing) {
            this.setState({refreshing: true});
            // console.log(Config.url + Config.api_request.getpapers + Config.buy_params({ page: this.state.page }));
            const data = await fetch(Config.url + Config.api_request.getpapers + Config.buy_params({ page: paper !== false ? paper : this.state.page }));
            const result = await data.json();
            var items = this.state.items;
            if (result.data.length) {
                if (refresh) {
                    items = result.data;
                }else{
                    items.push(...result.data)
                }
                await this.setState({
                    items: items,
                    page: refresh ? 2 : this.state.page += 1,
                    refreshing: false
                });
            } else {
                this.setState({
                    refreshing: false
                });
            }
        }
    }

    componentDidUpdate() {
        var items_count = this.state.items.length;
        if (!this.state.refreshing && (items_count * Dimensions.get("screen").height / 7 < Dimensions.get("screen").height)) {
            this.getTestData();
        }
    }

    render() { // https://viblo.asia/p/react-native-lifecycle-gAm5yXY8ldb
        const height = Dimensions.get("screen").height;
        return (
            <View style={css.container}>
                <View style={css.title_container}>
                    {/* <Text style={css.top_title}>Paper list</Text> */}
                    <Image source={require("../../assets/hinh-ke-ga-3307-1684226630.jpg")} style={css.top_image} resizeMode="cover"></Image>
                </View>
                <FlatList
                    data={this.state.items}
                    refreshing={this.state.refreshing}
                    onRefresh={() => {
                        this.getTestData(1, true);
                    }}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return <ProductItem data={item} navigation={this.props.navigation}></ProductItem>;
                    }}
                    onEndReachedThreshold={0.1}
                    onEndReached={() => {
                        this.getTestData();
                    }}
                ></FlatList>
            </View>
        );
    }
}

class ProductItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }
    render() {
        return (
            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate("PaperDetail", { data: this.props.data });
            }}
            >
                <View style={css.pro_item}>
                    <View style={{ width: "40%" }}>
                        <Image source={{ uri: this.props.data.image_path}} style={{ flex: 1, borderRadius: 6 }}></Image>
                    </View>
                    <View style={css.pro_item_title}>
                        <Text style={{ color: "green", fontSize: 16 }}>{this.props.data.title}</Text>
                        <Text>{this.props.data.short_conten ? this.props.data.short_conten.slice(0, 90) : ""}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const css = StyleSheet.create({
    container: {
        flex: 1
    },
    title_container: {
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "violet"
    },
    top_title: {
        fontSize: 18,
        fontWeight: "700",
        color: "green"
    },
    top_image:{
        width: "100%", 
        height: Dimensions.get("screen").height/8
    },
    pro_item: {
        width: "100%",
        height: Dimensions.get("screen").height / 7,
        flexDirection: "row",
        padding: 5,
        elevation: 3, //: zindex (works on android)
    },
    pro_item_title: {
        width: "60%",
        paddingLeft: 8,
        paddingRight: 8
    }
});

export default PaperList;