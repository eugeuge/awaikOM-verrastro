import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Text,
  FlatList,
  Modal,
  Pressable,
} from "react-native";
import Header from './src/components/Header';
import COLORS from './src/constants/Colors';

export default function App() {
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
    <View style={styles.screen}>
      <Header/>
      <Text style={styles.title}>Ingresá el tipo de Meditación que te gustaría escuchar:</Text>
      <View style={styles.addItemInputContainer}>
      
        <TextInput
          placeholder="Escribí una temática"
          style={styles.input}
          onChangeText={onChangeText}
          value={itemText}
        />
        <Pressable style={styles.botonSumar} onPress={addItemToState}>
        <Text>Sumar</Text>
        </Pressable>
      </View>
      <FlatList
        data={items}
        renderItem={(itemData) => (
          <Pressable
            style={itemData.item.active == true ? styles.itemContainer : styles.itemContainerSilenciado}
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
              <Pressable
                style={[styles.button, styles.buttonCancel]}
                onPress={onCancelModal}
              >
                <Text style={styles.textStyle}>Cancelar</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonDelete]}
                onPress={() => {
                  onDeleteModal(selectedItem.id);
                }}
              >
                <Text style={styles.textStyle}>Eliminar</Text>
              </Pressable>
            </View>

            
                <View style={styles.modalActions}>
                  {selectedItem.active?
                  <Pressable
                  style={[styles.button, styles.buttonSilenciar]}
                  onPress={() => {
                  onSilenciarModal(selectedItem.id);
                  }}
>
                 <Text style={styles.textStyleSilenciar}>Sólo Silenciar</Text>
                 </Pressable>
                  :
                    <Pressable
                    style={[styles.button, styles.buttonSilenciar]}
                    onPress={() => {
                    onActivarModal(selectedItem.id);
                    }}
  >
                   <Text style={styles.textStyleSilenciar}>Activar Temática</Text>
                   </Pressable>
                  }                           
                </View>     

            </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    flex: 1,
  },
  title: {
    paddingTop: 30,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
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
    fontWeight: "bold",
    textAlign: "center",
    color:COLORS.text,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color:COLORS.text,
  },
  modalBoldText: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    borderRadius: 5,
    padding: 8,
    minWidth:80,
    alignItems:"center",
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
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: COLORS.primary,
  },

});
