export interface HeritageAtlasEntry {
  id: string;
  slug: string;
  titleEn: string;
  titleAr: string;
  regionEn: string;
  regionAr: string;
  period: string;
  summaryEn: string;
  summaryAr: string;
  bodyEn: string;
  bodyAr: string;
  imageUrl: string | null;
}

export const mockHeritageAtlas: HeritageAtlasEntry[] = [
  { id: 'ha-1', slug: 'swiss-watchmaking-valley', titleEn: 'The Swiss Watchmaking Valley', titleAr: 'وادي صناعة الساعات السويسري', regionEn: 'Switzerland', regionAr: 'سويسرا', period: '18th–21st Century', summaryEn: 'The cradle of modern watchmaking, spanning Geneva to the Jura Arc.', summaryAr: 'مهد صناعة الساعات الحديثة، من جنيف إلى قوس جورا.', bodyEn: 'The Swiss Watchmaking Valley, also known as the Watchmaking Arc, stretches from Geneva through the Jura Mountains to Basel. This region has been the global center of fine watchmaking for over 300 years, home to maisons such as Patek Philippe, Vacheron Constantin, and Audemars Piguet. The valley\'s unique concentration of skilled artisans, component manufacturers, and maisons created an ecosystem of precision that remains unmatched.', bodyAr: 'يمتد وادي صناعة الساعات السويسري، المعروف أيضاً بقوس صناعة الساعات، من جنيف عبر جبال جورا إلى بازل. كانت هذه المنطقة المركز العالمي لصناعة الساعات الفاخرة لأكثر من 300 عام، موطناً لدور مثل باتيك فيليب وفاشرون كونستانتين وأوديمار بيغيه. التركيز الفريد للحرفيين المهرة ومصنعي المكونات والدور في هذا الوادي خلق نظاماً بيئياً للدقة لا يضاهى.', imageUrl: null },
  { id: 'ha-2', slug: 'place-vendome-jewelry', titleEn: 'Place Vendôme — The Jewelry Capital', titleAr: 'بلاس فاندوم — عاصمة المجوهرات', regionEn: 'France', regionAr: 'فرنسا', period: '18th–21st Century', summaryEn: 'Paris\'s iconic square and the global epicenter of fine jewelry.', summaryAr: 'الساحة الأيقونية في باريس والمركز العالمي للمجوهرات الفاخرة.', bodyEn: 'Place Vendôme in Paris has been the world\'s foremost address for fine jewelry since the 18th century. Home to Cartier, Van Cleef & Arpels, Boucheron, and Chaumet, the square became synonymous with luxury, craftsmanship, and the highest standards of gem-setting. The architectural harmony of the square, designed by Jules Hardouin-Mansart, provides an appropriately majestic setting for the world\'s most important jewelers.', bodyAr: 'تعتبر بلاس فاندوم في باريس العنوان الأهم في العالم للمجوهرات الفاخرة منذ القرن الثامن عشر. موطن كارتييه وفان كليف آند آربيلز وبوشيرون وشوميه، أصبحت الساحة مرادفة للفخامة والحرفية وأعلى معايير تركيب الأحجار الكريمة. التناغم المعماري للساحة، الذي صممه جول هاردوين-مانسار، يوفر إطاراً مهيباً لأهم صائغي المجوهرات في العالم.', imageUrl: null },
  { id: 'ha-3', slug: 'art-deco-paris-1925', titleEn: 'The Art Deco Movement — Paris 1925', titleAr: 'حركة آرت ديكو — باريس 1925', regionEn: 'France', regionAr: 'فرنسا', period: '1920s–1930s', summaryEn: 'The Exposition Internationale des Arts Décoratifs et Industriels Modernes that defined a design era.', summaryAr: 'المعرض الدولي للفنون الزخرفية والصناعية الحديثة الذي حدد حقبة كاملة في التصميم.', bodyEn: 'The 1925 Exposition Internationale des Arts Décoratifs et Industriels Modernes in Paris gave rise to what we now call Art Deco. This movement influenced architecture, jewelry, furniture, fashion, and industrial design worldwide. Characterized by geometric patterns, bold colors, and luxurious materials, Art Deco remains one of the most influential design movements of the 20th century. Cartier, Van Cleef & Arpels, and Lalique were among the maisons that defined the movement\'s aesthetic.', bodyAr: 'أدى المعرض الدولي للفنون الزخرفية والصناعية الحديثة في باريس عام 1925 إلى ظهور ما نسميه الآن آرت ديكو. أثرت هذه الحركة على الهندسة المعمارية والمجوهرات والأثاث والأزياء والتصميم الصناعي في جميع أنحاء العالم. تتميز بالنقوش الهندسية والألوان الجريئة والمواد الفاخرة، ولا تزال آرت ديكو واحدة من أكثر حركات التصميم تأثيراً في القرن العشرين. كانت كارتييه وفان كليف آند آربيلز ولاليك من بين الدور التي حددت جمالية الحركة.', imageUrl: null },
  { id: 'ha-4', slug: 'grand-complication-era', titleEn: 'The Grand Complication Era', titleAr: 'عصر التعقيدات الكبرى', regionEn: 'Switzerland', regionAr: 'سويسرا', period: '1880–1950', summaryEn: 'The golden age of ultra-complicated mechanical watches.', summaryAr: 'العصر الذهبي للساعات الميكانيكية فائقة التعقيد.', bodyEn: 'Between 1880 and 1950, Swiss watchmakers produced some of the most complicated mechanical timepieces ever created. Known as "grandes complications," these watches combined multiple functions including perpetual calendars, minute repeaters, chronographs, and astronomical indications. Patek Philippe\'s Henry Graves Supercomplication, completed in 1933, held the title of the most complicated mechanical watch for decades, featuring 24 complications.', bodyAr: 'بين عامي 1880 و1950، أنتج صانعو الساعات السويسريون بعضاً من أكثر الساعات الميكانيكية تعقيداً على الإطلاق. تُعرف باسم "التعقيدات الكبرى"، تجمع هذه الساعات وظائف متعددة بما في ذلك التقاويم الأبدية ومكررات الدقائق والكرونوغرافات والمؤشرات الفلكية. ساعة هنري غريفز سوبركومبليكايشن من باتيك فيليب، التي اكتملت في عام 1933، حملت لقب أكثر الساعات الميكانيكية تعقيداً لعقود، وتضمنت 24 تعقيداً.', imageUrl: null },
];

