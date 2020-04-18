import {connect} from 'react-redux';
import List from './List';
//import {getColumnsForList, createActionAddColumn} from '../../redux/columnsRedux.js';
import * as columnsActions from '../../redux/actions/columns';
import * as columnsSelectors from '../../redux/selectors/columns';

const mapStateToProps = (state, props) => ({
  columns: columnsSelectors.getColumnsForList(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(columnsActions.createActionAddColumn({
    listId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);