import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import data from './data';
import Itemcard from './Itemcard';
import './main.css';

const Products = () => {
    return (
        <>
            <Navbar />
            <section className="container mt-5 mb-5 pt-5">
                <h2 className="display-5 text-white text-center">Products</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4 text-center text-white">
                    {data.productData.map((item, index) => {
                        return (
                            <Itemcard
                                img={item.img}
                                title={item.title}
                                price={item.price}
                                item={item}
                                key={index}
                            />
                        )
                    })}
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Products;