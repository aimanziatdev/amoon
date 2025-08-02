'use client'

import { Header } from '@/components/Header'
import { useCart } from '@/components/CartProvider'
import { Trash2, Minus, Plus, MessageCircle, Zap } from 'lucide-react'
import { useState } from 'react'

export default function Cart() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart()
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return
    if (!phone) {
      setError('Le numéro de téléphone est obligatoire pour passer votre commande.')
      return
    }
    
    // Validation du numéro de téléphone marocain
    const phoneRegex = /^(\+212|212)?[0-9]{9}$|^(06|07)[0-9]{8}$/
    const cleanPhone = phone.replace(/\s/g, '')
    if (!phoneRegex.test(cleanPhone)) {
      setError('Veuillez entrer un numéro de téléphone marocain valide (ex: +212600000000, 0600000000 ou 07 0000000000)')
      return
    }
    
    if (!name || !city) {
      setError('Veuillez remplir votre nom et ville.')
      return
    }
    setError('')
    const orderDetails = items.map(item => 
      `${item.name} (Taille: ${item.size}, Qté: ${item.quantity}) - ${(item.price * item.quantity).toFixed(2)} DH`
    ).join('\n')
    const message = `Salam! bghit Nakhed had lproduit :\n\n${orderDetails}\n\nTotal : ${totalPrice.toFixed(2)} DH\nNom: ${name}\nVille: ${city}\nTéléphone: ${phone}\nmerci!`
    const whatsappUrl = `https://wa.me/212634889422?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <div className="mobile-container max-w-7xl mx-auto py-16 sm:py-24">
          <div className="text-center">
            <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <MessageCircle className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400" />
            </div>
            <h1 className="mobile-heading font-bold text-gray-900 dark:text-white mb-4">
              Votre panier est vide
            </h1>
            <p className="mobile-subheading text-gray-600 dark:text-gray-400 mb-6 sm:mb-8">
              Il semble que vous n'ayez pas encore ajouté d'articles à votre panier.
            </p>
            <a
              href="/collections"
              className="btn-primary mobile-subheading px-6 sm:px-8 py-3 w-full sm:w-auto max-w-xs"
            >
              Commencer les Achats
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <div className="mobile-container max-w-7xl mx-auto py-8 sm:py-12">
        <h1 className="mobile-heading font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
          Panier d'Achat
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="p-4 sm:p-6">
                <h2 className="mobile-subheading font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
                  Articles du Panier ({items.length})
                </h2>
                
                <div className="space-y-4 sm:space-y-6">
                  {items.map((item, index) => (
                    <div key={`${item.id}-${item.size}-${index}`} className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      {/* Product Image */}
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-md overflow-hidden mx-auto sm:mx-0">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0 text-center sm:text-left">
                        <h3 className="mobile-text font-medium text-gray-900 dark:text-white">
                          {item.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                          Taille : {item.size}
                        </p>
                        <p className="mobile-text font-semibold text-primary-600">
                          {item.price.toFixed(2)} DH
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                          className="w-10 h-10 sm:w-8 sm:h-8 rounded-md border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors min-w-[40px] min-h-[40px]"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-12 text-center text-gray-900 dark:text-white font-medium mobile-text">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                          className="w-10 h-10 sm:w-8 sm:h-8 rounded-md border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors min-w-[40px] min-h-[40px]"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Item Total */}
                      <div className="text-center sm:text-right">
                        <p className="mobile-text font-bold text-primary-600">
                          {(item.price * item.quantity).toFixed(2)} DH
                        </p>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id, item.size)}
                        className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors duration-200 mx-auto sm:mx-0 min-w-[44px] min-h-[44px] flex items-center justify-center"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Clear Cart Button */}
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-600">
                  <button
                    onClick={clearCart}
                    className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 font-medium transition-colors mobile-text"
                  >
                    Vider le Panier
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6 sticky top-24">
              <h2 className="mobile-subheading font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Résumé de la Commande
              </h2>

              <div className="space-y-4 mb-6">
                {/* Name Input */}
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-1 mobile-text" htmlFor="name">Nom</label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full px-3 py-3 sm:py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-900 dark:text-white mobile-text min-h-[44px]"
                    placeholder="Votre nom"
                  />
                </div>
                {/* City Input */}
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-1 mobile-text" htmlFor="city">Ville</label>
                  <input
                    id="city"
                    type="text"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    className="w-full px-3 py-3 sm:py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-900 dark:text-white mobile-text min-h-[44px]"
                    placeholder="Votre ville"
                  />
                </div>
                {/* Phone Input */}
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-1 mobile-text" htmlFor="phone">
                    Numéro de téléphone <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="w-full px-3 py-3 sm:py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-900 dark:text-white mobile-text min-h-[44px]"
                    placeholder="Votre numéro de téléphone (obligatoire)"
                  />
                </div>
                <div className="flex justify-between">
                  <span className="mobile-text text-gray-600 dark:text-gray-400">Sous-total</span>
                  <span className="mobile-text text-gray-900 dark:text-white font-medium">
                    {totalPrice.toFixed(2)} DH
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="mobile-text text-gray-600 dark:text-gray-400">Livraison</span>
                  <span className="text-green-600 font-medium mobile-text">Gratuite</span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                  <div className="flex justify-between">
                    <span className="mobile-subheading font-semibold text-gray-900 dark:text-white">Total</span>
                    <span className="mobile-subheading font-bold text-primary-600">
                      {totalPrice.toFixed(2)} DH
                    </span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Order Button */}
              {error && (
                <div className="mb-4 text-red-600 bg-red-50 dark:bg-red-900/30 p-3 rounded mobile-text">
                  {error}
                </div>
              )}
              <button
                onClick={handleWhatsAppOrder}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 min-h-[44px]"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="mobile-text">Commander</span>
              </button>

              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-4 text-center">
                Cliquez pour envoyer les détails de votre commande à notre numéro WhatsApp
              </p>

              {/* Contact Info */}
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="font-medium text-gray-900 dark:text-white mb-2 mobile-text">
                  Besoin d'Aide ?
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Contactez-nous sur WhatsApp :
                </p>
                <a
                  href="https://wa.me/212634889422"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-medium mobile-text"
                >
                  +212 634889422
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 