import styles from './PicsMenu.module.css';
import { useNavigate } from 'react-router-dom';
const PicsMenu = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.picsContent}>
            <div onClick={() => navigate('/beauty')} className={`${styles.beautyImage} ${styles.imageStyle}`}>
            </div>
            <div onClick={() => navigate("/clothes")} className={`${styles.clothesImage} ${styles.imageStyle}`}>
            </div>
            <div onClick={() => navigate("/healthy")} className={`${styles.healthyImage} ${styles.imageStyle}`}>
            </div>
        </div>
    )
};

export default PicsMenu;