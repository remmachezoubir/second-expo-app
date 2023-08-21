import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import tw from 'twrnc'
export default function BarScanner() {
  const [hasPermission, setHasPermission] = useState<any>(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');

    })()

  }, []);

  const handleBarCodeScanned = ({ type, data }: any) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text style={tw`text-white  text-3xl font-semibold text-center `}>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text style={tw`text-red-800 text-3xl font-semibold text-center `}>No access to camera !!</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={{ color: 'green' }}>Scan the QR Code!</Text>

      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    width: '100%',
    height: "100%",
  },
});
