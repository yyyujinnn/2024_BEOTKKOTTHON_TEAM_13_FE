import React from "react";
import './SaleProduct.css';
import profile from '../../assets/Profile.png'


//프로필이미지는 추후 api로 받은 이미지 사용
export default function SaleProduct({ product }) {
    return (
        <div className="sale-product">
            <div className="product-info">
                <div className="product-details">
                    <img src={profile} alt="Product" className="product-image" />

                        <div className="user-name">{product.name} </div>
                        <span className="user-level"> Lv. {product.level}</span>
                   
                </div>
                <div className="products">
                    {product.item.map((item, index) => (
                            <span key={index} className="product-item">{item}</span>
                        ))}
                </div>
                
            </div>
        </div>
    );
}
