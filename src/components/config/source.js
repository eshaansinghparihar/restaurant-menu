import apetizerBgImage from "../assets/appetizers.webp"
import breakfastBgImage from "../assets/breakfast.webp"
import saladBgImage from "../assets/salads.webp"
import sandwichBgImage from "../assets/sandwich.webp"
import soupBgImage from "../assets/soup.webp"
import vegetarianBgImage from "../assets/vegetarian.webp"


const menu={
    apetizers:[
        {
            id:1,
            itemName:"Peanut Masala",
            itemDes:"A zesty and spicy snack made with chick peas, tomatoes and onions with an Indian twist",
            price:80,
        },
        {
            id:2,
            itemName:"Pakora (Veg/Onion)",
            itemDes:"Fresh fried veggie fritters made in South Indian style. They are addictive, aromatic, crunchy and a delicious snack",
            price:90,
        },
        {
            id:3,
            itemName:"Pakora (Paneer/Chicken)",
            itemDes:"A lovely snack with crispy textures outside and a moist, soft paneer (Indian cottage cheese) within.",
            price:150,
        },
        {
            id:4,
            itemName:"French Fries",
            itemDes:"The classic crispy potato fries wedges deep fried in salt",
            price:100,
        },
        {
            id:5,
            itemName:"Honey Chilli Potato",
            itemDes:"Crispy, sweet and spicy potato wedges coated with honey, chilli sauce and spice",
            price:120,
           },
           {
            id:6,
            itemName:"Spring Rolls (Veg/Chicken)",
            itemDes:"A cylindrical casing of rice paper filled with a shredded mixture of vegetables or chicken and deep fried.",
            price:120,
           },
           {
            id:7,
            itemName:"Nuggets (Veg/Chicken)",
            itemDes:"A small piece of vegetable or deboned chicken meat that is breaded or battered, then deep-fried or baked",
            price:120,
           },
           {
            id:8,
            itemName:"Chicken 65",
            itemDes:"A spicy, deep-fried chicken dish originating from South India",
            price:180,
           },
           {
            id:9,
            itemName:"Chicken Kondattam",
            itemDes:"Chicken pieces marinated in a spicy mixture, deep fried and sautéed in masalas",
            price:190,
           },
           {
            id:10,
            itemName:"Chilli Chicken (Boneless)",
            itemDes:"One of the most popular Indo-chinese style dry/thick gravy dish where chicken is cooked in a variety of sauces",
            price:190,
           },
           {
            id:11,
            itemName:"Dragon Chicken",
            itemDes:"Thin cut chicken strips are marinated in spicy sauce with dry red chillies and cashews and cooked thoroughly",
            price:200,
           },
           {
            id:12,
            itemName:"Chicken Sizzler",
            itemDes:"An open-roasted dish where chicken and vegetables are cooked in a sauce on a hot metal plate.",
            price:220,
           },
           {
            id:13,
            itemName:"Kerala Beef Fry",
            itemDes:"A signature Kerala dish where beef slices are marinated with Indian spices, coconut slices, and curry leaves",
            price:200,
           },
           {
            id:14,
            itemName:"Beef Kondattam",
            itemDes:"A Kerala speciality starter or side for Ghee rice, Kerala Porotta or any Indian bread",
            price:200,
           },
           {
            id:15,
            itemName:"Dragon Beef",
            itemDes:"A popular Indo-Chinese fusion dish where thin cut beef strips are marinated in spicy sauce with dry red chillies and cashews and cooked thoroughly",
            price:200,
           },
           {
            id:16,
            itemName:"Beef Dry Fry",
            itemDes:"A lip-smacking Kerala style fried beef dish where beef is well cooked in an aroma of Indian spices",
            price:200,
           },
           {
            id:17,
            itemName:"Kerala Fish Fry",
            itemDes:"Coated with delicious Indian masala and deep fried in a Tawa this Kerala fish fry is crispy on the outside with a succulent flesh inside",
            price:200,
           },
           {
            id:18,
            itemName:"Fish Fingers",
            itemDes:"Small, thin fillets or bits of fish that are mixed with a spicy seasoning, coated with flour and egg, and deep-fried until crispy and golden brown",
            price:200,
           },

    ],
    soups:[
        {
            id:19,
            itemName:'Tomato Soup',
            itemDes:'A healthy and tasty creamy soup recipe prepared mainly with ripe and juicy tomatoes and other spices',
            price:100
        },
        {
            id:20,
            itemName:'Sweet Corn (Veg/Chicken)',
            itemDes:'A creamy and comforting soup made with sweet corn & packed with veggies that can be enjoyed year-round',
            price:130
        },
        {
            id:21,
            itemName:'Manchow soup (Veg/Chicken)',
            itemDes:'A delicious soup recipe made by cooking finely chopped vegetables in hot & spicy broth filled with Asian flavours',
            price:130
        },
        {
            id:22,
            itemName:'Hot & Sour (Veg/Chicken)',
            itemDes:'A spicy and hot soup made with mixed fresh vegetables, mushrooms, spices and soy sauce',
            price:130
        },

    ],
    sandwiches:[
        {
            id:23,
            itemName:'Veg Sandwich',
            itemDes:'Fresh farm vegetables, lettuce and a slice of cheese filled with toasted bread',
            price:90
        },
        {
            id:24,
            itemName:'Egg & Cheese Sandwich',
            itemDes:'Egg sunny side up layered with cheese and lettuce in toasted bread and dip',
            price:100
        },
        {
            id:25,
            itemName:'Grilled Chicken Sandwich',
            itemDes:'Marinated grilled chicken slices with lettuce and vegetables in a toasted bread and dip',
            price:120
        },
        {
            id:26,
            itemName:'Club Chicken Sandwich',
            itemDes:'A slice of heaven with three layered toasted bread with marinated chicken, egg, vegetables, mayonaise and cheese and dip',
            price:150
        },

    ],
    salads:[
        {
            id:27,
            itemName:'Onion & Tomato Salad',
            itemDes:'Fresh farm tomatos, onions with a sprinkle of lime and pepper',
            price:90
        },
        {
            id:28,
            itemName:'Tossed Green Salad',
            itemDes:'Fresh locally purchased vegetables with a leafy twist for a healthy mea',
            price:120
        },

    ],
    breakfast:[
        {
            id:29,
            itemName:'Thattu Dosa',
            itemDes:'A popular South Indian pancake shaped breakfast made with fermented rice & lentil batter that is healthy, delicious and filling',
            price:80,
        },
        {
            id:30,
            itemName:'Onion Uthappam',
            itemDes:'A traditional South Indian version of the Dosa garnished with onions, tomato, carrots, green chillies & coriander leaves',
            price:90,
        },
        {
            id:31,
            itemName:'Idli',
            itemDes:'A soft, pillowy steamed savory cake made from rice and lentil batter',
            price:60,
        },
        {
            id:32,
            itemName:'Puttu',
            itemDes:'Steamed cylinders of ground rice layered with coconut shavings',
            price:60,
        },
        {
            id:33,
            itemName:'Channa Bhatura',
            itemDes:'A delicious dhaba-style north Indian dish of chickpeas in a delicious sauce of onions and tomato with a puffy, flaky bread',
            price:120,
        },
        {
            id:34,
            itemName:'Poori Bhaji',
            itemDes:'A classic combo where mildly flavored potato side dish is served with tasty deep-fried soft & puffy bread made with wheat flour',
            price:100,
        },
        {
            id:35,
            itemName:'Aloo Paratha Combo',
            itemDes:'Two piping-hot crisp wheat flatbreads stuffed with spiced, faintly sour mashed potatoes stuffing and relished with some tangy sour pickle & curd',
            price:140,
        },
        {
            id:36,
            itemName:'Paneer Paratha Combo',
            itemDes:'Two piping-hot crisp wheat flatbreads stuffed with spiced paneer (Indian cottage cheese) stuffing and relished with some tangy sour pickle & curd',
            price:160,
        },
        {
            id:37,
            itemName:'Egg Paratha Combo',
            itemDes:'Two piping-hot crisp wheat flatbreads stuffed with spiced egg stuffing and relished with some tangy sour mango pickl',
            price:160,
        },
        {
            id:38,
            itemName:'Buffet Breakfast',
            itemDes:'An all-you-can-eat spread of South Indian and North Indian breakfast spread',
            price:200,
        },
        {
            id:39,
            itemName:'English Breakfast',
            itemDes:'Fluffy soft Pancakes served with sausages, scrambled eggs, a side of salad and a glass of fresh fruit juice',
            price:250,
        },
        {
            id:40,
            itemName:'Bread Omlette',
            itemDes:'Hot fresh Indian masala double omlette with slices of bread to crave your filling',
            price:70,
        },
        {
            id:41,
            itemName:'Cornflakes with Milk',
            itemDes:'',
            price:80,
        },
        {
            id:42,
            itemName:'Choice of Eggs',
            itemDes:'',
            price:60,
        },
    ],
    vegetarian:[
        {
            id:43,
            itemName:'Dal Fry',
            itemDes:'A delicious lentil recipe popular in India that is made with tur dal (pigeon pea lentils), onions, tomatoes and spices',
            price:100
        },
        {
            id:44,
            itemName:'Dal Tadka',
            itemDes:'Dal tadka is made with lentils, tomatoes, onion and some spicesspiced with tadka',
            price:110
        },
        {
            id:45,
            itemName:'Channa Masala',
            itemDes:'A popular Indian dish of white chickpeas in a spicy and tangy sauce made from onions and tomatoes.',
            price:100
        },
        {
            id:46,
            itemName:'Mixed Veg Curry',
            itemDes:'A mixture of vegetables cooked together in a traditional Indian onion-tomato gravy',
            price:120
        },
        {
            id:47,
            itemName:'Veg Korma',
            itemDes:'A lightly spiced and delicious curry made with combination of carrots, cauliflower, potatoes, french beans, green pea',
            price:120
        },
        {
            id:48,
            itemName:'Green Peas Masala',
            itemDes:'A delicious curry of green peas prepared in a cashew onion gravy, topped with butter and garnished with coriander leaves',
            price:120
        },
        {
            id:49,
            itemName:'Rajma Masala',
            itemDes:'A lightly spiced, creamy and delicious Punjabi curry made with kidney beans, onions, tomatoes and spices',
            price:140
        },
        {
            id:50,
            itemName:'Dal Makhani',
            itemDes:'A rich curry made with black lentils & red kidney beans slow cooked with spices, butter & cream',
            price:140
        },
        {
            id:51,
            itemName:'Veg Butter Masala',
            itemDes:'A rich & creamy curry made with vegetables, spices, onions, tomatoes, cashews and butter',
            price:200
        },
        {
            id:52,
            itemName:'Paneer Manchurian',
            itemDes:'An Indo-Chinese dish of fried paneer cubes (firm cottage cheese cubes) tossed in a manchurian sauce',
            price:180
        },
        {
            id:53,
            itemName:'Gobi Manchurian',
            itemDes:'A popular Indo-Chinese dish where crispy cauliflower florets are tossed in a manchurian sauce',
            price:150
        },
        {
            id:54,
            itemName:'Paneer Butter Masala',
            itemDes:'A rich & creamy curry made with paneer (Indian cottage Cheese), spices, onions, tomatoes, cashews and butter',
            price:180
        },
        {
            id:55,
            itemName:'Mutter Paneer',
            itemDes:'A delicious dish of fried balls of paneer in a rich and creamy mild gravy made with sweet onions and tomatoes',
            price:200
        },
        {
            id:56,
            itemName:'Shahi Paneer',
            itemDes:'A Mughlai dish where paneer is cooked in a creamy gravy made of onions, yogurt, nut and seeds',
            price:190
        },
        {
            id:57,
            itemName:'Kaju Paneer',
            itemDes:'A unique tasty north indian curry made with cashews and paneer cubes (Indian cottage cheese)',
            price:220
        },
        {
            id:58,
            itemName:'Kadai Paneer',
            itemDes:'A vibrant, tangy, spiced paneer dish made by cooking paneer & bell peppers in a fragrant, fresh ground spice powder',
            price:200
        },
        {
            id:59,
            itemName:'Paneer Kofta',
            itemDes:'A delicious dish of paneer in a rich and creamy mild gravy made with sweet onions and tomatoes',
            price:200
        },
        {
            id:60,
            itemName:'Chilli Gobi',
            itemDes:'An Indo-Chinese recipe that is prepared with cauliflower florets, onion, chillies, flour and lots of spices',
            price:200
        },
        {
            id:61,
            itemName:'Chilli Paneer',
            itemDes:'A rustic and mouth-watering dish in which paneer is cooked with onions, tomatoes and spices',
            price:190
        },
        {
            id:62,
            itemName:'Aloo Gobi',
            itemDes:'A rustic and mouth-watering dish in which potatoes and cauliflower are cooked with onions, tomatoes and spices',
            price:150
        },
        {
            id:63,
            itemName:'Aloo Jeera',
            itemDes:'A classic potato side dish loaded with cumin and fresh herbs',
            price:150
        },
        {
            id:64,
            itemName:'Navratan Korma',
            itemDes:'A delicious creamy and aromatic North Indian curry made with an assortment of veggies, fruits and nut',
            price:190
        },
        {
            id:65,
            itemName:'Malai Kofta',
            itemDes:'A delicious dish of fried balls of potato and paneer in a rich and creamy mild gravy made with sweet onions and tomatoes',
            price:190
        },

    ] 
}

const bgImages={
    appetizers:"https://static.wixstatic.com/media/11062b_6ffa784444774a4997c879c0bd717418~mv2.jpeg/v1/fill/w_803,h_493,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Indian%20Food.jpeg",
    soups: soupBgImage,
    breakfast: breakfastBgImage,
    sandwiches: sandwichBgImage,
    salads: saladBgImage,
    vegetarian: vegetarianBgImage
}

const allMenuCategories=[
    {id:'all',label:'All'},
    {id:'apetizers',label:'Apetizers'},
    {id:'soups',label:'Soups'},
    {id:'sandwiches',label:'Sandwiches'},
    {id:'salads',label:'Salads'},
    {id:'breakfast',label:'Breakfast'},
    {id:'vegetarian',label:'Vegetarian'},
]

export {bgImages, menu, allMenuCategories}