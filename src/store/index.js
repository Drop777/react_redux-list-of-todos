import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const START_LOADING = 'START_LOADING';
const HANDLE_SECCESS = 'HANDLE_SUCCESS';
const HANDLE_ERROR = 'HANDLE_ERORR';
const SORT_BY_TITLE = 'SORT_BY_TITLE';
const SORT_BY_NAME = 'SORT_BY_NAME';
const SORT_BY_COMPLETED = 'SORT_BY_COMPLETED';

const startLoading = () => ({
  type: START_LOADING,
});
const handleSeccess = todos => ({
  type: HANDLE_SECCESS,
  todos,
});
const handleErorr = () => ({
  type: HANDLE_ERROR,
});

export const sortByTitle = () => ({
  type: SORT_BY_TITLE,
});

export const sortByName = () => ({
  type: SORT_BY_NAME,
});

export const sortByCompleted = () => ({
  type: SORT_BY_COMPLETED,
});

export const loadTodos = () => (dispatch) => {
  dispatch(startLoading());

  return Promise.all([fetch(`${BASE_URL}/users`), fetch(`${BASE_URL}/todos`)])
    .then(responses => Promise.all(responses
      .map(response => response.json())))
    .then(([usersDate, todosDate]) => {
      const todos = todosDate.map(item => (
        {
          ...item,
          user: usersDate.find(user => user.id === item.userId),
        }
      ));
      dispatch(handleSeccess(todos));
    })
    .catch(() => dispatch(handleErorr()));
};

const initialState = {
  todos: [],
  filteredTodos: [],
  isLoading: false,
  hasError: false,
  isLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case HANDLE_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    case HANDLE_SECCESS:
      return {
        ...state,
        todos: action.todos,
        filteredTodos: action.todos,
        isLoading: false,
        hasError: false,
        isLoaded: true,
      };
    case SORT_BY_TITLE:
      return {
        ...state,
        filteredTodos: [...state.todos]
          .sort((a, b) => (a.title).localeCompare(b.title)),
      };
    case SORT_BY_NAME:
      return {
        ...state,
        filteredTodos: [...state.todos]
          .sort((a, b) => a.user.name.localeCompare(b.user.name)),
      };
    case SORT_BY_COMPLETED:
      return {
        ...state,
        filteredTodos: [...state.todos]
          .sort((a, b) => (a.completed > b.completed ? -1 : 1)),
      };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
