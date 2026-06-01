// Seed data for Vena Store - Bags, Jackets, Clothes, Belts, Scarves, Kids
var SEED_PRODUCTS = [
    {
        name: "حقيبة LV كلاسيك",
        brand: "Louis Vuitton",
        category: "حقائب",
        price: 250,
        originalPrice: 320,
        description: "حقيبة لويس فيتون كلاسيكية بتصميم مونوغرام مميز، جودة عالية مع حزام كتف قابل للتعديل",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop",
        sizes: ["وسط", "كبير"],
        status: "bestseller",
        stock: 8
    },
    {
        name: "حقيبة يد Gucci",
        brand: "Gucci",
        category: "حقائب",
        price: 280,
        originalPrice: 350,
        description: "حقيبة يد غوتشي أنيقة مناسبة للسهرات والمناسبات الخاصة",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
        sizes: ["صغير", "وسط"],
        status: "new",
        stock: 5
    },
    {
        name: "حقيبة كروس بودي",
        brand: "Chanel",
        category: "حقائب",
        price: 200,
        originalPrice: 0,
        description: "حقيبة كروس بودي شانيل بسلسلة ذهبية وجلد مبطن فاخر",
        image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&h=400&fit=crop",
        sizes: ["صغير"],
        status: "bestseller",
        stock: 12
    },
    {
        name: "جاكيت جلد كلاسيكي",
        brand: "Vena",
        category: "جاكيتات",
        price: 350,
        originalPrice: 450,
        description: "جاكيت جلد أسود كلاسيكي بتصميم عصري مناسب لكل المواسم",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
        sizes: ["S", "M", "L", "XL"],
        status: "bestseller",
        stock: 6
    },
    {
        name: "جاكيت بومبر",
        brand: "Vena",
        category: "جاكيتات",
        price: 280,
        originalPrice: 0,
        description: "جاكيت بومبر عصري بألوان هادئة مع بطانة داخلية ناعمة",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop",
        sizes: ["M", "L", "XL"],
        status: "new",
        stock: 10
    },
    {
        name: "جاكيت دينم",
        brand: "Vena",
        category: "جاكيتات",
        price: 220,
        originalPrice: 280,
        description: "جاكيت دينم كاجوال بغسلة فاتحة مثالي لأيام الربيع والخريف",
        image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=400&fit=crop",
        sizes: ["S", "M", "L"],
        status: "",
        stock: 15
    },
    {
        name: "حزام جلد Gucci",
        brand: "Gucci",
        category: "أحزمة",
        price: 150,
        originalPrice: 200,
        description: "حزام غوتشي جلد طبيعي مع بكلة GG الشهيرة بلون ذهبي",
        image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=400&h=400&fit=crop",
        sizes: ["85cm", "90cm", "95cm", "100cm"],
        status: "bestseller",
        stock: 20
    },
    {
        name: "حزام LV بني",
        brand: "Louis Vuitton",
        category: "أحزمة",
        price: 180,
        originalPrice: 0,
        description: "حزام لويس فيتون بتصميم مونوغرام بني كلاسيكي مع بكلة فضية",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
        sizes: ["90cm", "95cm", "100cm", "105cm"],
        status: "new",
        stock: 8
    },
    {
        name: "شال صوف كشميري",
        brand: "Vena",
        category: "سكارفات",
        price: 120,
        originalPrice: 160,
        description: "شال صوف كشميري ناعم وفخم بألوان متعددة لإطلالة شتوية أنيقة",
        image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop",
        sizes: ["مقاس واحد"],
        status: "",
        stock: 25
    },
    {
        name: "سكارف حرير Dior",
        brand: "Dior",
        category: "سكارفات",
        price: 180,
        originalPrice: 0,
        description: "سكارف حرير ديور بنقشات ورود أنيقة مثالي للربيع والصيف",
        image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&h=400&fit=crop",
        sizes: ["مقاس واحد"],
        status: "new",
        stock: 7
    },
    {
        name: "بلوزة كاجوال",
        brand: "Vena",
        category: "ملابس",
        price: 90,
        originalPrice: 120,
        description: "بلوزة كاجوال مريحة من القطن بقصة واسعة مناسبة ليومياتك",
        image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=400&fit=crop",
        sizes: ["S", "M", "L", "XL"],
        status: "",
        stock: 30
    },
    {
        name: "فستان سهرة أسود",
        brand: "Vena",
        category: "ملابس",
        price: 400,
        originalPrice: 500,
        description: "فستان سهرة أسود أنيق بتصميم كلاسيكي مع تفاصيل لامعة",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
        sizes: ["S", "M", "L"],
        status: "special",
        stock: 4
    },
    {
        name: "تيشيرت قطن أوفرسايز",
        brand: "Vena",
        category: "ملابس",
        price: 70,
        originalPrice: 0,
        description: "تيشيرت قطن أوفرسايز مريح بألوان أساسية لستايل يومي عصري",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
        sizes: ["M", "L", "XL", "XXL"],
        status: "",
        stock: 40
    },
    {
        name: "حقيبة ظهر جلد",
        brand: "Vena",
        category: "حقائب",
        price: 220,
        originalPrice: 280,
        description: "حقيبة ظهر جلدية أنيقة بجيوب متعددة مناسبة للجامعة والعمل",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
        sizes: ["وسط", "كبير"],
        status: "",
        stock: 9
    },
    {
        name: "حذاء أطفال رياضي",
        brand: "Vena",
        category: "أطفال",
        price: 130,
        originalPrice: 0,
        description: "حذاء رياضي مريح للأطفال بتصميم ملون وعصري مع نعل مرن",
        image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=400&h=400&fit=crop",
        sizes: ["28", "30", "32", "34", "36"],
        status: "new",
        stock: 18
    },
    {
        name: "بوت أطفال شتوي",
        brand: "Vena",
        category: "أطفال",
        price: 160,
        originalPrice: 200,
        description: "بوت شتوي دافئ للأطفال مقاوم للماء بتصميم عملي ومريح",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
        sizes: ["26", "28", "30", "32"],
        status: "bestseller",
        stock: 14
    },
    {
        name: "كوت طويل صوف",
        brand: "Vena",
        category: "جاكيتات",
        price: 450,
        originalPrice: 550,
        description: "كوت طويل من الصوف الفاخر بلون بيج كلاسيكي لإطلالة شتوية أنيقة",
        image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=400&fit=crop",
        sizes: ["S", "M", "L"],
        status: "special",
        stock: 5
    },
    {
        name: "حقيبة Dior ميني",
        brand: "Dior",
        category: "حقائب",
        price: 300,
        originalPrice: 380,
        description: "حقيبة ديور ميني بتصميم كاناج المبطن الشهير مع حزام سلسلة",
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop",
        sizes: ["ميني"],
        status: "bestseller",
        stock: 3
    },
    {
        name: "بنطلون جينز واسع",
        brand: "Vena",
        category: "ملابس",
        price: 150,
        originalPrice: 0,
        description: "بنطلون جينز بقصة واسعة عصرية مريحة ومناسبة لكل الأوقات",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop",
        sizes: ["36", "38", "40", "42"],
        status: "",
        stock: 22
    },
    {
        name: "سكارف كاروهات",
        brand: "Vena",
        category: "سكارفات",
        price: 80,
        originalPrice: 100,
        description: "سكارف كاروهات دافئ بخامة صوفية ناعمة مثالي لأيام الشتاء",
        image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=400&h=400&fit=crop",
        sizes: ["مقاس واحد"],
        status: "",
        stock: 30
    },
    {
        name: "حزام جلد Dior",
        brand: "Dior",
        category: "أحزمة",
        price: 170,
        originalPrice: 220,
        description: "حزام ديور جلد ناعم مع بكلة CD ذهبية أنيقة",
        image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=400&h=400&fit=crop",
        sizes: ["85cm", "90cm", "95cm"],
        status: "new",
        stock: 6
    },
    {
        name: "هودي أوفرسايز",
        brand: "Vena",
        category: "ملابس",
        price: 130,
        originalPrice: 0,
        description: "هودي أوفرسايز مريح بخامة قطنية سميكة مع كابيشون وجيب أمامي",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
        sizes: ["M", "L", "XL", "XXL"],
        status: "",
        stock: 35
    }
];

// Seed function
function seedFirestoreData(forceOverwrite) {
    if (typeof firebase === 'undefined') {
        console.error('Firebase not loaded');
        return Promise.reject('Firebase not loaded');
    }
    var db = firebase.firestore();
    var batch = db.batch();
    var productsRef = db.collection('projects').doc('vena').collection('products');
    
    var promises = SEED_PRODUCTS.map(function(product, index) {
        var docRef = productsRef.doc('product_' + (index + 1));
        var data = Object.assign({}, product, {
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        return docRef.set(data);
    });
    
    return Promise.all(promises).then(function() {
        console.log('Seeded ' + SEED_PRODUCTS.length + ' products successfully!');
        return SEED_PRODUCTS.length;
    });
}

window.seedFirestoreData = seedFirestoreData;
window.SEED_PRODUCTS = SEED_PRODUCTS;