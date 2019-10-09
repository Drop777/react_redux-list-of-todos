import React from 'react';
import PropTypes from 'prop-types';
import ConnectedTodoslist from '../Todoslist/ConnectedTodoslist';

class App extends React.Component {
  loadTodosList = async() => {
    await this.props.loadTodos();
  }

  render() {
    const { hasError, isLoaded, isLoading } = this.props;
    if (hasError) {
      return (
        <>
          <p>Conection problem</p>
          <button
            type="button"
            className="button-load"
            onClick={this.loadTodosList}
            disabled={isLoading}
          >
            {isLoading
              ? 'Loading...'
              : 'Load'}
          </button>
        </>
      );
    }

    return (
      <div className="App">
        <h1>Redux list of todos</h1>
        {!isLoaded && (
          <button
            type="button"
            className="button-load"
            onClick={this.loadTodosList}
            disabled={isLoading}
          >
            {isLoading
              ? 'Loading...'
              : 'Load'}
          </button>
        )}
        {isLoaded && (
          <ConnectedTodoslist />
        )}
      </div>
    );
  }
}

App.propTypes = {
  loadTodos: PropTypes.func,
  hasError: PropTypes.bool,
  isLoaded: PropTypes.bool,
  isLoading: PropTypes.bool,
}.isRequaired;

export default App;