export interface MuseumProfile {
  id: string;
  slug: string;
  nameEn: string;
  nameAr: string;
  locationEn: string;
  locationAr: string;
  foundedYear: string;
  descriptionEn: string;
  descriptionAr: string;
  imageUrl: string | null;
  websiteUrl: string | null;
}

export const mockMuseumProfiles: MuseumProfile[] = [
  { id: 'mus-1', slug: 'patek-philippe-museum', nameEn: 'Patek Philippe Museum', nameAr: 'متحف باتيك فيليب', locationEn: 'Geneva, Switzerland', locationAr: 'جنيف، سويسرا', foundedYear: '2001', descriptionEn: 'One of the world\'s finest horological museums, housing over 2,500 timepieces spanning five centuries. The collection includes rare Patek Philippe pieces, early watches, and automated musical objects.', descriptionAr: 'واحد من أرقى متاحف صناعة الساعات في العالم، يضم أكثر من 2500 ساعة تمتد عبر خمسة قرون. تتضمن المجموعة قطع باتيك فيليب النادرة والساعات المبكرة والأشياء الموسيقية الآلية.', imageUrl: null, websiteUrl: null },
  { id: 'mus-2', slug: 'musee-des-arts-decoratifs', nameEn: 'Musée des Arts Décoratifs', nameAr: 'متحف الفنون الزخرفية', locationEn: 'Paris, France', locationAr: 'باريس، فرنسا', foundedYear: '1905', descriptionEn: 'Housed in the Louvre Palace, this museum holds one of the world\'s largest collections of decorative arts, including jewelry, furniture, fashion, and design objects from the Middle Ages to the present.', descriptionAr: 'يقع في قصر اللوفر، ويضم هذا المتحف واحدة من أكبر مجموعات الفنون الزخرفية في العالم، بما في ذلك المجوهرات والأثاث والأزياء وقطع التصميم من العصور الوسطى حتى الوقت الحاضر.', imageUrl: null, websiteUrl: null },
  { id: 'mus-3', slug: 'victoria-and-albert-museum', nameEn: 'Victoria and Albert Museum', nameAr: 'متحف فيكتوريا وألبرت', locationEn: 'London, United Kingdom', locationAr: 'لندن، المملكة المتحدة', foundedYear: '1852', descriptionEn: 'The world\'s largest museum of applied and decorative arts. Its jewelry collection spans 5,000 years and includes pieces from ancient Egypt to contemporary designs.', descriptionAr: 'أكبر متحف في العالم للفنون التطبيقية والزخرفية. تمتد مجموعة المجوهرات فيه لـ 5000 عام وتشمل قطعاً من مصر القديمة إلى التصاميم المعاصرة.', imageUrl: null, websiteUrl: null },
];

