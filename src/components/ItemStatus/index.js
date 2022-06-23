import styles from './ItemStatus.module.css';

function ItemStatus(props) {
    const { region } = props;
    let count = region.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
    return (
        <div className={styles.global__statusPieces}>
            <h2 className={styles.global__statusTitle}>{region.status}</h2>
            <h1 className={region.status === "Confirmed" ? styles.global__statusPositif : region.status === "Recovered" ? styles.global__statusSembuh : region.status === "Deaths" ? styles.global__statusMeninggal : null}>{count}</h1>
            <a href={region.detail} className={styles.global__statusA}>More Info</a>
        </div >
    );
}

export default ItemStatus;