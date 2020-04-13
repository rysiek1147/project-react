import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
  }

  render() {
    const {title} = this.props;
    return (
      <p className={styles.component}>
        {title}
      </p>
    );
  }
}

export default Card;
