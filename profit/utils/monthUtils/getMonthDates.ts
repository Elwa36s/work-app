import {startOfMonth, isSameMonth} from 'date-fns';

export const getMonthDates = (anyDayOfMonth: Date): Date[] => {
    const monthDay = startOfMonth(anyDayOfMonth);
    const allMonthDays: Date[] = [];

    while (isSameMonth(monthDay, anyDayOfMonth)) {
      allMonthDays.push(new Date(monthDay));
      monthDay.setDate(monthDay.getDate() + 1);
    }

    return allMonthDays;
};
