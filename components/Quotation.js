import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Quotation = ({ result }) => {

   if (Object.keys(result).length === 0) return null;

   const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = result;

   return (
      <View style={styles.result}>
         <Text style={[styles.text, styles.price]}>
            <Text style={styles.span}>{PRICE}</Text>
         </Text>
         <Text style={styles.text}>Highest Price of The day: {' '}
            <Text style={styles.span}>{HIGHDAY}</Text>
         </Text>
         <Text style={styles.text}>Lowest Price of The day: {' '}
            <Text style={styles.span}>{LOWDAY}</Text>
         </Text>
         <Text style={styles.text}>Varation last 24 hr's: {' '}
            <Text style={styles.span}>{CHANGEPCT24HOUR}</Text>
         </Text>
         <Text style={styles.text}>Last Update: {' '}
            <Text style={styles.span}>{LASTUPDATE}</Text>
         </Text>
      </View>
   )
}

const styles = StyleSheet.create({
   result: {
      backgroundColor: '#522C7B',
      borderRadius: 10,
      padding: 20,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
   },
   text: {
      color: '#fff',
      fontFamily: 'Lato-Regular',
      fontSize: 17,
      marginBottom: 10
   },
   price: {
      fontSize: 38,
   },
   span: {
      fontFamily: 'Lato-Black',
   }
});

export default Quotation
