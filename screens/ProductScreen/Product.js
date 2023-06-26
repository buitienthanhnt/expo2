import React, { useRef, useState } from "react"; // gán lại giá trị mà không render lại đối tượng. https://www.w3schools.com/react/react_useref.asp
import { Button, Image, Text, View, Dimensions, TouchableOpacity, ScrollView } from "react-native";

import { Ionicons } from '@expo/vector-icons';
import RBSheet from "react-native-raw-bottom-sheet";

const Product = (props) => {
    const refRBSheet = useRef();
    const [state, setState] = useState(0.1);
    const { width, height } = Dimensions.get("screen");
    // console.log(width, height);
    return (
        <View>
            <Text>
                product screen
            </Text>
            <Button title="show bottom" onPress={() => {
                refRBSheet.current.open();
            }}></Button>
             <Text>{"\n"}</Text>

            <Button title="to detail" onPress={() => {
                props.navigation.navigate("Detail");
            }}></Button>
            <Text>{"\n"}</Text>

            <RBSheet ref={refRBSheet}
                //  height = {height/2}    // chiều cao popup modal
                closeOnDragDown={true} // kéo xuống để ẩn popup modal
            >
                {/* <View style={{flexDirection:row, padding: 8, justifyContent: "space-between"}}></View> */}
                <ScrollView style={{ padding: 8 }}
                    horizontal={true}                      // hiển thị theo chiều ngang
                    pagingEnabled={true}                   // lật trang
                    showsHorizontalScrollIndicator={false} // ẩn thanh scollBar
                    // scrollEventThrottle={1000}          // sau 1s call: onScroll
                    onScroll={(event) => {
                        // console.log(event.nativeEvent.contentOffset);  // tọa độ x và y khi scroll
                    }}
                >
                    <View style={{ marginRight: 8 }}>
                        <TouchableOpacity onPress={() => {
                            console.log(123);
                        }}>
                            <Image source={{ uri: "https://sohanews.sohacdn.com/thumb_w/1000/160588918557773824/2023/6/20/4-1687283405506869800315.jpg" }} style={{ width: 60, height: 60, borderRadius: 30 }} resizeMode="cover"></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginRight: 8 }}>
                        <TouchableOpacity>
                            <Image source={{ uri: "https://sohanews.sohacdn.com/thumb_w/980/160588918557773824/2023/6/21/6-thi-xa-phu-my-16873146381691226222198.jpg" }} style={{ width: 60, height: 60, borderRadius: 30 }} resizeMode="cover"></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginRight: 8 }}>
                        <TouchableOpacity>
                            <Image source={{ uri: "https://sohanews.sohacdn.com/thumb_w/1000/160588918557773824/2023/6/20/photo-2-1687283382097520843048.jpg" }} style={{ width: 60, height: 60, borderRadius: 30 }} resizeMode="cover"></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginRight: 8 }}>
                        <TouchableOpacity onPress={() => {
                            console.log(123);
                        }}>
                            <Image source={{ uri: "https://sohanews.sohacdn.com/thumb_w/1000/160588918557773824/2023/6/20/4-1687283405506869800315.jpg" }} style={{ width: 60, height: 60, borderRadius: 30 }} resizeMode="cover"></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginRight: 8 }}>
                        <TouchableOpacity>
                            <Image source={{ uri: "https://sohanews.sohacdn.com/thumb_w/980/160588918557773824/2023/6/21/6-thi-xa-phu-my-16873146381691226222198.jpg" }} style={{ width: 60, height: 60, borderRadius: 30 }} resizeMode="cover"></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginRight: 8 }}>
                        <TouchableOpacity>
                            <Image source={{ uri: "https://sohanews.sohacdn.com/thumb_w/1000/160588918557773824/2023/6/20/photo-2-1687283382097520843048.jpg" }} style={{ width: 60, height: 60, borderRadius: 30 }} resizeMode="cover"></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginRight: 8 }}>
                        <TouchableOpacity onPress={() => {
                            console.log(123);
                        }}>
                            <Image source={{ uri: "https://sohanews.sohacdn.com/thumb_w/1000/160588918557773824/2023/6/20/4-1687283405506869800315.jpg" }} style={{ width: 60, height: 60, borderRadius: 30 }} resizeMode="cover"></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginRight: 8 }}>
                        <TouchableOpacity>
                            <Image source={{ uri: "https://sohanews.sohacdn.com/thumb_w/980/160588918557773824/2023/6/21/6-thi-xa-phu-my-16873146381691226222198.jpg" }} style={{ width: 60, height: 60, borderRadius: 30 }} resizeMode="cover"></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginRight: 8 }}>
                        <TouchableOpacity>
                            <Image source={{ uri: "https://sohanews.sohacdn.com/thumb_w/1000/160588918557773824/2023/6/20/photo-2-1687283382097520843048.jpg" }} style={{ width: 60, height: 60, borderRadius: 30 }} resizeMode="cover"></Image>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </RBSheet>
        </View>
    )
}

export default Product;