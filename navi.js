
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// importing screens
import english from './screens/english';
import Alphabet from './screens/Alphabet';
import animal from './screens/animal';
import colors from './screens/colors';
import fruit from './screens/fruit';
import numbers from './screens/numbers';
import shapes from './screens/shapes';
import vegitables from './screens/vegitables';
import Food from './screens/food';
import vehicle from './screens/vehicle';
import classRoom from './screens/classRoom';
import songs from './screens/songs';
import activities from './screens/activities';

// creating the stack navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
         screenOptions={{
           headerShown: false,
           }}>
        
         <Stack.Screen name="English" component={english} ptions={{title:'English'}}/>
         <Stack.Screen name="Alphabet" component={Alphabet} options={{title:'Alphabet'}}/>
         <Stack.Screen name = "animal" component={animal} options={{title:'Animals'}}/>
         <Stack.Screen name = "colors" component={colors} options={{title:'Colours'}}/>
         <Stack.Screen name = "fruit" component={fruit} options={{title:'Fruits'}}/>
         <Stack.Screen name = "numbers" component={numbers} options={{title:'Numbers'}}/>
         <Stack.Screen name = "shapes" component={shapes} options={{title:'Shapes'}}/>
         <Stack.Screen name = "vegitables" component={vegitables} options={{title:'Vegetables'}}/>
         <Stack.Screen name = "Food" component={Food} options={{title:'Food'}}/>
         <Stack.Screen name = "vehicle" component={vehicle} options={{title:'Vehicles'}}/>
         <Stack.Screen name = "classRoom" component={classRoom} options ={{title: 'Class Room Items'}}/>
         <Stack.Screen name = "songs" component={songs} options ={{title: 'Songs'}}/>
         <Stack.Screen name = "activities" component={activities} options ={{title: 'activities'}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}