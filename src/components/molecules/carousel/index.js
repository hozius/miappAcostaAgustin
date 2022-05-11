import React from "react";
import { FlatList, View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native'
import { styles } from "./styles";
import { colors } from "../../../constants/themes";
import Carousel from 'react-native-snap-carousel'

const CarouselImages = ({ height, width }) => {

    const images2 = [
        { id: 1, image: require('../../../../assets/images/slide1.jpg') },
        { id: 2, image: require('../../../../assets/images/slide2.jpg') },
        { id: 3, image: require('../../../../assets/images/slide3.jpg') },
        { id: 4, image: require('../../../../assets/images/slide4.jpg') },
        { id: 5, image: require('../../../../assets/images/slide5.jpg') }
      ];
    const renderItem = ({item}) => {
        return (
            <View style={styles.slide}>
                <Image
                    style={{ width, height}}
                    PlaceholderContent={<ActivityIndicator color="#fff"/>}
                    source={item.image}
                />
            </View>
        )
    }

    return (
        <Carousel
            layout={"default"}
            data={images2}
            sliderWidth={width}
            itemWidth={width-30}
            itemHeight={height}
            renderItem={renderItem}
            enableMomentum={false}
            lockScrollWhileSnapping
            autoplay
            useScrollView
            loop
            autoplayInterval={3000}
        />
    )
}

export default CarouselImages;