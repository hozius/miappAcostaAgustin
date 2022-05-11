import React from 'react'
import { FlatList, View,Text, Dimensions, Image } from 'react-native'
import { styles } from './styles'
import { useSelector, useDispatch, connect } from 'react-redux'
import CategoryGrid from '../../components/molecules/category-grid/index'

import CarouselImages from '../../components/molecules/carousel';
import { selectedCategory } from '../../store/actions/category.action'
import {getCategorias} from '../../db/index';

const widthScreen = Dimensions.get("window").width
const heightScreen = Dimensions.get("window").height

//const categorias = getCategorias();

//console.log(categorias)
//getCategorias().then(data=> console.log(data))

const Home = ({ navigation  }) => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories.categories)
    
    const handleSelectCategory = (category) => {
        dispatch(selectedCategory(category.id))
        navigation.navigate('Category', { name: category.name })
    }
    const renderItem = ({ item }) => <CategoryGrid item={item} onSelected={handleSelectCategory} />
    return (
        <View style={styles.container}>
            <View style={styles.carousel}>
            <CarouselImages
                height={heightScreen*0.35}
                width={widthScreen}
            />
            </View>
            <View style={styles.flat}>
            <FlatList 
                numColumns={2}
                data={categories}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
            </View>
        </View>
    )
}

export default connect()(Home)