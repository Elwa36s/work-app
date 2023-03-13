import {useMemo} from 'react';
import { GetStaticProps, GetStaticPaths, GetServerSideProps, NextPage} from 'next'
import {useRouter} from 'next/router';
import {PageLayout} from '@app/components/PageLayout';
import {Day} from '@app/components/Schedule/Day';
import {formatDateToDayString} from '@app/utils';

interface DayPageProps {
    dateString: string; 
}

export default function DayPage (props: DayPageProps){
    const {dateString} = props;
    const {date} = useRouter().query;

    const day = useMemo(() => {
        if (date) {
            let dateObj: null | Date = null;

            try {
                dateObj = new Date(date.toString());
            } catch {
                throw ('Incorrect date string.');
            } finally {
                return dateObj;
            }
        }
    }, [date]);

    if (day) {
        return (
            <PageLayout title={`${formatDateToDayString(day)}`}>
                <Day date={new Date(day)} />
            </PageLayout>
        )
    }
};

export const getStaticProps: GetStaticProps = async ({params}) => {
    return {
      props: {
        dateString: params?.date,
      },
    }
  }
