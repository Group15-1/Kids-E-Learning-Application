// importing the navigators
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// importing screens
import dashboard from './screens/dashboard';
import myCourse from './screens/myCourse';
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
import login from './screens/login';
import signUp from './screens/signUp';
import resetPassword from './screens/resetPassword';
import sendCode from './screens/sendCode';
import signUpSucsess from './screens/signUpSucsess';
import profile from './screens/profile';
import resetPassword2 from './screens/resetPassword2';

// creating the main stack navigator
const myStack = createStackNavigator();

const App=(props) =>{
  return (
    <NavigationContainer>
      <myStack.Navigator 
         screenOptions={{
           headerShown: false,
           }}>

         <myStack.Screen name="login" component={login}/>
         <myStack.Screen name="signUp" component={signUp}/>
         <myStack.Screen name="resetPassword" component={resetPassword}/>
         <myStack.Screen name="sendCode" component={sendCode}/>
         <myStack.Screen name="signUpSucsess" component={signUpSucsess}/>
         <myStack.Screen name="dashboard" component={newstack}/>
         <myStack.Screen name="resetPassword2" component={resetPassword2}/>

      </myStack.Navigator>
    </NavigationContainer>
  );

};

//creating the engligh subject Stack Navigator
const Stack = createStackNavigator();
function englishStack(){
return(
<Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>

         <Stack.Screen name="English" component={english} options={{title:'English'}}/>
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
);
}

// creating the dashboard stack navigator
const dashboardStack = createStackNavigator();
function newstack(){
return(
<dashboardStack.Navigator
    screenOptions={{
       headerShown: false,
     }}>

         <dashboardStack.Screen name="dashboard" component={dashboard} options={{title:'Dashboard'}}/>
         <dashboardStack.Screen name="myCourse" component={myCourse} options={{title:'My Course'}}/>
         <dashboardStack.Screen name="english" component={englishStack}/>
         <dashboardStack.Screen name="profile" component={profile}/>
</dashboardStack.Navigator>
);
}

export default App;