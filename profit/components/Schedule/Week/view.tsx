import React, {FC, useMemo} from 'react';
import {getWeekDates} from '@app/utils';
import {Day} from '@components/Schedule/Day';
import styles from './styles.module.scss';
 
interface WeekProps {
    dayOfWeek: Date;
}

export const View: FC<WeekProps> = (props) => {
    const {dayOfWeek} = props;
    const weekDays = useMemo(() => getWeekDates(dayOfWeek), [dayOfWeek]);
    const mockData = [
        {
            id: '1',
            begin: '10:30',
            end: '11:30',
            order_name: 'Order 1',
            customer: 'Andrew',
        },
        {
            id: '2',
            begin: '11:45',
            end: '13:30',
            order_name: 'Order 2',
            customer: 'Ben',
        },
        {
            id: '3',
            begin: '14:00',
            end: '16:15',
            order_name: 'Order 3',
            customer: 'Carl',
        },
    ];

    const renderWeek = (weekDaysArr: Date[]) => weekDaysArr.map((day) => (<Day dayOrders={mockData} key={day.getMilliseconds()} date={day}/>));
    
    return (
        <div className={styles.week}>{renderWeek(weekDays)}</div>
    );
};
