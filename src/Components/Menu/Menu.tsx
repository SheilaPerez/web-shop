import styles from './Menu.module.css';
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import ShopList from '../../Pages/ShopList';
import { Product } from '../../Shared/Product';
import { initialCartState, CartContextProvider, GlobalContextProps } from '../../Context/CartContext';

const Menu = () => {
    const navigate = useNavigate();
    const [shopIconClicked, setShopIconClicked] = useState<Boolean>(false);

    const handleClickShopIcon = () => {
        setShopIconClicked(!shopIconClicked);
    }

    return (
            <div className={styles.menuContent}>
                <h1 onClick={() => navigate("/")} className={styles.title}>Shop Now</h1>
                <p onClick={() => navigate("/beauty")} className={styles.menuLink}>beauty</p>
                <p onClick={() => navigate("/clothes")} className={styles.menuLink}>clothes</p>
                <p onClick={() => navigate("/healthy")} className={styles.menuLink}>eat healthy</p>
                <HiOutlineShoppingBag onClick={handleClickShopIcon} size={25} className={styles.shopIcon} />
                {shopIconClicked && <ShopList />}
            </div>
        
    )
};

export default Menu;