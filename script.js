<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head>
    <meta charset="utf-8">
    <title>{block:TagPage}#{Tag} - {/block:TagPage}{block:PostSummary}{PostSummary} - {/block:PostSummary}{Title}</title>
    <meta name="description" content="{block:Description}{MetaDescription}{/block:Description}"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- خطوط جوجل العربية -->
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&family=Amiri:wght@400;700&display=swap" rel="stylesheet">
    
    <!-- أيقونات Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    
    <style>
        /* إعدادات أساسية */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        :root {
            --primary-color: #2c3e50;
            --secondary-color: #3498db;
            --accent-color: #e74c3c;
            --text-color: #2c3e50;
            --light-bg: #f8f9fa;
            --white: #ffffff;
            --shadow: 0 2px 10px rgba(0,0,0,0.1);
            --border-radius: 12px;
            --transition: all 0.3s ease;
        }
        
        body {
            font-family: 'Cairo', sans-serif;
            line-height: 1.7;
            color: var(--text-color);
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            direction: rtl;
        }
        
        /* الحاوي الرئيسي */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        
        /* الهيدر */
        .header {
            background: var(--white);
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
            margin-bottom: 30px;
            padding: 40px 30px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .header::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(90deg, var(--secondary-color), var(--accent-color));
        }
        
        .blog-title {
            font-family: 'Amiri', serif;
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }
        
        .blog-description {
            font-size: 1.1rem;
            color: #666;
            max-width: 600px;
            margin: 0 auto;
        }
        
        /* التنقل */
        .navigation {
            background: var(--white);
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
            margin-bottom: 30px;
            padding: 15px 0;
        }
        
        .nav-list {
            list-style: none;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;
        }
        
        .nav-item a {
            color: var(--text-color);
            text-decoration: none;
            padding: 10px 20px;
            border-radius: 25px;
            transition: var(--transition);
            font-weight: 500;
        }
        
        .nav-item a:hover {
            background: var(--secondary-color);
            color: var(--white);
            transform: translateY(-2px);
        }
        
        /* المحتوى الرئيسي */
        .main-content {
            display: grid;
            grid-template-columns: 1fr 300px;
            gap: 30px;
        }
        
        /* المقالات */
        .posts-container {
            display: flex;
            flex-direction: column;
            gap: 30px;
        }
        
        .post {
            background: var(--white);
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
            overflow: hidden;
            transition: var(--transition);
        }
        
        .post:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
        
        .post-header {
            padding: 25px 30px 15px;
            border-bottom: 1px solid #eee;
        }
        
        .post-title {
            font-family: 'Amiri', serif;
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 10px;
            line-height: 1.4;
        }
        
        .post-title a {
            color: inherit;
            text-decoration: none;
            transition: var(--transition);
        }
        
        .post-title a:hover {
            color: var(--secondary-color);
        }
        
        .post-meta {
            display: flex;
            align-items: center;
            gap: 20px;
            font-size: 0.9rem;
            color: #666;
        }
        
        .post-meta i {
            color: var(--secondary-color);
        }
        
        .post-content {
            padding: 25px 30px;
        }
        
        .post-content p {
            margin-bottom: 15px;
            text-align: justify;
        }
        
        .post-content img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            margin: 15px 0;
        }
        
        .post-content blockquote {
            border-right: 4px solid var(--secondary-color);
            padding: 15px 20px;
            margin: 20px 0;
            background: var(--light-bg);
            border-radius: 0 8px 8px 0;
            font-style: italic;
        }
        
        /* الشريط الجانبي */
        .sidebar {
            display: flex;
            flex-direction: column;
            gap: 25px;
        }
        
        .widget {
            background: var(--white);
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
            padding: 25px;
        }
        
        .widget-title {
            font-family: 'Amiri', serif;
            font-size: 1.3rem;
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid var(--secondary-color);
        }
        
        .widget ul {
            list-style: none;
        }
        
        .widget ul li {
            padding: 8px 0;
            border-bottom: 1px solid #eee;
        }
        
        .widget ul li:last-child {
            border-bottom: none;
        }
        
        .widget ul li a {
            color: var(--text-color);
            text-decoration: none;
            transition: var(--transition);
        }
        
        .widget ul li a:hover {
            color: var(--secondary-color);
            padding-right: 5px;
        }
        
        /* الفوتر */
        .footer {
            background: var(--white);
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
            margin-top: 40px;
            padding: 30px;
            text-align: center;
        }
        
        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
            margin-bottom: 20px;
        }
        
        .footer-section h3 {
            color: var(--primary-color);
            margin-bottom: 15px;
        }
        
        .social-links {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-top: 20px;
        }
        
        .social-links a {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 45px;
            height: 45px;
            background: var(--secondary-color);
            color: var(--white);
            border-radius: 50%;
            text-decoration: none;
            transition: var(--transition);
        }
        
        .social-links a:hover {
            background: var(--accent-color);
            transform: translateY(-3px);
        }
        
        /* التصميم المتجاوب */
        @media (max-width: 768px) {
            .container {
                padding: 15px;
            }
            
            .main-content {
                grid-template-columns: 1fr;
            }
            
            .blog-title {
                font-size: 2rem;
            }
            
            .nav-list {
                flex-direction: column;
                align-items: center;
            }
            
            .post-header,
            .post-content {
                padding: 20px;
            }
            
            .footer-content {
                grid-template-columns: 1fr;
                text-align: center;
            }
        }
        
        /* تأثيرات الحركة */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .post {
            animation: fadeInUp 0.6s ease-out;
        }
        
        /* تنسيق أنواع المقالات المختلفة */
        .post-type-text .post-content {
            font-size: 1.1rem;
        }
        
        .post-type-quote {
            background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
            color: var(--white);
        }
        
        .post-type-quote .post-title,
        .post-type-quote .post-meta {
            color: var(--white);
        }
        
        .post-type-photo img {
            width: 100%;
            border-radius: 0;
            margin: 0;
        }
        
        /* تنسيق الروابط */
        a {
            color: var(--secondary-color);
            transition: var(--transition);
        }
        
        a:hover {
            color: var(--accent-color);
        }
        
        /* تنسيق الكود */
        code {
            background: var(--light-bg);
            padding: 2px 6px;
            border-radius: 4px;
            font-family: 'Courier New', monospace;
        }
        
        pre {
            background: var(--light-bg);
            padding: 15px;
            border-radius: 8px;
            overflow-x: auto;
            margin: 15px 0;
        }
    </style>
