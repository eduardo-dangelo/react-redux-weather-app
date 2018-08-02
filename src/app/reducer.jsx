import axios from 'axios'
import { forEach } from 'lodash'

const FETCH_WEATHER = 'weatherApp/FETCH_WEATHER'
const SELECT_CITY = 'weatherApp/SELECT_CITY'
const UNSELECT_CITY = 'weatherApp/UNSELECT_CITY'
const CHANGE_DISPLAY_MODE = 'weatherApp/CHANGE_DISPLAY_MODE'
const HANDLE_ERROR = 'weatherApp/HANDLE_ERROR'

const initialValues = {
  city: [],
  activeCity: {},
  lastRequest: {},
  selectedCity: {},
  displayMode: 'card',
  openCardMenu: false,
  hasError: false,
}

export function reducer(state = initialValues, action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return {
        ...state,
        activeCity: action.payload.data,
        selectedCity: action.payload.data,
        lastRequest: action.payload.data,
        city: [ ...state.city, action.payload.data ],
      };
    case SELECT_CITY:
      return {
        ...state,
        openCardMenu: true,
        activeCity: action.payload,
        selectedCity: action.payload,
      };
    case UNSELECT_CITY:
      return {
        ...state,
        openCardMenu: false,
        selectedCity: {},
      };
    case CHANGE_DISPLAY_MODE:
      return {
        ...state,
        displayMode: action.payload,
      };
    case HANDLE_ERROR:
      return {
        ...state,
        hasError: action.payload,
      };
    default:
      return state;
  }
}

const selectCity = (data) => ({ type: SELECT_CITY, payload: data })
const unselectCity = () => ({ type: UNSELECT_CITY })
const changeDisplayMode = (displayMode) => ({ type: CHANGE_DISPLAY_MODE, payload: displayMode })

const fetchWeather = (city, country) => {
  const API_KEY = process.env.REACT_APP_API_KEY
  const ROOT_URL = `//api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
  const url = `${ROOT_URL}&q=${city},${country}&units=metric`

  return (dispatch, getState) => {
    return axios.get(url)
      .then((response) => {
        const weatherApp = getState().weatherApp

        if (weatherApp.city.length === 0) {
          dispatch({type: FETCH_WEATHER, payload: response })
        }

        if (weatherApp.city.length > 0) {
          let hasCityBeenFecthed = false

          forEach(weatherApp.city, (city) => {
            if (city.city.id === response.data.city.id) {
              hasCityBeenFecthed = true
            }
          })

          if (hasCityBeenFecthed) {
            dispatch({ type: SELECT_CITY, payload: response.data })
          } else {
            dispatch({type: FETCH_WEATHER, payload: response })
          }
        }
      })
      .catch(() => {
        dispatch({type: HANDLE_ERROR, payload: true })

        setTimeout(() => {
          dispatch({type: HANDLE_ERROR, payload: false })
        }, 4000)
      })
  }
}


export const actions = {
  selectCity,
  unselectCity,
  fetchWeather,
  changeDisplayMode
}