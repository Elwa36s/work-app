import {PageLayout} from '@components/PageLayout';
import styles from '@styles/404.module.scss';

export default function ErrorPage () {
    return (
        <PageLayout title="Error 404">
            <div className={styles.content}>
                <h1>Error 404</h1>
                <h3>{`Don’t worry, we’re right here to help you get back on the app`}</h3>
            </div>
        </PageLayout>
    );
};
