import React from 'react';
import AddToCart from '../AddToCart';
import styles from './ProductCard.module.css';

const ProductCard = () => {
  const productName = 'Product Name Here';

  return (
    <div className={styles.cardContainer}>
      <h2>{productName}</h2>
      <AddToCart />
    </div>
  );
};

export default ProductCard;