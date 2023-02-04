import {setWeek, startOfWeek} from 'date-fns';

export const getStartOfWeek = (dayOfMonth: Date, weekNumber: number): Date => {
    const weekDate = setWeek(dayOfMonth, weekNumber);

    return startOfWeek(weekDate, {weekStartsOn: 1}); 
};
