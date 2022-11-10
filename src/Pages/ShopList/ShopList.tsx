import { useContext, useState } from 'react';
import CartContext, { CartProduct, GlobalContextProps } from '../../Context/CartContext';
import { Product } from '../../Shared/Product';
import styles from './ShopList.module.css';


const ShopList = ( ) => {
    const {cartState, setCartState} = useContext<GlobalContextProps>(CartContext)

    const totalPrice = cartState.reduce((previousValue: number, currentValue: CartProduct ) => {
        return previousValue + (currentValue.price * currentValue.quantity)
    },0)

    const handleClickDeleteProducts = (selectProduct: string) => {
        console.log('click')
        setCartState(cartState.filter((cartProduct: CartProduct) => {
                return cartProduct.description !== selectProduct;
            })
        )
    }

    const handleClickQuantityPlus = (productName: string) => {
        setCartState(
            cartState.map((cartProduct: CartProduct) => {
                if (cartProduct.description === productName) {
                    cartProduct.quantity++;
                }
                return cartProduct;
            })
        )
    }

    const handleClickQuantityMin = (productName: string) => {
        setCartState(
            cartState.map((cartProduct: CartProduct) => {
                if (cartProduct.description === productName) {
                    cartProduct.quantity--;
                }
                return cartProduct;
            })
        )
    }

    return (
        <div className={styles.shopListContent}>
            <div>
                {cartState.map((product: CartProduct) => {
                    return (
                        <div className={styles.productContent}>
                            <div className={styles.quantity}>
                                <button type="button" className={styles.minPlusBtn} onClick={() => handleClickQuantityMin(product.description)}>-</button>
                                <p>{product.quantity}</p>
                                <button type="button" className={styles.minPlusBtn}  onClick={() => handleClickQuantityPlus(product.description)}>+</button>
                            </div>
                            <img src={product.image} className={styles.productImgStyle}></img>
                            <div>
                                <p className={styles.description}>{product.description}</p>
                                <div className={styles.optionsCartProduct}>
                                    <p>{product.price * product.quantity}€</p>
                                    <button type="button" className={styles.deleteBtn} onClick={() => handleClickDeleteProducts(product.description)}>Delete</button>
                                </div> 
                            </div>    
                        </div>
                    )
                })}
            </div>
            <p className={styles.totalPrice}>Total: <span>{totalPrice}</span>€</p>
        </div>
    )
};

export default ShopList;