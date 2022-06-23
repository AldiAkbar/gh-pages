import styles from './Global.module.css';
import { nanoid } from "nanoid";
import ItemStatus from '../ItemStatus';

function Covid(props) {
    const { title, region } = props;

    return (
        <div className={styles.container}>
            <div className={styles.global}>
                <h1 className={styles.global__title}>{title}</h1>
                <h4 className={styles.global__desc}>Data Covid Berdasarkan {title}</h4>
                <div className={styles.global__statusGroup}>
                    {region.map((g) => {
                        return <ItemStatus key={nanoid()} region={g} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Covid;