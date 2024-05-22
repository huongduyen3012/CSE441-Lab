import 'react-native-gesture-handler';
import 'react-native-get-random-values';
// import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import React from 'react';
import ContactThum from './ContactThum';
import { FlatList, StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const keyExtractor = ({phone}) => phone;

const Favorite = ({navigation}) => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const loadContacts = async () => {
            try {
                const storedContacts = await AsyncStorage.getItem('contacts');
                if (storedContacts != null) {
                    setContacts(JSON.parse(storedContacts));
                }
            } catch (e) {
                console.error("Failed to load contacts", e);
            }
        };

        loadContacts();
    }, []);

    const renderFavoriteThumnail = ({item}) => {
        const {avatar} = item;
        return (
            <ContactThum avatar={avatar} 
            onPress={() => navigation.navigate('ProfileContact', {contact: item})}
            />
        )
     };

     const favorites = contacts.filter((contact) => contact.favorite);
return (
    <View>
        <FlatList data={favorites}
        keyExtractor={keyExtractor}
        numColumns={3}
        contentContainerStyle={style.list}
        renderItem={renderFavoriteThumnail} />

    </View>
)
};


const style = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        flex: 1,
    },

    list: {
        alignItems: 'center',
    },
})

export default Favorite;