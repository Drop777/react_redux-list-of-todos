import { connect } from 'react-redux';
import App from './App';
import { loadTodos } from '../../store/index';

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  isLoaded: state.isLoaded,
  hasError: state.hasError,
});

const mapMethodsToState = dispatch => ({
  loadTodos: () => dispatch(loadTodos()),
});

const ConnectedApp = connect(mapStateToProps, mapMethodsToState)(App);

export default ConnectedApp;
