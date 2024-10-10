import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Mini Image */}
      <section className="container mx-auto px-6 py-16 text-center">
        <div className="flex flex-col items-center mb-8">
          <img
            src="/logo.png" // Ensure this path is correct based on your project structure
            alt="About Us Hero"
            className="w-64 h-48 object-cover rounded-full mb-6"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
            من نحن
          </h1>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
          نحن شركة متخصصة في تجارة الملابس ومواد التجميل، نحرص على تقديم تشكيلة متنوعة من أحدث صيحات الموضة ومنتجات التجميل التي تلبي احتياجات جميع العملاء. نؤمن بأهمية الجودة ونختار منتجاتنا بعناية لضمان رضا عملائنا. كما نحرص على توفير تجربة تسوق سهلة ومريحة، مع دعم متواصل من خلال خدمة عملاء متميزة. هدفنا هو أن نكون وجهتكم الأولى لكل ما يتعلق بالموضة والجمال، ونسعى دائمًا لتقديم الأفضل في كل مرة تتسوقون فيها معنا.
        </p>
      </section>

      {/* History Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          تاريخ العلامة التجارية
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto text-center">
          تأسست علامتنا التجارية من شغف بالموضة والجمال، بهدف تقديم منتجات عالية الجودة تجمع بين الأناقة والتميز. منذ البداية، التزمنا بتوفير مجموعة متنوعة من الملابس ومنتجات التجميل التي تلبي احتياجات وأذواق عملائنا. انطلقنا من بغداد كشركة صغيرة، ومن خلال التفاني والتركيز على رضا العملاء، نمونا لنصبح اسماً موثوقاً في هذا المجال. اليوم، نواصل التطور بتقديم أحدث الصيحات وأفضل المنتجات، مع الحفاظ على قيمنا الأساسية في التميز وخدمة العملاء.
        </p>
      </section>

      {/* Promise Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          هدفنا
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto text-center">
          وعدنا هو تقديم منتجات عالية الجودة من الملابس ومواد التجميل تعكس أحدث الصيحات وتلبي توقعات عملائنا. نحن ملتزمون بتقديم خدمة استثنائية، مما يضمن تجربة تسوق سلسة، ونسعى باستمرار لتحسين خدماتنا لتلبية احتياجات عملائنا المتغيرة. في صميم علامتنا التجارية، يكمن الالتزام بالجودة والموثوقية ورضا العملاء، مما يضمن أن كل عملية شراء تضيف قيمة ورضا لعملائنا.
        </p>
      </section>




    </div>
  );
};

export default About;
