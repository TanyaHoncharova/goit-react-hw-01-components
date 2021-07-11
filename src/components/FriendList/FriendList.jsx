import React from 'react';
import PropTypes from "prop-types";
import defaultPhoto from '../dataFile/defaultPhoto.jpg';
import style from './FriendList.module.css';

const FriendsList = ({friends}) =>(
    <ul className={style.friends} >
        {friends.map(e => {
            return (
               <li className={style.item} key={e.id}>
                    <span className={e.isOnline?style.onLine : style.ofLine}>{ e.isOnline}</span>
                <img className={style.avatar} src={e.avatar} alt={e.name} width="48" />
                <p className={style.name}>{e.name} </p>
                </li>)}
        )}       
        </ul>);



FriendsList.defaultProps = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: defaultPhoto,
    })
  ),
};

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
        avatar: PropTypes.string,
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default FriendsList;