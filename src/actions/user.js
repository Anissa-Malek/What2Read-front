export const UPDATE_LOGIN_VALUE = 'UPDATE_LOGIN_VALUE';
export const HANDLE_LOGIN = 'HANDLE_LOGIN';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const LOGGING_ERROR = 'LOGGING_ERROR';
export const LOG_OUT = 'LOG_OUT';
export const UPDATE_PROFILE_VALUE = 'UPDATE_PROFILE_VALUE';
export const UPDATE_REGISTRATION_VALUE = 'UPDATE_REGISTRATION_VALUE';
export const REMOVE_LOG_INFO = 'REMOVE_LOG_INFO';
export const SAVE_FAVORITES = 'SAVE_FAVORITES';
export const FAVORITES_LOADED = 'FAVORITES_LOADED';
export const SAVE_READINGS = 'SAVE_READINGS';
export const READINGS_LOADED = ' READINGS_LOADED';
export const SAVE_REVIEWS = 'SAVE_REVIEWS';
export const REVIEWS_LOADED = 'REVIEWS_LOADED';
export const TOGGLE_POP_UP = 'TOGGLE_POP_UP';
export const UPDATE_FAVORITE_SEARCH_VALUE = 'UPDATE_FAVORITE_SEARCH_VALUE';
export const SEARCHED_FAVORITES_BOOKS_LIST = 'SEARCHED_FAVORITES_BOOKS_LIST';
export const HANDLE_REGISTRATION = 'HANDLE_REGISTRATION';
export const SAVE_USER_REGISTRATION = 'SAVE_USER_REGISTRATION';
export const REGISTRATION_ERROR = 'REGISTRATION_ERROR';
export const REMOVE_REGISTRATION_INFO = 'REMOVE_REGISTRATION_INFO';
export const GET_USER_DATA = 'GET_USER_DATA';
export const SAVE_USER_PROFILE_DATA = 'SAVE_USER_PROFILE_DATA';
export const PROFILE_IS_LOADED = 'PROFILE_IS_LOADED';
export const EDIT_USER_PROFILE = 'EDIT_USER_PROFILE';
export const SAVE_USER_READINGS_DATA = 'SAVE_USER_READINGS_DATA';
export const SAVE_USER_FAVORITES_DATA = 'SAVE_USER_FAVORITES_DATA';
export const SAVE_USER_REVIEWS_DATA = 'SAVE_USER_REVIEWS_DATA';
export const GET_USER_READINGS_DATA = 'GET_USER_READINGS_DATA';
export const GET_USER_FAVORITES_DATA = 'GET_USER_FAVORITES_DATA';
export const GET_USER_REVIEWS_DATA = 'GET_USER_REVIEWS_DATA';
export const ADD_FAVORIS_USER = 'ADD_FAVORIS_USER';
export const DELETE_FAVORIS_USER = 'DELETE_FAVORIS_USER';
export const ADD_BOOK_TO_READINGS = 'ADD_BOOK_TO_READINGS';
export const REMOVE_BOOK_FROM_READINGS = 'REMOVE_BOOK_FROM_READINGS';
export const DELETE_USER_ACCOUNT = 'DELETE_USER_ACCOUNT';
export const HANDLE_USER_ALREADY_EXIST = 'HANDLE_USER_ALREADY_EXIST';
export const GET_OTHER_USER_DATA = 'GET_OTHER_USER_DATA';
export const OTHER_PROFILE_LOADED = 'OTHER_PROFILE_LOADED';
export const SAVE_OTHER_PROFILE_DATA = 'SAVE_OTHER_PROFILE_DATA';
export const OTHER_PROFILE_ERROR = 'OTHER_PROFILE_ERROR';

export const otherProfileError = () => ({
  type: OTHER_PROFILE_ERROR,
});

export const saveOtherProfileData = (username, description, picture, reviews) => ({
  type: SAVE_OTHER_PROFILE_DATA,
  username,
  description,
  picture,
  reviews,
});

export const otherProfileLoaded = () => ({
  type: OTHER_PROFILE_LOADED,
});

export const getOtherUserData = (id) => ({
  type: GET_OTHER_USER_DATA,
  id,
});

