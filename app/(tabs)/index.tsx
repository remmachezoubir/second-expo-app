import { Button, FlatList, StyleSheet } from 'react-native';

import { Text, View, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';
import tw from 'twrnc'

import { TouchableOpacity } from 'react-native';
export default function TabOneScreen() {
  const Mydata = new Array(50).fill(0).map((_ , index)=>{item:index})
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View
        style={tw`bg-gray-900 p-1 pt-0 flex-1  items-center`}
      >
        <Text style={tw`text-indigo-700  capitalize  p-4 font-bold bg-gray-800 w-full text-center mb-4  text-xl `}>product scanner </Text>
        <Link href={'/Scan'} asChild>
          <TouchableOpacity style={tw`text-lg  bg-indigo-500 shadow-xl shadow-pink-400  border rounded-xl p-4 w-52 focus:bg-sky-400   hover:bg-sky-400`}>
            <Text style={tw`text-black font-bold text-lg text-center  `}>
              add a new product
            </Text>
          </TouchableOpacity>
        </Link>
        <Text style={tw`text-indigo-700  capitalize  p-4 font-bold  w-full text-center  text-xl `}>products :</Text>

        <FlatList data={Mydata}
          renderItem={item => (<Product prop={item.index} />)}
          style={{ ...tw`bg-indigo-100   flex-1 rounded-xl p-8 w-full ` }}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ ...tw`android:pb-8` }}
        />
      </View>
    </SafeAreaView>
  );
}

const Product = ({ prop }: any) => (
  <View style={tw`w-full h-40 p-1 my-4 bg-indigo-700 shadow shadow-xl shadow-sky-800 rounded-xl p-4 `}>

    <Text>hello {prop}</Text>


  </View>
)