export interface MaisonHeritage {
  id: string;
  slug: string;
  nameEn: string;
  nameAr: string;
  foundedYear: string;
  originCountry: string;
  specialtyEn: string;
  specialtyAr: string;
  descriptionEn: string;
  descriptionAr: string;
  imageUrl: string | null;
}

export const mockMaisonHeritageProfiles: MaisonHeritage[] = [
  { id: 'mh-1', slug: 'patek-philippe', nameEn: 'Patek Philippe', nameAr: 'باتيك فيليب', foundedYear: '1839', originCountry: 'Switzerland', specialtyEn: 'Haute Horlogerie — Grand Complications', specialtyAr: 'صناعة الساعات الفاخرة — التعقيدات الكبرى', descriptionEn: 'Founded in 1839 by Antoni Patek and Adrien Philippe, Patek Philippe is one of the most prestigious watch manufacturers in the world. Known for inventing the perpetual calendar mechanism and creating some of the most complicated timepieces ever made, the maison has been continuously family-owned since its founding. Patek Philippe holds over 100 patents and is legendary for its dedication to preserving traditional watchmaking techniques.', descriptionAr: 'تأسست في عام 1839 على يد أنطوني باتيك وأدريان فيليب، باتيك فيليب هي واحدة من أعرق شركات صناعة الساعات في العالم. تشتهر باختراع آلية التقويم الأبدي وصناعة بعض من أكثر الساعات تعقيداً على الإطلاق، ولا تزال مملوكة للعائلة منذ تأسيسها. تمتلك باتيك فيليب أكثر من 100 براءة اختراع وتشتهر بتفانيها في الحفاظ على تقنيات صناعة الساعات التقليدية.', imageUrl: null },
  { id: 'mh-2', slug: 'cartier', nameEn: 'Cartier', nameAr: 'كارتييه', foundedYear: '1847', originCountry: 'France', specialtyEn: 'Fine Jewelry, Watches, and Objets d\'Art', specialtyAr: 'المجوهرات الفاخرة والساعات والتحف الفنية', descriptionEn: 'Founded in Paris by Louis-François Cartier, the maison quickly became known as "the jeweler of kings and the king of jewelers." Under Louis, Pierre, and Jacques Cartier, the brand expanded globally and became synonymous with luxury. Cartier created iconic designs including the Santos watch, the Tank watch, the Tutti Frutti jewelry, and the Love bracelet.', descriptionAr: 'تأسست في باريس على يد لويس-فرانسوا كارتييه، وسرعان ما أصبحت الدار تُعرف باسم "صائغ الملوك وملك الصائغين". تحت قيادة لويس وبيير وجاك كارتييه، توسعت العلامة التجارية عالمياً وأصبحت مرادفة للفخامة. ابتكرت كارتييه تصاميم أيقونية بما في ذلك ساعة سانتوس وساعة تانك ومجوهرات توتي فروتي وسوار لوف.', imageUrl: null },
  { id: 'mh-3', slug: 'van-cleef-arpels', nameEn: 'Van Cleef & Arpels', nameAr: 'فان كليف آند آربيلز', foundedYear: '1906', originCountry: 'France', specialtyEn: 'High Jewelry — Mystery Set and Alhambra', specialtyAr: 'المجوهرات الراقية — التثبيت الغامض وألمبرا', descriptionEn: 'Founded by Charles Arpels and his brother-in-law Salomon van Cleef, the maison opened its first boutique at 22 Place Vendôme in Paris. Van Cleef & Arpels is renowned for its Mystery Set technique, patented in 1933, and the iconic Alhambra collection. The maison has long been a favorite of royalty, celebrities, and discerning collectors worldwide.', descriptionAr: 'تأسست على يد شارل آربيلز وصهره سالومون فان كليف، وافتتحت الدار أول بوتيك لها في 22 بلاس فاندوم في باريس. تشتهر فان كليف آند آربيلز بتقنية التثبيت الغامض، التي حصلت على براءة اختراع في عام 1933، ومجموعة ألمبرا الأيقونية. لطالما كانت الدار المفضلة لدى الملوك والمشاهير والجامعين المميزين في جميع أنحاء العالم.', imageUrl: null },
];

