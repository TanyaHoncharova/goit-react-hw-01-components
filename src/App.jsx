import React from 'react';

import Container from './components/Container/Container';

import Profile from './components/Profile/Profile';
import user from './components/dataFile/user';

import Statistics from './components/Statistics/Statistics';
import statData from './components/dataFile/statistical-data';

import FriendsList from './components/FriendList/FriendList';
import friends from './components/dataFile/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import items from './components/dataFile/transactions.json';

import './App.css';

function App() {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        />
      <Statistics title="Upload stats" stats={statData} />
      <Statistics stats={statData} />
      <FriendsList friends={friends} />
      <TransactionHistory  items={items}/>      
    </Container>
  );
}

export default App;
