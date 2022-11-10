import { useContext } from 'react';
import CartContext, { CartProduct } from '../../Context/CartContext';
import { Product } from '../../Shared/Product';
import styles from './Clothes.module.css';

const Clothes = () => {
    const clothesProducts: Product[] = [
        {
            image: "dress.jpg",
            price: 32.99,
            description: "black dress"
        }, {
            image: "pants.jpeg",
            price: 16.99,
            description: "yellow short"
        }, {
            image: "skirt.jpg",
            price: 23.45,
            description: "black short skirt"
        }
    ]

    const {cartState, setCartState} = useContext(CartContext);

    const handleClickProduct = (clothes: Product) => {
        const foundCartProductIndex = cartState.findIndex((cartProduct: CartProduct, index: number) => {
            return cartProduct.description === clothes.description
        })
        if (foundCartProductIndex === -1) {
            setCartState([...cartState, {
                ...clothes,
                quantity: 1
            }])
        } else {
            setCartState(
                cartState.map((cartProduct: CartProduct, index: number) => {
                    if (index === foundCartProductIndex) {
                        cartProduct.quantity = cartProduct.quantity + 1
                    }
                    return cartProduct;
                })
            )
        }
    }

    return (
        <div className={styles.content}>
            {clothesProducts.map((clothes) => {
                return (
                    <div onClick={() => handleClickProduct(clothes)} className={styles.productContent}>
                        <img src={clothes.image} className={styles.productImgStyle}></img>
                        <p className={styles.description}>{clothes.description}</p>  
                        <p>{clothes.price}€</p>
                    </div>
                )
            })}
        </div>
    )
};

export default Clothes;