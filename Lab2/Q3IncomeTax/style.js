import { Button, StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f0f0f0',
    },

    title: {
        fontSize: 25,
        marginBottom: 10,
        fontWeight: 'bold',
        color: 'black',
    },

    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
        borderRadius: 5,
        fontSize: 20,
        backgroundColor: 'white',

    },

    result: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },

    Button: {
        width: '100%',
   
        borderRadius: 5,
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'skyblue'
    }
})