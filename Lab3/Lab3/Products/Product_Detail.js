import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { Card, Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../style";

const ProductDetail = () => {
    const [data, setData] = useState([]);

    const filePath = 'https://dummyjson.com/products/2';

    useEffect(() => {
        fetch(filePath)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((d) => {
                setData(d);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            })
    });

    // console.log(data);

    const ProductView = ({item}) =>{
        
    }

    return (
        <SafeAreaView>
        <Text style={styles.title}>Product Detail</Text>
        <Card>
        <Card.Cover source={{ uri: data.images[0]}} />
            <Card.Title title={data.title} subtitle={data.description} />
            <Card.Content>
                <Text>Price: ${data.price}</Text>
                <Text>Discount: {data.discountPercentage}%</Text>
                <Text>Rating: {data.rating}</Text>
                <Text>Stock: {data.stock}</Text>
                <Text>Brand: {data.brand}</Text>
                <Text>Category: {data.category}</Text>
            </Card.Content>

            <Card.Actions>
                <Button mode="contained">Delete</Button>
                <Button mode="contained">Cancel</Button>
            </Card.Actions>
        </Card>
    </SafeAreaView>
    )
};

export default ProductDetail;