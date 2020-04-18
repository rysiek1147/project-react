import {connect} from 'react-redux';
import App from './App';
import * as listsActions from '../../redux/actions/lists';

const mapStateToProps = state => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,
});

const mapDispatchToProps = (dispatch, props) => ({
  addList: title => dispatch(listsActions.createActionAddList({
    listId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);