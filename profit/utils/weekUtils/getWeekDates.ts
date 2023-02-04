import {startOfWeek, isSameWeek} from 'date-fns';


export const getWeekDates = (anyDayOfWeek: Date): Date[] => {
    const dayOfWeek = startOfWeek(anyDayOfWeek, {weekStartsOn: 1});
    const allWeekDays: Date[] = [];

    while (isSameWeek(dayOfWeek, anyDayOfWeek)) {
        allWeekDays.push(new Date(dayOfWeek));
        dayOfWeek.setDate(dayOfWeek.getDate() + 1);
    }

    return allWeekDays;
};
