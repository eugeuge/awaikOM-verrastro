import { FlatList } from 'react-native'
import React, {useEffect}  from 'react'

import { useDispatch } from 'react-redux'

import AlarmMeditacionItem from '../components/AlarmMeditacionItem'
import { selectMeditacion } from '../store/actions/meditacion.action'




const DespertadorMeditacionesListScreen = ({ route, navigation, meditaciones }) => {

  const dispatch = useDispatch();


  const handleOnSelected = (item) => {
    dispatch(selectMeditacion(item.id))
    navigation.navigate('Detalle', {
           meditacion: item
    })
  }

  const renderMeditacionItem = ({ item }) => (<AlarmMeditacionItem item={item} onSelected={handleOnSelected} />)

  return (
    <FlatList 
      data={route.params.meditaciones}
      renderItem={renderMeditacionItem}
    />
  )
}

export default DespertadorMeditacionesListScreen