export interface CollectorGuide {
  id: string;
  slug: string;
  titleEn: string;
  titleAr: string;
  category: string;
  summaryEn: string;
  summaryAr: string;
  bodyEn: string;
  bodyAr: string;
  imageUrl: string | null;
}

export const mockCollectorGuides: CollectorGuide[] = [
  { id: 'g-1', slug: 'understanding-watch-provenance', titleEn: 'Understanding Watch Provenance', titleAr: 'فهم مصدر الساعة', category: 'Watches', summaryEn: 'A comprehensive guide to tracing the history and ownership of fine timepieces.', summaryAr: 'دليل شامل لتتبع تاريخ وملكية الساعات الفاخرة.', bodyEn: 'Provenance is the recorded chain of ownership of an object. For fine watches, provenance can significantly affect value. Key documents include original purchase receipts, service records, and certificates of authenticity. A complete provenance chain may include the original owner, auction records, private sale documentation, and expert opinions. Watch collectors should maintain a dossier for each piece.', bodyAr: 'المصدر هو سلسلة الملكية المسجلة للشيء. بالنسبة للساعات الفاخرة، يمكن أن يؤثر المصدر بشكل كبير على القيمة. تشمل الوثائق الرئيسية إيصالات الشراء الأصلية وسجلات الصيانة وشهادات الأصالة. قد تتضمن سلسلة المصدر الكاملة المالك الأول وسجلات المزاد وتوثيق البيع الخاص وآراء الخبراء.', imageUrl: null },
  { id: 'g-2', slug: 'gemstone-certificates-guide', titleEn: 'Gemstone Certificates — What to Look For', titleAr: 'شهادات الأحجار الكريمة — ما الذي تبحث عنه', category: 'Jewelry', summaryEn: 'Understanding the major gemological laboratories and what their reports tell you.', summaryAr: 'فهم مختبرات الأحجار الكريمة الرئيسية وما تخبرك به تقاريرها.', bodyEn: 'Gemstone certificates from reputable laboratories such as GIA, Gubelin, SSEF, and AGL provide critical information about a stone\'s authenticity and quality. Key factors include carat weight, color grade, clarity, cut, and origin. Certificates also identify treatments, which can dramatically affect value. Always verify a certificate matches the stone through its unique report number and microscopic inscriptions.', bodyAr: 'توفر شهادات الأحجار الكريمة من مختبرات مرموقة مثل GIA وGubelin وSSEF وAGL معلومات حاسمة حول أصالة الحجر وجودته. تشمل العوامل الرئيسية وزن القيراط ودرجة اللون والنقاء والقطع والمنشأ. تحدد الشهادات أيضاً المعالجات، التي يمكن أن تؤثر بشكل كبير على القيمة.', imageUrl: null },
  { id: 'g-3', slug: 'handbag-authentication-tips', titleEn: 'Handbag Authentication — Key Tips', titleAr: 'التحقق من أصالة الحقائب — نصائح أساسية', category: 'Handbags', summaryEn: 'Essential knowledge for authenticating luxury handbags, from hardware to stitching.', summaryAr: 'معرفة أساسية للتحقق من أصالة الحقائب الفاخرة، من الإكسسوارات إلى الخياطة.', bodyEn: 'Authenticating luxury handbags requires attention to detail. Key areas include the quality and spacing of stitching, the weight and finish of hardware, the feel of the leather, and the accuracy of stamps and date codes. For Hermès, examine the saddle stitch and the shape of the Hermès stamp. For Chanel, check the serial number sticker and the font of the logo plate. Always compare against known authentic examples.', bodyAr: 'يتطلب التحقق من أصالة الحقائب الفاخرة الاهتمام بالتفاصيل. تشمل المجالات الرئيسية جودة وتباعد الخياطة، ووزن وتشطيب الإكسسوارات المعدنية، وملمس الجلد، ودقة الأختام ورموز التاريخ.', imageUrl: null },
];

