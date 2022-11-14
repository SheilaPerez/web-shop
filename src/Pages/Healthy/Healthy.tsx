import { useContext } from 'react';
import AddText from '../../Components/AddText';
import CartContext, { CartProduct } from '../../Context/CartContext';
import { Product } from '../../Shared/Product';
import styles from './Healthy.module.css';

const Healthy = () => {
    const healthyProducts: Product[] = [
        {
            image: "agucate.jpeg",
            price: 1,
            description: "avocado"
        }, {
            image: "banana.jpeg",
            price: 3.99,
            description: "banana"
        }, {
            image: "tomate.jpeg",
            price: 2.99,
            description: "tomato"
        }
    ]
    const {cartState, setCartState} = useContext(CartContext);

    const handleClickProduct = (product: Product) => {
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
        <div className={styles.content}>
            <AddText></AddText>
            {healthyProducts.map((product) => {
                return (
                    <div onClick={() => handleClickProduct(product)} className={styles.productContent}>
                        <img src={product.image} className={styles.productImgStyle}></img>
                        <p className={styles.description}>{product.description}</p>  
                        <p>{product.price}€</p>
                    </div>
                )
            })}
        </div>
    )
};

export default Healthy;