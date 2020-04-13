import React from 'react';
import styles from './App.scss';
import List from '../List/ListContainer.js';
import {settings, listData} from '../../data/dataStore';
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator.js';

class App extends React.Component {
  state = {
    lists: [listData] || [],
  }

  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }

  addList(title, image, description) {
    this.setState(state => (
      {
        lists: [
          ...state.lists,
          {
            key: state.lists.length ? state.lists[state.lists.length-1].key+1 : 0,
            title,
            image,
            description,
            columns: [],
          },
        ],
      }
    ));
  }

  render() {
    const {title, subtitle, lists} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <div className={styles.creator}>
          <Creator text={settings.listCreatorText} action={title => this.addList(title, settings.listImage, settings.defaultListDescription)}/>
        </div>
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
      </main>
    );
  }
}

export default App;
