import react, { Component } from "react";
import { FlatList, StyleSheet, View, Dimensions, Image, Text, TouchableOpacity, LogBox, ScrollView, ImageBackground } from "react-native";

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
        this.getSourceData();
        // tắt cảnh báo màu vàng trên màn hình dùng: LogBox.
        LogBox.ignoreAllLogs(); // cho tất cả các cảnh báo.
        // LogBox.ignoreLogs(["Failed %s type: %s%s, prop, Invalid prop `color` supplied to `Text`", 'The "source" tag is a valid HTML element but is not handled by this library']);
    }

    getSourceData = async function (paper = false, refresh = false) {
        if (!this.state.refreshing) {
            this.setState({ refreshing: true });
            // console.log(Config.url + Config.api_request.getpapers + Config.buy_params({ page: this.state.page }));
            const data = await fetch(Config.url + Config.api_request.getpapers + Config.buy_params({ page: paper !== false ? paper : this.state.page }));
            const result = await data.json();
            var items = this.state.items;
            if (result.data.length) {
                if (refresh) {
                    items = result.data;
                } else {
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
            this.getSourceData();
        }
    }

    render() { // https://viblo.asia/p/react-native-lifecycle-gAm5yXY8ldb
        const height = Dimensions.get("screen").height;
        return (
            <View style={css.container}>
                <View style={{ flex: 3 }}>
                <ScrollView  pagingEnabled={true} showsHorizontalScrollIndicator={false} horizontal={true}>
                    <View style={css.title_container}>
                        <View style={{ flexDirection: "row", justifyContent: "center" }}><Text style={{ fontSize: 18, fontWeight: "600" }}>News</Text></View>
                        <Image source={require("../../assets/hinh-ke-ga-3307-1684226630.jpg")} style={css.top_image} resizeMode="cover"></Image>
                    </View>
                    <View style={css.title_container}>
                        <View style={{ flexDirection: "row", justifyContent: "center" }}><Text style={{ fontSize: 18, fontWeight: "600" }}>Chiến sự</Text></View>
                        <Image source={require("../../assets/6623ThuydienLaiChau1_1.jpg")} style={css.top_image} resizeMode="cover"></Image>

                    </View>
                </ScrollView>
                </View>

                <View style={{ flex: 9 }}>
                    <FlatList

                        data={this.state.items}
                        refreshing={this.state.refreshing}
                        onRefresh={() => {
                            this.getSourceData(1, true);
                        }}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            if (index % 5 == 0) {
                                return <ProductItemHost data={item} navigation={this.props.navigation}></ProductItemHost>
                            }
                            return <ProductItem data={item} navigation={this.props.navigation}></ProductItem>;
                        }}
                        onEndReachedThreshold={0.1}
                        onEndReached={() => {
                            this.getSourceData();
                        }}
                    ></FlatList>
                </View>
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
                        <Image source={{ uri: this.props.data.image_path }} style={{ flex: 1, borderRadius: 6 }}></Image>
                    </View>
                    <View style={css.pro_item_title}>
                        <Text style={{ color: "green", fontSize: 16 }}>{this.props.data.title}</Text>
                        <View style={{ paddingLeft: 5 }}>
                            <Text>{this.props.data.short_conten ? this.props.data.short_conten.slice(0, 90) : ""}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

class ProductItemHost extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate("PaperDetail", { data: this.props.data });
            }}>
                <View style={css.pro_item_host}>
                    <Image source={{ uri: this.props.data.image_path }} style={{ flex: 1, borderRadius: 6 }} resizeMode="cover"></Image>
                    <Text style={css.pro_item_host_title}>{this.props.data.title}</Text>
                    <View style={{ paddingLeft: 8 }}>
                        <Text>{this.props.data.short_conten}</Text>
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
        width: Dimensions.get("screen").width,
        // height: (Dimensions.get("screen").height / 8)+20
    },
    top_title: {
        fontSize: 18,
        fontWeight: "700",
        color: "green"
    },
    top_image: {
        // flex: 1,
        width: "100%",
        height: Dimensions.get("screen").height / 6
    },
    pro_item: {
        width: "100%",
        height: Dimensions.get("screen").height / 7,
        flexDirection: "row",
        padding: 5,
        elevation: 3, //: zindex (works on android)
    },
    pro_item_host: {
        width: "100%",
        height: Dimensions.get("screen").height / 4, padding: 5
    },
    pro_item_host_title: {
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "600",
        color: "blue"
    },
    pro_item_title: {
        width: "60%",
        paddingLeft: 8,
        paddingRight: 8
    }
});

export default PaperList;