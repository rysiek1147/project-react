import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container/Container';
import Card from '../Card/Card.js';
import styles from '../SearchResults/SearchResults.scss';
import { settings } from '../../data/dataStore';

class SearchResults extends React.Component {

  static propTypes = {
    searchString: PropTypes.string,
    cards: PropTypes.array,
    countVisible: PropTypes.number,
    countAll: PropTypes.number,
  }

  render() {
    const {countVisible, countAll, cards, searchString} = this.props;
    return (
      <section>
        <Container>
          <h1 className={styles.title}>{settings.search.resultsText}</h1>
          <h5 className={styles.subtitle}>Find {countVisible} result(s) with `{searchString}`  from {countAll} card(s)</h5>
          {cards.map(cardData => (
            
            <Card key={cardData.id} {...cardData} />  
            
          ))}
        </Container>
      </section>
    );
  }
}

export default SearchResults;
