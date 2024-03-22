import './ProductCard.css'
import PropTypes from 'prop-types'

const ProductCard = ({product: {name, price, category, description}, handleCart}) => {
  return (
    <div className='product-card'>
        <p className='prod-name'>{name}</p>
        <p className='prod-prc'>{price} €</p>
        <p className='prod-cat'>{category}</p>
        <p className='prod-desc'>{description}</p>
        <button type='button' className='add-button' onClick={() => handleCart({name, price, category, description})}>Add to cart</button>
    </div>
  )
}

ProductCard.propTypes = {
    product: PropTypes.object,
    name: PropTypes.string,
    price: PropTypes.number,
    category: PropTypes.string,
    description: PropTypes.string,
    handleCart: PropTypes.func
}

export default ProductCard