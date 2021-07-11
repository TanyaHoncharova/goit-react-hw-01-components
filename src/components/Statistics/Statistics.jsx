import React from 'react';
import PropTypes from "prop-types";

import style from './Statistics.module.css'


const Statistics = ({ title, stats }) => {
    return (
        <section className={style.statistics}>
            {{ title } && <h2 className={style.title}>{title}</h2>}

            <ul className={style.statList}>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <li className={style.item}key={id}>
        <span className="label">{label}</span>
        <span className={style.percentage}>{percentage}%</span>
      </li>)
                })
                }

            </ul>
        </section>
    )
};

Statistics.defaultProps = {
    title: "",
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string,
        lable: PropTypes.string,
        percentage: PropTypes.number,
        })
    ).isRequired,
};

export default Statistics;