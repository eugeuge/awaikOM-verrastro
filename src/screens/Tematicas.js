import {
  StyleSheet,
  TextInput,
  View,
  Text,
  FlatList,
  Modal,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";

import Header from '../components/Header';
import Button from '../components/Button';
import COLORS from '../constants/Colors';

const Tematicas = () => {
    const [itemText, setItemText] = useState("");
  const [items, setItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const onChangeText = (text) => {
    setItemText(text);
  };

  const addItemToState = () => {
    setItems((oldArry) => [...oldArry, { id: Date.now(), value: itemText, active: true }]);
    setItemText("");
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const onCancelModal = () => {
    setModalVisible(!modalVisible);
  };

  const onDeleteModal = (id) => {
    setModalVisible(!modalVisible);
    setItems((oldArry) => oldArry.filter((item) => item.id !== id));
    setSelectedItem(null);
  };

  const onSilenciarModal = (id) => {
    setItems((oldArry) => oldArry.map(item => {
      if(item.id == id) {
      item.active = false;
      }
      return item;
      }))
    setModalVisible(!modalVisible);
  };

  const onActivarModal = (id) => {
    setItems((oldArry) => oldArry.map(item => {
      if(item.id == id) {
      item.active = true;
      }
      return item;
      }))
    setModalVisible(!modalVisible);
  };

  return (
    <View>
 <Header/>
      <Text style={styles.title}>Ingresá el tipo de Meditación que te gustaría escuchar:</Text>
      <View style={styles.addItemInputContainer}>
      
        <TextInput
          placeholder="Escribí una temática"
          style={styles.input}
          onChangeText={onChangeText}
          value={itemText}
        />
        <Button
        styleButtonType={styles.botonSumar}
        onPress={addItemToState}
        title="Sumar">
        </Button>
      </View>
      <FlatList
        data={items}
        renderItem={(itemData) => (
          <Pressable
            style={itemData.item.active ? styles.itemContainer : styles.itemContainerSilenciado}
            onPress={() => {
              openModal(itemData.item);
            }}
          >
            <Text style={styles.item}>{itemData.item.value}</Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalMainView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Eliminar Temática</Text>
            <Text style={styles.modalText}>
              ¿Está seguro que desea eliminar la Temática{" "}
              <Text style={styles.modalBoldText}>{selectedItem?.value}</Text>?
            </Text>
            <View style={styles.modalActions}>
            <Button
             styleButtonType={[styles.button, styles.buttonCancel]}
             styleText={styles.textStyle}
             onPress={onCancelModal}
             title="Cancelar">
            </Button>
            <Button
             styleButtonType={[styles.button, styles.buttonDelete]}
             styleText={styles.textStyle}
             onPress={() => {
              onDeleteModal(selectedItem.id)}}
             title="Eliminar">
            </Button>
             
            </View>

            
                <View style={styles.modalActions}>
                  {selectedItem?.active?
                   <Button
                     styleButtonType={[styles.button, styles.buttonSilenciar]}
                     styleText={styles.textStyleSilenciar}
                     onPress={() => {
                      onSilenciarModal(selectedItem.id)}}
                     title="Sólo Silenciar">
                    </Button>
                  :
                  <Button
                  styleButtonType={[styles.button, styles.buttonSilenciar]}
                  styleText={styles.textStyleSilenciar}
                  onPress={() => {
                   onActivarModal(selectedItem.id)}}
                  title="Activar Temática">
                 </Button>
                  }                           
                </View>     

            </View>
        </View>
      </Modal>
    </View>
  )
}

export default Tematicas

const styles = StyleSheet.create({
    title: {
      paddingTop: 30,
      fontSize: 20,
      textAlign: "left",
      fontFamily: 'open-sans-bold',
      color: COLORS.text,
    },
    botonSumar:{
      backgroundColor: COLORS.primary,
      padding:6,
      minWidth: 70,
      alignItems: "center",
      borderRadius:4,
      color: "#FFFFFF",
    },
    addItemInputContainer: {
      marginTop: 30,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    input: {
      width: 200,
      borderBottomColor: "black",
      borderBottomWidth: 1,
    },
    itemContainer: {
      marginTop: 20,
      padding: 10,
      borderRadius: 5,
      backgroundColor: COLORS.primaryLight,
    },
    itemContainerSilenciado: {
      marginTop: 20,
      padding: 10,
      borderRadius: 5,
      backgroundColor: COLORS.greyLight,
    },
    item: {
      padding: 10,
      textAlign: "center",
    },
    modalMainView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    modalView: {
      margin: 10,
      backgroundColor: "white",
      borderRadius: 10,
      padding: 20,
      alignItems: "center",
      shadowColor: COLORS.shadow,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.9,
      shadowRadius: 4,
      elevation: 5,
    },
    modalTitle: {
      padding: 10,
      borderRadius: 5,
      fontSize: 20,
      textAlign: "center",
      color:COLORS.text,
      fontFamily: 'open-sans-bold',
    },
    modalText: {
      marginBottom: 15,
      fontFamily: 'open-sans',
      textAlign: "center",
      color:COLORS.text,
    },
    modalBoldText: {
      fontFamily: 'open-sans-bold',
      textDecorationLine: "underline",
    },
    modalActions: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    button: {
      marginHorizontal: 15,
    },
    buttonCancel: {
      backgroundColor: COLORS.primary,
    },
    buttonDelete: {
      backgroundColor: COLORS.alerta,
    },
    buttonSilenciar: {
      backgroundColor: "#FFFFFF",
    },
    textStyleSilenciar:{
      fontFamily: 'open-sans-bold',
      textDecorationLine: "underline",
      color: COLORS.primary,
    },
  
  });
  