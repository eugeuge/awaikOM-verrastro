import {
  View,
  StyleSheet,
  Text,
  Platform,
  Dimensions,
  Modal,
  Pressable,
  ScrollView,
} from 'react-native'

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';


import Button from './Button'
import COLORS from '../constants/Colors'
import { setAlarm } from '../store/actions/alarm.action';


Notifications.setNotificationHandler({
  handleNotification: async () => {
  return {
  shouldShowAlert: true,
  shouldPlaySound: true,
  shouldSetBadge: true,
  }}
  })


const { height, width } = Dimensions.get("window");




const SetDespertador = ({ elegirMeditacion }) => {

  const [date, setDate] = useState(new Date());
  const [alarmDateTime, setAlarmDateTime] = useState();
  const [mode, setMode] = useState('date');
  const [trigger, setTrigger] = useState(new Date());
  const [show, setShow] = useState(false);
  const [dateTimeOK, setdateTimeOK] = useState(false);
  const [meditacionOK, setMeditacionOK] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState('No hay ninguna alarma definida');
  const [textMeditacion, setTextMeditacion] = useState('Meditación a definir');
  const meditacionElegida = useSelector(state => state.alarm.meditation);

  const dispatch = useDispatch();

  
  useEffect(() => {
    Permissions.getAsync(Permissions.NOTIFICATIONS).then((statusObj) => {
      if (statusObj.status !== 'granted') {
        return Permissions.askAsync(Permissions.NOTIFICATIONS)
      }
      return statusObj;
    }).then((statusObj) => {
      if (statusObj.status !== 'granted') {
        return;
      }
    })
  }, [])



  const onChangeDateTimePicker = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    const tempDate = new Date(currentDate);
    const fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    const minutes = tempDate.getMinutes() < 10 ? '0' + tempDate.getMinutes() : tempDate.getMinutes();
    const fTime = 'Horario: ' + tempDate.getHours() + ':' + minutes;
    setText(fDate + '\n' + fTime)
    setdateTimeOK(true)
    setAlarmDateTime(tempDate)
  }



  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }


  useEffect(() => {
    if (meditacionElegida != null) {
      let definirMeditacion = 'meditación: ' + meditacionElegida.name
      setTextMeditacion(definirMeditacion)
      setMeditacionOK(true)
    }
  }, [meditacionElegida])

  useEffect(() => {
  setTrigger(alarmDateTime)
  }, [alarmDateTime])

  const openModal = () => {
    setModalVisible(true);
  };

  const onCancelModal = () => {
    setModalVisible(!modalVisible);
  };

  const triggerNotifications = async () => {
    await Notifications.scheduleNotificationAsync({
    content: {
    title: 'Es hora de despertarse',
    body: 'Disfrutá tu meditación "' + meditacionElegida.name + '" para que empieces un día positivo con awikÖM',
    sound: '../../assets/audio/' + meditacionElegida.audio,
    data: { data: 'goes here' },
    },
    trigger: trigger,
    });
    }

  const definirAlarma = () => {
    console.log(alarmDateTime)
    dispatch(setAlarm(alarmDateTime));
    triggerNotifications();
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Seteá tu Alarma</Text>
        <Text style={styles.alarm}>{text}</Text>
        <Text style={styles.meditacion}>{textMeditacion}</Text>

        <Button
          styleButtonType={styles.buttonSet}
          onPress={() => showMode('date')}
          styleText={styles.buttonSetText}
          title="Elegí el día">
        </Button>

        <Button
          styleButtonType={styles.buttonSet}
          onPress={() => showMode('time')}
          styleText={styles.buttonSetText}
          title="Elegí el horario">
        </Button>

        <Button
          styleButtonType={styles.buttonSet}
          onPress={elegirMeditacion}
          styleText={styles.buttonSetText}
          title="Elegí tu meditación">
        </Button>

        <Button
          styleButtonType={styles.buttonConfirm}
          onPress={openModal}
          styleText={styles.buttonSetText}
          title="Confirmar alarma">
        </Button>


        {show && (
          <DateTimePicker
            testID='dateTimePicker'
            value={date}
            mode={mode}
            is24Hour={true}
            display='default'
            onChange={onChangeDateTimePicker}
            minimumDate={new Date()}
          />)
        }


        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.modalMainView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>{dateTimeOK && meditacionOK ? 'Confirmar alarma' : 'Alarma incompleta'}</Text>
              <Text style={styles.modalText}>
                {dateTimeOK && meditacionOK ? 'Presiona OK para definir tu nueva alarma. Una vez definida, puedes cambiarla presionando el botón "Elimiar Alarma"' : 'Falta definir algún dato de tu alarma. Regresá a la pantalla para completar el seteo.'}
              </Text>
              <View style={styles.modalActions}>
                <Pressable
                  style={[styles.buttonModal]}
                  onPress={dateTimeOK && meditacionOK ? definirAlarma : onCancelModal}
                >
                  <Text style={styles.buttonText}>OK</Text>
                </Pressable>
              </View>

            </View>
          </View>
        </Modal>


      </View>
    </ScrollView>
  )
}

export default SetDespertador;

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
    height: height * 0.04,
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
  meditacion: {
    fontSize: 15,
    fontFamily: 'open-sans',
    width: width * 0.5,
    height: height * 0.06,
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
    padding: width * 0.029,
    width: width * 0.5,
    height: height * 0.06,
    marginTop: height * 0.025,
    backgroundColor: COLORS.primary,
  },
  buttonConfirm: {
    padding: width * 0.029,
    width: width * 0.5,
    height: height * 0.06,
    marginTop: height * 0.025,
    backgroundColor: COLORS.alerta,
  },
  buttonSetText: {
    color: '#FFFFFF',
    fontSize: 16,
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