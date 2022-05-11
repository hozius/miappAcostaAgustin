import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin:0
    },
    carousel: {
        height: height*0.35,
        marginBottom: 10,        
    },
})