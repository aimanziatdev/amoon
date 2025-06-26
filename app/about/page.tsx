import { Header } from '@/components/Header';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-thunder-900 dark:text-white text-center">À Propos de a-moon.</h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-lg leading-relaxed text-thunder-900 dark:text-thunder-100 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* French Content */}
          <div>
            <p className="mb-6">
              🚚 <b>Livraison Gratuite</b> sur tout le Maroc ! Commandez sans souci, nous nous occupons de tout.
            </p>
            <p className="mb-6">
              👕 <b>Tous nos produits sont en coton 100% authentique</b> pour un confort et une qualité exceptionnels. Douceur et durabilité garanties !
            </p>
            <p className="mb-6">
              🧑‍🦱 <b>Spécialement conçus pour les hommes modernes</b> qui veulent allier style, confort et originalité.
            </p>
            <p className="mb-6">
              🇲🇦 <b>Marque 100% marocaine</b> – Fiers de notre identité et de notre savoir-faire local.
            </p>
            <p className="mb-6">
              ⭐ <b>Qualité supérieure</b> – Chaque pièce est soigneusement sélectionnée pour répondre aux standards les plus élevés.
            </p>
            <p className="mb-6">
              😎 <b>Notre philosophie</b> : a-moon., c'est plus qu'une marque, c'est une attitude. Rejoignez la famille et démarquez-vous avec nos collections uniques !
            </p>
            <p className="mb-6">
              💪 <b>Notre engagement</b> : Chez a-moon., la satisfaction de nos clients passe avant tout. Nous vous accompagnons à chaque étape, du choix du produit à la livraison chez vous. Service client toujours à votre écoute.
            </p>
            <p className="mb-6">
              🌙 <b>Fiers d'être marocains</b> : Chaque achat chez nous soutient l'artisanat et le savoir-faire local. Merci à tous nos clients pour leur confiance !
            </p>
          </div>
          {/* Arabic Content */}
          <div dir="rtl" className="text-right font-arabic">
            <p className="mb-6">
              🚚 <b>توصيل مجاني</b> في جميع أنحاء المغرب! اطلب بدون قلق، نحن نهتم بكل شيء.
            </p>
            <p className="mb-6">
              👕 <b>جميع منتجاتنا من القطن 100٪ الأصلي</b> لراحة وجودة استثنائية. النعومة والمتانة مضمونة!
            </p>
            <p className="mb-6">
              🧑‍🦱 <b>مصممة خصيصًا للرجال العصريين</b> الذين يرغبون في الجمع بين الأناقة والراحة والتميز.
            </p>
            <p className="mb-6">
              🇲🇦 <b>علامة مغربية 100٪</b> – فخورون بهويتنا وبحرفيتنا المحلية.
            </p>
            <p className="mb-6">
              ⭐ <b>جودة عالية</b> – كل قطعة مختارة بعناية لتلبي أعلى المعايير.
            </p>
            <p className="mb-6">
              😎 <b>فلسفتنا</b> : a-moon. أكثر من مجرد علامة، إنها أسلوب حياة. انضم إلى العائلة وتميز مع مجموعاتنا الفريدة!
            </p>
            <p className="mb-6">
              💪 <b>التزامنا</b> : في a-moon. رضا عملائنا هو أولويتنا. نرافقكم في كل خطوة من اختيار المنتج حتى التوصيل. خدمة العملاء دائمًا في خدمتكم.
            </p>
            <p className="mb-6">
              🌙 <b>فخورون بأننا مغاربة</b> : كل عملية شراء تدعم الحرفية والمعرفة المحلية. شكرًا لكل عملائنا على ثقتهم!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 