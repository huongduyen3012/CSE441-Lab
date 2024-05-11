import React, { useEffect } from "react";
import { View, Text, FlatList } from 'react-native';
import { useState } from "react";
import { Image } from "react-native";
import { Button } from "react-native-paper";
import styles from "../style";
import { SafeAreaView } from "react-native-safe-area-context";

const Products = () => {
    const [data, setData] = useState([]);
    const filePath = 'https://dummyjson.com/products/';

    useEffect(() => {
        fetch(filePath)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                return response.json();
            })
            .then((d) => {
                setData(d.products);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    });

    const Item = ({ data }) => (
        <View style={styles.containerView}>
            <View style={styles.imageView}>
                <Image style={styles.image} source={{ uri: data.thumbnail }} />
            </View>
            <View style={styles.textView}>
                <Text style={{ fontWeight: 'bold' }}>Title: {data.title}</Text>
                <Text>Description: {data.description}</Text>
                <Text>Price: {data.price}</Text>
                <Text style={{ color: 'green' }}>Discount: {data.discountPercentage} off</Text>
                <Text>Rating: {data.rating}</Text>
                <Text>Stock: {data.stock}</Text>
                <Text>Brand: {data.brand}</Text>
                <Text>Category: {data.category}</Text>

                <View style={styles.buttonView}>
                    <Button mode="contained" onPress={() => console.log('Pressed')}>
                        DETAIL
                    </Button>
                    <Button mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>
                        ADD
                    </Button>
                    <Button mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>
                        DELETE
                    </Button>

                </View>
            </View>
        </View>
    );

    return (
        <SafeAreaView>
            <View>
                <Text style={styles.title}>Product List</Text>
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) => <Item data={item} />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}
export default Products;