export interface GlossaryTerm {
  term: string;
  definition: string;
  termAr: string;
  definitionAr: string;
  category: string | null;
}

export const mockGlossaryTerms: GlossaryTerm[] = [
  { term: 'Caliber', definition: 'The specific movement model or type used in a watch, often denoted by a reference number.', termAr: 'كالiber', definitionAr: 'نموذج أو نوع الحركة المحدد المستخدم في الساعة، غالباً ما يُشار إليه برقم مرجعي.', category: 'Watches' },
  { term: 'Chronograph', definition: 'A watch with a stopwatch function, controlled by pushers on the case side.', termAr: 'كرونوغراف', definitionAr: 'ساعة مع وظيفة ساعة إيقاف، يتم التحكم بها بواسطة أزرار دفع على جانب العلبة.', category: 'Watches' },
  { term: 'Complication', definition: 'Any additional function on a watch beyond basic time display, such as a calendar, moon phase, or chronograph.', termAr: 'تعقيد', definitionAr: 'أي وظيفة إضافية في الساعة تتجاوز عرض الوقت الأساسي، مثل التقويم أو مرحلة القمر أو الكرونوغراف.', category: 'Watches' },
  { term: 'Grande Complication', definition: 'A watch with multiple high-order complications, typically including a perpetual calendar, minute repeater, and chronograph.', termAr: 'تعقيد كبير', definitionAr: 'ساعة مع تعقيدات متعددة عالية المستوى، تشمل عادةً التقويم الأبدي ومكرر الدقائق والكرونوغراف.', category: 'Watches' },
  { term: 'Carat', definition: 'A unit of mass used for gemstones, equal to 200 milligrams.', termAr: 'قيراط', definitionAr: 'وحدة كتلة تستخدم للأحجار الكريمة، تساوي 200 ملليغرام.', category: 'Jewelry' },
  { term: 'Cabochon', definition: 'A gemstone cut with a polished domed top rather than faceted surfaces.', termAr: 'كابوشون', definitionAr: 'قطع حجر كريم بسطح مقبب مصقول بدلاً من الأسطح المسطحة.', category: 'Jewelry' },
  { term: 'Mystery Set', definition: 'A gem-setting technique patented by Van Cleef & Arpels in 1933 where stones appear to have no visible prongs.', termAr: 'تثبيت غامض', definitionAr: 'تقنية تركيب أحجار حاصلة على براءة اختراع من فان كليف آند آربيلز في عام 1933 حيث تظهر الأحجار بدون أسنان مرئية.', category: 'Jewelry' },
  { term: 'Tote', definition: 'A large handbag with two handles, typically open at the top.', termAr: 'توت', definitionAr: 'حقيبة يد كبيرة بمقبضين، عادة ما تكون مفتوحة من الأعلى.', category: 'Handbags' },
  { term: 'Provenance', definition: 'The documented chain of ownership and history of an object from its creation to the present.', termAr: 'المصدر', definitionAr: 'سلسلة الملكية والتاريخ الموثقة لشيء ما من إنشائه إلى الوقت الحاضر.', category: 'General' },
  { term: 'Patina', definition: 'The natural aging and oxidation of materials over time, often valued as a sign of authenticity and age.', termAr: 'زنجار', definitionAr: 'التقادم الطبيعي للأكسدة للمواد بمرور الوقت، غالباً ما يُقدر كدليل على الأصالة والعمر.', category: 'General' },
];

export interface ArchiveRecord {
  id: string;
  slug: string;
  titleEn: string;
  titleAr: string;
  category: string;
  period: string;
  summaryEn: string;
  summaryAr: string;
  bodyEn: string;
  bodyAr: string;
  imageUrl: string | null;
  publishedAt: string;
}

