import React, {useState, useEffect} from "react"
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    TextInput,
    StatusBar,
    Button
  } from 'react-native';
  import auth from "@react-native-firebase/auth";

 export function ProfileScreen({navigation}) {
    const [user, setUser] = useState();
  
    let userObj = auth().currentUser;
  
    if(userObj != null){
      userObj.providerData.forEach(function(profile){
        console.log("Sign-in provider: " + profile.providerId);
        console.log("  Provider-specific UID: " + profile.uid);
        console.log("  Name: " + profile.displayName);
        console.log("  Email: " + profile.email);
        console.log("  Photo URL: " + profile.photoURL);
      });
    }
    return (
    <View>
      <Text>{userObj.displayName}</Text>
    </View>
    )
  }