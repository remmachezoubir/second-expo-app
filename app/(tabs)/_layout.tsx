import { Tabs } from 'expo-router';


export default function TabLayout() {
  return (
    <Tabs >
      <Tabs.Screen
        name="index"
        options={{ headerShown: false , tabBarStyle:{display:'none'} }}
         />
         <Tabs.Screen 
         name='testing'
         options={{headerShown:false}}
         />

    </Tabs>
  );
}
