import React from 'react';
import PropTypes from "prop-types";
import defaultPhoto from '../dataFile/defaultPhoto.jpg';
import style from './Profile.module.css'



const Profile = ({avatar, name, tag, location, stats}) => {
  return (
    <div className={ style.profile} >
    <div className={style.description}>
      <img
        src={avatar}
        alt="Аватар пользователя"
      className={style.avatar}
      />
      <p className={style.name}>{name}</p>
      <p className={style.tag}> @{tag} </p>
        <p className={style.location}>{location}</p>
      </div>
    
      <ul className={style.stats}>
        <li>
          <span className={style.labal}>Followers</span>
          <span className={style.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={style.labal}>Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className={style.labal}>Likes</span>
          <span className={style.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
 );
};

Profile.defaultProps = {
  avatar: defaultPhoto,
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  })
};

export default Profile;