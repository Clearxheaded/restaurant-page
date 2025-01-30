export default function loadMenu() {

    const contentDiv = document.querySelector("#content");

    const menuDiv = document.createElement("div"); // this will contain the entire menu content
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
            image: "https://via.placeholder.com/200"
        },
        {
            name: "Vegan Salad",
            description: "A healthy mix of organic greens, quinoa, and a tangy lemon dressing.",
            price: "$9.99",
            image: "https://via.placeholder.com/200"
        },
        {
            name: "Grilled Salmon",
            description: "Fresh salmon grilled to perfection, served with roasted vegetables.",
            price: "$18.99",
            image: "https://via.placeholder.com/200"
        },
        {
            name: "Pasta Primavera",
            description: "A delicious pasta with seasonal vegetables and a garlic-butter sauce.",
            price: "$14.99",
            image: "https://via.placeholder.com/200"
        },
        {
            name: "Chicken Parmesan",
            description: "Breaded chicken breast topped with marinara sauce and melted mozzarella.",
            price: "$16.99",
            image: "https://via.placeholder.com/200"
        },
        {
            name: "Steak Frites",
            description: "A tender sirloin steak served with crispy fries and a side of béarnaise sauce.",
            price: "$22.99",
            image: "https://via.placeholder.com/200"
        },
        {
            name: "Caesar Salad",
            description: "Crisp romaine lettuce with Caesar dressing, croutons, and grated Parmesan.",
            price: "$8.99",
            image: "https://via.placeholder.com/200"
        },
        {
            name: "Lobster Roll",
            description: "Fresh lobster mixed with a creamy dressing, served in a buttery roll.",
            price: "$24.99",
            image: "https://via.placeholder.com/200"
        },
        {
            name: "Margherita Pizza",
            description: "Classic pizza with fresh tomatoes, mozzarella, and basil leaves.",
            price: "$13.99",
            image: "https://via.placeholder.com/200"
        },
        {
            name: "Chocolate Lava Cake",
            description: "A warm, gooey chocolate cake with a molten center, served with vanilla ice cream.",
            price: "$6.99",
            image: "https://via.placeholder.com/200"
        }
    ]

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

        dishDiv.appendChild(dishName);
        dishDiv.appendChild(dishDescription);
        dishDiv.appendChild(dishPrice);
        dishDiv.appendChild(dishImage);

        menuDiv.appendChild(dishDiv);
    });

    contentDiv.appendChild(menuDiv);
}