</head>

<body>
    <div class="container">
        <!-- الهيدر -->
        <header class="header">
            <h1 class="blog-title">{Title}</h1>
            {block:Description}
            <p class="blog-description">{MetaDescription}</p>
            {/block:Description}
        </header>

        <!-- التنقل -->
        <nav class="navigation">
            <ul class="nav-list">
                <li class="nav-item"><a href="/"><i class="fas fa-home"></i> الرئيسية</a></li>
                <li class="nav-item"><a href="/archive"><i class="fas fa-archive"></i> الأرشيف</a></li>
                <li class="nav-item"><a href="/random"><i class="fas fa-random"></i> مقال عشوائي</a></li>
                <li class="nav-item"><a href="/submit"><i class="fas fa-plus"></i> إرسال</a></li>
                <li class="nav-item"><a href="/ask"><i class="fas fa-question"></i> اسأل</a></li>
            </ul>
        </nav>

        <!-- المحتوى الرئيسي -->
        <div class="main-content">
            <!-- المقالات -->
            <main class="posts-container">
                {block:Posts}
                <article class="post post-type-{PostType}">
                    <header class="post-header">
                        {block:Text}
                        {block:Title}
                        <h2 class="post-title"><a href="{Permalink}">{Title}</a></h2>
                        {/block:Title}
                        {/block:Text}
                        
                        {block:Quote}
                        <h2 class="post-title">"{Quote}"</h2>
                        {block:Source}<cite>— {Source}</cite>{/block:Source}
                        {/block:Quote}
                        
                        {block:Photo}
                        <h2 class="post-title">صورة</h2>
                        {/block:Photo}
                        
                        {block:Photoset}
                        <h2 class="post-title">مجموعة صور</h2>
                        {/block:Photoset}
                        
                        {block:Video}
                        <h2 class="post-title">فيديو</h2>
                        {/block:Video}
                        
                        {block:Audio}
                        <h2 class="post-title">صوت</h2>
                        {/block:Audio}
                        
                        <div class="post-meta">
                            <span><i class="fas fa-calendar"></i> {TimeAgo}</span>
                            <span><i class="fas fa-comments"></i> {NoteCount} تعليق</span>
                            {block:HasTags}
                            <span><i class="fas fa-tags"></i> 
                                {block:Tags}<a href="{TagURL}">#{Tag}</a> {/block:Tags}
                            </span>
                            {/block:HasTags}
                        </div>
                    </header>
                    
                    <div class="post-content">
                        {block:Text}
                        {block:Body}{Body}{/block:Body}
                        {/block:Text}
                        
                        {block:Photo}
                        <img src="{PhotoURL-HighRes}" alt="{PhotoAlt}"/>
                        {block:Caption}{Caption}{/block:Caption}
                        {/block:Photo}
                        
                        {block:Photoset}
                        {Photoset}
                        {block:Caption}{Caption}{/block:Caption}
                        {/block:Photoset}
                        
                        {block:Video}
                        {VideoEmbed-700}
                        {block:Caption}{Caption}{/block:Caption}
                        {/block:Video}
                        
                        {block:Audio}
                        {block:AudioEmbed}{AudioEmbed-640}{/block:AudioEmbed}
                        {block:AudioPlayer}{AudioPlayer}{/block:AudioPlayer}
                        {block:PlayCount}{PlayCountWithLabel}{/block:PlayCount}
                        {block:Caption}{Caption}{/block:Caption}
                        {/block:Audio}
                        
                        {block:Link}
                        <a href="{URL}" target="{Target}"><h3>{Name}</h3></a>
                        {block:Description}{Description}{/block:Description}
                        {/block:Link}
                        
                        {block:Chat}
                        {block:Lines}
                        <div class="chat-line">
                            {block:Label}<strong>{Label}</strong>{/block:Label}
                            {Line}
                        </div>
                        {/block:Lines}
                        {/block:Chat}
                    </div>
                </article>
                {/block:Posts}
                
                <!-- أزرار التنقل -->
                <div class="pagination">
                    {block:PreviousPage}<a href="{PreviousPage}">← الصفحة السابقة</a>{/block:PreviousPage}
                    {block:NextPage}<a href="{NextPage}">الصفحة التالية →</a>{/block:NextPage}
                </div>
            </main>

            <!-- الشريط الجانبي -->
            <aside class="sidebar">
                <!-- البحث -->
                <div class="widget">
                    <h3 class="widget-title">البحث</h3>
                    <form action="/search" method="get">
                        <input type="text" name="q" placeholder="ابحث في المدونة..." style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 6px;">
                    </form>
                </div>
                
                <!-- الأرشيف -->
                <div class="widget">
                    <h3 class="widget-title">الأرشيف</h3>
                    <ul>
                        {block:ArchiveNavigation}
                        <li><a href="{URL}">{Label}</a></li>
                        {/block:ArchiveNavigation}
                    </ul>
                </div>
                
                <!-- الوسوم -->
                {block:HasTags}
                <div class="widget">
                    <h3 class="widget-title">الوسوم الشائعة</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                        {block:Tags}
                        <a href="{TagURL}" style="background: var(--light-bg); padding: 5px 10px; border-radius: 15px; font-size: 0.9rem; text-decoration: none;">#{Tag}</a>
                        {/block:Tags}
                    </div>
                </div>
                {/block:HasTags}
            </aside>
        </div>

        <!-- الفوتر -->
        <footer class="footer">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>حول المدونة</h3>
                    <p>مدونة شخصية تهتم بمشاركة الأفكار والخبرات في مختلف المجالات.</p>
                </div>
                <div class="footer-section">
                    <h3>روابط مفيدة</h3>
                    <ul style="list-style: none;">
                        <li><a href="/archive">أرشيف المقالات</a></li>
                        <li><a href="/submit">إرسال مقال</a></li>
                        <li><a href="/ask">اتصل بنا</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="social-links">
                <a href="#" title="فيسبوك"><i class="fab fa-facebook-f"></i></a>
                <a href="#" title="تويتر"><i class="fab fa-twitter"></i></a>
                <a href="#" title="إنستغرام"><i class="fab fa-instagram"></i></a>
                <a href="#" title="يوتيوب"><i class="fab fa-youtube"></i></a>
            </div>
            
            <p style="margin-top: 20px; color: #666;">
                © 2025 {Title}. جميع الحقوق محفوظة. 
                <a href="https://www.tumblr.com" style="color: var(--secondary-color);">مدعوم بواسطة Tumblr</a>
            </p>
        </footer>
    </div>

