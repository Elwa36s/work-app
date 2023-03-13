import React, {FC, useState} from 'react';
import {Order} from './components/Order';
import {getDayTitle} from './utils'
import {DayOrders} from '@app/types';
import styles from './styles.module.scss';

interface DayProps {
    date: Date;
    dayOrders?: DayOrders;
}

export const View: FC<DayProps> = (props) => {
    const {date, dayOrders} = props;
    const minOrdersAmount = 4;

    const [isOpenNewOrder, setIsOpenNewOrder] = useState(false);

    return (
        <div className={styles.day}>
            <h4 className={styles.day_title}>{getDayTitle(date)}</h4>
            <ul className={styles.day_order_list}>
                {
                    dayOrders && dayOrders.map((order) => <Order key={order.id} orderInfo={order} />)
                }
            </ul>
            <button className={styles.day_add_order_button}>
                + new order
            </button>
        </div>
    );
};
