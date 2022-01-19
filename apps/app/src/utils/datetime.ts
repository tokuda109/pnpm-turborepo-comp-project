import dayjs from 'dayjs';

export const format = (date: string): string => {
  return dayjs(date).format('YYYY/MM/DD');
};
