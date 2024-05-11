import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerView: {
        flexDirection: 'row',
        marginTop: 5,
        marginLeft: 5,
        marginBottom: 15,
        backgroundColor: '#F9F9F9'
    },
    // title: {
    //     fontSize: 35,
    //     color: "black",
    //     fontWeight: 'bold',
    //     marginBottom: 20,
    // },
    imageView: {
        flex: 1,
    },

    image: {
        width: 100,
        height: 100,
        marginLeft: 5,
    },

    textView: {
        flex: 2,
    },
    buttonView: {
        flexDirection: 'row',
        marginTop: 5,
        flex: 1,
    },
    button: {
        marginLeft: 5,
    },
    addProductView: {
        margin: 10,


    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
        textAlign: 'center',
    },

    textInput: {
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#fff',
        padding: 5,
        marginBottom: 5,
        marginTop: 5,
    },


    productTitle: {
        fontWeight: 'bold',
        fontSize: 20,
    },

    cardContainer: {
        margin: 15,
    },

    searchBar: {
       margin: 10,
    },

    btnSearch: {
        margin: 10,
    }

});

export default styles;