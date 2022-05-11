import { StyleSheet, Dimensions } from 'react-native'
import { colors } from '../../../constants/themes'

const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height / 4.3,
        flexDirection:'row',
        marginHorizontal:0,
        paddingHorizontal:0,
        alignItems:'center',
        justifyContent: 'space-between'
    },
    touchable: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    title: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 18,
        color: colors.textColor
    },
    image: {
        width: 142,
        height: 142,
    },
    opcion: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
})