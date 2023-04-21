import React from 'react';
import head from '../../images/others/bannerTwo-2.png'
import './BannerTwo.css';

const BannerTwo = () => {
    return (
        <div className='bannerTwo'>
          <div className='bannerTwo-text'>
               <img src={head} alt="" />
               <h2>ORDER FASTFOOD NOW, RECEIVE IT <br />IMMEDIATELY</h2>
               <p>Fast food is a popular culinary trend in the world…</p>
               <a href="/meals">SHOP NOW</a>
          </div>
        </div>
    );
};

export default BannerTwo;