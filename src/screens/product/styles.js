import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    text: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 10,
        color: '#000',
    },
    title: {
        fontFamily: 'OpenSans-Bold',
        textAlign: 'center',
        fontSize: 32,
        marginVertical: 10,
        color: '#000',
    },
    description: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 10,
        color: '#000',
    },
    price: {
        fontFamily: 'OpenSans-Bold',
        textAlign: 'center',
        fontSize: 32,
        marginVertical: 10,
        color: '#000',
    },
    image: {
        marginLeft:width/5,
        width: 240,
        height: 240,
    },
})