import { notFound } from 'next/navigation';
import { PublicShell } from '@/components/layouts/PublicShell';
import { CMSRenderer } from '@/cms/renderer';
import type { CMSContentBody } from '@/cms/blocks';

type Props = { params: Promise<{ locale: string; slug: string }> };

const legalContent: Record<string, Record<string, { title: string; body: CMSContentBody }>> = {
  en: {
    'privacy-policy': {
      title: 'Privacy Policy',
      body: {
        blocks: [
          {
            type: 'paragraph',
            props: {
              textEn: 'Noble Collectors respects your privacy. This policy explains how we collect, use, disclose, and safeguard your personal data when you use our platform.',
              textAr: 'تحترم نوبل كوليكتورز خصوصيتك. تشرح هذه السياسة كيفية جمع واستخدام والإفصاح عن وحماية بياناتك الشخصية عند استخدام منصتنا.',
            },
          },
          {
            type: 'heading',
            props: { level: 2, textEn: 'Data We Collect', textAr: 'البيانات التي نجمعها' },
          },
          {
            type: 'paragraph',
            props: {
              textEn: 'We collect information you provide directly: name, email address, phone number, billing and shipping addresses, and object documentation. We also collect usage data including page views, interactions, and preferences.',
              textAr: 'نجمع المعلومات التي تقدمها مباشرة: الاسم والبريد الإلكتروني ورقم الهاتف وعناوين الفوترة والشحن وتوثيق القطع. كما نجمع بيانات الاستخدام بما في ذلك مشاهدات الصفحات والتفاعلات والتفضيلات.',
            },
          },
          {
            type: 'heading',
            props: { level: 3, textEn: 'Data Sharing', textAr: 'مشاركة البيانات' },
          },
          {
            type: 'paragraph',
            props: {
              textEn: 'We do not sell your personal data. Data is shared only with trusted service providers necessary for platform operation, payment processing, shipping, and legal compliance.',
              textAr: 'نحن لا نبيع بياناتك الشخصية. تتم مشاركة البيانات فقط مع مقدمي الخدمات الموثوقين الضروريين لتشغيل المنصة ومعالجة المدفوعات والشحن والامتثال القانوني.',
            },
          },
          {
            type: 'heading',
            props: { level: 2, textEn: 'Your Rights', textAr: 'حقوقك' },
          },
          {
            type: 'paragraph',
            props: {
              textEn: 'You have the right to access, correct, delete, and export your personal data. You may also withdraw consent at any time where applicable.',
              textAr: 'لديك الحق في الوصول إلى بياناتك الشخصية وتصحيحها وحذفها وتصديرها. يمكنك أيضًا سحب الموافقة في أي وقت حسب الاقتضاء.',
            },
          },
        ],
      },
    },
    'account-data-deletion': {
      title: 'Account & Data Deletion',
      body: {
        blocks: [
          {
            type: 'paragraph',
            props: {
              textEn: 'You may request deletion of your Noble Collectors account and associated personal data at any time. Certain data may be retained where required by law or for legitimate business purposes such as transaction records and audit compliance.',
              textAr: 'يمكنك طلب حذف حسابك في نوبل كوليكتورز والبيانات الشخصية المرتبطة به في أي وقت. قد يتم الاحتفاظ ببعض البيانات حيث يقتضي القانون ذلك أو لأغراض تجارية مشروعة مثل سجلات المعاملات والامتثال للتدقيق.',
            },
          },
          {
            type: 'heading',
            props: { level: 2, textEn: 'How to Request Deletion', textAr: 'كيفية طلب الحذف' },
          },
          {
            type: 'paragraph',
            props: {
              textEn: 'Account deletion can be requested from your Account Settings page or by contacting our concierge team. We will process your request within 30 days and confirm once complete.',
              textAr: 'يمكن طلب حذف الحساب من صفحة إعدادات الحساب أو عن طريق الاتصال بفريق الكونسيرج الخاص بنا. سنقوم بمعالجة طلبك في غضون 30 يومًا والتأكيد عند الانتهاء.',
            },
          },
          {
            type: 'heading',
            props: { level: 2, textEn: 'Data Retention', textAr: 'الاحتفاظ بالبيانات' },
          },
          {
            type: 'paragraph',
            props: {
              textEn: 'After deletion, your account will be deactivated. Transaction records, audit logs, and legal documents may be retained for the period required by applicable law. Personal data not subject to legal retention will be permanently deleted.',
              textAr: 'بعد الحذف، سيتم إلغاء تنشيط حسابك. قد يتم الاحتفاظ بسجلات المعاملات وسجلات التدقيق والمستندات القانونية للمدة التي يتطلبها القانون المعمول به. سيتم حذف البيانات الشخصية غير الخاضعة للاحتفاظ القانوني بشكل دائم.',
            },
          },
        ],
      },
    },
    'mobile-app-privacy': {
      title: 'Mobile App Privacy & Data Use',
      body: {
        blocks: [
          {
            type: 'paragraph',
            props: {
              textEn: 'When using the Noble Collectors mobile app (PWA or future native wrapper), the following data categories may be collected: identifiers (email, user ID), contact info (name, phone), financial info (transaction data), location (only with explicit consent), photos/media, and usage data.',
              textAr: 'عند استخدام تطبيق نوبل كوليكتورز للجوال (PWA أو الغلاف الأصلي المستقبلي)، قد يتم جمع فئات البيانات التالية: المعرفات (البريد الإلكتروني، معرف المستخدم)، معلومات الاتصال (الاسم، الهاتف)، المعلومات المالية (بيانات المعاملات)، الموقع (فقط بموافقة صريحة)، الصور/الوسائط، وبيانات الاستخدام.',
            },
          },
          {
            type: 'heading',
            props: { level: 3, textEn: 'Permissions', textAr: 'الأذونات' },
          },
          {
            type: 'paragraph',
            props: {
              textEn: 'Camera and photo library access is requested only when you upload object images. Notifications require your opt-in. Biometric authentication is optional and stored locally on your device.',
              textAr: 'يتم طلب الوصول إلى الكاميرا ومكتبة الصور فقط عند تحميل صور القطع. تتطلب الإشعارات موافقتك. المصادقة البيومترية اختيارية ويتم تخزينها محليًا على جهازك.',
            },
          },
        ],
      },
    },
    'auction-rules': {
      title: 'Auction Rules',
      body: {
        blocks: [
          {
            type: 'paragraph',
            props: {
              textEn: 'All auctions conducted by Noble Collectors are governed by these Auction Rules. By registering to bid, each bidder agrees to be bound by these terms and all applicable laws.',
              textAr: 'جميع المزادات التي تديرها نوبل كوليكتورز تخضع لقواعد المزاد هذه. بالتسجيل للمزايدة، يوافق كل مزايد على الالتزام بهذه الشروط وجميع القوانين المعمول بها.',
            },
          },
          {
            type: 'heading',
            props: { level: 2, textEn: 'Registration and Bidding', textAr: 'التسجيل والمزايدة' },
          },
          {
            type: 'paragraph',
            props: {
              textEn: 'Prospective bidders must complete registration and be approved before participating. Noble Collectors reserves the right to require financial references, deposits, or other guarantees. All bids are binding and may not be retracted.',
              textAr: 'يجب على المزايدين المحتملين إكمال التسجيل والحصول على الموافقة قبل المشاركة. تحتفظ نوبل كوليكتورز بالحق في طلب مراجع مالية أو ودائع أو ضمانات أخرى. جميع المزايدات ملزمة ولا يمكن سحبها.',
            },
          },
          {
            type: 'heading',
            props: { level: 2, textEn: 'Reserve Prices and Hammer', textAr: 'أسعار الاحتياط والمطرقة' },
          },
          {
            type: 'paragraph',
            props: {
              textEn: 'Lots may be subject to a confidential reserve price. The auctioneer has the right to reject any bid and to advance the bidding at their discretion. The highest bid acknowledged by the auctioneer constitutes the hammer price.',
              textAr: 'قد تخضع القطع لسعر احتياطي سري. يحق لبائع المزاد رفض أي عرض وتقديم المزايدة حسب تقديره. أعلى عرض يتم الاعتراف به من قبل بائع المزاد يشكل سعر المطرقة.',
            },
          },
        ],
      },
    },
    'buyer-terms': {
      title: 'Buyer Terms & Conditions',
      body: {
        blocks: [
          {
            type: 'paragraph',
            props: {
              textEn: 'These Buyer Terms govern all purchases made through Noble Collectors. By placing a bid or purchasing an item, you agree to be bound by these terms.',
              textAr: 'تخضع جميع المشتريات التي تتم عبر نوبل كوليكتورز لشروط المشتري هذه. بتقديم عرض أو شراء قطعة، فإنك توافق على الالتزام بهذه الشروط.',
            },
          },
          {
            type: 'heading',
            props: { level: 2, textEn: 'Payment Obligations', textAr: 'التزامات الدفع' },
          },
          {
            type: 'paragraph',
            props: {
              textEn: 'The successful bidder shall pay the hammer price plus the applicable buyer\'s premium and any applicable taxes. Payment is due within seven calendar days of the auction. Failure to pay may result in the sale being voided and the bidder being banned from future auctions.',
              textAr: 'يدفع المزايد الناجح سعر المطرقة بالإضافة إلى رسوم المشتري الإضافية المطبقة وأي ضرائب سارية. يستحق الدفع في غضون سبعة أيام تقويمية من تاريخ المزاد. قد يؤدي عدم الدفع إلى إلغاء البيع وحظر المزايد من المزادات المستقبلية.',
            },
          },
          {
            type: 'heading',
            props: { level: 2, textEn: 'Inspection and Condition', textAr: 'الفحص والحالة' },
          },
          {
            type: 'paragraph',
            props: {
              textEn: 'All lots are sold "as is". Buyers are encouraged to inspect items in person or through condition reports prior to bidding. Descriptions are provided in good faith but do not constitute warranties.',
              textAr: 'جميع القطع تباع "كما هي". يُشجع المشترون على فحص القطع شخصياً أو من خلال تقارير الحالة قبل المزايدة. الأوصاف مقدمة بحسن نية ولكنها لا تشكل ضمانات.',
            },
          },
          {
            type: 'heading',
            props: { level: 3, textEn: 'Title Transfer', textAr: 'نقل الملكية' },
          },
          {
            type: 'paragraph',
            props: {
              textEn: 'Title to the purchased lot passes to the buyer upon full payment. Risk of loss or damage passes to the buyer at the earlier of collection or delivery.',
              textAr: 'تنتقل ملكية القطعة المشتراة إلى المشتري عند الدفع الكامل. ينتقل خطر الفقدان أو التلف إلى المشتري في أقرب وقت من الاستلام أو التسليم.',
            },
          },
        ],
      },
    },
    'seller-terms': {
      title: 'Seller Terms & Conditions',
      body: {
        blocks: [
          {
            type: 'paragraph',
            props: {
              textEn: 'These Seller Terms govern the consignment and sale of items through Noble Collectors. By consigning an item, you agree to these terms and represent that you have good and marketable title.',
              textAr: 'تخضع شروط البائع هذه لإيداع وبيع القطع عبر نوبل كوليكتورز. بإيداع قطعة، فإنك توافق على هذه الشروط وتقر بأن لديك ملكية صالحة وقابلة للتسويق.',
            },
          },
          {
            type: 'heading',
            props: { level: 2, textEn: 'Consignment Process', textAr: 'عملية الإيداع' },
          },
          {
            type: 'paragraph',
            props: {
              textEn: 'Items submitted for sale are subject to evaluation and acceptance by Noble Collectors. A consignment agreement will detail the reserve price, commission structure, and sale timeline. We reserve the right to decline any item.',
              textAr: 'القطع المقدمة للبيع تخضع للتقييم والقبول من قبل نوبل كوليكتورز. تحدد اتفاقية الإيداع سعر الاحتياطي وهيكل العمولة والجدول الزمني للبيع. نحتفظ بالحق في رفض أي قطعة.',
            },
          },
          {
            type: 'heading',
            props: { level: 2, textEn: 'Commission and Settlement', textAr: 'العمولة والتسوية' },
          },
          {
            type: 'paragraph',
            props: {
              textEn: 'Sellers will be charged a commission as agreed in the consignment agreement. Settlement occurs within 30 days of the buyer\'s payment being received and cleared. Any applicable taxes or fees will be deducted.',
              textAr: 'يتم تحميل البائعين عمولة كما هو متفق عليه في اتفاقية الإيداع. تتم التسوية في غضون 30 يومًا من استلام الدفع من المشتري وتصفيته. سيتم خصم أي ضرائب أو رسوم معمول بها.',
            },
          },
          {
            type: 'heading',
            props: { level: 2, textEn: 'Representations and Warranties', textAr: 'الإقرارات والضمانات' },
          },
          {
            type: 'paragraph',
            props: {
              textEn: 'Sellers warrant that they have clear title to each consigned item, that the item is authentic and as described, and that the item is free from any encumbrances or third-party claims. Sellers agree to indemnify Noble Collectors against any breach.',
              textAr: 'يضمن البائعون أن لديهم ملكية واضحة لكل قطعة مودعة، وأن القطعة أصلية وكما هو موصوف، وأن القطعة خالية من أي أعباء أو مطالبات من أطراف ثالثة. يوافق البائعون على تعويض نوبل كوليكتورز عن أي خرق.',
            },
          },
        ],
      },
    },
    'private-sale-terms': {
      title: 'Private Sale Terms',
      body: {
        blocks: [
          {
            type: 'paragraph',
            props: {
              textEn: 'Noble Collectors facilitates private sales of high-value collectibles outside of the auction format. These Private Sale Terms supplement the general Buyer and Seller Terms and govern all off-auction transactions.',
              textAr: 'تسهل نوبل كوليكتورز البيع الخاص للمقتنيات عالية القيمة خارج صيغة المزاد. تكمل شروط البيع الخاص هذه شروط المشتري والبائع العامة وتنظم جميع المعاملات خارج المزاد.',
            },
          },
          {
            type: 'heading',
            props: { level: 2, textEn: 'Confidentiality', textAr: 'السرية' },
          },
          {
            type: 'paragraph',
            props: {
              textEn: 'All private sale negotiations and terms are strictly confidential. Neither party shall disclose the identity of the other or the sale price without prior written consent.',
              textAr: 'جميع مفاوضات وشروط البيع الخاص سرية للغاية. لا يجوز لأي من الطرفين الكشف عن هوية الطرف الآخر أو سعر البيع دون موافقة كتابية مسبقة.',
            },
          },
          {
            type: 'heading',
            props: { level: 2, textEn: 'Pricing and Payment', textAr: 'التسعير والدفع' },
          },
          {
            type: 'paragraph',
            props: {
              textEn: 'Private sale prices are individually negotiated. Payment terms, including any instalment plans, will be specified in the private sale agreement. A buyer\'s premium may apply to private sales.',
              textAr: 'يتم التفاوض على أسعار البيع الخاص بشكل فردي. سيتم تحديد شروط الدفع، بما في ذلك أي خطط تقسيط، في اتفاقية البيع الخاص. قد تنطبق رسوم المشتري الإضافية على البيع الخاص.',
            },
          },
        ],
      },
    },
    'payment-instructions': {
      title: 'Payment & Bank Transfer Instructions',
      body: {
        blocks: [
          {
            type: 'paragraph',
            props: {
              textEn: 'All payments to Noble Collectors must be made in accordance with these instructions. We accept bank wire transfers and, in certain circumstances, credit card payments for qualifying amounts.',
              textAr: 'يجب أن تتم جميع المدفوعات لنوبل كوليكتورز وفقاً لهذه التعليمات. نقبل التحويلات المصرفية، وفي ظروف معينة، مدفوعات بطاقات الائتمان للمبالغ المؤهلة.',
            },
          },
          {
            type: 'heading',
            props: { level: 2, textEn: 'Bank Transfer Details', textAr: 'تفاصيل التحويل البنكي' },
          },
          {
            type: 'paragraph',
            props: {
              textEn: 'Bank transfer details will be provided on your invoice. Please reference your invoice number in the transfer description. All bank charges, including intermediary and correspondent bank fees, are the responsibility of the payer.',
              textAr: 'سيتم توفير تفاصيل التحويل البنكي في فاتورتك. يرجى ذكر رقم الفاتورة في وصف التحويل. جميع الرسوم المصرفية، بما في ذلك رسوم البنوك الوسيطة والمراسلة، هي مسؤولية الدافع.',
            },
          },
          {
            type: 'heading',
            props: { level: 3, textEn: 'Currency and Exchange Rates', textAr: 'العملة وأسعار الصرف' },
          },
          {
            type: 'paragraph',
            props: {
              textEn: 'All payments must be made in the currency stated on the invoice. If a currency conversion is required, the exchange rate prevailing on the date of payment will apply, and any conversion fees will be borne by the payer.',
              textAr: 'يجب أن تتم جميع المدفوعات بالعملة المذكورة في الفاتورة. إذا كان تحويل العملة مطلوباً، فسيتم تطبيق سعر الصرف السائد في تاريخ الدفع، وسيتحمل الدافع أي رسوم تحويل.',
            },
          },
        ],
      },
    },
    'buyer-premium-fees': {
      title: 'Buyer\'s Premium & Additional Fees',
      body: {
        blocks: [
          {
            type: 'paragraph',
            props: {
              textEn: 'A buyer\'s premium is added to the hammer price of every lot purchased at auction. This premium is a percentage of the hammer price and varies by sale category. The exact rate applicable to your purchase will be stated in the auction catalogue.',
              textAr: 'تتم إضافة رسوم المشتري الإضافية إلى سعر المطرقة لكل قطعة يتم شراؤها في المزاد. هذه الرسوم هي نسبة مئوية من سعر المطرقة وتختلف حسب فئة البيع. سيتم ذكر السعر المطبق على مشترياتك في كتالوج المزاد.',
            },
          },
          {
            type: 'heading',
            props: { level: 2, textEn: 'Premium Rates', textAr: 'نسب الرسوم الإضافية' },
          },
          {
            type: 'paragraph',
            props: {
              textEn: 'The standard buyer\'s premium ranges between 15% and 25% of the hammer price depending on the lot value, with lower percentages typically applied to higher-value lots. A reduced premium may apply to online-only sales.',
              textAr: 'تتراوح رسوم المشتري الإضافية القياسية بين 15% و 25% من سعر المطرقة حسب قيمة القطعة، مع تطبيق نسب مئوية أقل عادةً على القطع عالية القيمة. قد تنطبق رسوم مخفضة على المبيعات عبر الإنترنت فقط.',
            },
          },
          {
            type: 'heading',
            props: { level: 2, textEn: 'Additional Charges', textAr: 'الرسوم الإضافية' },
          },
          {
            type: 'paragraph',
            props: {
              textEn: 'In addition to the buyer\'s premium, buyers may be liable for VAT or other applicable taxes, artist\'s resale royalty rights, shipping and handling fees, customs duties, and insurance charges where applicable.',
              textAr: 'بالإضافة إلى رسوم المشتري الإضافية، قد يكون المشترون مسؤولين عن ضريبة القيمة المضافة أو ضرائب أخرى معمول بها، وحقوق إعادة البيع للفنانين، ورسوم الشحن والمناولة، والرسوم الجمركية، ورسوم التأمين حسب الاقتضاء.',
            },
          },
        ],
      },
    },
    'viewing-collection-policy': {
      title: 'Viewing & Collection Policy',
      body: {
        blocks: [
          {
            type: 'paragraph',
            props: {
              textEn: 'Noble Collectors offers scheduled viewing opportunities prior to each auction. Viewing is by appointment only and conducted at our gallery or designated location. We encourage all prospective buyers to inspect lots before bidding.',
              textAr: 'تقدم نوبل كوليكتورز فرص معاينة مجدولة قبل كل مزاد. المعاينة تكون بالموعد فقط وتُجرى في صالة العرض أو الموقع المحدد. نشجع جميع المشترين المحتملين على فحص القطع قبل المزايدة.',
            },
          },
          {
            type: 'heading',
            props: { level: 2, textEn: 'Collection Period', textAr: 'فترة الاستلام' },
          },
          {
            type: 'paragraph',
            props: {
              textEn: 'Purchased lots must be collected within 14 calendar days from the auction date. Storage fees may apply for lots not collected within this period. Extended storage arrangements may be available upon request.',
              textAr: 'يجب استلام القطع المشتراة في غضون 14 يوماً تقويمياً من تاريخ المزاد. قد تنطبق رسوم تخزين على القطع التي لم يتم استلامها خلال هذه الفترة. قد تكون ترتيبات التخزين الممدد متاحة عند الطلب.',
            },
          },
          {
            type: 'heading',
            props: { level: 2, textEn: 'Shipping Arrangements', textAr: 'ترتيبات الشحن' },
          },
          {
            type: 'paragraph',
            props: {
              textEn: 'Buyers may arrange their own shipping or use our recommended shipping partners. Noble Collectors is not liable for damage or loss occurring after the lot has been released to the buyer or their agent.',
              textAr: 'يمكن للمشترين ترتيب الشحن بأنفسهم أو استخدام شركاء الشحن الموصى بهم. نوبل كوليكتورز غير مسؤولة عن التلف أو الفقدان الذي يحدث بعد تسليم القطعة للمشتري أو وكيله.',
            },
          },
        ],
      },
    },
    'shipping-custody-policy': {
      title: 'Shipping & Custody Policy',
      body: {
        blocks: [
          {
            type: 'paragraph',
            props: {
              textEn: 'Noble Collectors takes reasonable care of items in our custody. This policy outlines our responsibilities and limitations regarding shipping, handling, and storage of consigned and sold items.',
              textAr: 'تتخذ نوبل كوليكتورز العناية المعقولة بالقطع الموجودة في حوزتنا. توضح هذه السياسة مسؤولياتنا وحدودها فيما يتعلق بالشحن والمناولة والتخزين للقطع المودعة والمباعة.',
            },
          },
          {
            type: 'heading',
            props: { level: 2, textEn: 'Insurance While in Custody', textAr: 'التأمين أثناء الحفظ' },
          },
          {
            type: 'paragraph',
            props: {
              textEn: 'Items consigned to Noble Collectors are insured under our fine art policy from the time of delivery until the time of transfer to the buyer or return to the consignor. The insured value is the hammer price or the consigned value as applicable.',
              textAr: 'القطع المودعة لدى نوبل كوليكتورز مؤمنة بموجب وثيقة التأمين على الأعمال الفنية من وقت التسليم حتى وقت النقل إلى المشتري أو الإعادة إلى المودع. القيمة المؤمن عليها هي سعر المطرقة أو القيمة المودعة حسب الاقتضاء.',
            },
          },
          {
            type: 'heading',
            props: { level: 2, textEn: 'Shipping Liability', textAr: 'مسؤولية الشحن' },
          },
          {
            type: 'paragraph',
            props: {
              textEn: 'When we arrange shipping, we will insure the shipment for its full value. Risk of loss passes to the buyer upon delivery to the carrier unless otherwise agreed. Special handling requirements will be coordinated with the buyer.',
              textAr: 'عندما نرتب الشحن، سنؤمن الشحنة بقيمتها الكاملة. ينتقل خطر الفقدان إلى المشتري عند التسليم إلى الناقل ما لم يتم الاتفاق على خلاف ذلك. سيتم تنسيق متطلبات المناولة الخاصة مع المشتري.',
            },
          },
        ],
      },
    },
    'refund-returns-policy': {
      title: 'Refund & Returns Policy',
      body: {
        blocks: [
          {
            type: 'paragraph',
            props: {
              textEn: 'All auction sales are final. Noble Collecters does not offer refunds or returns based on a change of mind. However, we stand behind the authenticity of every lot we sell and offer remedies in limited circumstances as described below.',
              textAr: 'جميع مبيعات المزادات نهائية. لا تقدم نوبل كوليكتورز استرداداً أو استرجاعاً بناءً على تغيير الرأي. ومع ذلك، فإننا نقف وراء أصالة كل قطعة نبيعها ونقدم تعويضات في ظروف محدودة كما هو موضح أدناه.',
            },
          },
          {
            type: 'heading',
            props: { level: 2, textEn: 'Authenticity Claims', textAr: 'مطالبات الأصالة' },
          },
          {
            type: 'paragraph',
            props: {
              textEn: 'If a purchased lot is proven to be a forgery or not authentic as described in the catalogue, we will refund the purchase price including the buyer\'s premium. Claims must be made in writing within 30 days of the auction and accompanied by expert evidence.',
              textAr: 'إذا ثبت أن القطعة المشتراة مزيفة أو غير أصلية كما هو موصوف في الكتالوج، فسوف نرد ثمن الشراء بما في ذلك رسوم المشتري الإضافية. يجب تقديم المطالبات كتابياً في غضون 30 يوماً من المزاد مصحوبة بأدلة خبراء.',
            },
          },
          {
            type: 'heading',
            props: { level: 2, textEn: 'Damage in Transit', textAr: 'التلف أثناء النقل' },
          },
          {
            type: 'paragraph',
            props: {
              textEn: 'Claims for damage incurred during shipping must be reported immediately upon receipt. Photographic evidence must be provided within 48 hours. Claims will be handled through our insurance carrier and are subject to the insurer\'s determination.',
              textAr: 'يجب الإبلاغ عن مطالبات التلف التي تحدث أثناء الشحن فور الاستلام. يجب تقديم دليل فوتوغرافي في غضون 48 ساعة. سيتم التعامل مع المطالبات من خلال شركة التأمين الخاصة بنا وتخضع لتحديد شركة التأمين.',
            },
          },
        ],
      },
    },
    'data-protection': {
      title: 'Personal Data Protection Notice',
      body: {
        blocks: [
          {
            type: 'paragraph',
            props: {
              textEn: 'Noble Collectors is committed to protecting your personal data in compliance with applicable data protection laws including the EU General Data Protection Regulation and the KSA Personal Data Protection Law. This notice supplements our Privacy Policy.',
              textAr: 'تلتزم نوبل كوليكتورز بحماية بياناتك الشخصية وفقاً لقوانين حماية البيانات المعمول بها بما في ذلك اللائحة العامة لحماية البيانات الأوروبية وقانون حماية البيانات الشخصية السعودي. يكمل هذا الإشعار سياسة الخصوصية الخاصة بنا.',
            },
          },
          {
            type: 'heading',
            props: { level: 2, textEn: 'Data Controller and Contact', textAr: 'مراقب البيانات والاتصال' },
          },
          {
            type: 'paragraph',
            props: {
              textEn: 'Noble Collectors is the data controller for personal data processed in connection with our services. You may contact our Data Protection Officer regarding any data protection inquiries or to exercise your rights under applicable law.',
              textAr: 'نوبل كوليكتورز هي مراقب البيانات للبيانات الشخصية التي تتم معالجتها فيما يتعلق بخدماتنا. يمكنك الاتصال بمسؤول حماية البيانات لدينا بخصوص أي استفسارات تتعلق بحماية البيانات أو لممارسة حقوقك بموجب القانون المعمول به.',
            },
          },
          {
            type: 'heading',
            props: { level: 2, textEn: 'Data Retention and Security', textAr: 'الاحتفاظ بالبيانات وأمنها' },
          },
          {
            type: 'paragraph',
            props: {
              textEn: 'We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. Data is retained only for as long as necessary for the purposes for which it was collected or as required by law.',
              textAr: 'ننفذ تدابير تقنية وتنظيمية مناسبة لحماية بياناتك الشخصية من الوصول غير المصرح به أو التعديل أو الإفصاح أو الإتلاف. يتم الاحتفاظ بالبيانات فقط للمدة اللازمة للأغراض التي جمعت من أجلها أو حسبما يقتضيه القانون.',
            },
          },
        ],
      },
    },
    'cookie-policy': {
      title: 'Cookie Policy',
      body: {
        blocks: [
          {
            type: 'paragraph',
            props: {
              textEn: 'Noble Collectors uses cookies and similar tracking technologies to enhance your browsing experience, analyse site traffic, and provide personalised content. This policy explains what cookies are, how we use them, and your choices.',
              textAr: 'تستخدم نوبل كوليكتورز ملفات تعريف الارتباط وتقنيات التتبع المماثلة لتحسين تجربة التصفح وتحليل حركة الموقع وتقديم محتوى مخصص. تشرح هذه السياسة ماهية ملفات تعريف الارتباط وكيف نستخدمها وخياراتك.',
            },
          },
          {
            type: 'heading',
            props: { level: 2, textEn: 'Types of Cookies We Use', textAr: 'أنواع ملفات تعريف الارتباط التي نستخدمها' },
          },
          {
            type: 'paragraph',
            props: {
              textEn: 'We use essential cookies required for platform operation, functional cookies to remember your preferences, analytics cookies to understand usage patterns, and marketing cookies to deliver relevant advertisements. Third-party services may also set cookies.',
              textAr: 'نستخدم ملفات تعريف الارتباط الأساسية اللازمة لتشغيل المنصة، وملفات تعريف الارتباط الوظيفية لتذكر تفضيلاتك، وملفات تعريف الارتباط التحليلية لفهم أنماط الاستخدام، وملفات تعريف الارتباط التسويقية لتقديم إعلانات ذات صلة. قد تقوم خدمات الطرف الثالث أيضاً بتعيين ملفات تعريف الارتباط.',
            },
          },
          {
            type: 'heading',
            props: { level: 2, textEn: 'Managing Your Preferences', textAr: 'إدارة تفضيلاتك' },
          },
          {
            type: 'paragraph',
            props: {
              textEn: 'You can manage your cookie preferences through our cookie consent banner or by adjusting your browser settings. Please note that disabling certain cookies may affect platform functionality and your user experience.',
              textAr: 'يمكنك إدارة تفضيلات ملفات تعريف الارتباط من خلال لافتة الموافقة على ملفات تعريف الارتباط أو عن طريق ضبط إعدادات المتصفح. يرجى ملاحظة أن تعطيل بعض ملفات تعريف الارتباط قد يؤثر على وظائف المنصة وتجربة المستخدم.',
            },
          },
        ],
      },
    },
    'kyc-sanctions-explanation': {
      title: 'KYC & Sanctions Compliance Explanation',
      body: {
        blocks: [
          {
            type: 'paragraph',
            props: {
              textEn: 'Noble Collectors is committed to compliance with anti-money laundering (AML) regulations and international sanctions frameworks. As part of this commitment, we conduct Know Your Customer (KYC) verification and sanctions screening on all clients.',
              textAr: 'تلتزم نوبل كوليكتورز بالامتثال للوائح مكافحة غسل الأموال وأطر العقوبات الدولية. كجزء من هذا الالتزام، نجري التحقق من هوية العميل وفحص العقوبات على جميع العملاء.',
            },
          },
          {
            type: 'heading',
            props: { level: 2, textEn: 'What KYC Involves', textAr: 'ما يتضمنه التحقق من الهوية' },
          },
          {
            type: 'paragraph',
            props: {
              textEn: 'KYC verification requires government-issued identification, proof of address, and in some cases, source of funds documentation. Corporate clients must provide entity formation documents and beneficial ownership information.',
              textAr: 'يتطلب التحقق من الهوية وثائق هوية صادرة عن جهة حكومية وإثبات عنوان، وفي بعض الحالات، وثائق مصدر الأموال. يجب على العملاء من الشركات تقديم وثائق تأسيس الكيان ومعلومات عن المالك المستفيد.',
            },
          },
          {
            type: 'heading',
            props: { level: 2, textEn: 'Sanctions Screening', textAr: 'فحص العقوبات' },
          },
          {
            type: 'paragraph',
            props: {
              textEn: 'All clients and transactions are screened against applicable sanctions lists including OFAC, UN, EU, and local regulatory lists. We reserve the right to reject or freeze any transaction where a sanctions match is identified, as required by law.',
              textAr: 'يتم فحص جميع العملاء والمعاملات مقابل قوائم العقوبات المعمول بها بما في ذلك قوائم OFAC والأمم المتحدة والاتحاد الأوروبي والقوائم التنظيمية المحلية. نحتفظ بالحق في رفض أو تجميد أي معاملة حيث يتم تحديد تطابق مع العقوبات، حسبما يقتضيه القانون.',
            },
          },
        ],
      },
    },
    'brand-affiliation-disclaimer': {
      title: 'Brand Affiliation Disclaimer',
      body: {
        blocks: [
          {
            type: 'paragraph',
            props: {
              textEn: 'Noble Collectors is an independent auction house and marketplace. All brand names, logos, and trademarks appearing in our listings are the property of their respective owners and are used solely for identification and descriptive purposes.',
              textAr: 'نوبل كوليكتورز هي دار مزادات وسوق مستقلة. جميع أسماء العلامات التجارية والشعارات والعلامات التجارية التي تظهر في قوائمنا هي ملك لأصحابها وتستخدم فقط لأغراض التحديد والوصف.',
            },
          },
          {
            type: 'heading',
            props: { level: 2, textEn: 'No Endorsement or Affiliation', textAr: 'لا تأييد أو انتماء' },
          },
          {
            type: 'paragraph',
            props: {
              textEn: 'Reference to any brand, manufacturer, or designer within our listings does not imply endorsement, sponsorship, or affiliation with that brand unless explicitly stated. All items are sold as collectibles and not as new or official merchandise unless certified.',
              textAr: 'الإشارة إلى أي علامة تجارية أو مصنع أو مصمم ضمن قوائمنا لا تعني التأييد أو الرعاية أو الانتماء لتلك العلامة التجارية ما لم يذكر صراحة. جميع القطع تباع كمقتنيات وليست كبضائع جديدة أو رسمية ما لم يتم اعتمادها.',
            },
          },
          {
            type: 'heading',
            props: { level: 2, textEn: 'Intellectual Property Rights', textAr: 'حقوق الملكية الفكرية' },
          },
          {
            type: 'paragraph',
            props: {
              textEn: 'All intellectual property rights in the brands and designs referenced on our platform remain with their respective owners. Nothing on this platform shall be construed as granting any licence or right to use any trademark without the owner\'s written consent.',
              textAr: 'جميع حقوق الملكية الفكرية في العلامات التجارية والتصاميم المشار إليها على منصتنا تبقى لأصحابها. لا يجوز تفسير أي شيء على هذه المنصة على أنه منح أي ترخيص أو حق لاستخدام أي علامة تجارية دون موافقة كتابية من المالك.',
            },
          },
        ],
      },
    },
    'distance-sale-terms': {
      title: 'Distance Sale / Remote Acquisition Terms',
      body: {
        blocks: [
          {
            type: 'paragraph',
            props: {
              textEn: 'When you acquire an item through Noble Collectors without being physically present (by phone, online bid, written bid, or private sale instruction), the transaction is classified as a distance sale and is governed by these additional terms.',
              textAr: 'عند اقتناء قطعة من خلال نوبل كوليكتورز دون أن تكون حاضراً شخصياً (عبر الهاتف أو المزايدة عبر الإنترنت أو المزايدة الكتابية أو تعليمات البيع الخاص)، يتم تصنيف المعاملة كبيع عن بعد وتخضع لهذه الشروط الإضافية.',
            },
          },
          {
            type: 'heading',
            props: { level: 2, textEn: 'Pre-Contract Information', textAr: 'معلومات ما قبل التعاقد' },
          },
          {
            type: 'paragraph',
            props: {
              textEn: 'Prior to any remote acquisition, we provide: (a) a clear description of the item including condition and provenance status, (b) the total price including buyer\'s premium, taxes, and estimated shipping, (c) the applicable payment and delivery terms, and (d) information on your right to request further documentation or condition reports.',
              textAr: 'قبل أي اقتناء عن بعد، نقدم: (أ) وصفاً واضحاً للقطعة يشمل الحالة وحالة المصدر، (ب) السعر الإجمالي بما في ذلك رسوم المشتري الإضافية والضرائب والشحن المقدر، (ج) شروط الدفع والتسليم المطبقة، (د) معلومات عن حقك في طلب وثائق إضافية أو تقارير حالة.',
            },
          },
          {
            type: 'heading',
            props: { level: 2, textEn: 'Right of Withdrawal', textAr: 'حق الانسحاب' },
          },
          {
            type: 'paragraph',
            props: {
              textEn: 'Auction purchases are exempt from standard distance selling withdrawal rights due to the nature of auction sales where the buyer has had the opportunity to inspect the item or obtain a condition report. Private sale purchases may be subject to withdrawal rights as specified in the private sale agreement.',
              textAr: 'مشتريات المزادات مستثناة من حقوق الانسحاب القياسية للبيع عن بعد نظراً لطبيعة مبيعات المزادات حيث أتيحت للمشتري فرصة فحص القطعة أو الحصول على تقرير حالة. قد تخضع مشتريات البيع الخاص لحقوق الانسحاب كما هو محدد في اتفاقية البيع الخاص.',
            },
          },
          {
            type: 'heading',
            props: { level: 2, textEn: 'Delivery and Risk', textAr: 'التسليم والمخاطر' },
          },
          {
            type: 'paragraph',
            props: {
              textEn: 'Risk of loss or damage to the acquired item passes to the buyer upon delivery to the carrier or collection from our premises, whichever occurs first. Full insurance is maintained until that point. Delivery timelines are estimates and not guaranteed.',
              textAr: 'ينتقل خطر فقدان أو تلف القطعة المقتناة إلى المشتري عند التسليم إلى الناقل أو الاستلام من مقرنا، أيهما يحدث أولاً. يتم الحفاظ على التأمين الكامل حتى تلك النقطة. الجداول الزمنية للتسليم تقديرية وليست مضمونة.',
            },
          },
        ],
      },
    },
    'museum-affiliation-disclaimer': {
      title: 'Museum & Institution Affiliation Disclaimer',
      body: {
        blocks: [
          {
            type: 'paragraph',
            props: {
              textEn: 'Noble Collectors operates independently and is not affiliated with, endorsed by, or sponsored by any museum, cultural institution, university, or government entity unless explicitly stated in a written agreement.',
              textAr: 'تعمل نوبل كوليكتورز بشكل مستقل وليست تابعة أو مدعومة أو مرعية من قبل أي متحف أو مؤسسة ثقافية أو جامعة أو جهة حكومية ما لم يذكر صراحة في اتفاقية مكتوبة.',
            },
          },
          {
            type: 'heading',
            props: { level: 2, textEn: 'References to Provenance', textAr: 'الإشارات إلى المصدر' },
          },
          {
            type: 'paragraph',
            props: {
              textEn: 'References to museums, institutions, or exhibitions in item descriptions or provenance notes are provided for informational purposes only and do not imply current or past institutional ownership unless specifically verified and documented.',
              textAr: 'الإشارات إلى المتاحف أو المؤسسات أو المعارض في أوصاف القطع أو ملاحظات المصدر مقدمة للأغراض المعلوماتية فقط ولا تعني ملكية مؤسسية حالية أو سابقة ما لم يتم التحقق منها وتوثيقها بشكل محدد.',
            },
          },
          {
            type: 'heading',
            props: { level: 2, textEn: 'Accuracy of Information', textAr: 'دقة المعلومات' },
          },
          {
            type: 'paragraph',
            props: {
              textEn: 'While we strive to ensure provenance and attribution information is accurate, we make no representations regarding institutional connections. Buyers should conduct independent research and consult experts regarding any claimed provenance.',
              textAr: 'بينما نسعى لضمان دقة معلومات المصدر والنسب، لا نقدم أي إقرارات بشأن الاتصالات المؤسسية. يجب على المشترين إجراء بحث مستقل واستشارة الخبراء بشأن أي مصدر مُدعى.',
            },
          },
        ],
      },
    },
  },
  ar: {
    'privacy-policy': {
      title: 'سياسة الخصوصية',
      body: {
        blocks: [
          {
            type: 'paragraph',
            props: {
              textEn: 'This is the Arabic privacy policy text.',
              textAr: 'تحترم نوبل كوليكتورز خصوصيتك. تشرح هذه السياسة كيفية جمع واستخدام والإفصاح عن وحماية بياناتك الشخصية عند استخدام منصتنا.',
            },
          },
        ],
      },
    },
    'account-data-deletion': {
      title: 'حذف الحساب والبيانات',
      body: {
        blocks: [
          {
            type: 'paragraph',
            props: {
              textAr: 'يمكنك طلب حذف حسابك في نوبل كوليكتورز والبيانات الشخصية المرتبطة به في أي وقت. قد يتم الاحتفاظ ببعض البيانات حيث يقتضي القانون ذلك.',
              textEn: 'You may request deletion of your account at any time.',
            },
          },
        ],
      },
    },
    'mobile-app-privacy': {
      title: 'خصوصية التطبيق واستخدام البيانات',
      body: {
        blocks: [
          {
            type: 'paragraph',
            props: {
              textAr: 'عند استخدام تطبيق نوبل كوليكتورز للجوال، قد يتم جمع المعرفات ومعلومات الاتصال والصور وبيانات الاستخدام.',
              textEn: 'When using the Noble Collectors mobile app, identifiers, contact info, photos, and usage data may be collected.',
            },
          },
        ],
      },
    },
    'auction-rules': {
      title: 'قواعد المزاد',
      body: {
        blocks: [
          {
            type: 'paragraph',
            props: {
              textAr: 'جميع المزادات التي تديرها نوبل كوليكتورز تخضع لقواعد المزاد هذه. بالتسجيل للمزايدة، يوافق كل مزايد على الالتزام بهذه الشروط وجميع القوانين المعمول بها.',
              textEn: 'All auctions conducted by Noble Collectors are governed by these Auction Rules.',
            },
          },
        ],
      },
    },
    'buyer-terms': {
      title: 'شروط المشتري',
      body: {
        blocks: [
          {
            type: 'paragraph',
            props: {
              textAr: 'تخضع جميع المشتريات التي تتم عبر نوبل كوليكتورز لشروط المشتري هذه. بتقديم عرض أو شراء قطعة، فإنك توافق على الالتزام بهذه الشروط.',
              textEn: 'These Buyer Terms govern all purchases made through Noble Collectors.',
            },
          },
        ],
      },
    },
    'seller-terms': {
      title: 'شروط البائع',
      body: {
        blocks: [
          {
            type: 'paragraph',
            props: {
              textAr: 'تخضع شروط البائع هذه لإيداع وبيع القطع عبر نوبل كوليكتورز. بإيداع قطعة، فإنك توافق على هذه الشروط وتقر بأن لديك ملكية صالحة وقابلة للتسويق.',
              textEn: 'These Seller Terms govern the consignment and sale of items through Noble Collectors.',
            },
          },
        ],
      },
    },
    'private-sale-terms': {
      title: 'شروط البيع الخاص',
      body: {
        blocks: [
          {
            type: 'paragraph',
            props: {
              textAr: 'تسهل نوبل كوليكتورز البيع الخاص للمقتنيات عالية القيمة خارج صيغة المزاد. تكمل شروط البيع الخاص هذه شروط المشتري والبائع العامة.',
              textEn: 'Noble Collectors facilitates private sales of high-value collectibles outside of the auction format.',
            },
          },
        ],
      },
    },
    'payment-instructions': {
      title: 'تعليمات الدفع والتحويل البنكي',
      body: {
        blocks: [
          {
            type: 'paragraph',
            props: {
              textAr: 'يجب أن تتم جميع المدفوعات لنوبل كوليكتورز وفقاً لهذه التعليمات. نقبل التحويلات المصرفية، وفي ظروف معينة، مدفوعات بطاقات الائتمان للمبالغ المؤهلة.',
              textEn: 'All payments to Noble Collectors must be made in accordance with these instructions.',
            },
          },
        ],
      },
    },
    'buyer-premium-fees': {
      title: 'رسوم المشتري الإضافية',
      body: {
        blocks: [
          {
            type: 'paragraph',
            props: {
              textAr: 'تتم إضافة رسوم المشتري الإضافية إلى سعر المطرقة لكل قطعة يتم شراؤها في المزاد. هذه الرسوم هي نسبة مئوية من سعر المطرقة وتختلف حسب فئة البيع.',
              textEn: 'A buyer\'s premium is added to the hammer price of every lot purchased at auction.',
            },
          },
        ],
      },
    },
    'viewing-collection-policy': {
      title: 'سياسة المعاينة والاستلام',
      body: {
        blocks: [
          {
            type: 'paragraph',
            props: {
              textAr: 'تقدم نوبل كوليكتورز فرص معاينة مجدولة قبل كل مزاد. المعاينة تكون بالموعد فقط وتُجرى في صالة العرض أو الموقع المحدد.',
              textEn: 'Noble Collectors offers scheduled viewing opportunities prior to each auction.',
            },
          },
        ],
      },
    },
    'shipping-custody-policy': {
      title: 'سياسة الشحن والحفظ',
      body: {
        blocks: [
          {
            type: 'paragraph',
            props: {
              textAr: 'تتخذ نوبل كوليكتورز العناية المعقولة بالقطع الموجودة في حوزتنا. توضح هذه السياسة مسؤولياتنا وحدودها فيما يتعلق بالشحن والمناولة والتخزين.',
              textEn: 'Noble Collectors takes reasonable care of items in our custody.',
            },
          },
        ],
      },
    },
    'refund-returns-policy': {
      title: 'سياسة الاسترجاع والاسترداد',
      body: {
        blocks: [
          {
            type: 'paragraph',
            props: {
              textAr: 'جميع مبيعات المزادات نهائية. لا تقدم نوبل كوليكتورز استرداداً أو استرجاعاً بناءً على تغيير الرأي. ومع ذلك، فإننا نقف وراء أصالة كل قطعة نبيعها.',
              textEn: 'All auction sales are final. Noble Collectors does not offer refunds or returns based on a change of mind.',
            },
          },
        ],
      },
    },
    'data-protection': {
      title: 'حماية البيانات الشخصية',
      body: {
        blocks: [
          {
            type: 'paragraph',
            props: {
              textAr: 'تلتزم نوبل كوليكتورز بحماية بياناتك الشخصية وفقاً لقوانين حماية البيانات المعمول بها بما في ذلك اللائحة العامة لحماية البيانات الأوروبية وقانون حماية البيانات الشخصية السعودي.',
              textEn: 'Noble Collectors is committed to protecting your personal data in compliance with applicable data protection laws.',
            },
          },
        ],
      },
    },
    'cookie-policy': {
      title: 'سياسة ملفات تعريف الارتباط',
      body: {
        blocks: [
          {
            type: 'paragraph',
            props: {
              textAr: 'تستخدم نوبل كوليكتورز ملفات تعريف الارتباط وتقنيات التتبع المماثلة لتحسين تجربة التصفح وتحليل حركة الموقع وتقديم محتوى مخصص.',
              textEn: 'Noble Collectors uses cookies and similar tracking technologies to enhance your browsing experience.',
            },
          },
        ],
      },
    },
    'kyc-sanctions-explanation': {
      title: 'شرح التحقق من الهوية والعقوبات',
      body: {
        blocks: [
          {
            type: 'paragraph',
            props: {
              textAr: 'تلتزم نوبل كوليكتورز بالامتثال للوائح مكافحة غسل الأموال وأطر العقوبات الدولية. كجزء من هذا الالتزام، نجري التحقق من هوية العميل وفحص العقوبات على جميع العملاء.',
              textEn: 'Noble Collectors is committed to compliance with AML regulations and international sanctions frameworks.',
            },
          },
        ],
      },
    },
    'brand-affiliation-disclaimer': {
      title: 'إخلاء مسؤولية انتماء العلامات التجارية',
      body: {
        blocks: [
          {
            type: 'paragraph',
            props: {
              textAr: 'نوبل كوليكتورز هي دار مزادات وسوق مستقلة. جميع أسماء العلامات التجارية والشعارات والعلامات التجارية التي تظهر في قوائمنا هي ملك لأصحابها وتستخدم فقط لأغراض التحديد والوصف.',
              textEn: 'Noble Collectors is an independent auction house and marketplace.',
            },
          },
        ],
      },
    },
    'distance-sale-terms': {
      title: 'شروط البيع عن بعد / الاقتناء عن بعد',
      body: {
        blocks: [
          {
            type: 'paragraph',
            props: {
              textAr: 'عند اقتناء قطعة من خلال نوبل كوليكتورز دون حضور شخصي، يتم تصنيف المعاملة كبيع عن بعد وتخضع لهذه الشروط الإضافية.',
              textEn: 'When you acquire an item through Noble Collectors without being physically present, the transaction is classified as a distance sale and is governed by these additional terms.',
            },
          },
        ],
      },
    },
    'museum-affiliation-disclaimer': {
      title: 'إخلاء مسؤولية انتماء المتاحف والمؤسسات',
      body: {
        blocks: [
          {
            type: 'paragraph',
            props: {
              textAr: 'تعمل نوبل كوليكتورز بشكل مستقل وليست تابعة أو مدعومة أو مرعية من قبل أي متحف أو مؤسسة ثقافية أو جامعة أو جهة حكومية ما لم يذكر صراحة.',
              textEn: 'Noble Collectors operates independently and is not affiliated with any museum, cultural institution, university, or government entity.',
            },
          },
        ],
      },
    },
  },
};

export default async function LegalTrustPage({ params }: Props) {
  const { locale, slug } = await params;
  const localizedContent = legalContent[locale] ?? legalContent.en;
  const page = localizedContent[slug];

  if (!page) {
    notFound();
  }

  return (
    <PublicShell locale={locale}>
      <div className="container-noble py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="heading-1 rose-gold-text mb-8">{page.title}</h1>
          <CMSRenderer locale={locale} body={page.body} />
          <div className="mt-12 pt-8 border-t border-border-light">
            <p className="text-xs text-text-muted">
              {locale === 'ar'
                ? 'آخر تحديث: مايو 2026'
                : 'Last updated: May 2026'}
            </p>
          </div>
        </div>
      </div>
    </PublicShell>
  );
}
