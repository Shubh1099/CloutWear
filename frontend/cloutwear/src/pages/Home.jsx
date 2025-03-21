import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrivals from '../components/Products/NewArrivals'
import ProductDetails from '../components/Products/ProductDetails'
import ProductGrid from '../components/Products/ProductGrid'
import FeaturedCollection from '../components/Products/FeaturedCollection'
import FeaturesSection from '../components/Products/FeaturesSection'

const placeholderProducts = [
  {
    _id: 5,
    name: "Product 5",
    price: 100,
    image: { url: "https://picsum.photos/500/500?random=15" },
  },
  {
    _id: 5,
    name: "Product 5",
    price: 190,
    image: { url: "https://picsum.photos/500/500?random=16" },
  },
  {
    _id: 6,
    name: "Product 6",
    price: 140,
    image: { url: "https://picsum.photos/500/500?random=17" },
  },
  {
    _id: 7,
    name: "Product 7",
    price: 120,
    image: { url: "https://picsum.photos/500/500?random=18" },
  },
  {
    _id: 1,
    name: "Product 1",
    price: 100,
    image: { url: "https://picsum.photos/500/500?random=10" },
  },
  {
    _id: 2,
    name: "Product 2",
    price: 190,
    image: { url: "https://picsum.photos/500/500?random=11" },
  },
  {
    _id: 3,
    name: "Product 3",
    price: 140,
    image: { url: "https://picsum.photos/500/500?random=12" },
  },
  {
    _id: 4,
    name: "Product 4",
    price: 120,
    image: { url: "https://picsum.photos/500/500?random=13" },
  },
];

const Home = () => {
  return (
    <>
      <Hero/>
      <GenderCollectionSection/>
      <NewArrivals/>
      {/* Best seller */}
      <h2 className='text-3xl text-center font-bold mb-4'>Best Seller</h2>
      <ProductDetails/>
      <div className='Container mx-auto'>
        <h2 className='text-3xl text-center font-bold mb-4'>Top Wears for Women</h2>
        <ProductGrid products={placeholderProducts}/>
      </div>
      <FeaturedCollection/>
      <FeaturesSection/>
    </>
  )
}

export default Home
