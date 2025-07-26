export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice: number
  discountPercentage: number
  rating: number
  image: string
  images: string[]
  category: string
  sizes: string[]
  colors: string[]
  inStock: boolean
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Thunder T-shirt Blanc et Rouge',
    description: 'T-shirt Thunder en coton premium avec design blanc et rouge. Confortable et élégant avec le logo Amoon.',
    price: 129, // Prix remisé
    originalPrice: 199, // Prix original
    discountPercentage: 35, // 35% de remise
    rating: 5, // Note du produit
    image: '/images/products/blanc-tshirt.jpg',
    images: [
      '/images/products/blanc-tshirt.jpg',
      '/images/products/blanc-tshirt-2.jpg',
    ],
    category: 'T-Shirts',
    sizes: ['M', 'L', 'XL'],
    colors: ['Blanc et Rouge'],
    inStock: true
  },
  {
    id: '2',
    name: 'Thunder T-shirt Noir et Blanc',
    description: 'T-shirt Thunder avec design contrasté noir et blanc. Style moderne et élégant avec le branding Amoon.',
    price: 129, // Prix remisé
    originalPrice: 179, // Prix original
    discountPercentage: 28, // 28% de remise
    rating: 4.9, // Note du produit
    image: '/images/products/black-tshirt-3.jpg',
    images: [
      '/images/products/black-tshirt-3.jpg',
      '/images/products/black-tshirt.jpg',
      '/images/products/black-tshirt-2.jpg',
      '/images/products/black-tshirt-4.jpg',
    ],
    category: 'T-Shirts',
    sizes: ['M', 'L', 'XL'],
    colors: ['Noir et Blanc'],
    inStock: true
  },
  {
    id: '3',
    name: 'Nova Denim Hoodie',
    description: 'Hoodie Nova en denim premium avec design unique. Confortable et stylé pour un look urbain moderne.',
    price: 299, // Prix remisé
    originalPrice: 449, // Prix original
    discountPercentage: 33, // 33% de remise
    rating: 4.7, // Note du produit
    image: 'https://via.placeholder.com/500x600/4169e1/ffffff?text=Nova+Denim+Hoodie',
    images: [
      'https://via.placeholder.com/500x600/4169e1/ffffff?text=Nova+Denim+Hoodie+Main',
      'https://via.placeholder.com/500x600/4169e1/ffffff?text=Nova+Denim+Hoodie+1',
      'https://via.placeholder.com/500x600/4169e1/ffffff?text=Nova+Denim+Hoodie+2',
      'https://via.placeholder.com/500x600/4169e1/ffffff?text=Nova+Denim+Hoodie+3',
      'https://via.placeholder.com/500x600/4169e1/ffffff?text=Nova+Denim+Hoodie+4',
      'https://via.placeholder.com/500x600/4169e1/ffffff?text=Nova+Denim+Hoodie+5'
    ],
    category: 'Hoodies',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Denim'],
    inStock: false
  },
  {
    id: '4',
    name: 'Nova Blue Hoodie',
    description: 'Hoodie Nova bleu avec design exclusif. Matériaux premium pour un confort maximal et un style unique.',
    price: 299, // Prix remisé
    originalPrice: 399, // Prix original
    discountPercentage: 25, // 25% de remise
    rating: 4.8, // Note du produit
    image: 'https://via.placeholder.com/500x600/1e90ff/ffffff?text=Nova+Blue+Hoodie',
    images: [
      'https://via.placeholder.com/500x600/1e90ff/ffffff?text=Nova+Blue+Hoodie+Main',
      'https://via.placeholder.com/500x600/1e90ff/ffffff?text=Nova+Blue+Hoodie+1',
      'https://via.placeholder.com/500x600/1e90ff/ffffff?text=Nova+Blue+Hoodie+2',
      'https://via.placeholder.com/500x600/1e90ff/ffffff?text=Nova+Blue+Hoodie+3',
      'https://via.placeholder.com/500x600/1e90ff/ffffff?text=Nova+Blue+Hoodie+4',
      'https://via.placeholder.com/500x600/1e90ff/ffffff?text=Nova+Blue+Hoodie+5'
    ],
    category: 'Hoodies',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Bleu'],
    inStock: false
  }
]

export const categories = ['Tous', 'T-Shirts', 'Hoodies']

export function getProductsByCategory(category: string): Product[] {
  if (category === 'Tous') {
    return products
  }
  return products.filter(product => product.category === category)
} 