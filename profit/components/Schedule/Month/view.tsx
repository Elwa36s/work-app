import React, {FC, useCallback, useMemo} from 'react';
import {getMonthWeeksStarts} from '@app/utils';
import {Container} from '@mui/material';
import {format, startOfMonth, isSameMonth, addDays} from 'date-fns';
import styles from './styles.module.scss';

interface MonthProps {
    dayOfMonth: Date;
}

export const View: FC<MonthProps> = (props) => {
    const {dayOfMonth} = props;
    const weeksDays = useMemo(() => {getMonthWeeksStarts(dayOfMonth)}, [dayOfMonth]);
    // const renderMonth = (weeksDays: Date[]) => weeksDays.map((day) => (<Week key={day.getMilliseconds()} date={day}/>));
    const month = format(dayOfMonth, 'LLLL');
    const legend = ['m', 't', 'w', 't', 'f', 's', 's'];

    const renderDays = useCallback(() => {
        const firstDay = startOfMonth(dayOfMonth);
        const firstDayOfWeek = firstDay.getDay();
        const daysArr: React.ReactNode[] = [];

        if (firstDayOfWeek !== 1) {
            const emptyLength = Math.abs(1 - firstDayOfWeek);
            const emptyArr = new Array(emptyLength).fill(<div />);
            daysArr.push(...emptyArr);
        };

        let renderedDay = new Date(firstDay);
        while (isSameMonth(firstDay, renderedDay)) {
            const date = renderedDay.getDate();
            const timestamp = renderedDay.getTime();

            daysArr.push(<div key={timestamp} className={styles.month_day}>{date}</div>);
            renderedDay = addDays(renderedDay, 1);
        };

        return daysArr;
    }, [dayOfMonth]);

    return (
        <Container className={styles.month}>
            <div className={styles.month_title}>{month}</div>
            <div className={styles['month_week-legend']}>
                {legend.map((day, index) => {
                    return <div key={index}>{day}</div>
                })}
            </div>
            <div className={styles.month_grid}>
                {...renderDays()}
            </div>
        </Container>
    );
};

