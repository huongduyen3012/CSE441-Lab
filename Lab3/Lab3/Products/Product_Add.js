import React, { useState } from "react";
import { Alert, ScrollView } from "react-native";
import { View, Text, TextInput } from "react-native";
import { Button } from "react-native-paper";
import styles from "../style";

const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [discountPercentage, setDiscountPercentage] = useState('');
    const [rating, setRating] = useState('');
    const [stock, setStock] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [images, setImage] = useState('');

    handleSubmit = () => {
        fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: title,
                description: description,
                price: price,
                discountPercentage: discountPercentage,
                rating: rating,
                stock: stock,
                brand: brand,
                category: category,
                images: images,
            }),
        })

            .then((res) => res.json())
            .then(console.log);
        Alert.alert("Add successful")
    };

    return (
        <ScrollView style={styles.addProductView}>
            <Text style={styles.title}>Add a product</Text>
            <Text style={styles.productTitle}>Title</Text>
            <TextInput style={styles.textInput} value={title} placeholder="Enter title" onChangeText={title => setTitle(title)} />

            <Text style={styles.productTitle}>Description</Text>
            <TextInput style={styles.textInput} value={description} placeholder="Enter description" onChangeText={description => setDescription(description)} />

            <Text style={styles.productTitle}>Price</Text>
            <TextInput style={styles.textInput} value={price} placeholder="Enter price" onChangeText={price => setPrice(price)} />

            <Text style={styles.productTitle}>Discount Percentage</Text>
            <TextInput style={styles.textInput} value={discountPercentage} placeholder="Enter Discount Percentage" onChangeText={discountPercentage => setDiscountPercentage(discountPercentage)} />

            <Text style={styles.productTitle}>Rating</Text>
            <TextInput style={styles.textInput} value={rating} placeholder="Enter rating" onChangeText={rating => setRating(rating)} />

            <Text style={styles.productTitle}>Stock</Text>
            <TextInput style={styles.textInput} value={stock} placeholder="Enter stock" onChangeText={stock => setStock(stock)} />

            <Text style={styles.productTitle}>Brand</Text>
            <TextInput style={styles.textInput} value={brand} placeholder="Enter brand" onChangeText={brand => setBrand(brand)} />

            <Text style={styles.productTitle}>Category</Text>
            <TextInput style={styles.textInput} value={category} placeholder="Enter category" onChangeText={category => setCategory(category)} />

            <Text style={styles.productTitle}>Images</Text>
            <TextInput style={styles.textInput} value={images} placeholder="Enter images(URL)s" onChangeText={images => setImage(images)} />
            <Button mode="contained" onPress={handleSubmit}>
                SUBMIT
            </Button>
        </ScrollView>
    )
}

export default AddProduct;