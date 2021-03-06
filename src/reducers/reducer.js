import { combineReducers } from 'redux';

import userLoginReducer from './userLogin';
import userProfileReducer from './userProfile';
import userRegistrationReducer from './userRegistration';
import bookSearchReducer from './bookSearch';
import booksReducer from './books';
import addReviewReducer from './addReview';
import otherUserProfileReducer from './otherUserProfile';

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userProfile: userProfileReducer,
  userRegistration: userRegistrationReducer,
  bookSearch: bookSearchReducer,
  books: booksReducer,
  addReview: addReviewReducer,
  otherUserProfile: otherUserProfileReducer,
});

export default rootReducer;
