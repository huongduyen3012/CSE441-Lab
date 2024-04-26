import React from "react";
import { View, Text, Button, Alert } from 'react-native';

export default function EmployeeDetails(props) {
    function handleUpdate() {
        Alert.alert("Employee information updated successfully");
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', marginTop: 20 }}>
            <Text style={{ fontSize: 20, color: 'black' }}>Full name: {props.fullname}</Text>
            <Text style={{ fontSize: 20, color: 'black' }}>Age: {props.age}</Text>
            <Text style={{ fontSize: 20, color: 'black' }}>Occupation: {props.occupation}</Text>
            <Button title="Update" onPress={handleUpdate}></Button>
        </View>
    )
}
