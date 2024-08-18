import React from 'react';
import Cards from './Cards';
import './Cards.css';

const CardContainer = () => {
  return (
    <div className="card-container">
      <Cards
        image="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Ff2f12a6676701e3f41b407374b57a1b0.cdn.bubble.io%2Ff1712173801857x753064273809474600%2FKinnaur_Kailash.jpg?w=384&h=254&auto=compress&dpr=1.25&q=50&fm=png&fit=max"
         title="Volunteer In Himanchal"
        content="Himachal is your spot if you want to lend a hand in a lively mountain community. Dive into colorful festivals, make friends, and leave a positive impact while surrounded by stunning views."
      />
      <Cards
        image="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Ff2f12a6676701e3f41b407374b57a1b0.cdn.bubble.io%2Ff1712173898707x397714471983216400%2Futtarakhand-1024x576.jpg?w=384&h=254&auto=compress&dpr=1.25&q=50&fm=png&fit=max"
         title="Volunteer In Uttarakhand"
        content="Here you'll help preserve breathtaking nature and soak up the peaceful vibes of the Garhwal & Kumaon region. It's like giving back while getting a spiritual recharge!"
      />
      <Cards
        image="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Ff2f12a6676701e3f41b407374b57a1b0.cdn.bubble.io%2Ff1712173928948x736578539417560600%2FBest-Places-to-Visit-in-Rajasthan.jpg?w=384&h=254&auto=compress&dpr=1.25&q=50&fm=png&fit=max"
         title="Volunteer In Rajasthan"
        content="Rajasthan is where you can volunteer amidst majestic forts and lively markets, all while helping to keep its rich heritage alive. Dive into the colorful culture, lend a hand, and feel like a royal do-gooder"
      />
       <Cards
        image="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Ff2f12a6676701e3f41b407374b57a1b0.cdn.bubble.io%2Ff1712173947479x262991666635813860%2FGoa-overview-things-to-do-in-goa.jpg?w=384&h=254&auto=compress&dpr=1.25&q=50&fm=png&fit=max"
        title="Volunteer In Goa."
        content="Goa offers a unique blend of making a difference and enjoying the laid-back beach lifestyle. Helping homestays with your skills. It's like combining the satisfaction of giving back with the... "
      />
    </div>
  );
}

export default CardContainer;
