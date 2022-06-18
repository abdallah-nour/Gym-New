import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from 'react-use-cart';

const Itemcard = (props) => {

    const { addItem } = useCart();

    return (
        <div className='col'>
            <div className='card h-100'>
                <img src={props.img} className='card-img-top' alt='...' />
                <div className='card-body'>
                    <h5 className='text-white'>{props.title}</h5>
                    <p className='card-text'>Precio: ${props.price}</p>
                    <button className='btn btn-danger products-btn' onClick={() => addItem(props.item)}>
                        <FaShoppingCart className='ps-2 fs-4' /> Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Itemcard;