import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#AEB6BF',
        margin: 10,
        borderRadius: 10,
        padding: 10,
        height: Dimensions.get('window').height / 2.4,
        width: Dimensions.get('window').width / 2.2, 
    },
    image:{
        height: Dimensions.get('window').height / 4, borderRadius: 10,
        width: Dimensions.get('window').width / 2.5, 
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
        
    },
    price:{
        marginTop: 5,
        marginBottom: 4,
        fontWeight:'bold',
        fontSize: 15,
        color:'#5D6D7E'
    },
    inStock:{
        color: 'red',
        fontSize: 13,
        fontWeight: 'bold',
        paddingBottom: 2
    }
})
