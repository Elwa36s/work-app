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
    const renderWeek = (weekDaysArr: Date[]) => weekDaysArr.map((day) => (<Day key={day.getMilliseconds()} date={day}/>));
    
    return (
        <div className={styles.week}>{renderWeek(weekDays)}</div>
    );
};
