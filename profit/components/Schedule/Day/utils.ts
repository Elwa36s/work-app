import {format} from 'date-fns';

export const getDayTitle = (date: Date) => format(date, 'cccc, do');
