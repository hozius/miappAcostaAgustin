import React from 'react'
import { useSelector, connect, useDispatch } from 'react-redux';
import { View, Text, Button, Image } from 'react-native'
import { colors } from '../../constants/themes';
import { styles } from './styles'
import { addItem } from '../../store/actions/cart.action';
const Products = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const product = useSelector(state => state.products.selectedProduct);
    const { name, description, price, weight, image } = product;
    const handleAddToCart = () => dispatch(addItem(product));
    return (
        <View style={styles.container}>
            <Image resizeMode='contain' style={styles.image} source={image}/>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.description}>Unidad: {weight}</Text>
            <Text style={styles.price}>${price}</Text>
            <Button title="Comprar" onPress={() => handleAddToCart()} color={colors.buttonColor}/>
        </View>
    )
}

export default connect()(Products)