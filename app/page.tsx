import { Header } from '@/components/Header'
import { ProductCard } from '@/components/ProductCard'
import { products } from '@/data/products'
import { ArrowRight, Star, Truck, Shield, RefreshCw, Zap } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const featuredProducts = products.filter(product => product.category === 'T-Shirts')

  return (
    <div className="min-h-screen thunder-bg">
      <Header />
      
      {/* Featured Products */}
      <section className="mobile-padding bg-white dark:bg-thunder-800">
        <div className="mobile-container max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="lightning-flash mb-4">
              <Zap className="w-8 h-8 sm:w-12 sm:h-12 text-primary-400 mx-auto" />
            </div>
            <h2 className="mobile-heading font-bold text-thunder-900 dark:text-white mb-4">
              Produits <span className="thunder-text">Vedettes</span>
            </h2>
            <p className="mobile-subheading text-thunder-600 dark:text-primary-100 max-w-2xl mx-auto px-4">
              Découvrez nos articles les plus populaires, soigneusement sélectionnés pour la qualité et le style
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-12 flex flex-col items-center justify-center">
            <Link href="/collections" className="btn-primary thunder-glow w-full sm:w-auto max-w-xs">
              Voir Tous les Produits
            </Link>
            <div className="mt-3 animate-bounce">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-500 mx-auto">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mobile-padding bg-white dark:bg-thunder-800">
        <div className="mobile-container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
            <div className="text-center thunder-hover max-w-sm">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4 thunder-glow">
                <Truck className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />
              </div>
              <h3 className="mobile-subheading font-semibold text-thunder-900 dark:text-white mb-2">
                Livraison Gratuite
              </h3>
              <p className="mobile-text text-thunder-600 dark:text-thunder-400">
                Livraison gratuite pour toutes les commandes.
              </p>
            </div>
            <div className="text-center thunder-hover max-w-sm">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4 thunder-glow">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />
              </div>
              <h3 className="mobile-subheading font-semibold text-thunder-900 dark:text-white mb-2">
                Garantie Qualité
              </h3>
              <p className="mobile-text text-thunder-600 dark:text-thunder-400">
                Garantie de remboursement de 30 jours
              </p>
            </div>
            <div className="text-center thunder-hover max-w-sm sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4 thunder-glow">
                <RefreshCw className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />
              </div>
              <h3 className="mobile-subheading font-semibold text-thunder-900 dark:text-white mb-2">
                Retours Faciles
              </h3>
              <p className="mobile-text text-thunder-600 dark:text-thunder-400">
                Retours et échanges sans tracas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mobile-padding bg-white dark:bg-thunder-800">
        <div className="mobile-container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative z-10">
              <h2 className="mobile-heading font-bold text-thunder-900 dark:text-white mb-4 sm:mb-6">
                À Propos d'<span className="thunder-text">a-moon.</span>
              </h2>
              <p className="mobile-text text-thunder-600 dark:text-thunder-400 mb-4 sm:mb-6">
                Amoon est plus qu'une simple marque de vêtements. Nous sommes un mouvement de style qui célèbre 
                l'individualité, la qualité et le style. Notre mission est de fournir une mode premium qui 
                vous permet d'exprrimer votre personnalité unique.
              </p>
              <p className="mobile-text text-thunder-600 dark:text-thunder-400 mb-6 sm:mb-8">
                Chaque pièce de notre collection est fabriquée avec attention aux détails, utilisant les meilleurs 
                matériaux et les dernières tendances de la mode. Du prêt-à-porter aux pièces de déclaration, 
                Amoon a tout ce dont vous avez besoin pour construire votre garde-robe parfaite.
              </p>
              <Link href="/about" className="btn-primary thunder-glow w-full sm:w-auto">
                En Savoir Plus
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square thunder-gradient rounded-2xl flex items-center justify-center thunder-glow">
                <Zap className="text-12xl sm:text-18xl text-primary-400 animate-thunder" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-thunder-900 text-white py-8 sm:py-12 relative z-50">
        <div className="mobile-container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary-500 rounded-lg flex items-center justify-center thunder-glow">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <span className="text-lg sm:text-xl font-bold thunder-text">a-moon.</span>
              </div>
              <p className="mobile-text text-thunder-400">
                Mode premium pour l'individu moderne. Qualité, style et confort dans chaque pièce.
              </p>
            </div>
            <div>
              <h3 className="mobile-subheading font-semibold mb-4">Liens Rapides</h3>
              <ul className="space-y-2">
                <li><Link href="/" legacyBehavior><a className="mobile-text text-thunder-400 hover:text-primary-400 transition-colors">Accueil</a></Link></li>
                <li><Link href="/collections" legacyBehavior><a className="mobile-text text-thunder-400 hover:text-primary-400 transition-colors">Collections</a></Link></li>
                <li><Link href="/contact" legacyBehavior><a className="mobile-text text-thunder-400 hover:text-primary-400 transition-colors">Contact</a></Link></li>
                <li><Link href="/about" legacyBehavior><a className="mobile-text text-thunder-400 hover:text-primary-400 transition-colors">À propos</a></Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mobile-subheading font-semibold mb-4">Service Client</h3>
              <ul className="space-y-2">
                <li><Link href="/contact" legacyBehavior><a className="mobile-text text-thunder-400 hover:text-primary-400 transition-colors">Nous Contacter</a></Link></li>
                <li><Link href="/contact" legacyBehavior><a className="mobile-text text-thunder-400 hover:text-primary-400 transition-colors">Informations de Livraison</a></Link></li>
                <li><Link href="/contact" legacyBehavior><a className="mobile-text text-thunder-400 hover:text-primary-400 transition-colors">Retours</a></Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mobile-subheading font-semibold mb-4">Suivez-nous</h3>
              <p className="mobile-text text-thunder-400 mb-4">
                Suivez-nous sur les réseaux sociaux pour les dernières actualités et l'inspiration mode.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://www.instagram.com/a_moon_fashion_/" target="_blank" rel="noopener noreferrer" className="mobile-text text-thunder-400 hover:text-primary-400 transition-colors">
                  Instagram
                </a>
                <a href="https://web.facebook.com/amoon2829" target="_blank" rel="noopener noreferrer" className="mobile-text text-thunder-400 hover:text-primary-400 transition-colors">
                  Facebook
                </a>
                <a href="https://wa.me/212634889422" target="_blank" rel="noopener noreferrer" className="mobile-text text-thunder-400 hover:text-primary-400 transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-thunder-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
            <p className="mobile-text text-thunder-400">
              © 2025 a-moon. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 