import { FlatList, StyleSheet } from 'react-native';

import { Text, View , SafeAreaView } from '@/components/Themed';
import { Link } from 'expo-router';
import tw from 'twrnc'

import {  TouchableOpacity } from 'react-native';
export default function TabOneScreen() {
  const Mydata =[
    {
      item:33333
    },
    {
      item:4254
    },
    {
      item:0
    },
    {
      item:90
    },
    {
      item:543
    },
    {
      item:62
    },
    {
      item: 58
    },
    {
      item: 5
    },
  ]
  
  return (
    <SafeAreaView >

      <View
        style={tw`bg-gray-900 p-1 flex-1 items-center`}

        >
        <Text style={tw`text-indigo-700  capitalize  p-4 font-bold bg-gray-800 w-full text-center  text-xl m-4 `}>product scanner </Text>
        <Link href={'/Scan'} asChild>
          <TouchableOpacity style={tw`text-lg  bg-sky-400 border rounded-xl p-4 w-52 focus:bg-sky-400  hover:bg-sky-400`}>
            <Text style={tw`text-black font-bold  text-lg text-center `}>

              add a new product
            </Text>
          </TouchableOpacity>
        </Link>
        <Text style={tw`text-indigo-700  capitalize  p-4 font-bold  w-full text-center  text-xl `}>products :</Text>
      
        <FlatList data={Mydata}
        renderItem={item=>(<Product prop={item.item.item}/>)}
        style={{...tw`bg-indigo-600  rounded-xl p-8 w-full `  }}
        showsHorizontalScrollIndicator={false}
        
        />
      </View>
        </SafeAreaView>
  );
}

const Product = ({prop}:any) => (
  <View style={tw`w-full p-1 my-4 bg-indigo-700 shadow shadow-xl shadow-sky-800 rounded-xl p-4 `}>

    <Text>hello {prop}</Text>
    <Text>hello {prop}</Text>
    <Text>hello {prop}</Text>
    <Text>hello {prop}</Text>
    <Text>hello {prop}</Text>
    <Text>hello {prop}</Text>
    <Text>hello {prop}</Text>
    <Text>hello {prop}</Text>
    <Text>hello {prop}</Text>
    <Text>hello {prop}</Text>
    <Text>hello {prop}</Text>
    <Text>hello {prop}</Text>
    <Text>hello {prop}</Text>
    <Text>hello {prop}</Text>
    <Text>hello {prop}</Text>
    

  </View>
)