export const mockArchiveRecords: ArchiveRecord[] = [
  { id: 'arc-1', slug: 'record-patek-1518-auction', titleEn: 'Record: Patek Philippe 1518 Fetches CHF 9.6 Million', titleAr: 'رقم قياسي: باتيك فيليب 1518 تحقق 9.6 مليون فرنك سويسري', category: 'Market Record', period: '2024', summaryEn: 'The rarest Patek Philippe 1518 in stainless steel becomes the most expensive wristwatch ever sold at auction.', summaryAr: 'أندر باتيك فيليب 1518 من الفولاذ المقاوم للصدأ تصبح أغلى ساعة يد تُباع في مزاد على الإطلاق.', bodyEn: 'In November 2024, a Patek Philippe Ref. 1518 in stainless steel sold for CHF 9.6 million at a Geneva auction, setting a new world record for any wristwatch. The 1518 is historically significant as the first serially produced perpetual calendar chronograph wristwatch, introduced in 1941. Only four examples exist in stainless steel, making this one of the rarest and most coveted watches in existence.', bodyAr: 'في نوفمبر 2024، بيعت ساعة باتيك فيليب مرجع 1518 من الفولاذ المقاوم للصدأ بمبلغ 9.6 مليون فرنك سويسري في مزاد في جنيف، محققة رقماً قياسياً جديداً لأي ساعة يد. تعتبر 1518 ذات أهمية تاريخية كأول كرونوغراف تقويم أبدي يتم إنتاجه بكميات كبيرة، تم تقديمه في عام 1941.', imageUrl: null, publishedAt: '2024-11-15' },
  { id: 'arc-2', slug: 'himalaya-birkin-record', titleEn: 'Record: Hermès Himalaya Birkin Reaches $4.2 Million', titleAr: 'رقم قياسي: هرميس هيمالايا بيركين تصل إلى 4.2 مليون دولار', category: 'Market Record', period: '2024', summaryEn: 'The Hermès Himalaya Birkin 35 in matte Niloticus crocodile becomes the most expensive handbag at auction.', summaryAr: 'حقيبة هرميس هيمالايا بيركين 35 من جلد التمساح النيلي المات تصبح أغلى حقيبة يد في المزاد.', bodyEn: 'A Hermès Himalaya Birkin 35 sold for $4.2 million at a Christie\'s auction in Hong Kong. The Himalaya is considered the Holy Grail of Hermès handbags, with its unique gradient dyeing technique that creates a color reminiscent of the Himalayan mountains. Only a handful are produced each year, making it among the most exclusive luxury accessories in the world.', bodyAr: 'بيعت حقيبة هرميس هيمالايا بيركين 35 بمبلغ 4.2 مليون دولار في مزاد كريستيز في هونغ كونغ. تعتبر هيمالايا الكأس المقدسة لحقائب هرميس، بتقنية الصبغ المتدرج الفريدة التي تخلق لوناً يذكرنا بجبال الهيمالايا.', imageUrl: null, publishedAt: '2024-05-20' },
  { id: 'arc-3', slug: 'monet-water-lilies-auction', titleEn: 'Monet Water Lilies Study Sells for £28 Million', titleAr: 'دراسة مونيه لزنابق الماء تُباع بـ 28 مليون جنيه إسترليني', category: 'Auction Result', period: '2023', summaryEn: 'A rare oil study from Monet\'s Water Lilies series exceeds pre-sale estimates at Sotheby\'s London.', summaryAr: 'دراسة زيتية نادرة من سلسلة زنابق الماء لمونيه تتجاوز التقديرات الأولية في سوذبيز لندن.', bodyEn: 'An oil-on-canvas study for Claude Monet\'s monumental Water Lilies series sold for £28 million at Sotheby\'s London, significantly exceeding its pre-sale estimate of £15–20 million. The work, painted at Giverny circa 1916, had remained in the artist\'s family collection for over a century before being consigned for sale.', bodyAr: 'بيعت دراسة زيتية على قماش لسلسلة زنابق الماء الضخمة لكلود مونيه بمبلغ 28 مليون جنيه إسترليني في سوذبيز لندن، متجاوزة بشكل كبير تقديرها الأولي البالغ 15-20 مليون جنيه إسترليني.', imageUrl: null, publishedAt: '2023-12-05' },
];
