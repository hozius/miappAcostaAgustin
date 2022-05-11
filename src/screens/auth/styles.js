import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants/themes';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primaryColor,
        color: '#000',
    },
    containerCard: {
        height: height / 2,
        width: width * 0.7,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        color: '#000',
    },
    formTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#000',
    },
    formContainer: {
        flex: 1,
        color: '#000',
    },
    label: {
        fontSize: 13,
        marginBottom: 5,
        fontWeight: 'bold',
        color: '#000',
    },
    linkText: {
        color: colors.primaryColor,
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    title: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    }
});