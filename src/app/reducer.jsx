import axios from 'axios'
const FETCH_WEATHER = 'weatherApp/FETCH_WEATHER'
const HANDLE_ERROR = 'weatherApp/HANDLE_ERROR'
const OPEN_MODAL = 'weatherApp/OPEN_MODAL'
const CLOSE_MODAL = 'weatherApp/CLOSE_MODAL'
const SELECT_ITEM = 'weatherApp/SELECT_ITEM'

const initialValues = {
  openModal: false,
  selectedCity: {},
  city: [],
  hasError: false,
  lastRequest: {},
}

export function reducer(state = initialValues, action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return {
        ...state,
        city: [
          action.payload.data, ...state.city,
        ],
        lastRequest: action.payload.data,
      };
    case HANDLE_ERROR:
      return {
        ...state,
        hasError: true,
      }
    case OPEN_MODAL:
      return {
        ...state,
        openModal: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        openModal: false,
        selectedCity: {},
      };
    case SELECT_ITEM:
      return {
        ...state,
        selectedCity: action.payload,
        openModal: true,
      };
    default:
      return state;
  }
}

const openModal = () => ({ type: OPEN_MODAL })
const closeModal = () => ({ type: CLOSE_MODAL })
const selectItem = (data) => ({ type: SELECT_ITEM, payload: data })

const fetchWeather = (city, country) => {
  const API_KEY = '6ebb39c9cac54387b3f3e1af2eb7378b'
  const ROOT_URL = `//api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
  const url = `${ROOT_URL}&q=${city},${country}&units=metric`
  const request = axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request ? request : null
  };
}

export const actions = {
  fetchWeather,
  openModal,
  closeModal,
  selectItem,
}