import { StyleSheet, View, Text, Alert, Button } from "react-native";
import { Icon, IconButton } from "react-native-paper";
import ContactThum from "./ContactThum";
import React from "react";
import 'react-native-vector-icons';


const ProfileContact = ({ route }) => {
    const { contact } = route.params;
    const { id, avatar, name, email, phone, cell, favorite } = contact;

    return (
        <View style={styles.container}>
            <View style={styles.avatarSection}>
                <ContactThum avatar={avatar} name={name} phone={phone} />
            </View>
            <View style={styles.detailsSection}>
                <View style={styles.viewDetails}>
                    <IconButton icon="email" size={20}></IconButton>
                    <View style={{marginLeft: 10}}>
                        <Text style={styles.title}>Email</Text>
                        <Text style={styles.subtitle}>{email}</Text>
                    </View>
                </View>

                <View style={styles.viewDetails}>
                <IconButton icon="phone" size={20}></IconButton>
                    <View style={{marginLeft: 10}}> 
                        <Text style={styles.title}>Work</Text>
                        <Text style={styles.subtitle}>{phone}</Text>
                    </View>
                </View>

                <View style={styles.viewDetails}>
                <IconButton icon="cellphone" size={20}></IconButton>
                    <View style={{marginLeft: 10}}>
                        <Text style={styles.title}>Personal</Text>
                        <Text style={styles.subtitle}>{cell}</Text>
                    </View>
                </View>

                <View style={{alignItems: 'center'}}>
                    <IconButton icon={favorite == true ? "star-check" : "star-check-outline"}
                        iconColor="#663399" size={20} onPress={() => { }} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatarSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#567CDF',
    },

    detailsSection: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'stretch',
        justifyContent: 'space-around',
        paddingTop: 15,
    },

    viewDetails: {
        flexDirection: 'row', 
        borderBottomWidth: 1, 
        borderBottomColor: 'grey',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },

    title: {
        fontSize: 17, 
        color: 'black', 
        fontWeight: 'bold',
        marginBottom: 13,
    },

    subtitle: {
        color: 'blue',
        marginBottom: 10,
    }

})

export default ProfileContact;