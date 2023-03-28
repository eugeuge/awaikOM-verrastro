import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const MeditacionItem = ({ item, onSelected }) => {

    return (
        <TouchableOpacity onPress={() => onSelected(item)}>
            <View style={styles.meditacionItem}>
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
                <View>
                    <Text style={styles.details} > $ {item.price}</Text>
                    <Text style={styles.details}>{item.duration}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default MeditacionItem

const styles = StyleSheet.create({

    meditacionItem: {
        padding: 20,
        margin: 10,
        borderRadius: 3,
        backgroundColor: '#ccc'
    },
    title: {
        fontSize: 20,
        fontFamily: 'open-sans-bold',
    },
    details: {
        fontSize: 10
    }
})
