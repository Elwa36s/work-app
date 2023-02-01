import React, {FC} from 'react';
import {getDayTitle} from './utils'
import styles from './styles.module.scss';

interface DayProps {
    date: Date;
}

export const View: FC<DayProps> = (props) => {
    const {date} = props;

    return (
        <div className={styles.day}>
            <h4>{getDayTitle(date)}</h4>
        </div>
    );
};
