import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

import COLORS from '../constants/Colors';

const AlarmMeditacionItem = ({ item, onSelected }) => {


    

    return (
        <TouchableOpacity onPress={() => onSelected(item)}>
            <View style={styles.meditacionItem}>
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
                <View>
                    <Text style={styles.details}>{item.duration}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default AlarmMeditacionItem

const styles = StyleSheet.create({

    meditacionItem: {
        padding: 20,
        margin: 10,
        borderRadius: 3,
        backgroundColor: COLORS.primary
        
    },
    title: {
        fontSize: 20,
        fontFamily: 'open-sans-bold',
        color: COLORS.white
    },
    details: {
        fontSize: 15,
        color: COLORS.white
    }
})