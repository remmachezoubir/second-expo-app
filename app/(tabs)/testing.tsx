import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
export default function Testing() {
  
    return (

    <View style={tw.style('justify-end' , 'items-center')}>
      <Text style={tw`text-green-400  font-bold text-xl `  } className=''>Testing</Text>
    </View>
  )
}