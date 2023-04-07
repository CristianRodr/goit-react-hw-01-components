import style from './App.module.css'

import { Profile } from './Profile';
import user from '../json/user.json';

import { Statistics } from './Statistics';
import data from '../json/data.json';

import { FriendList } from './FriendList';
import friends from  '../json/friends.json'

import { TransactionHistory } from './TransactionHistory';
import transactions from '../json/transactions.json'

export const App = () => {
  return (
    <div className={style.App}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};
