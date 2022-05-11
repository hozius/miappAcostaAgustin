import React from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import { styles } from './styles';

const CategoryGrid = ({ item, onSelected }) => {
    return (    
         <View style={[styles.container]}>
            <TouchableOpacity 
                style={styles.touchable}
                onPress={() => onSelected(item)}    
            >
                <View style={styles.opcion}>
                    <Image style={styles.image} source={item.image}/>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
            </TouchableOpacity>
         </View>
    )
}

export default CategoryGrid;