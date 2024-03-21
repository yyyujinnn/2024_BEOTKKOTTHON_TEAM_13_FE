import React, { useEffect, useState } from 'react';
import SaleProduct from '../../components/SaleProduct/SaleProduct';
import axios from 'axios';

export default function TemporaryHome() {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://20.39.188.154:8080/post/list', {
                    params: {
                        type: 'all',
                        bcode: '',
                        keyword: '',
                        page: 1
                    }
                });
                setProducts(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    

    return (
        <div>
            <p>임시 홈 화면임.</p>
            {products.length > 0 && (
                products.map((product, index) => (
                    <SaleProduct key={index} product={product} />
                ))
            )}
        </div>
    );
}
