import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SearchBar from "react-native-dynamic-search-bar";
import Product from './Product';
import product_data from './products.json';

function App() {

  const renderProducts = ({ item }) => <Product products = {item} />

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title} >PATIKASTORE</Text>
      <SearchBar
        placeholder={"Arama "}
        onPress={() => alert("onPress")}
        onChangeText={(text) => console.log(text)}
      />
      <FlatList 
        keyExtractor={(item, index) => item.id.toString()}
        data={product_data}
        renderItem={renderProducts}
        numColumns={2}
        //ListFooterComponent={product_data[-1]}
      />
      <View style={{ flex: 1, margin: 5, backgroundColor: '#ddd', height: 130, width: 200 }} ></View>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    
  },
  title:{
    fontSize: 25,
    fontWeight: 'bold',
    color: 'purple',
    textAlign: 'center',
    fontStyle: 'italic'
  },
  footerStyle: {
    borderTopColor: 'red',
    borderTopWidth: 6,
    borderBottomColor: 'red',
    borderBottomWidth: 15
  }
});

export default App;
