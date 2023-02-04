import {isSunday} from 'date-fns';

export const filterSundays = (dates: Date[]) => {
    return [...dates].filter((date) => !isSunday(date));
};
