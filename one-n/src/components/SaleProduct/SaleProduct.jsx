import React from "react";
import './SaleProduct.css';

export default function SaleProduct ({product}) {
    return (
        <div className="sale-product">
            <h2>{product.title}</h2>
            <p>위치: {product.latitude}, {product.longitude}</p>
            {/* 다른 상세 정보들도 필요한 경우 여기에 추가 */}
        </div>
    );
}