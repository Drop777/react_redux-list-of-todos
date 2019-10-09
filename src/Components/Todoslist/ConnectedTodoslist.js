import { connect } from 'react-redux';
import { sortByTitle, sortByName, sortByCompleted } from '../../store/index';
import Todoslist from './Todoslist';

const mapStateToProps = state => ({
  filteredTodosList: state.filteredTodos,
  isLoaded: state.isLoaded,
});

const mapMethodsToProps = dispatch => ({
  sortByTitle: () => dispatch(sortByTitle()),
  sortByName: () => dispatch(sortByName()),
  sortByCompleted: () => dispatch(sortByCompleted()),
});

const ConnectedTodoslist = connect(
  mapStateToProps,
  mapMethodsToProps
)(Todoslist);

export default ConnectedTodoslist;
