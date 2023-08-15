import { Text, View } from '@/components/Themed'
import React from 'react'
import tw from 'twrnc'
import BarScanner from '@/utils/BarcodeScanner'
import { SafeAreaView } from 'react-native-safe-area-context'
export default function Scan() {

  return (

    <SafeAreaView>

      <View darkColor='white'>
        <Text darkColor='green' lightColor='red' >Scanner</Text>
        <BarScanner/>
      </View>
    </SafeAreaView>
  )
}