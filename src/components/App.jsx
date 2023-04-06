import style from './App.module.css'

import { Profile } from './Profile';
import user from '../json/user.json';

import { Statistics } from './Statistics';
import data from '../json/data.json';

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
    </div>
  );
};
