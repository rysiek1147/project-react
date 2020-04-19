import {connect} from 'react-redux';
import List from './List';
//import {getColumnsForList, createActionAddColumn} from '../../redux/columnsRedux.js';
import * as columnsActions from '../../redux/actions/columns';
import * as columnsSelectors from '../../redux/selectors/columns';

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const filteredList = state.lists.filter(list => list.id == id);
  const listParams = filteredList[0] || {};

  return {
    ...listParams,
    columns: columnsSelectors.getColumnsForList(state, id),
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(columnsActions.createActionAddColumn({
    listId: props.match.params.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);