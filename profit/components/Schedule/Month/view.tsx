import React, {FC, useMemo} from 'react';
import {getMonthWeeksStarts} from '@app/utils';
import {Day} from '@components/Schedule/Day';

interface MonthProps {
    dayOfMonth: Date;
}

export const View: FC<MonthProps> = (props) => {
    const {dayOfMonth} = props;
    const weeksDays = useMemo(() => getMonthWeeksStarts(dayOfMonth), [dayOfMonth]);
    const renderMonth = (weeksDays: Date[]) => weeksDays.map((day) => (<Week key={day.getMilliseconds()} date={day}/>));
    
    return (
        <div>{renderMonth(weeksDays)}</div>
    );
};

