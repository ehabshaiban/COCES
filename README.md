# كوكيز لينو | COOKIES LINO — ثيم متجر سلة (متوافق مع قالب رائد)

مستودع ثيم متكامل مبني وفق معمارية محرك **Twilight** وقالب **رائد (`SallaApp/theme-raed`)** لمنصة سلة.

## بنية المستودع

```text
cookies-lino-salla-theme/
├── twilight.json                                  # إعدادات الثيم ومكونات الرئيسية
├── package.json                                   # حزم البناء وأوامر Salla CLI
├── webpack.config.js                              # إعداد تجميع الأصول (JS / SCSS)
├── tailwind.config.js                             # إعدادات Tailwind والألوان
└── src/
    ├── locales/
    │   ├── ar.json                                # الترجمات العربية
    │   └── en.json                                # الترجمات الإنجليزية
    ├── assets/
    │   ├── styles/
    │   │   ├── app.scss
    │   │   └── lino-theme.scss                    # هوية كوكيز لينو البصرية والوضع الليلي
    │   └── js/
    │       ├── app.js
    │       ├── lino.js                            # العداد التنازلي، الأكورديون، الوضع الليلي، ومزامنة المفضلة
    │       ├── home.js
    │       ├── product.js
    │       └── cart.js
    └── views/
        ├── layouts/
        │   └── master.twig                        # الهيكل العام والخطافات الإلزامية
        ├── pages/
        │   ├── index.twig                         # الصفحة الرئيسية الديناميكية
        │   ├── cart.twig                          # صفحة السلة مع مؤشر الشحن المجاني
        │   ├── partials/product/options.twig      # خيارات المنتج الديناميكية
        │   └── product/
        │       ├── index.twig                     # صفحة التصنيفات والمنتجات
        │       └── single.twig                    # صفحة تفاصيل المنتج
        └── components/
            ├── header/header.twig                 # الهيدر وقائمة الجوال بمكونات سلة
            ├── footer/footer.twig                 # الفوتر ووسائل الدفع
            ├── product/card.twig                  # بطاقة المنتج
            └── home/
                ├── lino-hero.twig                 # قسم الهيرو الرئيسي
                ├── lino-categories.twig           # شبكة الأقسام الدائرية
                ├── lino-collection.twig           # كولكشن لينو التحريري
                ├── lino-story.twig                # قسم قصتنا
                ├── lino-offer-banner.twig         # بانر العرض والعداد التنازلي
                └── lino-faq.twig                  # الأسئلة الشائعة
```

## خطوات التشغيل والمعاينة على سلة

1. تثبيت أداة سلة الرسمية وتسجيل الدخول بحساب الشركاء:
   ```bash
   npm install -g @salla.sa/cli
   salla login
   ```
2. تثبيت الاعتماديات وبناء ملفات CSS و JS:
   ```bash
   npm install
   npm run build
   ```
3. معاينة المتجر مباشرة على متجرك التجريبي مع محرر الثيمات:
   ```bash
   npm run preview
   ```
4. نشر الثيم على متجرك:
   ```bash
   npm run publish
   ```
