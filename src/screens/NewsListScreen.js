import react from "react";
import { View } from "react-native";
import { Header } from "../components/Header/Header";
import { useDispatch } from "react-redux";
import { Typography } from "../components/Typography";
import { getNewsList } from "../actions/news";
import { Button } from "../components/Button"

export const NewsListScreen = () => {

    const dispatch = useDispatch();

    return (
        <View style={{flex:1}}>
                <Header>
                    <Header.Title title={'NEWS_LIST'}></Header.Title>
                </Header>
                <View style ={{flex:1, alignItems:'center' ,justifyContent:'center' }}>
                        <Button onPress={()=>{
                            dispatch(getNewsList());
                        }}>
                            <Typography fontSize={24}>ACTION 요청하기</Typography>
                        </Button>
                </View>
        </View>
    )
}