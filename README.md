# Amoon Store - E-commerce Website

A modern, responsive e-commerce website for the Amoon brand, built with Next.js, React, and Tailwind CSS. Features include dark/light mode, shopping cart functionality, WhatsApp integration, and a beautiful user interface.

## Features

### 🛍️ E-commerce Features
- **Product Catalog**: Browse products by categories
- **Product Cards**: Detailed product information with size selection and quantity
- **Shopping Cart**: Add, remove, and manage cart items
- **WhatsApp Integration**: Direct ordering through WhatsApp
- **Responsive Design**: Works perfectly on all devices

### 🎨 User Experience
- **Dark/Light Mode**: Toggle between themes
- **Modern UI**: Clean, professional design
- **Smooth Animations**: Enhanced user interactions
- **Mobile-First**: Optimized for mobile devices

### 📱 Contact & Support
- **Contact Form**: Easy communication with customers
- **WhatsApp Support**: 24/7 customer support
- **Business Information**: Complete contact details

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Context API
- **Images**: Next.js Image Optimization

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd amoon-store
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
amoon-store/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── collections/       # Collections page
│   ├── cart/              # Shopping cart page
│   └── contact/           # Contact page
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── ProductCard.tsx    # Product display card
│   ├── ThemeProvider.tsx  # Dark/light mode provider
│   └── CartProvider.tsx   # Shopping cart provider
├── data/                  # Static data
│   └── products.ts        # Product information
└── public/                # Static assets
```

## Key Components

### ThemeProvider
Manages dark/light mode state and persists user preference in localStorage.

### CartProvider
Handles shopping cart functionality including:
- Adding/removing items
- Quantity management
- Price calculations
- Local storage persistence

### ProductCard
Displays product information with:
- Product image
- Name and description
- Price and ratings
- Size selection
- Quantity controls
- Add to cart functionality

## Customization

### Adding Products
Edit `data/products.ts` to add new products:

```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  description: 'Product description',
  price: 29.99,
  image: 'image-url',
  category: 'Category Name',
  sizes: ['S', 'M', 'L', 'XL'],
  colors: ['Black', 'White'],
  inStock: true
}
```

### Styling
- Modify `tailwind.config.js` for theme customization
- Update `app/globals.css` for custom styles
- Primary color scheme can be adjusted in the Tailwind config

### WhatsApp Integration
Update the WhatsApp number in:
- `app/cart/page.tsx` (line with `212634889422`)
- `app/contact/page.tsx` (line with `212634889422`)

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Features in Detail

### Shopping Cart
- Persistent cart data using localStorage
- Real-time price calculations
- Quantity management
- WhatsApp order integration

### Product Management
- Category filtering
- Price sorting
- Responsive grid layout
- Image optimization

### Contact System
- Contact form with validation
- WhatsApp quick contact
- Business hours display
- Multiple contact methods

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions:
- WhatsApp: +212 634889422
- Email: amoonfashionstore@gmail.com

---

Built with ❤️ for Amoon Brand 