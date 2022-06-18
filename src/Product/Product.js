import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Product.style';

const Product = ({products}) => {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: products.imgURL }} />
            <Text style={styles.title} >{products.title}</Text>
            <Text style={styles.price} >{products.price}</Text>
            {products.inStock === true ? <Text style={styles.inStock} >STOKTA YOK</Text> : null}
            
        </View>

    );
};

export default Product;