import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import constant from '../../helper/constant'

export default function SplashScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>DayFixer</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: constant.appColor, justifyContent: 'center', alignItems: 'center'
    }, title: {
        color: '#fff', fontSize: 50, fontFamily: 'cursive',fontWeight:'800'
    }
})