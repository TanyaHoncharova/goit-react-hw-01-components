import React from 'react';
import PropTypes from "prop-types";
import style from './TransactionHistory.module.css'


const TransactionHistory = ({items}) => {
    return (
        <table className={style.transactionHistory}>
            <thead>
                <tr >
                    <th className={style.tr}>Type</th>
                    <th className={style.tr}>Amount</th>
                    <th className={style.tr}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({ id, type, amount, currency }) => {
                    return (
                        <tr className={style.tr} key={id}>
                            <td className={style.td}>{type}</td>
                            <td className={style.td}>{amount}</td>
                            <td className={style.td}>{currency}</td>
                        </tr>)
                })}
            </tbody>
        </table>
    )
};


TransactionHistory.propTyps = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.stringisRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default TransactionHistory;
