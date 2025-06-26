export interface Product {
  id: string
  name: string
  description: string
  price: number
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
    name: 'TT Black',
    description: 'T-shirt Thunder en coton premium noir avec le logo Amoon. Confortable et élégant pour un usage quotidien.',
    price: 149,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=600&fit=crop'
    ],
    category: 'T-Shirts',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Noir'],
    inStock: true
  },
  {
    id: '3',
    name: 'TT White',
    description: 'T-shirt Thunder blanc avec design unique Amoon. Parfait pour faire une déclaration de style.',
    price: 149,
    image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=600&fit=crop'
    ],
    category: 'T-Shirts',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blanc'],
    inStock: true
  },
  {
    id: '5',
    name: 'TT Gris',
    description: 'T-shirt Thunder gris avec branding Amoon rétro. Look classique avec confort moderne.',
    price: 199,
    image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=600&fit=crop'
    ],
    category: 'T-Shirts',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Gris'],
    inStock: true
  },
  {
    id: '2',
    name: 'Hoodie Blue Jean',
    description: 'Hoodie confortable parfait pour les jours plus frais. Fabriqué avec des matériaux premium et le logo Amoon.',
    price: 299,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop'
    ],
    category: 'Hoodies',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Blue Jean'],
    inStock: false
  },
  {
    id: '4',
    name: 'Hoodie Blue Denim',
    description: 'Hoodie léger en denim bleu pour un style actif. Respirant et confortable pour tous les jours.',
    price: 299,
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop'
    ],
    category: 'Hoodies',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blue Denim'],
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