export default function loadMenu() {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";

    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu-container");

    const headline = document.createElement("h1");
    headline.textContent = "Our Menu";
    headline.classList.add("menu-headline");
    menuDiv.appendChild(headline);

    const dishes = [
        {
            name: "Gourmet Burger",
            description: "A juicy beef patty with fresh lettuce, tomato, and our special sauce.",
            price: "$12.99",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop"
        },
        {
            name: "Vegan Salad",
            description: "A healthy mix of organic greens, quinoa, and a tangy lemon dressing.",
            price: "$9.99",
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=400&fit=crop"
        },
        {
            name: "Grilled Salmon",
            description: "Fresh salmon grilled to perfection, served with roasted vegetables.",
            price: "$18.99",
            image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=500&h=400&fit=crop"
        },
        {
            name: "Pasta Primavera",
            description: "A delicious pasta with seasonal vegetables and a garlic-butter sauce.",
            price: "$14.99",
            image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=500&h=400&fit=crop"
        },
        {
            name: "Chicken Parmesan",
            description: "Breaded chicken breast topped with marinara sauce and melted mozzarella.",
            price: "$16.99",
            image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=500&h=400&fit=crop"
        },
        {
            name: "Steak Frites",
            description: "A tender sirloin steak served with crispy fries and a side of béarnaise sauce.",
            price: "$22.99",
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=400&fit=crop"
        },
        {
            name: "Caesar Salad",
            description: "Crisp romaine lettuce with Caesar dressing, croutons, and grated Parmesan.",
            price: "$8.99",
            image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?w=500&h=400&fit=crop"
        },
        {
            name: "Lobster Roll",
            description: "Fresh lobster mixed with a creamy dressing, served in a buttery roll.",
            price: "$24.99",
            image: "https://images.unsplash.com/photo-1599789197514-47270cd526b4?w=500&h=400&fit=crop"
        },
        {
            name: "Margherita Pizza",
            description: "Classic pizza with fresh tomatoes, mozzarella, and basil leaves.",
            price: "$13.99",
            image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500&h=400&fit=crop"
        },
        {
            name: "Chocolate Lava Cake",
            description: "A warm, gooey chocolate cake with a molten center, served with vanilla ice cream.",
            price: "$6.99",
            image: "https://images.unsplash.com/photo-1623246123320-0d6636755796?w=500&h=400&fit=crop"
        }
    ];

    dishes.forEach(dish => {
        const dishDiv = document.createElement("div");
        dishDiv.classList.add("menu-item");

        const dishName = document.createElement("h3");
        dishName.textContent = dish.name;
        dishName.classList.add("dish-name");

        const dishDescription = document.createElement("p");
        dishDescription.textContent = dish.description;
        dishDescription.classList.add("dish-description");

        const dishPrice = document.createElement("span");
        dishPrice.textContent = dish.price;
        dishPrice.classList.add("dish-price");

        const dishImage = document.createElement("img");
        dishImage.src = dish.image;
        dishImage.alt = `${dish.name} image`;
        dishImage.classList.add("dish-image");

        dishDiv.appendChild(dishImage);
        dishDiv.appendChild(dishName);
        dishDiv.appendChild(dishDescription);
        dishDiv.appendChild(dishPrice);

        menuDiv.appendChild(dishDiv);
    });

    contentDiv.appendChild(menuDiv);
}