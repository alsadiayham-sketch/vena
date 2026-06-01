// Seed data for Vena Store - based on actual Instagram posts
var SEED_PRODUCTS = [
    {
        name: "شنطة كروس سوداء أنيقة",
        brand: "Vena Store",
        category: "شنط",
        price: 85,
        originalPrice: 120,
        description: "شنطة كروس بودي سوداء بتصميم عصري وجودة عالية، مناسبة لكل يوم",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
        sizes: ["مقاس واحد"],
        status: "bestseller",
        stock: 15
    },
    {
        name: "شنطة يد جلد بني",
        brand: "Vena Store",
        category: "شنط",
        price: 95,
        originalPrice: 0,
        description: "شنطة يد بلون بني فاخر مع تفاصيل ذهبية، ستايلك يبدأ من هنا",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop",
        sizes: ["مقاس واحد"],
        status: "new",
        stock: 10
    },
    {
        name: "شنطة كتف كبيرة",
        brand: "Vena Store",
        category: "شنط",
        price: 110,
        originalPrice: 150,
        description: "شنطة كتف واسعة بتصميم كلاسيكي، فخامة تُحمل وأناقة تُلاحظ",
        image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&h=400&fit=crop",
        sizes: ["مقاس واحد"],
        status: "bestseller",
        stock: 8
    },
    {
        name: "شنطة سهرة صغيرة",
        brand: "Vena Store",
        category: "شنط",
        price: 75,
        originalPrice: 100,
        description: "شنطة سهرة ميني بسلسلة ذهبية، مثالية للمناسبات والسهرات",
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop",
        sizes: ["مقاس واحد"],
        status: "new",
        stock: 12
    },
    {
        name: "شنطة ظهر عصرية",
        brand: "Vena Store",
        category: "شنط",
        price: 90,
        originalPrice: 0,
        description: "شنطة ظهر بتصميم عصري مناسبة للجامعة والطلعات اليومية",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
        sizes: ["مقاس واحد"],
        status: "",
        stock: 20
    },
    {
        name: "شنطة كروس بيج",
        brand: "Vena Store",
        category: "شنط",
        price: 80,
        originalPrice: 110,
        description: "شنطة كروس بلون بيج ناعم، كل شنطة تحكي قصة - خلي قصتك أنيقة",
        image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=400&fit=crop",
        sizes: ["مقاس واحد"],
        status: "bestseller",
        stock: 7
    },
    {
        name: "شنطة يد سوداء كلاسيك",
        brand: "Vena Store",
        category: "شنط",
        price: 100,
        originalPrice: 0,
        description: "شنطة يد سوداء كلاسيكية بجودة عالية، بتكمّل أناقتك مو بس بتشيل أغراضك",
        image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400&h=400&fit=crop",
        sizes: ["مقاس واحد"],
        status: "",
        stock: 14
    },
    {
        name: "طقم رياضي أبيض",
        brand: "Vena Store",
        category: "ملابس",
        price: 180,
        originalPrice: 230,
        description: "طقم رياضي أبيض بخطوط سوداء، كوالتي عالي وستايل مميز",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop",
        sizes: ["S", "M", "L", "XL"],
        status: "bestseller",
        stock: 10
    },
    {
        name: "طقم رياضي أسود",
        brand: "Vena Store",
        category: "ملابس",
        price: 180,
        originalPrice: 0,
        description: "طقم رياضي أسود كلاسيكي بخامة مريحة وتصميم عصري",
        image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=400&fit=crop",
        sizes: ["S", "M", "L", "XL"],
        status: "new",
        stock: 12
    },
    {
        name: "جاكيت شتوي أسود",
        brand: "Vena Store",
        category: "جاكيتات",
        price: 220,
        originalPrice: 280,
        description: "جاكيت شتوي أسود بجودة عالية وبطانة دافئة، كولتي جداً عالي",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
        sizes: ["M", "L", "XL", "XXL"],
        status: "bestseller",
        stock: 6
    },
    {
        name: "جاكيت جلد بني",
        brand: "Vena Store",
        category: "جاكيتات",
        price: 250,
        originalPrice: 320,
        description: "جاكيت جلد بني فاخر، فخامة استثنائية وجودة تُلاحظ من النظرة الأولى",
        image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=400&h=400&fit=crop",
        sizes: ["M", "L", "XL"],
        status: "special",
        stock: 4
    },
    {
        name: "جاكيت بومبر كاكي",
        brand: "Vena Store",
        category: "جاكيتات",
        price: 200,
        originalPrice: 0,
        description: "جاكيت بومبر بلون كاكي عصري، جودة عالية بذوق راقٍ وحضور مميّز",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop",
        sizes: ["M", "L", "XL"],
        status: "new",
        stock: 8
    },
    {
        name: "جاكيت شتوي رمادي",
        brand: "Vena Store",
        category: "جاكيتات",
        price: 230,
        originalPrice: 280,
        description: "جاكيت شتوي رمادي دافئ بتصميم أنيق للأيام الباردة",
        image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=400&fit=crop",
        sizes: ["S", "M", "L", "XL"],
        status: "",
        stock: 9
    },
    {
        name: "حذاء رياضي أبيض",
        brand: "Vena Store",
        category: "أحذية",
        price: 150,
        originalPrice: 190,
        description: "حذاء رياضي أبيض بتصميم أنيق، راحة ثابتة وتصميم يناسب كل استخدام",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
        sizes: ["40", "41", "42", "43", "44"],
        status: "bestseller",
        stock: 18
    },
    {
        name: "حذاء رياضي أسود",
        brand: "Vena Store",
        category: "أحذية",
        price: 140,
        originalPrice: 0,
        description: "حذاء رياضي أسود مريح للاستخدام اليومي مع نعل مرن",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
        sizes: ["40", "41", "42", "43", "44", "45"],
        status: "",
        stock: 22
    },
    {
        name: "حذاء كاجوال بيج",
        brand: "Vena Store",
        category: "أحذية",
        price: 130,
        originalPrice: 170,
        description: "حذاء كاجوال بلون بيج عصري مناسب للطلعات والمناسبات",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop",
        sizes: ["39", "40", "41", "42", "43"],
        status: "new",
        stock: 15
    },
    {
        name: "طاقية شتوية سوداء",
        brand: "Vena Store",
        category: "إكسسوارات",
        price: 35,
        originalPrice: 50,
        description: "طاقية شتوية سوداء من تشكيلة الطواقي المميزة، دافئة وأنيقة",
        image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=400&fit=crop",
        sizes: ["مقاس واحد"],
        status: "bestseller",
        stock: 40
    },
    {
        name: "طاقية صوف رمادية",
        brand: "Vena Store",
        category: "إكسسوارات",
        price: 35,
        originalPrice: 0,
        description: "طاقية صوف رمادية دافئة بتصميم بسيط وأنيق",
        image: "https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?w=400&h=400&fit=crop",
        sizes: ["مقاس واحد"],
        status: "",
        stock: 35
    },
    {
        name: "سكارف شتوي كاروهات",
        brand: "Vena Store",
        category: "إكسسوارات",
        price: 45,
        originalPrice: 65,
        description: "سكارف شتوي بنقشة كاروهات كلاسيكية، خامة صوفية ناعمة ودافئة",
        image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=400&h=400&fit=crop",
        sizes: ["مقاس واحد"],
        status: "",
        stock: 28
    },
    {
        name: "طقم رياضي رمادي",
        brand: "Vena Store",
        category: "ملابس",
        price: 170,
        originalPrice: 220,
        description: "طقم رياضي رمادي مريح وأنيق بخامة قطنية عالية الجودة",
        image: "https://images.unsplash.com/photo-1483721310020-03333e577078?w=400&h=400&fit=crop",
        sizes: ["S", "M", "L", "XL"],
        status: "",
        stock: 11
    },
    {
        name: "هودي أسود أوفرسايز",
        brand: "Vena Store",
        category: "ملابس",
        price: 120,
        originalPrice: 0,
        description: "هودي أسود أوفرسايز مريح بخامة سميكة مع كابيشون، فخامة تُرى وتُحس",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
        sizes: ["M", "L", "XL", "XXL"],
        status: "new",
        stock: 16
    },
    {
        name: "بنطلون كارغو أسود",
        brand: "Vena Store",
        category: "ملابس",
        price: 130,
        originalPrice: 170,
        description: "بنطلون كارغو أسود بجيوب جانبية وتصميم عصري وعملي",
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop",
        sizes: ["S", "M", "L", "XL"],
        status: "",
        stock: 13
    },
    {
        name: "شنطة كروس صغيرة سوداء",
        brand: "Vena Store",
        category: "شنط",
        price: 60,
        originalPrice: 85,
        description: "شنطة كروس صغيرة عملية للموبايل والأساسيات، ترند وعصرية",
        image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=400&h=400&fit=crop",
        sizes: ["مقاس واحد"],
        status: "bestseller",
        stock: 25
    },
    {
        name: "تيشيرت أوفرسايز أبيض",
        brand: "Vena Store",
        category: "ملابس",
        price: 65,
        originalPrice: 0,
        description: "تيشيرت أوفرسايز أبيض بخامة قطنية مريحة لستايل يومي",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
        sizes: ["M", "L", "XL", "XXL"],
        status: "",
        stock: 30
    },
    {
        name: "حزام جلد أسود كلاسيك",
        brand: "Vena Store",
        category: "إكسسوارات",
        price: 55,
        originalPrice: 75,
        description: "حزام جلد أسود كلاسيكي ببكلة معدنية أنيقة",
        image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=400&h=400&fit=crop",
        sizes: ["90cm", "95cm", "100cm", "105cm"],
        status: "",
        stock: 20
    }
];

// Seed function
function seedFirestoreData(forceOverwrite) {
    if (typeof firebase === 'undefined') {
        console.error('Firebase not loaded');
        return Promise.reject('Firebase not loaded');
    }
    var db = firebase.firestore();
    var productsRef = db.collection('projects').doc('vena').collection('products');
    
    // First delete all existing products
    return productsRef.get().then(function(snapshot) {
        var deletePromises = [];
        snapshot.forEach(function(doc) {
            deletePromises.push(doc.ref.delete());
        });
        return Promise.all(deletePromises);
    }).then(function() {
        console.log('Deleted existing products');
        var promises = SEED_PRODUCTS.map(function(product, index) {
            var docRef = productsRef.doc('product_' + (index + 1));
            var data = Object.assign({}, product, {
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
            return docRef.set(data);
        });
        return Promise.all(promises);
    }).then(function() {
        console.log('Seeded ' + SEED_PRODUCTS.length + ' products successfully!');
        return SEED_PRODUCTS.length;
    });
}

window.seedFirestoreData = seedFirestoreData;
window.SEED_PRODUCTS = SEED_PRODUCTS;