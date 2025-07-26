'use client'

import { useState } from 'react'
import { Header } from '@/components/Header'
import { ProductCard } from '@/components/ProductCard'
import { products, categories, getProductsByCategory } from '@/data/products'
import { Filter } from 'lucide-react'

export default function Collections() {
  const [selectedCategory, setSelectedCategory] = useState('Tous')
  const [sortBy, setSortBy] = useState('name')

  const filteredProducts = getProductsByCategory(selectedCategory)

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'name':
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      {/* Page Header */}
      <section className="bg-white dark:bg-gray-800 mobile-padding">
        <div className="mobile-container max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="mobile-heading font-bold text-gray-900 dark:text-white mb-4">
              Nos Collections
            </h1>
            <p className="mobile-subheading text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
              Découvrez notre gamme complète d'articles de mode premium. Du prêt-à-porter aux pièces de déclaration, 
              trouvez votre style parfait avec Amoon.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Products */}
      <section className="mobile-padding">
        <div className="mobile-container max-w-7xl mx-auto">
          {/* Filters */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6 mb-6 sm:mb-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center space-x-2 sm:space-x-4">
                    <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                    <span className="mobile-text font-medium text-gray-700 dark:text-gray-300">
                      Filtrer par :
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-3 sm:px-4 py-2 mobile-text rounded-md transition-colors duration-200 min-h-[44px] ${
                          selectedCategory === category
                            ? 'bg-primary-500 text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <span className="mobile-text font-medium text-gray-700 dark:text-gray-300">
                    Trier par :
                  </span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-3 sm:py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white mobile-text focus:ring-2 focus:ring-primary-500 focus:border-transparent min-h-[44px]"
                  >
                    <option value="name">Nom</option>
                    <option value="price-low">Prix : Croissant</option>
                    <option value="price-high">Prix : Décroissant</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-4 sm:mb-6">
            <p className="mobile-text text-gray-600 dark:text-gray-400">
              Affichage de {sortedProducts.length} produit{sortedProducts.length !== 1 ? 's' : ''}
              {selectedCategory !== 'Tous' && ` dans ${selectedCategory}`}
            </p>
          </div>

          {/* Products Grid */}
          {sortedProducts.length > 0 ? (
            <div className="mobile-grid mobile-gap">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8 sm:py-12">
              <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400" />
              </div>
              <h3 className="mobile-subheading font-medium text-gray-900 dark:text-white mb-2">
                Aucun produit trouvé
              </h3>
              <p className="mobile-text text-gray-600 dark:text-gray-400">
                Essayez d'ajuster vos filtres ou parcourez toutes les catégories.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Category Highlights */}
      <section className="mobile-padding bg-white dark:bg-gray-800">
        <div className="mobile-container max-w-7xl mx-auto">
          <h2 className="mobile-heading font-bold text-gray-900 dark:text-white text-center mb-8 sm:mb-12">
            Acheter par Catégorie
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {categories.slice(1).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="group p-4 sm:p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-200 min-h-[120px] sm:min-h-[160px]"
              >
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors duration-200">
                    <span className="text-lg sm:text-2xl font-bold text-primary-600">
                      {category.charAt(0)}
                    </span>
                  </div>
                  <h3 className="mobile-text font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors duration-200">
                    {category}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-2">
                    {getProductsByCategory(category).length} article{getProductsByCategory(category).length !== 1 ? 's' : ''}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 