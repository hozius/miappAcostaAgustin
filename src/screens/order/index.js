import React, { useEffect } from "react";
import { View, Text, FlatList, Button , TextInput } from "react-native";
import { useDispatch, connect, useSelector } from "react-redux";
import OrderItem from "../../components/molecules/order-item";
import { getOrders, removeOrder } from "../../store/actions/order.action";
import { styles } from "./styles";
import { colors } from "../../constants/themes";



const Order = ({ navigation, route }) => {

    const orden = route.params.result._W

    const dispatch = useDispatch();
    const userId = useSelector(state => state.auth.userId);
    const orders = useSelector(state => state.order.orders);

    useEffect(() => {
        dispatch(getOrders(userId));
    }, []);

    const onDelete = (id) => {
        dispatch(removeOrder(id));
    }

    const onDetails = (id) => {
        //console.log(id);
    }
    
    const text = ''

    return (
        <View style={styles.container}>
            <View style={styles.texto}>
                <Text style={styles.orden}>El numero de orden de pago temporal es: </Text>
                <Text style={styles.orden_bold}>{orden}</Text>
                <Text style={styles.orden}>Ingrese correo para envio de link de pago</Text>
            
            <TextInput
                style={styles.correo}
                onChangeText={null}
                value={text}
                placeholder="Ingrese email"
            />
            </View>
            <Button title="Confirmar" onPress={(navigation) => {}} color='#212121'/>
            
        </View>
    )
}

export default connect()(Order);