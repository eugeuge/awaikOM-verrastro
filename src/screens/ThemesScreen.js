import { FlatList } from 'react-native'
import React from 'react'
import GridItem from '../components/GridItem'
//import { THEMES } from '../data/themes'
import { useDispatch, useSelector } from 'react-redux'

import { selectTheme } from '../store/actions/theme.action'

const ThemesScreen = ({ navigation }) => {

    const themes = useSelector(state => state.themes.themes)
    const dispatch = useDispatch()

    const onSelectGridItem = (item) => {
        dispatch(selectTheme(item.id))
       navigation.navigate('Meditaciones Por Temática', {
           // themeId: item.id,
            themeName: item.title
        })
        //navigation.push('Meditaciones Por Temática')
    }

    const renderGridItem = ({ item }) => <GridItem item={item} onSelect={onSelectGridItem} />


    return (
        <FlatList
            data={themes}
            keyExtractor={(item) => item.id}
            renderItem={renderGridItem}
            numColumns={2}
        />
    )
}

export default ThemesScreen