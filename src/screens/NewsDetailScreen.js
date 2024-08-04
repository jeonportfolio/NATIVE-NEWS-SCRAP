import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { Header } from '../components/Header/Header';
import { Spacer } from '../components/Spacer';
import Webview from 'react-native-webview';
import { useDispatch, useSelector } from 'react-redux';
import { clipNewsItem } from '../actions/news';

export const NewsDetailScreen = ()=>{
    const navigation = useNavigation();
    const routes = useRoute();
    const dispatch = useDispatch();

    const onPressBack = useCallback(()=>{
        navigation.goBack();
    }, [])

    const onPressFavorite = useCallback(()=>{
        dispatch(clipNewsItem(routes.params.newsItem))
    }, [])

    


    console.log(routes.params);

    return (
        <View style={{flex:1}}>
            <Header>
                <Header.Group>
                    <Header.Icon iconName='arrow-back' onPress={onPressBack}/>
                    <Spacer horizontal space={12}/>
                    <View style={{maxWidth:200}}>
                        <Header.Title title='NEWS_DETAIL'></Header.Title>
                    </View>
                </Header.Group>

                <Header.Icon iconName={'heart'} onPress={onPressFavorite}/>
            </Header>

            <Webview
                style={{flex:1}}
                source={{uri:routes.params.newsItem.link}}
             />
            
        </View>
    )
}