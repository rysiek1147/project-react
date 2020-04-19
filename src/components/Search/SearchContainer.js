import {connect} from 'react-redux';
import Search from './Search';
import * as searchStringActions from '../../redux/actions/searchString';
import * as searchStringSelectors from '../../redux/selectors/searchString';

const mapStateToProps = (state) => ({
  searchString: searchStringSelectors.getSearchString(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(searchStringActions.createActionChangeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
