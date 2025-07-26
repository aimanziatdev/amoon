# 📸 Guide d'Organisation des Images de Produits

## 📁 Structure des Dossiers

```
public/images/products/
├── thunder-blanc-red-main.jpg      # Thunder T-shirt Blanc et Rouge - Image principale
├── thunder-blanc-red-1.jpg         # Thunder T-shirt Blanc et Rouge - Vue 1
├── thunder-blanc-red-2.jpg         # Thunder T-shirt Blanc et Rouge - Vue 2
├── thunder-blanc-red-3.jpg         # Thunder T-shirt Blanc et Rouge - Vue 3
├── thunder-blanc-red-4.jpg         # Thunder T-shirt Blanc et Rouge - Vue 4
├── thunder-blanc-red-5.jpg         # Thunder T-shirt Blanc et Rouge - Vue 5
├── thunder-black-white-main.jpg    # Thunder T-shirt Noir et Blanc - Image principale
├── thunder-black-white-1.jpg       # Thunder T-shirt Noir et Blanc - Vue 1
├── thunder-black-white-2.jpg       # Thunder T-shirt Noir et Blanc - Vue 2
├── thunder-black-white-3.jpg       # Thunder T-shirt Noir et Blanc - Vue 3
├── thunder-black-white-4.jpg       # Thunder T-shirt Noir et Blanc - Vue 4
├── thunder-black-white-5.jpg       # Thunder T-shirt Noir et Blanc - Vue 5
├── nova-denim-hoodie-main.jpg      # Nova Denim Hoodie - Image principale
├── nova-denim-hoodie-1.jpg         # Nova Denim Hoodie - Vue 1
├── nova-denim-hoodie-2.jpg         # Nova Denim Hoodie - Vue 2
├── nova-denim-hoodie-3.jpg         # Nova Denim Hoodie - Vue 3
├── nova-denim-hoodie-4.jpg         # Nova Denim Hoodie - Vue 4
├── nova-denim-hoodie-5.jpg         # Nova Denim Hoodie - Vue 5
├── nova-blue-hoodie-main.jpg       # Nova Blue Hoodie - Image principale
├── nova-blue-hoodie-1.jpg          # Nova Blue Hoodie - Vue 1
├── nova-blue-hoodie-2.jpg          # Nova Blue Hoodie - Vue 2
├── nova-blue-hoodie-3.jpg          # Nova Blue Hoodie - Vue 3
├── nova-blue-hoodie-4.jpg          # Nova Blue Hoodie - Vue 4
└── nova-blue-hoodie-5.jpg          # Nova Blue Hoodie - Vue 5
```

## 🎯 Recommandations pour les Images

### **Format et Taille**
- **Format** : JPG ou PNG
- **Taille recommandée** : 500x600 pixels
- **Ratio** : 5:6 (portrait)
- **Poids** : Maximum 200KB par image

### **Types d'Images par Produit**
1. **Image principale** (`-main.jpg`) : Vue frontale du produit
2. **Vue 1** (`-1.jpg`) : Vue de côté
3. **Vue 2** (`-2.jpg`) : Vue arrière
4. **Vue 3** (`-3.jpg`) : Détail du logo/design
5. **Vue 4** (`-4.jpg`) : Vue portée (si disponible)
6. **Vue 5** (`-5.jpg`) : Vue dépliée/étalée

### **Qualité des Images**
- **Résolution** : Haute qualité (300 DPI minimum)
- **Éclairage** : Éclairage uniforme et professionnel
- **Arrière-plan** : Blanc ou neutre
- **Focus** : Produit bien centré et net

## 📝 Comment Ajouter Vos Images

### **Étape 1 : Préparer vos images**
1. Redimensionnez vos images à 500x600 pixels
2. Optimisez le poids (max 200KB)
3. Nommez-les selon la convention ci-dessus

### **Étape 2 : Placer les images**
1. Copiez vos images dans le dossier `public/images/products/`
2. Assurez-vous que les noms correspondent exactement à ceux dans `data/products.ts`

### **Étape 3 : Vérifier**
1. Redémarrez le serveur de développement
2. Vérifiez que les images s'affichent correctement
3. Testez la galerie d'images sur chaque produit

## 🎨 Produits Disponibles

### **T-Shirts (129 DH) - En Stock**
- **Thunder T-shirt Blanc et Rouge** : Design blanc avec accents rouges
- **Thunder T-shirt Noir et Blanc** : Design contrasté noir et blanc

### **Hoodies (299 DH) - Non Disponibles**
- **Nova Denim Hoodie** : Hoodie en denim premium
- **Nova Blue Hoodie** : Hoodie bleu avec design exclusif

## 🔧 Options Alternatives

### **Images Externes (URLs)**
Si vous préférez héberger vos images ailleurs :
```typescript
image: 'https://votre-domaine.com/images/thunder-blanc-red-main.jpg',
images: [
  'https://votre-domaine.com/images/thunder-blanc-red-main.jpg',
  'https://votre-domaine.com/images/thunder-blanc-red-1.jpg',
  // ...
]
```

### **Images Temporaires**
En attendant vos vraies images, vous pouvez utiliser :
```typescript
image: 'https://via.placeholder.com/500x600/ffffff/ef4444?text=Thunder+Blanc+Red',
```

## ⚠️ Notes Importantes

- **Noms de fichiers** : Respectez exactement la casse et les tirets
- **Extensions** : Utilisez `.jpg` ou `.png` (pas `.jpeg`)
- **Espacement** : Pas d'espaces dans les noms de fichiers
- **Sauvegarde** : Gardez toujours une copie de vos images originales
- **Page d'accueil** : Seuls les T-shirts s'affichent sur la page d'accueil
- **Page Collections** : Tous les produits s'affichent (T-shirts et Hoodies) 