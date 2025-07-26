'use client'

import Link from 'next/link'
import { useTheme } from './ThemeProvider'
import { useCart } from './CartProvider'
import { ShoppingCart, Sun, Moon, Menu, X, Zap } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const { theme, toggleTheme } = useTheme()
  const { totalItems } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Collections', href: '/collections' },
    { name: 'Contact', href: '/contact' },
    { name: 'À propos', href: '/about' },
  ]

  return (
    <header className="bg-black shadow-lg border-b border-gray-800 sticky top-0 z-50 thunder-glow">
      <div className="mobile-container max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 thunder-hover group">
            {/* Brand name only, no thunder icon */}
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-wider text-white">
                a-moon.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-primary-500 transition-all duration-200 font-medium hover:scale-105 text-sm lg:text-base"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 sm:p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200 thunder-hover min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Basculer le thème"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-300" />
              ) : (
                <Sun className="w-5 h-5 text-gray-300" />
              )}
            </button>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative p-2 sm:p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200 thunder-hover min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <ShoppingCart className="w-5 h-5 text-gray-300" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center thunder-glow">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 sm:p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200 thunder-hover min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-gray-300" />
              ) : (
                <Menu className="w-5 h-5 text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800 bg-black">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-primary-500 transition-all duration-200 font-medium py-3 px-4 rounded-lg hover:bg-gray-800 text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 