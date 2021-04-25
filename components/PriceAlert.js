import React from 'react';
import { View,StyleSheet,TouchableOpacity,Text,Image } from 'react-native';
import {dummyData,COLORS,SIZES,FONTS,icons,images} from "../constants";


const PriceAlert = ({customContainerStyle}) => {
  return (
      <TouchableOpacity style={{
          flexDirection:"row",
          alignItems:"center",
          marginTop:SIZES.padding * 4.5,
          marginHorizontal:SIZES.padding,
          marginVertical:SIZES.padding,
          paddingHorizontal:SIZES.radius,
          backgroundColor:COLORS.white,
          borderRadius:SIZES.radius,
          ...customContainerStyle,
          ...styles.shadow
      }}>
          <Image source={icons.notification_color}
          style={{
              width:30,
              height:30
           }}/>
                 
                 <View style={{flex:1,marginLeft:SIZES.radius}}>
                     <Text style={{...FONTS.h3}}>Set Price Alert</Text>
                     <Text style={{...FONTS.body4}}>Get notofications when your coins are moving</Text>

                 </View>

                 <Image source={icons.right_arrow} style={{
                     width:25,
                     height:25,
                     tintColor:COLORS.gray
                 }}/>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }
})

export default PriceAlert;