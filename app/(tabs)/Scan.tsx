import { Text , View  } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import tw from 'twrnc'
import BarScanner from '@/utils/BarcodeScanner'
export default function Scan() {

  return (

    <SafeAreaView style={{flex:1}}>

      <View  style={tw` bg-gray-900   flex-1`}>
        <Text style={tw`text-indigo-700  capitalize text-center   p-4 font-bold bg-gray-800 w-full  mb-4  text-xl `}>Scanner </Text>
        <View style={tw` justify-center flex-1 `}>

        <BarScanner/>
        </View>
      </View>
    </SafeAreaView>
  )
}