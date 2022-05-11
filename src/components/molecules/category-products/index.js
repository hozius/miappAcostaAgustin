import React from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import { styles } from './styles';

const CategoryProducts = ({ item, onSelected }) => {
    return (    
         <View style={styles.container}>
            <TouchableOpacity 
                style={styles.touchable}
                onPress={() => onSelected(item)}    
            >
                <View style={styles.details}>
                    <View style={{ paddingHorizontal: 8 }}>
                        <Image style={styles.image} resizeMode='contain' source={item.image} />
                    </View>
                    <View style={{ paddingHorizontal: 8 }}>
                        <Text style={styles.title}>{item.name}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                    <View style={{ paddingHorizontal: 8 }}>
                        <Text style={styles.price}>${item.price}</Text>
                    </View>
                    
                </View>
            </TouchableOpacity>
         </View>
    )
}

export default CategoryProducts;