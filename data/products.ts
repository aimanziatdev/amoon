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
    name: 'Thunder T-shirt Blanc ',
    description: 'T-shirt Thunder en coton premium avec design blanc et rouge. Confortable et élégant avec le logo Amoon.',
    price: 129,
    originalPrice: 199,
    discountPercentage: 35,
    rating: 5,
    image: '/images/products/white tshirt 1.png',
    images: [
      '/images/products/white tshirt 1.png',
      '/images/products/white tshirt 2.png',
      '/images/products/white tshirt 3.png',
    ],
    category: 'T-Shirts',
    sizes: ['M', 'L', 'XL'],
    colors: ['Blanc et Rouge'],
    inStock: true
  },
  {
    id: '2',
    name: 'Thunder T-shirt Noir ',
    description: 'T-shirt Thunder avec design contrasté noir et blanc. Style moderne et élégant avec le branding Amoon.',
    price: 129,
    originalPrice: 199,
    discountPercentage: 35,
    rating: 4.9,
    image: '/images/products/black tshirt 1.png',
    images: [
      '/images/products/black tshirt 1.png',
      '/images/products/black tshirt 2.png',
      '/images/products/black tshirt 3.png',
    ],
    category: 'T-Shirts',
    sizes: ['M', 'L', 'XL'],
    colors: ['Noir et Blanc'],
    inStock: true
  }
]

export const categories = ['Tous', 'T-Shirts']

export function getProductsByCategory(category: string): Product[] {
  if (category === 'Tous') {
    return products
  }
  return products.filter(product => product.category === category)
} 