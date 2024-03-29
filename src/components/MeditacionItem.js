import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import {useSelector } from 'react-redux';

import COLORS from '../constants/Colors';

const MeditacionItem = ({ item, onSelected }) => {

    const favoritesMeditations = useSelector(state => state.user.userFavoritesMeditations)
    const esFavorita = favoritesMeditations.find(favorita => favorita.id == item.id)
    

    return (
        <TouchableOpacity onPress={() => onSelected(item)}>
            <View style={esFavorita? styles.meditacionItemFavorite : styles.meditacionItemNotFavorite }>
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
                <View>
                    <Text style={styles.details}>{item.duration}</Text>
                </View>
                <View>
                    <Text style={styles.details}>{ esFavorita? "Meditación Favorita" : "No Elegida" }</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default MeditacionItem

const styles = StyleSheet.create({

    meditacionItemFavorite: {
        padding: 20,
        margin: 10,
        borderRadius: 3,
        backgroundColor: COLORS.primary
        
    },
    meditacionItemNotFavorite: {
        padding: 20,
        margin: 10,
        borderRadius: 3,
        backgroundColor: COLORS.primaryLight
        
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
