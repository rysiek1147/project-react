import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import {settings, pageContents, listData} from '../../data/dataStore';
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator.js';

class App extends React.Component {
  state = {
    lists: [listData] || [],
  }

  static propTypes = {
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
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <div className={styles.creator}>
          <Creator text={settings.listCreatorText} action={title => this.addList(title, settings.listImage, settings.defaultListDescription)}/>
        </div>
        {this.state.lists.map(({key, ...listProps}) => (
          <List key={key} {...listProps} />
        ))}
      </main>
    );
  }
}

export default App;
