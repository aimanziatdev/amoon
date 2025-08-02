'use client'

import { useState } from 'react'
import { Product } from '@/data/products'
import { useCart } from './CartProvider'
import { ShoppingCart, Star, Zap, ChevronLeft, ChevronRight, Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [quantity, setQuantity] = useState(1)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [userRating, setUserRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [showAddedNotification, setShowAddedNotification] = useState(false)
  const { addToCart } = useCart()

  // Check if product has discount data
  const hasDiscount = product.originalPrice && product.discountPercentage;

  // Define available sizes for each product
  const getAvailableSizes = (productName: string) => {
    switch (productName) {
      case 'Thunder T-shirt Black':
      case 'Thunder T-shirt White':
      case 'Thunder T-shirt Gris':
        return ['M', 'L', 'XL']; // Only M, L, XL available for T-shirts
      case 'Hoodie Blue Jean':
      case 'Hoodie Blue Denim':
        return []; // No sizes available for hoodies (out of stock)
      default:
        return product.sizes;
    }
  };

  const availableSizes = getAvailableSizes(product.name);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      quantity: quantity,
    })
    
    // Show notification animation
    setShowAddedNotification(true)
    
    // Remove automatic timeout - notification stays until user clicks
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === (product.images?.length || 1) - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? (product.images?.length || 1) - 1 : prev - 1
    )
  }

  const handleRatingClick = (rating: number) => {
    setUserRating(rating);
  }

  const handleRatingHover = (rating: number) => {
    setHoveredRating(rating);
  }

  const handleRatingLeave = () => {
    setHoveredRating(0);
  }

  const images = product.images || [product.image]

  return (
    <div className="card overflow-hidden group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] w-full relative">
      {/* Added to Cart Notification */}
      {showAddedNotification && (
        <div className="absolute inset-0 bg-green-500 bg-opacity-90 flex items-center justify-center z-50 animate-pulse">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow-xl text-center max-w-sm mx-4">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-green-500 rounded-full p-2 mr-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                Ajouté au Panier !
              </h3>
            </div>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
              {product.name} (Taille: {selectedSize}) a été ajouté à votre panier
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowAddedNotification(false)}
                className="flex-1 px-4 py-3 sm:py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors min-h-[44px]"
              >
                Continuer
              </button>
              <Link
                href="/cart"
                className="flex-1 px-4 py-3 sm:py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors flex items-center justify-center gap-2 min-h-[44px]"
              >
                Voir Panier
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Product Image Gallery - Large */}
      <div className="relative aspect-[4/5] overflow-hidden">
        {/* Discount Badge */}
        {hasDiscount && (
          <div className="absolute top-2 sm:top-3 left-2 sm:left-3 z-10">
            <span className="bg-red-500 text-white text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 rounded-full">
              -{product.discountPercentage}%
            </span>
          </div>
        )}
        
        {/* Image Counter */}
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 z-10">
          <span className="bg-black bg-opacity-50 text-white text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 rounded-full">
            {currentImageIndex + 1}/{images.length}
          </span>
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-70 transition-all duration-200 opacity-0 group-hover:opacity-100 min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-70 transition-all duration-200 opacity-0 group-hover:opacity-100 min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </>
        )}

        {/* Main Product Image */}
        <img 
          src={images[currentImageIndex]} 
          alt={`${product.name} - Image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-semibold text-base sm:text-lg">Rupture de Stock</span>
          </div>
        )}
      </div>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="p-2 sm:p-3 pb-0">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 min-w-[48px] min-h-[48px] ${
                  currentImageIndex === index 
                    ? 'border-primary-500 ring-2 ring-primary-200' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <img 
                  src={image} 
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Product Info - Compact */}
      <div className="p-3 sm:p-4">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2">
          {product.name}
        </h3>
        
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => {
              const starValue = i + 1;
              const isFilled = starValue <= (hoveredRating || userRating || product.rating);
              return (
                <button
                  key={i}
                  onClick={() => handleRatingClick(starValue)}
                  onMouseEnter={() => handleRatingHover(starValue)}
                  onMouseLeave={handleRatingLeave}
                  className="p-1 hover:scale-110 transition-transform duration-200 cursor-pointer min-w-[32px] min-h-[32px] flex items-center justify-center"
                >
                  <Star
                    className={`w-3 h-3 sm:w-4 sm:h-4 ${
                      isFilled ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                </button>
              );
            })}
          </div>
          <span className="text-xs sm:text-sm text-gray-500 ml-2">
            ({userRating > 0 ? userRating.toFixed(1) : product.rating.toFixed(1)})
          </span>
        </div>

        {/* Price */}
        <div className="text-lg sm:text-xl font-bold text-primary-600 mb-3 flex items-center gap-2">
          {hasDiscount ? (
            <>
              <span className="text-sm sm:text-lg text-gray-400 line-through mr-2">{product.originalPrice} DH</span>
              <span className="text-lg sm:text-xl font-bold text-primary-600">{product.price} DH</span>
            </>
          ) : (
            <span>{product.price} DH</span>
          )}
        </div>

        {/* Size Selection */}
        <div className="mb-3 relative z-10">
          <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Taille
          </label>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => {
              const isAvailable = availableSizes.includes(size);
              return (
                <button
                  key={size}
                  type="button"
                  onClick={() => isAvailable && setSelectedSize(size)}
                  className={`px-2 sm:px-3 py-2 text-xs sm:text-sm rounded-md border transition-colors duration-200 relative z-10 min-h-[44px] ${
                    isAvailable
                      ? selectedSize === size
                        ? 'bg-primary-500 text-white border-primary-500 cursor-pointer'
                        : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-primary-500 cursor-pointer'
                      : 'bg-gray-100 dark:bg-gray-600 text-gray-400 dark:text-gray-500 border-gray-200 dark:border-gray-500 cursor-not-allowed'
                  }`}
                >
                  {isAvailable ? size : `${size} - Non disponible`}
                </button>
              );
            })}
          </div>
        </div>

        {/* Quantity */}
        <div className="mb-4 relative z-10">
          <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Quantité
          </label>
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-10 h-10 sm:w-8 sm:h-8 rounded-md border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none cursor-pointer relative z-10 bg-white dark:bg-gray-700 min-w-[40px] min-h-[40px]"
            >
              -
            </button>
            <span className="w-12 text-center text-gray-900 dark:text-white text-sm font-semibold">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity(quantity + 1)}
              className="w-10 h-10 sm:w-8 sm:h-8 rounded-md border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none cursor-pointer relative z-10 bg-white dark:bg-gray-700 min-w-[40px] min-h-[40px]"
            >
              +
            </button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock || availableSizes.length === 0}
          className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-semibold py-3 sm:py-2 min-h-[44px]"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Ajouter au Panier</span>
        </button>
      </div>
    </div>
  )
} 