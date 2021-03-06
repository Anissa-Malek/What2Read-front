import axios from 'axios';

import {
  GET_BOOKS_DATA,
  saveBooksList,
  booksListLoaded,
  GET_REVIEW_BY_BOOK,
  saveReviewByBook,
  GET_REVIEWS_DATA,
  suggestTodaysBook,
  saveReviewsList,
  allReviewsLoaded,
} from '../actions/books';

import {
  GET_SUGGESTIONS_DATA,
  saveSuggestions,
  suggestionsLoaded,
} from '../actions/suggestions';
import pickRandomBookNotSuggested from '../selectors/suggestions';

const booksAPIMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_BOOKS_DATA:
      // Get all the books data
      axios.get(
        // URL
        'http://localhost:8000/api/books',
      )
        .then((booksList) => {
          store.dispatch(saveBooksList(booksList.data));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(booksListLoaded());
        });
      break;
    case GET_SUGGESTIONS_DATA:
      axios.get(
        // URL
        'http://localhost:8000/api/suggestions',
      )
        .then((suggestions) => {
          store.dispatch(saveSuggestions(suggestions.data));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(suggestionsLoaded());
          const suggestedBook = pickRandomBookNotSuggested(
            store.getState().books.booksList,
            store.getState().books.suggestionsList,
          );
          store.dispatch(suggestTodaysBook(suggestedBook));
        });
      break;
    case GET_REVIEWS_DATA:
      axios.get(
        // URL
        'http://localhost:8000/api/reviews',
      )
        .then((reviews) => {
          // console.log(reviews);
          store.dispatch(saveReviewsList(reviews.data));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(allReviewsLoaded());
        });
      break;
    case GET_REVIEW_BY_BOOK:
      axios.get(
        // URL
        `http://localhost:8000/api/book/${action.isbn}/reviews`,
      )
        .then((reviews) => {
          // console.log('reviews', reviews);
          store.dispatch(saveReviewByBook(reviews.data.reviews));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
        });
      break;
    default:
  }

  next(action);
};

export default booksAPIMiddleware;
