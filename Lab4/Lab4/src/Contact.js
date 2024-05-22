import React, { useEffect, useState } from "react";
// import { fetchContactSuccess, mapContact } from "./Store";
import 'react-native-get-random-values';
import ContactListItem from "./ContactListItem";
import { FlatList, StyleSheet } from "react-native";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const keyExtractor = ({ phone }) => phone;

const fetchContacts = async () => {
    const data = await fetch("https://randomuser.me/api/?results=50")
    const ContactData = await data.json();
    return ContactData;
};

const Contact = ({ navigation }) => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const loadContact = async () => {
            try {
                const storedContact = await AsyncStorage.getItem('contacts');
                if (storedContact != null) {
                    setContacts(JSON.parse(storedContact));
                } 
            } catch (error) {
                console.log(error);
            }
        }

        loadContact();
    }, []);




    const renderContacts = ({ item }) => {
        const { name, avatar, phone } = item;
        return (
            <ContactListItem
                name={name} avatar={avatar} phone={phone}
                onPress={() => navigation.navigate("ProfileContact", { contact: item })}
            />
        )
    };

    return (
        <View style={style.container}>
            <FlatList
                data={contacts}
                keyExtractor={keyExtractor}
                renderItem={renderContacts}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
    }
});

export default Contact;