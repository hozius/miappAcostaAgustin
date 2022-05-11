import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'

const Header = ({ title }) => {
    return (
        <View style={styles.container}>
            <Image resizeMode='contain' style={styles.image} source={require("../../../assets/images/mon_ami_logo.jpg")}/>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default Header;