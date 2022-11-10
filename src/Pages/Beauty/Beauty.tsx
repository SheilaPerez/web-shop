import { useContext } from 'react';
import CartContext, { CartProduct } from '../../Context/CartContext';
import { Product } from '../../Shared/Product';
import styles from './Beauty.module.css';

const Beauty = () => {
    const beautyProducts: Product[] = [
        {
            image: "eyeliner.jpeg",
            price: 15,
            description: "black eye liner waterproff"
        }, {
            image: "lipstick.jpeg",
            price: 8,
            description: "red velvet permanent lipstick"
        }, {
            image: "skin.jpeg",
            price: 22,
            description: "perfect skin"
        }
    ]

    const {cartState, setCartState} = useContext(CartContext);

    const handleclickProduct = (product: Product) => {
        const foundCartProductIndex = cartState.findIndex((cartProduct: CartProduct, index: number) => {
            return cartProduct.description === product.description
        })
        if (foundCartProductIndex === -1) {
            setCartState([...cartState, {
                ...product,
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
        <div>
            <div className={styles.content}>
                {beautyProducts.map((product: Product) => {
                    return (
                        <div onClick={() => handleclickProduct(product)} className={styles.productContent}>
                            <img src={product.image} className={styles.productImgStyle}></img>
                            <p className={styles.description}>{product.description}</p>  
                            <p>{product.price}€</p>
                        </div>    
                    )
                })}
            </div>
        </div>
    )
};

export default Beauty;