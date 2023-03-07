import {useRouter} from 'next/router';
import {useEffect, useMemo} from 'react';
import {PageLayout} from '@app/components/PageLayout';
import {Week} from '@app/components/Schedule/Week';

export default function WeekPage () {
    const router = useRouter();

    const date = useMemo(() => {
        const {weekDay} = router.query;
        
        return weekDay ? new Date(weekDay.toString()) : null;
    }, [router]);
    
    if (!date) {
        // redirect to /week
        return null;
    }

    return (
        <PageLayout title={`${0} Week`}>
            <Week dayOfWeek={date} />
        </PageLayout>
    )
};
