import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import * as cardsSelectors from '../../redux/selectors/cards';
import * as searchStringSelectors from '../../redux/selectors/searchString';


const mapStateToProps = (state, props) => {
  const searchString = props.match.params.searchString;

  return {
    searchString: searchString,
    cards: cardsSelectors.getCardsFromSearch(state, searchString),
    countVisible: searchStringSelectors.countVisibleCards(state, searchString),
    countAll: searchStringSelectors.countAllCards(state),
  };
};

export default connect(mapStateToProps)(SearchResults);