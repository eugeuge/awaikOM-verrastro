export const SET_MEDITACION = 'SET_MEDITACION'
export const SET_ALARM = 'SET_ALARM'
export const RESET_ALARM = 'RESET_ALARM'

export const setMeditacion = (meditacion) => ({
    type: SET_MEDITACION,
    alarmMeditacion: meditacion,
})

export const setAlarm = (dateTime) => ({
    type: SET_ALARM,
    alarmDateTime: dateTime
})

export const resetAlarm = () => ({
    type: RESET_ALARM,
})