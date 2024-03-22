import './ProductList.css'
import ProductCard from '../ProductCard/ProductCard'
import PropTypes from 'prop-types'

const ProductList = ({products, handleCart}) => {
  return (
    <div className='product-list'>
        {products.map((product) => <ProductCard key={product.id} product={product} handleCart={handleCart}/>)}
    </div>
  )
}

ProductList.propTypes = {
    products: PropTypes.array,
    handleCart: PropTypes.func
}

export default ProductList
