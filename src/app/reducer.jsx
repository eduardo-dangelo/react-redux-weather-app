import axios from 'axios'

const OPEN_MODAL = 'weatherApp/OPEN_MODAL'
const CLOSE_MODAL = 'weatherApp/CLOSE_MODAL'
const SELECT_ITEM = 'weatherApp/SELECT_ITEM'
const HANDLE_ERROR = 'weatherApp/HANDLE_ERROR'
const FETCH_WEATHER = 'weatherApp/FETCH_WEATHER'

const initialValues = {
  city: [],
  lastRequest: {},
  selectedCity: {},
  hasError: false,
  openModal: false,
}

export function reducer(state = initialValues, action) {
  switch (action.type) {
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
    case HANDLE_ERROR:
      return {
        ...state,
        hasError: true,
      };
    case FETCH_WEATHER:
      return {
        ...state,
        city: [
          action.payload.data, ...state.city,
        ],
        lastRequest: action.payload.data,
      };
    default:
      return state;
  }
}

const openModal = () => ({ type: OPEN_MODAL })
const closeModal = () => ({ type: CLOSE_MODAL })
const selectItem = (data) => ({ type: SELECT_ITEM, payload: data })

const fetchWeather = (city, country) => {
  const API_KEY = process.env.REACT_APP_API_KEY
  const ROOT_URL = `//api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
  const url = `${ROOT_URL}&q=${city},${country}&units=metric`
  const request = axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request ? request : null
  };
}

export const actions = {
  openModal,
  closeModal,
  selectItem,
  fetchWeather,
}