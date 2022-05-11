import React from 'react';
import { Platform } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Cart from '../screens/cart/index'
import { colors } from '../constants/themes';
import Order from '../screens/order/index';
const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Cart'
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? colors.primaryColor : '',
                },
                headerTintColor: Platform.OS === 'android' ? 'black' : colors.primaryColor,
                headerTitleStyle: {
                    fontFamily: 'OpenSans-Bold',
                    fontSize: 17
                }
            }}
        >
            <Stack.Screen name='Cart' component={Cart} />
            <Stack.Screen name='Order' component={Order} />
        </Stack.Navigator>
    )
}

export default CartNavigator;