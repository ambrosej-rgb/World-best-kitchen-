// Database of dishes (USD & UGX)
const menuItems = [
    // Chicken 🍗
    {
        id: 1,
        title: "Crispy Fried Chicken and chips",
        category: "chicken",
        priceUsd: "$18.50",
        priceUgx: "UGX 68,000",
        img: "./images/fried-chicken.jpg",
        desc: "Half chicken marinated in herbs, slow-smoked over hickory embers."
    },
    {
        id: 2,
        title: "Fiery Peri-Peri Wings",
        category: "chicken",
        priceUsd: "$12.00",
        priceUgx: "UGX 45,000",
        img: "./images/chicken-wings.jpg",
        desc: "Crispy grilled wings tossed in homemade African bird's eye chili glaze."
    },

    // Burgers 🍔
    {
        id: 3,
        title: "The Flame Monster Burger",
        category: "burgers",
        priceUsd: "$16.00",
        priceUgx: "UGX 60,000",
        img: "./images/burger2.jpeg",
        desc: "Double smashed beef patties, smoked bacon, aged cheddar, and house sauce."
    },
    {
        id: 4,
        title: "Truffle Mushroom Burger",
        category: "burgers",
        priceUsd: "$15.50",
        priceUgx: "UGX 58,000",
        img: "./images/monster-burger.jpeg",
        desc: "Angus patty topped with garlic sauteed mushrooms and truffle mayo."
    },

    // Pizza 🍕
    {
        id: 5,
        title: "Neapolitan Pepperoni",
        category: "pizza",
        priceUsd: "$17.00",
        priceUgx: "UGX 63,000",
        img: "./images/classic-cheese-pizza.jpg",
        desc: "San Marzano tomato base, fresh mozzarella, artisanal pepperoni, honey drizzle."
    },
    {
        id: 6,
        title: "Wild Mushroom & Truffle Pizza",
        category: "pizza",
        priceUsd: "$19.00",
        priceUgx: "UGX 70,000",
        img: "./images/veggie-pizza.jpg",
        desc: "White pizza base with roasted wild mushrooms, rosemary, and white truffle oil."
    },

    // Seafood 🦞
    {
        id: 7,
        title: "Charred Garlic Butter Lobster",
        category: "seafood",
        priceUsd: "$32.00",
        priceUgx: "UGX 120,000",
        img: "./images/seafood2.jpg",
        desc: "Fresh whole lobster grilled over open flame with garlic lemon butter."
    },
    {
        id: 8,
        title: "Crispy Calamari Rings",
        category: "seafood",
        priceUsd: "$14.00",
        priceUgx: "UGX 52,000",
        img: "./images/garlic-lobster2.jpeg",
        desc: "Lightly battered squid rings served with garlic aioli and lemon wedges."
    },

    // Desserts 🍰
    {
        id: 9,
        title: "Molten Chocolate Lava Cake",
        category: "desserts",
        priceUsd: "$8.50",
        priceUgx: "UGX 32,000",
        img: "./images/dessert1.jpeg",
        desc: "Warm dark chocolate cake with a gooey center, paired with vanilla ice cream."
    },

    // Drinks 🍹
    {
        id: 10,
        title: "Smoked Ember Cocktail",
        category: "drinks",
        priceUsd: "$11.00",
        priceUgx: "UGX 40,000",
        img: "./images/cocktail.jpg",
        desc: "Bourbon, fresh lemon, honey syrup, infused with applewood smoke."
    }
];

window.menuItems = menuItems;
