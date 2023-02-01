import {PageLayout} from '@components/PageLayout';
import {Day} from '@components/Schedule/Day';

import {startOfMonth, endOfMonth, isSameDay} from 'date-fns';

export default function Home() {
  const today = new Date();
  const firstDayOfMonth = startOfMonth(today);
  const lastDayOfMonth = endOfMonth(today);

  const renderSchedule = (): JSX.Element[] => {
    const dateMonth = new Date (firstDayOfMonth);
    const allMonthDays: Date[] = [];

    while (!isSameDay(dateMonth, lastDayOfMonth)) {
      allMonthDays.push(new Date(dateMonth));
      dateMonth.setDate(dateMonth.getDate() + 1);
    }
    allMonthDays.push(new Date(lastDayOfMonth));

    return allMonthDays.map((dateObj) => {
      return <Day date={dateObj} key={dateObj.getMilliseconds()} />
    });
  };

  return (
    <PageLayout title="Home">
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
        {renderSchedule()}
      </div>
    </PageLayout>
  )
};
