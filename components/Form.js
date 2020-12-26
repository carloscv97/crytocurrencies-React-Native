import React, { useEffect, useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native';
import axios from 'axios';

const Form = ({ currency, cryptocurrency, setCurrency, setCryptocurrency, setLoading, handleQuoteCryptocurrency }) => {


   const [cryptocurrencies, setCryptocurrencies] = useState([]);

   useEffect(() => {

      const getCryptocurrenciesAPI = async () => {
         const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
         const { data } = await axios.get(url);
         setCryptocurrencies(data.Data)
      }
      getCryptocurrenciesAPI();
   }, [])

   const handleQuotePrice = () => {
      //Validation
      if (currency.trim() === '' || cryptocurrency.trim() === '') {
         return showErrorAlert();
      }

      setLoading(true);
      handleQuoteCryptocurrency();

   }

   const showErrorAlert = () => {
      Alert.alert(
         'Error',
         'Both fields are required',
         [
            { text: 'OK' }
         ]
      )
   }

   return (
      <View>
         <Text style={styles.label}>Currency</Text>
         <Picker
            selectedValue={currency}
            onValueChange={(currency) => setCurrency(currency)}
            itemStyle={{ height: 120, }}
         >
            <Picker.Item label="-- Select --" value="" />
            <Picker.Item label="Dolares" value="USD" />
            <Picker.Item label="Peso Mexicano" value="MXN" />
            <Picker.Item label="Colones" value="CRC" />
            <Picker.Item label="Euros" value="EUR" />
            <Picker.Item label="Libra Esterlina" value="GBP" />

         </Picker>
         <Text style={styles.label}>Cryptocurriency</Text>
         <Picker
            selectedValue={cryptocurrency}
            onValueChange={(cryptocurrency) => setCryptocurrency(cryptocurrency)}
            itemStyle={{ height: 120, }}
         >
            <Picker.Item label="-- Select --" value="" />
            {
               cryptocurrencies.map(({ CoinInfo }, index) => (
                  <Picker.Item key={index} label={CoinInfo.FullName} value={CoinInfo.Internal} />
               ))
            }

         </Picker>
         <TouchableHighlight
            style={styles.quoteButton}
            onPress={handleQuotePrice}
         >
            <Text style={styles.quoteButtonText}>
               Q U O T E
            </Text>
         </TouchableHighlight>
      </View>
   )
}

const styles = StyleSheet.create({
   label: {
      fontFamily: 'Lato-Black',
      textTransform: 'uppercase',
      fontSize: 22,
      marginVertical: 20
   },
   quoteButton: {
      backgroundColor: '#522C7B',
      padding: 10,
      marginVertical: 15,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
   },
   quoteButtonText: {
      color: '#fff',
      fontSize: 18,
      fontFamily: 'Lato-Black',
      textTransform: 'uppercase',
      textAlign: 'center'
   }
});

export default Form
