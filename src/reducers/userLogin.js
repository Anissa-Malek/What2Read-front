import {
  UPDATE_LOGIN_VALUE,
  SAVE_USER_DATA,
  LOGGING_ERROR,
  LOG_OUT,
  REMOVE_LOG_INFO,
} from 'src/actions/user';

export const initialState = {
  logInfo: false,
  message: 'Bienvenue',
  username: '',
  password: '',
  loggingError: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_LOGIN_VALUE:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };
    case SAVE_USER_DATA:
      return {
        ...state,
        loggingError: false,
        logInfo: true,
      };
    case LOGGING_ERROR:
      return {
        ...state,
        loggingError: true,
      };
    case REMOVE_LOG_INFO:
      return {
        ...state,
        logInfo: false,
      };
    case LOG_OUT:
      return {
        ...state,
        username: '',
        password: '',
        loginfo: false,
      };
    default:
      return state;
  }
};

export default reducer;
