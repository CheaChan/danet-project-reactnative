import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default function ProductDetailsScreen({ route, navigation }) {
    return (
      <View style={ styles.container}>
        <Text style={styles.item}>Product Id: {route.params.proId}</Text>
        <Text style={styles.item}>Product Name: {route.params.proName}</Text>
        <Text style={styles.item}>Product Price: {route.params.proPice}</Text>
        <Text style={styles.item}>Product Brand: {route.params.proBrand}</Text>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // alignItems: 'center',
      // justifyContent: 'center',
      paddingTop: 30,
      paddingStart:50,
      paddingEnd: 30,
      backgroundColor: '#ff8080',
      fontSize:18,
    },
    item: {
      fontSize:17,
    }
  });