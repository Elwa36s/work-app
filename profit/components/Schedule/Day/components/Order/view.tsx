import React, {FC, useState} from 'react';
import {OrderInfo} from '@app/types';
import styles from './styles.module.scss';

interface OrderProps {
    orderInfo: OrderInfo;
}

export const View: FC<OrderProps> = (props) => {
    const {orderInfo} = props;
    const {begin, end, order_name, customer} = orderInfo;

    return (
        <div className={styles.order}>
            <div className={styles.order_time}>
                <div>{begin}</div>
                <hr/>
                <div>{end}</div>
            </div>
            <div className={styles.order_info}>
                <div className={styles.order_name}>
                    {order_name}
                </div>
                <div className={styles.order_customer}>
                    for {customer}
                </div>
            </div>

        </div>
    );
};
