import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Text, TextInput } from 'react-native-paper';

const TemperatureScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>
        Convertidor de temperaturas
      </Text>
      <Text style={styles.label}>Grados Celsius:</Text>
      <TextInput
        id="celsiusInput"
        mode="flat"
        style={styles.input}
        keyboardType="numeric"
        inputMode="decimal"
        theme={{ colors: { primary: '#0d4f11' } }}
      />
      <Text style={styles.label}>Grados Fahrenheit:</Text>
      <TextInput
        id="fahrenheitResult"
        mode="flat"
        value=""
        editable={false}
        selectTextOnFocus={false}
        style={styles.input}
      />

      <View style={styles.buttonWrapper}>
        <Button id="convertButton" mode="contained" style={styles.button}>
          CONVERTIR
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d2c9a7',
    padding: 20,
  },
  title: {
    marginBottom: 16,
    color: '#ffffff',
    backgroundColor: '#0d4f11',
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 10,
  },
  label: {
    marginBottom: 8,
    color: '#4b5d78',
    fontSize: 15,
  },
  input: {
    marginBottom: 16,
    backgroundColor: '#f9fbff',
  },
  celsiusInputFocused: {
    borderColor: '#0d4f11',
  },
  buttonWrapper: {
    alignItems: 'center',
    marginTop: 8,
  },
  button: {
    borderRadius: 10,
    width: '40%',
    minWidth: 140,
    backgroundColor: '#0d4f11',
  },
});

export default TemperatureScreen;