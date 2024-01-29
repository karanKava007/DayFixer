import React, { useEffect, useRef, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Dimensions, Button, Alert, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Animated, { useSharedValue, useAnimatedStyle, interpolate, Extrapolate } from 'react-native-reanimated';
import Constant from '../../helper/constant';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
const scrollData = [
  { id: 1, title: 'item1' },
  { id: 2, title: 'item2' },
  { id: 3, title: 'item3' },
  { id: 4, title: 'item4' },
  { id: 5, title: 'item5' },
  { id: 6, title: 'item6' },
  { id: 7, title: 'item7' },
  { id: 8, title: 'item8' },
  { id: 9, title: 'item9' },
  { id: 10, title: 'item10' },
];

export default function Recipes() {
  const offsetY = useSharedValue(0);
  const tabHeight = useBottomTabBarHeight()
  const { width, height } = Dimensions.get('screen');
  const [header_height, setHeaderheight] = useState('')
  const handleScroll = (e) => {
    offsetY.value = e.nativeEvent.contentOffset.y;
  };

  const handleLayout = (event) => {
    setHeaderheight(event.nativeEvent.layout.height)
  };

  const animatedStyleSheet = useAnimatedStyle((e) => {
    return {
      transform: [{ translateY: interpolate(offsetY.value, [0, header_height], [0, -header_height], Extrapolate.CLAMP) }],
      zIndex: 9,
      height: header_height,
    };
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Animated.View
        onLayout={handleLayout}
        style={[
          { backgroundColor: Constant.primaryColor, position: 'absolute', top: 0, left: 0, right: 0 , borderBottomLeftRadius: 30, borderBottomRightRadius: 30 , paddingHorizontal:14 , paddingVertical:20, alignItems:'center' , justifyContent:'center'},
          animatedStyleSheet,
        ]}
      >
        <Text style={styles.userGreetHeader}>Good Morning...</Text>
        <Text style={styles.userGreetTitle}>Dear Karan !</Text>
        <View>
          <TouchableOpacity>
            <MaterialIcons name={'menu'} size={30} color={'white'}/>
          </TouchableOpacity>
        </View>
      </Animated.View>
      <ScrollView onScroll={handleScroll} style={{ paddingBottom: tabHeight }}>
        <View style={{ marginTop: header_height }}>
          {scrollData?.map((item, index) => {
            return (
              <View key={index} style={{ backgroundColor: 'yellow', marginVertical: 10, marginHorizontal: 10, padding: 20, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: 'red' }}>{item.title}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  userGreetHeader: {
    color: '#fff',
    fontFamily: 'Quicksand-Bold',
    fontSize: 16,
  },
  userGreetTitle: {
    color: 'white', // Change Constant.primaryColor to a color or remove it
    fontFamily: 'Quicksand-Bold',
    fontSize: 28,
  },
});