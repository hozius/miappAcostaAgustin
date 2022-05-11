import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
    container: {
        height: height * 0.09,
        alignItems: 'left',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: 'center',
        
    },
    title: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
        color: '#212121',
        backgroundColor: '#fff',
        marginHorizontal: 40,
    },
    image: {
        width: 64,
        height: 64,
        marginHorizontal: 40,
    },
});