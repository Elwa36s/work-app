import React, {useState} from 'react';
import {PageLayout} from '@components/PageLayout';
import {Week} from '@components/Schedule/Week';
import {getStartOfWeek} from '@app/utils';
import {getWeek} from 'date-fns';
import { Month } from '@app/components/Schedule/Month';

export default function Home() {
  const today = new Date();
  const [previewWeek, setPreviewWeek] = useState(getWeek(today));

  return (
    <PageLayout title="Home">
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexWrap: 'wrap', height: '100vh'}}>
          {/* <Week dayOfWeek={getStartOfWeek(today, previewWeek)} /> */}
          {<Month dayOfMonth={today} />}
          Manage your profits
      </div>
    </PageLayout>
  )
};
