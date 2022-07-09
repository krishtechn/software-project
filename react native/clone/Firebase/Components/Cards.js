import { View, Text,Dimensions,FlatList } from 'react-native'
import React from 'react'
import Card from './Card'
import data from './api/CardsItems'
import Header from './Header'

const Cards = ({isclick,setisclick}) => {
  return (
    <View style={{width:"100%",height:Dimensions.get("window").height}}>
      <Card />
    </View>
  )
}

export default Cards