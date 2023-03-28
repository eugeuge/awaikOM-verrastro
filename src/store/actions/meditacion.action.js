export const SELECT_MEDITACION = 'SELECT_MEDITACION'
export const FILTER_MEDITACION = 'FILTER_MEDITACION'

export const selectMeditacion = (id) => ({
    type: SELECT_MEDITACION,
    meditacionID: id,
})

export const filterMeditacion = (id) => ({
    type: FILTER_MEDITACION,
    themeID: id,
})