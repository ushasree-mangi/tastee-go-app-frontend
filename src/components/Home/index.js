import React from 'react';
import './index.css'

const Home = () => {
  return (
    <div>
        <BannerSection />
        <WhyChooseUsSection />
        <ExploreMenuSection />
        <HealthyFoodSection />
        <DeliveryAndPaymentSection />
        <ThankingCustomersSection />
        <FollowUsSection />
        {FooterSection()}
    </div>
  );
};

const BannerSection = () => (
  <div className="banner-section-bg-container d-flex justify-content-center flex-column">
    <div className="text-center">
      <h1 className="banner-heading mb-3">Get Delicious Food Anytime</h1>
      <p className="banner-caption mb-4">Eat Smart & Healthy</p>
      <button className="custom-button">View Menu</button>
      <button className="custom-outline-button">Order Now</button>
    </div>
  </div>
);

const WhyChooseUsSection = () => (
  <div className="wcu-section pt-5 pb-5" id="wcuSection">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="wcu-section-heading">Why Choose Us?</h1>
          <p className="wcu-section-description">
            We use both original recipes and classic versions of famous food items.
          </p>
        </div>
        {whyChooseUsData.map((card, index) => (
          <div className="col-12 col-md-4" key={index}>
            <div className="wcu-card p-3 mb-3">
              <img src={card.image} className="wcu-card-image" alt={card.title} />
              <h1 className="wcu-card-title mt-3">{card.title}</h1>
              <p className="wcu-card-description">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ExploreMenuSection = () => (
  <div className="explore-menu-section pt-5 pb-5" id="exploreMenuSection">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="menu-section-heading">Explore Menu</h1>
        </div>
        {menuItemsData.map((item, index) => (
          <div className="col-12 col-md-6 col-lg-3" key={index}>
            <div className="shadow menu-item-card p-3 mb-3">
              <img src={item.image} className="menu-item-image w-100" alt={item.title} />
              <h1 className="menu-card-title">{item.title}</h1>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const HealthyFoodSection = () => (
  <div className="healthy-food-section pt-5 pb-5">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5">
          <div className="text-center">
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/healthy-food-plate-img.png"
              className="healthy-food-img"
              alt="Healthy Food"
            />
          </div>
        </div>
        <div className="col-12 col-md-7">
          <h1 className="healthy-food-heading">Healthy Food</h1>
          <p className="healthy-food-description">
            We serve fresh, organic food prepared with care to ensure our customers receive a balanced, nutritious meal.
          </p>
          <button className="get-healthy-food-button">Get Healthy Food</button>
        </div>
      </div>
    </div>
  </div>
);

const whyChooseUsData = [
  {
    image: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-serve.png",
    title: "Food Service",
    description: "Experience fine dining at the comfort of your home. All our orders are carefully packed and arranged to give you nothing less than perfect."
  },
  {
    image: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/fruits-img.png",
    title: "Fresh Food",
    description: "The Fresh Food group provides fresh-cut fruits and vegetables directly picked from our partner farms and farm houses so that you always get them tree to plate."
  },
  {
    image: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/offers-img.png",
    title: "Best Offers",
    description: "Food Coupons & Offers up to 50% OFF and Exclusive Promo Codes on All Online Food Orders."
  }
];

const menuItemsData = [
  {
    image: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-ginger-fried-img.png",
    title: "Non-Veg Starters",
    link: "#"
  },
  {
    image: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-veg-starters-img.png",
    title: "Veg Starters",
    link: "#"
  },
  {
    image: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-soup-img.png",
    title: "Soups",
    link: "#"
  },
  {
    image: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-grilled-seafood-img.png",
    title: "Fish & Seafood",
    link: "#"
  },
  {
    image: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-hyderabadi-biryani-img.png",
    title: "Main Course",
    link: "#"
  },
  {
    image: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-mushroom-noodles-img.png",
    title: "Noodles",
    link: "#"
  },
  {
    image: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-gluten-img.png",
    title: "Salads",
    link: "#"
  },
  {
    image: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-coffee-bourbon-img.png",
    title: "Desserts",
    link: "#"
  }
];


// Delivery and Payment Section
const DeliveryAndPaymentSection=()=> {
    return (
        <div className="delivery-and-payment-section pt-5 pb-5" id="deliveryPaymentSection">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 order-1 order-md-2">
                        <div className="text-center">
                            <img 
                                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/delivery-payment-section-img.png" 
                                className="delivery-and-payment-section-img" 
                                alt="Delivery and Payment" 
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-7 order-2 order-md-1">
                        <h1 className="delivery-and-payment-section-heading">
                            Delivery and Payment
                        </h1>
                        <p className="delivery-and-payment-section-description">
                            Enjoy hassle-free payment with the plenitude of payment options available for you. Get live tracking and locate your food on a live map. It's quite a sight to see your food arrive to your door. Plus, you get a 5% discount on every order every time you pay online.
                        </p>
                        <button className="custom-button">Order Now</button>
                        <div className="mt-3">
                            <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/visa-card-img.png" className="payment-card-img" alt="Visa" />
                            <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/master-card-img.png" className="payment-card-img" alt="Mastercard" />
                            <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/paypal-card-img.png" className="payment-card-img" alt="Paypal" />
                            <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/american-express-img.png" className="payment-card-img" alt="American Express" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Thanking Customers Section
const ThankingCustomersSection=()=> {
    return (
        <div className="thanking-customers-section pt-5 pb-5">
            <div className="container">
                <div className="row d-flex flex-row justify-content-space-between">
                    <div className="col-12 col-md-7 d-flex flex-column justify-content-center">
                        <h1 className="thanking-customers-section-heading">
                            Thank you for being a valuable customer to us.
                        </h1>
                        <p className="thanking-customers-section-description">
                            We have a surprise gift for you
                        </p>
                        <div className="d-md-none">
                            <img 
                                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/thanking-customers-section-img.png" 
                                className="thanking-customers-section-img" 
                                alt="Gift" 
                            />
                        </div>
                        <button className="custom-button">Redeem Gift</button>
                    </div>
                    <div className="col-12 col-md-5 d-none d-md-block">
                        <img 
                            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/thanking-customers-section-img.png" 
                            className="thanking-customers-section-img" 
                            alt="Gift" 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

// Follow Us Section
const FollowUsSection=() =>{
    return (
        <div className="follow-us-section pt-5 pb-5" id="followUsSection">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="follow-us-section-heading">Follow Us</h1>
                    </div>
                    <div className="col-12">
                        <div className="d-flex flex-row justify-content-center">
                            <div className="follow-us-icon-container">
                                <i className="fab fa-twitter icon"></i>
                            </div>
                            <div className="follow-us-icon-container">
                                <i className="fab fa-instagram icon"></i>
                            </div>
                            <div className="follow-us-icon-container">
                                <i className="fab fa-facebook icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


// Footer Section
function FooterSection() {
    return (
        <div className="footer-section pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                    <p  className="application-name">TasteeGo</p> 
                        <h1 className="footer-section-mail-id">orderfood@foodmunch.com</h1>
                        <p className="footer-section-address">
                            123 Ayur Vigyan Nagar, New Delhi, India.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Home;
