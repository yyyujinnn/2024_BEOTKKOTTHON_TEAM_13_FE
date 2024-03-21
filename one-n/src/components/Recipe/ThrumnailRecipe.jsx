// 간단 레시피 컴포넌트
import React from "react"
import '../../pages/MainPage/MainPage.css'
import like from '../../assets/icons/like.svg'

export const ThrumnailRecipe = ({data}) => {

    return(
        <div className='recipePhoto'>
            {data.map((item) => (
              <div>
                <img src={item.thumbnail_image} className='rec-photo' />
                <div className='photoStyle' >
                <img src={like} alt='like' />
                <span> {item.title} </span> 
              </div>
              </div>
            ))}
        </div>
    )
}