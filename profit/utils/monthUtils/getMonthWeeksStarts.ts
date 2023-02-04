import {getWeeksInMonth, startOfMonth, addWeeks} from 'date-fns';

export const getMonthWeeksStarts = (dayOfMonth: Date): Date[] => {
    const firstDayOfMonth = startOfMonth(dayOfMonth);
    const numberOfWeeks = getWeeksInMonth(firstDayOfMonth, {weekStartsOn: 1});
    const startOfWeekDays: Date[] = [];

    for (let i = 0; i <= numberOfWeeks; i++) {
        const weekStartDay = addWeeks(firstDayOfMonth, i);

        startOfWeekDays.push(weekStartDay);
    }

    return startOfWeekDays;
};
