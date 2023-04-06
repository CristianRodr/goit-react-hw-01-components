import style from "./Profile.module.css"
export function Profile({
                          avatar,
                          likes,
                          views,
                          followers,
                          location,
                          tag,
                          username,
                        }) {

  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img
          src={avatar}
          alt='User avatar'
          className={style.avatar}
        />
        <p className={style.name}>{username}</p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.stats}>
        <li>
          <span className={style.label}>Followers</span>
          <span className={style.quantity}>{followers.toLocaleString('en-US')}</span>
        </li>
        <li>
          <span className={style.label}>Views</span>
          <span className={style.quantity}>{views.toLocaleString('en-US')}</span>
        </li>
        <li>
          <span className={style.label}>Likes</span>
          <span className={style.quantity}>{likes.toLocaleString('en-US')}</span>
        </li>
      </ul>
    </div>
  );
}
