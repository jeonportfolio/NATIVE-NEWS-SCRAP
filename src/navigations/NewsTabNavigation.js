import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { FavoriteNewsListScreen } from "../screens/FavoriteNewsListScreen";
import { NewsListScreen } from "../screens/NewsListScreen";
import { TabIcon} from "../components/TabIcon"

const BottomTab = createBottomTabNavigator();

export const NewsTabNavigation = () => {
    return(
        <BottomTab.Navigator
            screenOptions={({route}) => ({
                    headerShown: false,
                    tabBarIcon: ({color}) => {
                        const getIconName = () => {
                            if(route.name === 'FavoriteNewsList'){
                                return 'star';
                            }

                            return 'home';
                        }

                        const iconName = getIconName();

                        return(
                            <TabIcon iconName = {iconName} iconColor={color}/>
                        )
                    }
            })}
        >
            <BottomTab.Screen name='NewsList' component={NewsListScreen}></BottomTab.Screen>
            <BottomTab.Screen name='FavoriteList' component={FavoriteNewsListScreen}></BottomTab.Screen>
        </BottomTab.Navigator>
    )
}