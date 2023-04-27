import { StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'

import { useSelector } from 'react-redux'
import Button from '../components/Button'
import COLORS from '../constants/Colors'
import { MEDITACIONES } from '../data/meditaciones'

const { height, width } = Dimensions.get("window");


const DespertadorMeditacionesScreen = ({ route, navigation }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const meditacionesFavoritas = useSelector(state => state.user.userFavoritesMeditations)

    const listarMeditaciones = () => {
        navigation.navigate('Tu meditación', {
            meditaciones: MEDITACIONES,
        })
    }

    const listarMeditacionesFavoritas = () => {
        navigation.navigate('Tu meditación', {
            meditaciones: meditacionesFavoritas,
        })
    }

    const openModal = () => {
        setModalVisible(true);
    };

    const onCancelModal = () => {
        setModalVisible(!modalVisible);
    };


    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <View style={styles.container}>
                <Text style={styles.title}>Elegí tu Lista de Meditaciones</Text>

                <Button
                    styleButtonType={styles.buttonSet}
                    onPress={listarMeditaciones}
                    styleText={styles.buttonSetText}
                    title="Ver todas">
                </Button>

                <Button
                    styleButtonType={styles.buttonSet}
                    onPress={meditacionesFavoritas.length != 0 ? listarMeditacionesFavoritas : openModal}
                    styleText={styles.buttonSetText}
                    title="Sólo favoritas">
                </Button>


                <Modal animationType="slide" transparent={true} visible={modalVisible}>
                    <View style={styles.modalMainView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalTitle}>No tenés meditaciones favoritas</Text>
                            <Text style={styles.modalText}>
                                Aún no seleccionaste ninguna meditación favorita. Podés hacerlo desde la pestaña de Temáticas en el menú inferior.
                            </Text>
                            <View style={styles.modalActions}>
                                <Pressable
                                    style={[styles.buttonModal]}
                                    onPress={onCancelModal}
                                >
                                    <Text style={styles.buttonText}>OK</Text>
                                </Pressable>
                            </View>

                        </View>
                    </View>
                </Modal>

            </View>
        </TouchableWithoutFeedback>
    )
}

export default DespertadorMeditacionesScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontFamily: 'open-sans-bold',
        marginTop: height * 0.04,
        width: width * 0.5,
        height: height * 0.09,
        textAlign: 'center',
        color: COLORS.text,
    },
    alarm: {
        fontSize: 20,
        fontFamily: 'open-sans',
        marginTop: height * 0.04,
        width: width * 0.5,
        height: height * 0.1,
        textAlign: 'center',
        color: COLORS.text,
    },
    inputContainer: {
        width: width * 0.7,
        maxWidth: width * 0.7,
        height: height * 0.25,
        padding: 20,
        alignItems: 'center'
    },
    inputDectiptionText: {
        textAlign: 'center'
    },
    input: {
        width: 50,
        height: height * 0.05,
        marginBottom: 20,
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 100,
        marginHorizontal: 2
    },
    buttonSet: {
        padding: width * 0.05,
        width: width * 0.5,
        height: height * 0.08,
        marginTop: height * 0.025,
        backgroundColor: COLORS.primary,
    },
    buttonSetText: {
        color: '#FFFFFF',
        fontSize: 17,
    },
    selectedNumberContainer: {
        marginTop: 20,
        height: height * 0.22,
        width: 200,
        maxWidth: '80%',
        padding: 10,
        alignItems: 'center',
    },
    modalMainView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        margin: width * 0.06,
        backgroundColor: "white",
        borderRadius: width * 0.02,
        padding: width * 0.05,
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
        padding: width * 0.04,
        fontSize: 21,
        fontWeight: "bold",
        textAlign: "center",
        color: COLORS.text,
    },
    modalText: {
        marginBottom: height * 0.02,
        padding: width * 0.02,
        fontSize: 16,
        textAlign: "center",
        color: COLORS.text,
    },
    modalActions: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    buttonModal: {
        textAlign: "center",        
        padding: 8,
        minWidth: 80,
        alignItems: "center",
        marginHorizontal: 15,
    },
    buttonText: {
        color: COLORS.primary,
        fontSize: 18,
        fontWeight: "bold",
    },
})