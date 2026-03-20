import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'bn' | 'es' | 'ar' | 'hi' | 'zh';

interface Translation {
  [key: string]: {
    [key in Language]: string;
  };
}

const translations: Translation = {
  home: { en: 'Home', bn: 'হোম', es: 'Inicio', ar: 'الرئيسية', hi: 'होम', zh: '首页' },
  gallery: { en: 'Product Gallery', bn: 'প্রোডাক্ট গ্যালারি', es: 'Galería de Productos', ar: 'معرض المنتجات', hi: 'उत्पाद गैलरी', zh: '产品展示' },
  about: { en: 'About Us', bn: 'আমাদের সম্পর্কে', es: 'Sobre Nosotros', ar: 'من نحن', hi: 'हमारे बारे में', zh: '关于我们' },
  contact: { en: 'Contact Us', bn: 'যোগাযোগ', es: 'Contáctenos', ar: 'اتصل بنا', hi: 'हमসে সম্পর্ক করেঁ', zh: '联系我们' },
  locations: { en: 'Locations', bn: 'অবস্থান', es: 'Ubicaciones', ar: 'مواقعنا', hi: 'स्थान', zh: '门店地址' },
  promotions: { en: 'Sales & Promotions', bn: 'সেলস এবং প্রমোশন', es: 'Ventas y Promociones', ar: 'العروض والخصومات', hi: 'बिक्री और प्रचार', zh: '促销活动' },
  heroTitle: { en: 'Elevate Your Coastal View.', bn: 'আপনার উপকূলীয় দৃশ্যকে উন্নত করুন।', es: 'Eleve su Vista Costera.', ar: 'ارتقِ بإطلالتك الساحلية.', hi: 'अपने तटीय दृश्य को बेहतर बनाएं।', zh: '提升您的海滨景观。' },
  heroSubtitle: { en: 'Premium Window Treatments', bn: 'প্রিমিয়াম উইন্ডো ট্রিটমেন্ট', es: 'Tratamientos de Ventanas Premium', ar: 'معالجات نوافذ فاخرة', hi: 'प्रीमियम विंडो ट्रीटमेंट', zh: '高端窗饰解决方案' },
  heroDesc: { en: 'Palm Beach Shutters & Shades provides bespoke window solutions that blend timeless elegance with modern functionality.', bn: 'পাম বিচ শাটার এবং শেডগুলি বেসপোক উইন্ডো সমাধান সরবরাহ করে যা আধুনিক কার্যকারিতার সাথে কালজয়ী কমনীয়তাকে মিশ্রিত করে।', es: 'Palm Beach Shutters & Shades ofrece soluciones de ventanas a medida que combinan la elegancia atemporal con la funcionalidad moderna.', ar: 'توفر Palm Beach Shutters & Shades حلول نوافذ مخصصة تمزج بين الأناقة الخالدة والوظائف الحديثة.', hi: 'पाम बीच शटर्स एंड शेड्स बेस्पोक विंडो समाधान प्रदान करता है जो आधुनिक कार्यक्षमता के साथ कालातीत लालित्य का मिश्रण करते हैं।', zh: 'Palm Beach Shutters & Shades 提供定制窗饰方案，将永恒的优雅与现代功能完美融合。' },
  cta: { en: 'Request a Consultation', bn: 'পরামর্শের জন্য অনুরোধ করুন', es: 'Solicitar una Consulta', ar: 'اطلب استشارة', hi: 'परामर्श का अनुरोध करें', zh: '预约咨询' },
  craftingLight: { en: 'Crafting Light,', bn: 'আলো তৈরি করা,', es: 'Creando Luz,', ar: 'صياغة الضوء،', hi: 'प्रकाश को संवारना,', zh: '精雕细琢的光影，' },
  definingPrivacy: { en: 'Defining Privacy.', bn: 'গোপনীয়তা সংজ্ঞায়িত করা।', es: 'Definiendo Privacidad.', ar: 'تحديد الخصوصية.', hi: 'गोपनीयता को परिभाषित करना।', zh: '定义私密空间。' },
  homeAbout1: { en: 'At Palm Beach Shutters & Shades, we believe that window treatments are more than just functional additions to a home—they are the finishing touches that define a space\'s character.', bn: 'পাম বিচ শাটার এবং শেডগুলিতে, আমরা বিশ্বাস করি যে উইন্ডো ট্রিটমেন্টগুলি কেবল একটি বাড়ির কার্যকরী সংযোজন নয়—এগুলি এমন সমাপ্তি স্পর্শ যা একটি স্থানের চরিত্রকে সংজ্ঞায়িত করে।', es: 'En Palm Beach Shutters & Shades, creemos que los tratamientos de ventanas son más que simples adiciones funcionales a un hogar: son los toques finales que definen el carácter de un espacio.', ar: 'في Palm Beach Shutters & Shades، نؤمن بأن معالجات النوافذ هي أكثر من مجرد إضافات وظيفية للمنزل - فهي اللمسات الأخيرة التي تحدد شخصية المساحة.', hi: 'पाम बीच शटर्स एंड शेड्स में, हमारा मानना है कि विंडो ट्रीटमेंट घर के लिए केवल कार्यात्मक जोड़ से कहीं अधिक हैं—वे अंतिम स्पर्श हैं जो एक स्थान के चरित्र को परिभाषित करते हैं।', zh: '在 Palm Beach Shutters & Shades，我们相信窗饰不仅仅是家居的功能性补充，更是定义空间个性的点睛之笔。' },
  homeAbout2: { en: 'Our team of experienced designers and installers works closely with each client to understand their unique vision. From the classic appeal of plantation shutters to the cutting-edge convenience of motorized shades, we offer a curated selection of products that meet the highest standards of quality and design.', bn: 'আমাদের অভিজ্ঞ ডিজাইনার এবং ইনস্টলারদের দল প্রতিটি ক্লায়েন্টের অনন্য দৃষ্টিভঙ্গি বোঝার জন্য তাদের সাথে ঘনিষ্ঠভাবে কাজ করে। প্ল্যান্টেশন শাটারের ক্লাসিক আবেদন থেকে শুরু করে মোটরচালিত শেডগুলির অত্যাধুনিক সুবিধা পর্যন্ত, আমরা পণ্যের একটি কিউরেটেড নির্বাচন অফার করি যা গুণমান এবং ডিজাইনের সর্বোচ্চ মান পূরণ করে।', es: 'Nuestro equipo de diseñadores e instaladores experimentados trabaja en estrecha colaboración con cada cliente para comprender su visión única. Desde el atractivo clásico de las contraventanas de plantación hasta la conveniencia de vanguardia de las persianas motorizadas, ofrecemos una selección curada de productos que cumplen con los más altos estándares de calidad y diseño.', ar: 'يعمل فريقنا من المصممين والمثبتين ذوي الخبرة عن كثب مع كل عميل لفهم رؤيتهم الفريدة. من الجاذبية الكلاسيكية لمصاريع المزارع إلى الراحة المتطورة للظلال الآلية، نقدم مجموعة مختارة من المنتجات التي تلبي أعلى معايير الجودة والتصميم.', hi: 'अनुभवी डिजाइनरों और इंस्टॉलरों की हमारी टीम प्रत्येक ग्राहक के साथ उनकी अनूठी दृष्टि को समझने के लिए मिलकर काम करती है। प्लांटेशन शटर की क्लासिक अपील से लेकर मोटर चालित शेड्स की अत्याधुनिक सुविधा तक, हम उत्पादों का एक क्यूरेटेड चयन प्रदान करते हैं जो गुणवत्ता और डिजाइन के उच्चतम मानकों को पूरा करते हैं।', zh: '我们经验丰富的设计师和安装团队与每位客户紧密合作，以理解他们独特的愿景。从种植园百叶窗的经典魅力到电动遮阳帘的前沿便利，我们提供精选产品，满足质量和设计的最高标准。' },
  qualityQuote: { en: '"Quality is not an act, it is a habit."', bn: '"গুণমান কোনও কাজ নয়, এটি একটি অভ্যাস।ত"', es: '"La calidad no es un acto, es un hábito."', ar: '"الجودة ليست فعلاً، بل هي عادة."', hi: '"गुणवत्ता कोई कार्य नहीं है, यह एक आदत है।"', zh: '“质量不是一种行为，而是一种习惯。”' },
  expertise: { en: 'Our Expertise', bn: 'আমাদের দক্ষতা', es: 'Nuestra Experiencia', ar: 'خبرتنا', hi: 'हमारी विशेषज्ञता', zh: '我们的专业领域' },
  expertiseDesc: { en: 'We specialize in high-end window treatments that offer privacy, light control, and aesthetic appeal.', bn: 'আমরা হাই-এন্ড উইন্ডো ট্রিটমেন্টে বিশেষজ্ঞ যা গোপনীয়তা, আলো নিয়ন্ত্রণ এবং নান্দনিক আবেদন সরবরাহ করে।', es: 'Nos especializamos en tratamientos de ventanas de alta gama que ofrecen privacidad, control de luz y atractivo estético.', ar: 'نحن متخصصون في معالجات النوافذ الراقية التي توفر الخصوصية والتحكم في الضوء والجاذبية الجمالية.', hi: 'हम हाई-एंड विंडो ट्रीटमेंट में विशेषज्ञ हैं जो गोपनीयता, प्रकाश नियंत्रण और सौंदर्य अपील प्रदान करते हैं।', zh: '我们专注于高端窗饰，提供隐私保护、光线控制和审美享受。' },
  plantationShutters: { en: 'Plantation Shutters', bn: 'প্ল্যান্টেশন শাটার', es: 'Persianas de Plantación', ar: 'مصاريع المزارع', hi: 'प्लांटेशन शटर्स', zh: '种植园百叶窗' },
  plantationDesc: { en: 'Timeless hardwood and composite shutters designed for durability and style.', bn: 'স্থায়িত্ব এবং শৈলীর জন্য ডিজাইন করা কালজয়ী হার্ডউড এবং কম্পোজিট শাটার।', es: 'Persianas de madera dura y compuestas atemporales diseñadas para durabilidad y estilo.', ar: 'مصاريع خشبية ومركبة خالدة مصممة للمتانة والأناقة.', hi: 'स्थायित्व और शैली के लिए डिज़ाइन किए गए कालातीत दृढ़ लकड़ी और मिश्रित शटर।', zh: '永恒的硬木和复合材料百叶窗，兼顾耐用与风格。' },
  motorizedShades: { en: 'Motorized Shades', bn: 'মোটরচালিত শেড', es: 'Persianas Motorizadas', ar: 'ستائر آلية', hi: 'मोटर चालित शेड्स', zh: '电动遮阳帘' },
  motorizedDesc: { en: 'Smart shades that adjust with the touch of a button or a voice command.', bn: 'স্মার্ট শেড যা একটি বোতামের স্পর্শে বা ভয়েস কমান্ডের মাধ্যমে সামঞ্জস্য করা যায়।', es: 'Persianas inteligentes que se ajustan con solo tocar un botón o un comando de voz.', ar: 'ستائر ذكية يتم ضبطها بلمسة زر أو بأمر صوتي.', hi: 'स्मार्ट शेड्स जो एक बटन के स्पर्श या वॉयस कमांड के साथ समायोजित होते हैं।', zh: '智能遮阳帘，只需轻按按钮或语音指令即可调节。' },
  designerBlinds: { en: 'Designer Blinds', bn: 'ডিজাইনার ব্লাইন্ডস', es: 'Persianas de Diseñador', ar: 'ستائر مصممة', hi: 'डिजाइनर ब्लाइंड्स', zh: '设计师百叶窗' },
  designerDesc: { en: 'A wide selection of textures and materials to complement any interior.', bn: 'যেকোন অভ্যন্তর পরিপূরক করার জন্য টেক্সচার এবং উপকরণের বিস্তৃত নির্বাচন।', es: 'Una amplia selección de texturas y materiales para complementar cualquier interior.', ar: 'مجموعة واسعة من الأنسجة والمواد لتكمل أي تصميم داخلي.', hi: 'किसी भी इंटीरियर के पूरक के लिए बनावट और सामग्री का एक विस्तृत चयन।', zh: '丰富的纹理和材料选择，完美契合任何室内装饰。' },
  learnMore: { en: 'Learn More', bn: 'আরও জানুন', es: 'Saber Más', ar: 'تعرف على المزيد', hi: 'अधिक जानें', zh: '了解更多' },
  viewAll: { en: 'View All Products', bn: 'সব পণ্য দেখুন', es: 'Ver Todos los Productos', ar: 'عرض جميع المنتجات', hi: 'सभी उत्पाद देखें', zh: '查看所有产品' },
  transformSpace: { en: "Let's Transform Your Space.", bn: 'চলুন আপনার স্থান পরিবর্তন করি।', es: 'Transformemos su Espacio.', ar: 'دعنا نحول مساحتك.', hi: 'आइए आपके स्थान को बदलें।', zh: '让我们改造您的空间。' },
  contactDesc: { en: 'Schedule a complimentary in-home consultation. Our designers will bring samples directly to you and provide a detailed quote.', bn: 'একটি প্রশংসাসূচক ইন-হোম পরামর্শের সময়সূচী করুন। আমাদের ডিজাইনাররা সরাসরি আপনার কাছে নমুনা আনবেন এবং একটি বিস্তারিত উদ্ধৃতি প্রদান করবেন।', es: 'Programe una consulta gratuita en el hogar. Nuestros diseñadores le traerán muestras directamente y le proporcionarán un presupuesto detallado.', ar: 'حددد موعداً لاستشارة منزلية مجانية. سيحضر مصممونا العينات إليك مباشرة ويقدمون عرض أسعار مفصلاً.', hi: 'एक मानार्थ इन-होम परामर्श निर्धारित करें। हमारे डिजाइनर सीधे आपके पास नमूने लाएंगे और एक विस्तृत उद्धरण प्रदान करेंगे।', zh: '预约免费上门咨询。我们的设计师将直接为您提供样品并提供详细报价。' },
  callUs: { en: 'Call Us', bn: 'আমাদের কল করুন', es: 'Llámenos', ar: 'اتصل بنا', hi: 'हमें कॉल करें', zh: '联系我们' },
  email: { en: 'Email', bn: 'ইমেল', es: 'Correo Electrónico', ar: 'البريد الإلكتروني', hi: 'ईमेल', zh: '电子邮件' },
  visitUs: { en: 'Visit Us', bn: 'আমাদের পরিদর্শন করুন', es: 'Visítenos', ar: 'تفضل بزيارتنا', hi: 'हमसे मिलें', zh: '亲临门店' },
  firstName: { en: 'First Name', bn: 'প্রথম নাম', es: 'Nombre', ar: 'الاسم الأول', hi: 'पहला नाम', zh: '名' },
  lastName: { en: 'Last Name', bn: 'শেষ নাম', es: 'Apellido', ar: 'اسم العائلة', hi: 'اسم العائلة', zh: '姓' },
  emailAddr: { en: 'Email Address', bn: 'ইমেল ঠিকানা', es: 'Dirección de Correo', ar: 'عنوان البريد الإلكتروني', hi: 'ईमेल पता', zh: '电子邮件地址' },
  howHelp: { en: 'How can we help?', bn: 'আমরা কীভাবে সাহায্য করতে পারি?', es: '¿Cómo podemos ayudar?', ar: 'كيف يمكننا المساعدة؟', hi: 'हम आपकी किस प्रकार सहायता कर सकते हैं?', zh: '我们能为您提供什么帮助？' },
  sendMessage: { en: 'Send Message', bn: 'বার্তা পাঠান', es: 'Enviar Mensaje', ar: 'إرسال رسالة', hi: 'संदेश भेजें', zh: '发送消息' },
  placeholderName: { en: 'Jane', bn: 'জেন', es: 'Juana', ar: 'جين', hi: 'जेन', zh: '珍' },
  placeholderLastName: { en: 'Doe', bn: 'ডো', es: 'Pérez', ar: 'دو', hi: 'ডো', zh: '豆' },
  placeholderEmail: { en: 'jane@example.com', bn: 'jane@example.com', es: 'juana@ejemplo.com', ar: 'jane@example.com', hi: 'jane@example.com', zh: 'jane@example.com' },
  placeholderMessage: { en: 'Tell us about your project...', bn: 'আপনার প্রকল্প সম্পর্কে আমাদের বলুন...', es: 'Cuéntenos sobre su proyecto...', ar: 'أخبرنا عن مشروعك...', hi: 'हमें अपने प्रोजेक्ट के बारे में बताएं...', zh: '请告诉我们您的项目需求...' },
  footerDesc: { en: 'Providing premium window treatment solutions to Palm Beach and surrounding areas for over 20 years.', bn: '২০ বছরেরও বেশি সময় ধরে পাম বিচ এবং আশেপাশের অঞ্চলে প্রিমিয়াম উইন্ডো ট্রিটমেন্ট সমাধান সরবরাহ করছি।', es: 'Brindando soluciones premium de tratamiento de ventanas a Palm Beach y áreas circundantes durante más de 20 años.', ar: 'تقديم حلول معالجة النوافذ الفاخرة لمنطقة بالم بيتش والمناطق المحيطة بها لأكثر من 20 عاماً.', hi: '20 से अधिक वर्षों से पाम बीच और आसपास के क्षेत्रों में प्रीमियम विंडो ट्रीटमेंट समाधान प्रदान करना।', zh: '20 多年来，一直为棕榈滩及周边地区提供优质的窗饰解决方案。' },
  navigation: { en: 'Navigation', bn: 'নেভিগেশন', es: 'Navegación', ar: 'التنقل', hi: 'नेविगेशन', zh: '导航' },
  social: { en: 'Social', bn: 'সামাজিক', es: 'Social', ar: 'وسائل التواصل الاجتماعي', hi: 'सोशल', zh: '社交媒体' },
  rights: { en: '© 2026 Palm Beach Shutters & Shades. All rights reserved.', bn: '© ২০২৬ পাম বিচ শাটার এবং শেড। সমস্ত অধিকার সংরক্ষিত।', es: '© 2026 Palm Beach Shutters & Shades. Todos los derechos reservados.', ar: '© 2026 Palm Beach Shutters & Shades. جميع الحقوق محفوظة.', hi: '© 2026 पाम बीच शटर्स एंड शेड्स। सर्वाधिकार सुरक्षित।', zh: '© 2026 Palm Beach Shutters & Shades।保留所有权利。' },
  privacy: { en: 'Privacy Policy', bn: 'গোপনীয়তা নীতি', es: 'Política de Privacidad', ar: 'سياسة الخصوصية', hi: 'गोपनीयता नीति', zh: '隐私政策' },
  terms: { en: 'Terms of Service', bn: 'পরিষেবার শর্তাবলী', es: 'Términos de Servicio', ar: 'شروط الخدمة', hi: 'सेवा की शर्तें', zh: '服务条款' },
  aboutUsTitle: { en: 'About Us', bn: 'আমাদের সম্পর্কে', es: 'Sobre Nosotros', ar: 'من نحن', hi: 'हमारे बारे में', zh: '关于我们' },
  aboutDesc1: { en: 'Palm Beach Shutters & Shades has been a cornerstone of the Florida window treatment industry for over two decades. Our journey began with a simple mission: to provide homeowners with the highest quality products and unparalleled customer service.', bn: 'পাম বিচ শাটার এবং শেডগুলি দুই দশকেরও বেশি সময় ধরে ফ্লোরিডা উইন্ডো ট্রিটমেন্ট শিল্পের একটি ভিত্তিপ্রস্তর হয়ে দাঁড়িয়েছে। আমাদের যাত্রা একটি সাধারণ মিশনের সাথে শুরু হয়েছিল: বাড়ির মালিকদের সর্বোচ্চ মানের পণ্য এবং অতুলনীয় গ্রাহক পরিষেবা সরবরাহ করা।', es: 'Palm Beach Shutters & Shades ha sido una piedra angular de la industria de tratamientos de ventanas de Florida durante más de dos décadas. Nuestro viaje comenzó con una misión simple: brindar a los propietarios productos de la más alta calidad y un servicio al cliente incomparable.', ar: 'كانت Palm Beach Shutters & Shades حجر الزاوية في صناعة معالجة النوافذ في فلوريدا لأكثر من عقدين. بدأت رحلتنا بمهمة بسيطة: تزويد أصحاب المنازل بمنتجات عالية الجودة وخدمة عملاء لا مثيل لها.', hi: 'पाम बीच शटर्स एंड शेड्स दो दशकों से अधिक समय से फ्लोरिडा विंडो ट्रीटमेंट उद्योग का आधार रहा है। हमारी यात्रा एक सरल मिशन के साथ शुरू हुई: घर के मालिकों को उच्चतम गुणवत्ता वाले उत्पाद और अद्वितीय ग्राहक सेवा प्रदान करना।', zh: '二十多年来，Palm Beach Shutters & Shades 一直是佛罗里达窗饰行业的基石。我们的旅程始于一个简单的使命：为房主提供最高品质的产品和无与伦比 Customer Service。' },
  aboutDesc2: { en: 'We understand that every home is unique, and so are the needs of its inhabitants. That\'s why we offer a personalized approach to every project, ensuring that the final result is a perfect reflection of your style and functional requirements.', bn: 'আমরা বুঝি যে প্রতিটি বাড়ি অনন্য, এবং এর বাসিন্দাদের প্রয়োজনও তাই। এই কারণেই আমরা প্রতিটি প্রকল্পের জন্য একটি ব্যক্তিগতকৃত পদ্ধতির অফার করি, এটি নিশ্চিত করে যে চূড়ান্ত ফলাফলটি আপনার স্টাইল এবং কার্যকরী প্রয়োজনীয়তার একটি নিখুঁত প্রতিফলন।', es: 'Entendemos que cada hogar es único, al igual que las necesidades de sus habitantes. Es por eso que ofrecemos un enfoque personalizado para cada proyecto, asegurando que el resultado final sea un reflejo perfecto de su estilo y requisitos funcionales.', ar: 'نحن ندرك أن كل منزل فريد من نوعه، وكذلك احتياجات سكانه. لهذا السبب نقدم نهجاً مخصصاً لكل مشروع، مما يضمن أن النتيجة النهائية هي انعكاس مثالي لأسلوبك ومتطلباتك الوظيفية.', hi: 'हम समझते हैं कि हर घर अद्वितीय है, और उसके निवासियों की ज़रूरतें भी वैसी ही हैं। इसलिए हम हर प्रोजेक्ट के लिए एक व्यक्तिगत दृष्टिकोण प्रदान करते हैं, यह सुनिश्चित करते हुए कि अंतिम परिणाम आपकी शैली और कार्यात्मक आवश्यकताओं का एक आदर्श प्रतिबिंब है।', zh: '我们深知每个家庭都是独一无二的，居住者的需求也是如此。因此，我们为每个项目提供个性化的方案，确保最终结果完美体现您的风格和功能需求。' },
  yearsExcellence: { en: '20+ Years', bn: '২০+ বছর', es: '20+ Años', ar: '+20 عاماً', hi: '20+ वर्ष', zh: '20 多年' },
  excellenceFlorida: { en: 'Of Excellence in Florida', bn: 'ফ্লোরিডায় শ্রেষ্ঠত্ব', es: 'De Excelencia in Florida', ar: 'من التميز في فلوريدا', hi: 'फ्लोरिडा में उत्कृष्टता का', zh: '佛罗里达州的卓越品质' },
  quality: { en: 'Quality', bn: 'গুণমান', es: 'Calidad', ar: 'الجودة', hi: 'गुणवत्ता', zh: '质量' },
  qualityDesc: { en: 'We source only the finest materials for our shutters and shades.', bn: 'আমরা আমাদের শাটার এবং শেডগুলির জন্য কেবল সেরা উপকরণগুলি উৎস করি।', es: 'Obtenemos solo los mejores materiales para nuestras contraventanas y persianas.', ar: 'نحن نحصل فقط على أجود المواد لمصاريعنا وظلالنا.', hi: 'हम अपने शटर और शेड्स के लिए केवल बेहतरीन सामग्री का उपयोग करते हैं।', zh: '我们只为百叶窗和遮阳帘选用最优质的材料。' },
  precision: { en: 'Precision', bn: 'নির্ভুলতা', es: 'Precisión', ar: 'الدقة', hi: 'सटीकता', zh: '精准' },
  precisionDesc: { en: 'Every measurement is taken with absolute accuracy for a perfect fit.', bn: 'একটি নিখুঁত ফিটের জন্য প্রতিটি পরিমাপ পরম নির্ভুলতার সাথে নেওয়া হয়।', es: 'Cada medida se toma con absoluta precisión para un ajuste perfecto.', ar: 'يتم أخذ كل قياس بدقة مطلقة لضمان الملاءمة المثالية.', hi: 'एक सही फिट के लिए हर माप पूर्ण सटीकता के साथ लिया जाता है।', zh: '每次测量都力求绝对精确，确保完美贴合。' },
  service: { en: 'Service', bn: 'পরিষেবা', es: 'Servicio', ar: 'الخدمة', hi: 'सेवा', zh: '服务' },
  serviceDesc: { en: 'Our team is dedicated to your complete satisfaction from start to finish.', bn: 'আমাদের দল শুরু থেকে শেষ পর্যন্ত আপনার সম্পূর্ণ সন্তুষ্টির জন্য নিবেদিত।', es: 'Nuestro equipo está dedicado a su completa satisfacción de principio a fin.', ar: 'فريقنا مكرس لرضاك التام من البداية إلى النهاية.', hi: 'हमारी टीम शुरू से अंत तक आपकी पूर्ण संतुष्टि के लिए समर्पित है।', zh: '我们的团队致力于为您提供从始至终的全面满意服务。' },
  claimOffer: { en: 'Claim Offer', bn: 'অফার দাবি করুন', es: 'Reclamar Oferta', ar: 'احصل على العرض', hi: 'ऑफर का दावा करें', zh: '领取优惠' },
  offerClaimed: { en: 'Offer Claimed!', bn: 'অফার দাবি করা হয়েছে!', es: '¡Oferta Reclamada!', ar: 'تم الحصول على العرض!', hi: 'ऑফার का दावा किया गया!', zh: '优惠已领取！' },
  offerClaimedDesc: { en: 'Thank you for your interest. Our team will contact you shortly with the details.', bn: 'আপনার আগ্রহের জন্য ধন্যবাদ। আমাদের দল শীঘ্রই বিস্তারিত জানার জন্য আপনার সাথে যোগাযোগ করবে।', es: 'Gracias por su interés. Nuestro equipo se pondrá en contacto con usted en breve con los detalles.', ar: 'شكراً لاهتمامك. سيتصل بك فريقنا قريباً لتزويدك بالتفاصيل.', hi: 'आपकी रुचि के लिए धन्यवाद। हमारी टीम जल्द ही विवरण के साथ आपसे संपर्क करेगी।', zh: '感谢您的关注。我们的团队将很快与您联系并提供详细信息。' },
  claimingOffer: { en: 'Claiming Offer', bn: 'অফার দাবি করা হচ্ছে', es: 'Reclamando Offer', ar: 'جاري طلب العرض', hi: 'ऑफर का दावा किया जा रहा है', zh: '正在领取优惠' },
  fullName: { en: 'Full Name', bn: 'পুরো নাম', es: 'Nombre Completo', ar: 'الاسم الكامل', hi: 'पूरा नाम', zh: '姓名' },
  submitClaim: { en: 'Submit Claim', bn: 'দাবি জমা দিন', es: 'Enviar Reclamación', ar: 'إرسال الطلب', hi: 'दावा सबमिट करें', zh: '提交申请' },
  processing: { en: 'Processing...', bn: 'প্রক্রিয়াকরণ হচ্ছে...', es: 'Procesando...', ar: 'جاري المعالجة...', hi: 'प्रसंस्करण...', zh: '处理中...' },
  ourLocations: { en: 'Our Locations', bn: 'আমাদের অবস্থান', es: 'Nuestras Ubicaciones', ar: 'مواقعنا', hi: 'हमारे स्थान', zh: '门店地址' },
  viewFullscreen: { en: 'View Fullscreen', bn: 'ফুলস্ক্রিন দেখুন', es: 'Ver Pantalla Completa', ar: 'عرض بملء الشاشة', hi: 'पूर्ण स्क्रीन देखें', zh: '全屏查看' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