export const handleUserAlreadyExist = () => ({
  type: HANDLE_USER_ALREADY_EXIST,
});

export const deleteUserAccount = () => ({
  type: DELETE_USER_ACCOUNT,
});

export const deleteFavorisUser = (id) => ({
  type: DELETE_FAVORIS_USER,
  id,
});

export const addFavorisUser = (isbn) => ({
  type: ADD_FAVORIS_USER,
  isbn,
});

export const removeBookFromReadings = (id) => ({
  type: REMOVE_BOOK_FROM_READINGS,
  id,
});

export const addBookToReadings = (isbn) => ({
  type: ADD_BOOK_TO_READINGS,
  isbn,
});

export const getUserReviewsData = () => ({
  type: GET_USER_REVIEWS_DATA,
});

export const getUserFavoritesData = () => ({
  type: GET_USER_FAVORITES_DATA,
});

export const getUserReadingsData = () => ({
  type: GET_USER_READINGS_DATA,
});

export const saveUserReviewsData = (reviews) => ({
  type: SAVE_USER_REVIEWS_DATA,
  reviews,
});

export const saveUserFavoritesData = (favorites) => ({
  type: SAVE_USER_FAVORITES_DATA,
  favorites,
});

export const saveUserReadingsData = (readings) => ({
  type: SAVE_USER_READINGS_DATA,
  readings,
});

export const editUserProfile = () => ({
  type: EDIT_USER_PROFILE,
});

export const profileIsLoaded = () => ({
  type: PROFILE_IS_LOADED,
});

export const saveUserProfileData = (email, picture, description, username, reviews) => ({
  type: SAVE_USER_PROFILE_DATA,
  email,
  picture,
  description,
  username,
  reviews,
});

export const getUserData = () => ({
  type: GET_USER_DATA,
});

export const removeRegistrationInfo = () => ({
  type: REMOVE_REGISTRATION_INFO,
});

export const registrationError = () => ({
  type: REGISTRATION_ERROR,
});

export const saveUserRegistration = (username, email, description) => ({
  type: SAVE_USER_REGISTRATION,
  username: username,
  email: email,
  description: description,
});

export const handleRegistration = () => ({
  type: HANDLE_REGISTRATION,
});

export const searchedFavoritesBooksList = (booksList) => ({
  type: SEARCHED_FAVORITES_BOOKS_LIST,
  data: booksList,
});

export const updateFavoriteSearchValue = (identifier, newValue) => ({
  type: UPDATE_FAVORITE_SEARCH_VALUE,
  identifier: identifier,
  newValue: newValue,
});

export const togglePopUp = (bool) => ({
  type: TOGGLE_POP_UP,
  display: bool,
});

export const favoritesLoaded = () => ({
  type: FAVORITES_LOADED,
});

export const saveFavorites = (favorites) => ({
  type: SAVE_FAVORITES,
  data: favorites,
});

export const saveReadings = (readings) => ({
  type: SAVE_READINGS,
  data: readings,
});

export const readingsLoaded = () => ({
  type: READINGS_LOADED,
});

export const saveReviews = (reviews) => ({
  type: SAVE_REVIEWS,
  data: reviews,
});

export const reviewsLoaded = () => ({
  type: REVIEWS_LOADED,
});

export const removeLogInfo = () => ({
  type: REMOVE_LOG_INFO,
});

export const updateRegistrationValue = (identifier, newValue) => ({
  type: UPDATE_REGISTRATION_VALUE,
  identifier: identifier,
  newValue: newValue,
});

export const updateProfileValue = (identifier, newValue) => ({
  type: UPDATE_PROFILE_VALUE,
  identifier: identifier,
  newValue: newValue,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const updateLoginValue = (identifier, newValue) => ({
  type: UPDATE_LOGIN_VALUE,
  identifier: identifier,
  newValue: newValue,
});

export const handleLogin = () => ({
  type: HANDLE_LOGIN,
});

export const saveUserData = (token, username) => ({
  type: SAVE_USER_DATA,
  token: token,
  username: username,
});

export const loggingError = () => ({
  type: LOGGING_ERROR,
});
