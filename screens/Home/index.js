import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Constant from '../../helper/constant'

export default function Recipes() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView>
        <View>
          <Text style={styles.userGreetHeader}>Good Morning...</Text>
          <Text style={styles.userGreetTitle}>Dear Karan !</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  userGreetHeader:{
    color:'black',
    fontFamily:'Quicksand-Bold',
    fontSize:16
  },
  userGreetTitle:{
    color: Constant.primaryColor,
    fontFamily:'Quicksand-Bold',
    fontSize:28
  }
})