import { FlatList } from 'react-native'
import React, {useEffect} from 'react'

//import { MEDITACIONES } from '../data/meditaciones'
import { useSelector, useDispatch } from 'react-redux'

import MeditacionItem from '../components/MeditacionItem'
import { selectMeditacion, filterMeditacion } from '../store/actions/meditacion.action'



const ThemeMeditacionScreen = ({ route, navigation }) => {

  //const { themeId } = route.params

  //const meditaciones = MEDITACIONES.filter(meditacion => meditacion.theme === themeId)

  const dispatch = useDispatch();
  const theme = useSelector(state => state.themes.selected)
  const themeMeditaciones = useSelector(state => state.meditaciones.filteredMeditaciones)

  useEffect(()=>{
    dispatch(filterMeditacion(theme.id))
  },[])

  const handleOnSelected = (item) => {
    dispatch(selectMeditacion(item.id))
    navigation.navigate('Detalle Meditación', {
           meditacion: item
    })
  }

  const renderMeditacionItem = ({ item }) => (<MeditacionItem item={item} onSelected={handleOnSelected} />)

  return (
    <FlatList 
     // data={meditaciones}
      data={themeMeditaciones}
      renderItem={renderMeditacionItem}
    />
  )
}

export default ThemeMeditacionScreen