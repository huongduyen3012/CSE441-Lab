import { DefaultTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import App from "./App";

const AppTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#04007E'
    },
};

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 40,
        paddingTop: 10,

    },

    header: {
        fontSize: 80,
        fontWeight: 'bold',
        color: AppTheme.colors.primary,
        textAlign: "left",
    },
    input: {
        borderColor: AppTheme.colors.primary,
        borderBottomWidth: 1,
        paddingBottom: 5,
        width: '100%',
        marginTop: 60,
        paddingLeft: 1,
        fontSize: 15,
    },

    button: {
        backgroundColor: AppTheme.colors.primary,
        borderRadius: 20,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginTop: 50,
    },

    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
    },

    text: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: 50,
    },

    bottomButton: {
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginTop: 50,
    },

    bottomText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: AppTheme.colors.primary,
    }
});