<!-- استبدل قسم JavaScript الموجود في نهاية الكود بهذا الكود المحدث -->

<script>
// تأثيرات تفاعلية وترجمة التواريخ
document.addEventListener('DOMContentLoaded', function() {
    // دالة ترجمة التواريخ إلى العربية
    function translateTimeAgo() {
        // البحث عن جميع عناصر التاريخ
        const timeElements = document.querySelectorAll('.post-meta span:first-child');
        
        timeElements.forEach(element => {
            let timeText = element.textContent.trim();
            
            // إزالة أيقونة التقويم إذا كانت موجودة
            timeText = timeText.replace(/.*?\s/, '');
            
            // ترجمة النصوص الإنجليزية إلى العربية
            const translations = {
                // الثواني
                'a few seconds ago': 'منذ ثوانٍ قليلة',
                'seconds ago': 'منذ ثوانٍ',
                
                // الدقائق
                'a minute ago': 'منذ دقيقة',
                'minutes ago': 'منذ دقائق',
                
                // الساعات
                'an hour ago': 'منذ ساعة',
                'hours ago': 'منذ ساعات',
                
                // الأيام
                'a day ago': 'منذ يوم',
                'yesterday': 'أمس',
                'days ago': 'منذ أيام',
                
                // الأسابيع
                'a week ago': 'منذ أسبوع',
                'weeks ago': 'منذ أسابيع',
                
                // الشهور
                'a month ago': 'منذ شهر',
                'months ago': 'منذ شهور',
                
                // السنوات
                'a year ago': 'منذ سنة',
                'years ago': 'منذ سنوات'
            };
            
            // ترجمة الأرقام إلى العربية
            const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
            
            // ترجمة النص حسب النمط
            let translatedText = timeText;
            
            // التعامل مع الأنماط المختلفة
            if (timeText.includes('second')) {
                if (timeText.includes('a few')) {
                    translatedText = 'منذ ثوانٍ قليلة';
                } else {
                    const number = timeText.match(/\d+/);
                    if (number) {
                        const arabicNum = convertToArabicNumbers(number[0]);
                        translatedText = `منذ ${arabicNum} ثانية`;
                    }
                }
            } else if (timeText.includes('minute')) {
                if (timeText.includes('a minute')) {
                    translatedText = 'منذ دقيقة';
                } else {
                    const number = timeText.match(/\d+/);
                    if (number) {
                        const arabicNum = convertToArabicNumbers(number[0]);
                        const num = parseInt(number[0]);
                        if (num === 1) translatedText = 'منذ دقيقة';
                        else if (num === 2) translatedText = 'منذ دقيقتين';
                        else if (num <= 10) translatedText = `منذ ${arabicNum} دقائق`;
                        else translatedText = `منذ ${arabicNum} دقيقة`;
                    }
                }
            } else if (timeText.includes('hour')) {
                if (timeText.includes('an hour')) {
                    translatedText = 'منذ ساعة';
                } else {
                    const number = timeText.match(/\d+/);
                    if (number) {
                        const arabicNum = convertToArabicNumbers(number[0]);
                        const num = parseInt(number[0]);
                        if (num === 1) translatedText = 'منذ ساعة';
                        else if (num === 2) translatedText = 'منذ ساعتين';
                        else if (num <= 10) translatedText = `منذ ${arabicNum} ساعات`;
                        else translatedText = `منذ ${arabicNum} ساعة`;
                    }
                }
            } else if (timeText.includes('day')) {
                if (timeText.includes('a day') || timeText.includes('yesterday')) {
                    translatedText = 'أمس';
                } else {
                    const number = timeText.match(/\d+/);
                    if (number) {
                        const arabicNum = convertToArabicNumbers(number[0]);
                        const num = parseInt(number[0]);
                        if (num === 1) translatedText = 'أمس';
                        else if (num === 2) translatedText = 'منذ يومين';
                        else if (num <= 10) translatedText = `منذ ${arabicNum} أيام`;
                        else translatedText = `منذ ${arabicNum} يوماً`;
                    }
                }
            } else if (timeText.includes('week')) {
                if (timeText.includes('a week')) {
                    translatedText = 'منذ أسبوع';
                } else {
                    const number = timeText.match(/\d+/);
                    if (number) {
                        const arabicNum = convertToArabicNumbers(number[0]);
                        const num = parseInt(number[0]);
                        if (num === 1) translatedText = 'منذ أسبوع';
                        else if (num === 2) translatedText = 'منذ أسبوعين';
                        else if (num <= 10) translatedText = `منذ ${arabicNum} أسابيع`;
                        else translatedText = `منذ ${arabicNum} أسبوعاً`;
                    }
                }
            } else if (timeText.includes('month')) {
                if (timeText.includes('a month')) {
                    translatedText = 'منذ شهر';
                } else {
                    const number = timeText.match(/\d+/);
                    if (number) {
                        const arabicNum = convertToArabicNumbers(number[0]);
                        const num = parseInt(number[0]);
                        if (num === 1) translatedText = 'منذ شهر';
                        else if (num === 2) translatedText = 'منذ شهرين';
                        else if (num <= 10) translatedText = `منذ ${arabicNum} أشهر`;
                        else translatedText = `منذ ${arabicNum} شهراً`;
                    }
                }
            } else if (timeText.includes('year')) {
                if (timeText.includes('a year')) {
                    translatedText = 'منذ سنة';
                } else {
                    const number = timeText.match(/\d+/);
                    if (number) {
                        const arabicNum = convertToArabicNumbers(number[0]);
                        const num = parseInt(number[0]);
                        if (num === 1) translatedText = 'منذ سنة';
                        else if (num === 2) translatedText = 'منذ سنتين';
                        else if (num <= 10) translatedText = `منذ ${arabicNum} سنوات`;
                        else translatedText = `منذ ${arabicNum} سنة`;
                    }
                }
            }
            
            // تحديث النص مع الاحتفاظ بالأيقونة
            element.innerHTML = `<i class="fas fa-calendar"></i> ${translatedText}`;
        });
    }
    
    // دالة تحويل الأرقام إلى العربية
    function convertToArabicNumbers(num) {
        const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
        return num.toString().replace(/\d/g, function(digit) {
            return arabicNumbers[parseInt(digit)];
        });
    }
    
    // تشغيل دالة الترجمة
    translateTimeAgo();
    
    // ترجمة عدد التعليقات
    function translateComments() {
        const commentElements = document.querySelectorAll('.post-meta span:nth-child(2)');
        
        commentElements.forEach(element => {
            let commentText = element.textContent.trim();
            
            // استخراج الرقم
            const number = commentText.match(/\d+/);
            if (number) {
                const arabicNum = convertToArabicNumbers(number[0]);
                const num = parseInt(number[0]);
                
                let translatedText;
                if (num === 0) {
                    translatedText = 'لا توجد تعليقات';
                } else if (num === 1) {
                    translatedText = 'تعليق واحد';
                } else if (num === 2) {
                    translatedText = 'تعليقان';
                } else if (num <= 10) {
                    translatedText = `${arabicNum} تعليقات`;
                } else {
                    translatedText = `${arabicNum} تعليقاً`;
                }
                
                element.innerHTML = `<i class="fas fa-comments"></i> ${translatedText}`;
            }
        });
    }
    
    // تشغيل دالة ترجمة التعليقات
    translateComments();
    
    // تأثير smooth scroll للروابط الداخلية
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // إضافة تأثير fade-in للمقالات عند التحميل
    const posts = document.querySelectorAll('.post');
    posts.forEach((post, index) => {
        post.style.animationDelay = `${index * 0.1}s`;
    });
    
    // ترجمة نصوص أخرى في الصفحة
    function translateOtherTexts() {
        // ترجمة أزرار التنقل
        const prevButton = document.querySelector('a[href*="page"]');
        if (prevButton && prevButton.textContent.includes('Previous')) {
            prevButton.textContent = '← الصفحة السابقة';
        }
        
        const nextButton = document.querySelector('a[href*="page"]:last-child');
        if (nextButton && nextButton.textContent.includes('Next')) {
            nextButton.textContent = 'الصفحة التالية →';
        }
    }
    
    // تشغيل دالة ترجمة النصوص الأخرى
    translateOtherTexts();
});
</script>

</body>
</html>
