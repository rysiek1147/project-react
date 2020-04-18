import {connect} from 'react-redux';
import Column from './Column';
//import {getCardsForColumn, createActionAddCard} from '../../redux/cardsRedux.js';
import * as cardsActions from '../../redux/actions/cards';
import * as cardsSelectors from '../../redux/selectors/cards';

const mapStateToProps = (state, props) => ({
  cards: cardsSelectors.getCardsForColumn(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(cardsActions.createActionAddCard({
    columnId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);