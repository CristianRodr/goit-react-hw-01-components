import style from './FriendList.module.css';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export function FriendList({ friends }) {

  let colorGreen = '#09A129';
  let colorRed = '#E15554';

  const MySpan = styled.span`
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;
    background: ${({ background }) => background};
  `;

  return (
    <ul className={style['friend-list']}>
      {friends.map(friend =>
        <li key={friend.id} className={style.item}>
          <MySpan background={friend.isOnline === true ? colorGreen : colorRed}></MySpan>
          <img className={style.avatar} src={friend.avatar} alt='User avatar' width='48' />
          <p className={style.name}>{friend.name}</p>
        </li>,
      )}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  )
};
