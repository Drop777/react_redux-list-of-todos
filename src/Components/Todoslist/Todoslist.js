import React from 'react';
import PropTypes from 'prop-types';
import Todoitem from '../Todoitem/Todoitem';
import './Todolist.css';

const Todoslist = ({
  filteredTodosList, isLoaded, sortByTitle, sortByName, sortByCompleted,
}) => (
  <div>
    {isLoaded && (
      <div className="buttons-sort">
        <button
          type="button"
          onClick={sortByTitle}
        >
        Sort by title
        </button>
        <button
          type="button"
          onClick={sortByName}
        >
        Sort by Name
        </button>
        <button
          type="button"
          onClick={sortByCompleted}
        >
        Completed
        </button>
      </div>
    )}
    <div className="todo-list">
      {filteredTodosList.map(todo => <Todoitem key={todo.id} todo={todo} />)}
    </div>
  </div>
);

Todoslist.propTypes = {
  isLoaded: PropTypes.bool,
  sortByTitle: PropTypes.func,
  sortByName: PropTypes.func,
  sortByCompleted: PropTypes.func,
  filteredTodosList: PropTypes.arrayOf(PropTypes.shape({
    userid: PropTypes.number,
    id: PropTypes.number,
    tittle: PropTypes.string,
    complated: PropTypes.bool,
  })),
}.isRequired;
export default Todoslist;
