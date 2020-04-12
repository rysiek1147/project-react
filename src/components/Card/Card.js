import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
  }

  render() {
    return (
      <p className={styles.component}>
       {this.props.title}
      </p>
    )
  }
}

export default Card;
