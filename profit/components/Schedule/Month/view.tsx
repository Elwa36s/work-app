import React, {FC, useCallback, useMemo} from 'react';
import {useRouter} from 'next/router';
import {getMonthWeeksStarts, formatDate} from '@app/utils';
import {Container} from '@mui/material';
import {format, startOfMonth, isSameMonth, addDays, isSameDay} from 'date-fns';
import classNames from 'classnames';
import styles from './styles.module.scss';

interface MonthProps {
    dayOfMonth: Date;
}

export const View: FC<MonthProps> = (props) => {
    const {dayOfMonth} = props;
    const router = useRouter();

    const dayClickHandler = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLDivElement;

        if (target) {
            const day = target.closest(`.${styles.month_day}`);
            
            if (day) {
                const date = new Date(dayOfMonth);
                date.setDate(parseInt(day.innerHTML));
                router.push(`/day/${formatDate(date)}`);
            }
        }
    }, [router, dayOfMonth]);

    const weeksDays = useMemo(() => {getMonthWeeksStarts(dayOfMonth)}, [dayOfMonth]);
    // const renderMonth = (weeksDays: Date[]) => weeksDays.map((day) => (<Week key={day.getMilliseconds()} date={day}/>));
    const month = format(dayOfMonth, 'LLLL');
    const legend = ['m', 't', 'w', 't', 'f', 's', 's'];

    const renderDays = useCallback(() => {
        const today = new Date();
        const firstDay = startOfMonth(dayOfMonth);
        const firstDayOfWeek = firstDay.getDay();
        const daysArr: React.ReactNode[] = [];

        if (firstDayOfWeek !== 1) {
            const emptyLength = Math.abs(1 - firstDayOfWeek);
            const emptyArr = new Array(emptyLength).fill('');
            emptyArr.forEach((emptyCell, index) => {
                daysArr.push(<div key={`empty-cell-${index}`}/>);
            })
        };

        let renderedDay = new Date(firstDay);
        while (isSameMonth(firstDay, renderedDay)) {
            const date = renderedDay.getDate();
            const timestamp = renderedDay.getTime();
            const isCurrentDay = isSameDay(today, renderedDay);

            daysArr.push(
                <div
                    key={timestamp}
                    className={classNames(styles.month_day, {[styles.current_day]: isCurrentDay})}
                >
                    {date}
                </div>);
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
            <div className={styles.month_grid} onClick={dayClickHandler}>
                {...renderDays()}
            </div>
        </Container>
    );
};

