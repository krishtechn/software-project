import { View, Text,FlatList,Dimensions } from 'react-native'
import React from 'react'
import CardItems from '../CardItems'
import data from "../CardListdata/CardsItems";

const CardList = ()=>{
    return (
      <>
      <FlatList data={data} showsVerticalScrollIndicator={false} snapToAlignment={'start'} snapToInterval={Dimensions.get("window").height} decelerationRate="normal" renderItem={(items)=>{
        return <CardItems items={items.item}/>;
      }}/>
      </>
    )
  }
export default CardList