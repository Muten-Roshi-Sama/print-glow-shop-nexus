
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useProducts } from '@/context/ProductContext';
import ProductCard from '@/components/ProductCard';

const Index: React.FC = () => {
  const { getFeaturedProducts, categories } = useProducts();
  const featuredProducts = getFeaturedProducts();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-hero-pattern text-white py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Custom 3D Prints & Smart Home Devices
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in">
            Bring your ideas to life with our custom 3D printing services and enhance your home with our selection of smart devices.
          </p>
          <div className="animate-fade-in">
            <Link to="/products">
              <Button size="lg" className="bg-brand-orange hover:bg-orange-600 text-white">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="section-title text-center">Our Categories</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {categories.map((category, index) => (
              <Link 
                key={category.id} 
                to={`/products?category=${category.id}`}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
                  <div className="h-40 bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center p-6">
                    <h3 className="text-xl font-semibold text-white text-center">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="section-title mb-0">Featured Products</h2>
            <Link to="/products">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
          
          <div className="product-grid">
            {featuredProducts.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-brand-blue to-brand-purple text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Need a Custom Design?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We can help bring your ideas to life. From custom 3D prints to personalized smart home solutions.
          </p>
          <Link to="/products">
            <Button size="lg" className="bg-brand-orange hover:bg-orange-600 text-white">
              Start Shopping
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
