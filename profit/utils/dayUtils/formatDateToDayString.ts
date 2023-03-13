import {format} from 'date-fns';

export const formatDateToDayString = (date: Date) => format(date, 'do MMM yyyy');
