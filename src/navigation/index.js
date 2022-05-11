import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native'
// import MainNavigator from './main';
import Header from '../components/header';
import MainNavigator from './main';
import AuthNavigator from './auth';
import { useSelector } from 'react-redux';
const AppNavigation = () => {
    //const isAuth = useSelector(state => state.auth.userId);
    return (
        <NavigationContainer>
            <Header title='Mon Ami' />
            <MainNavigator />
        </NavigationContainer>
    )
}

export default AppNavigation;