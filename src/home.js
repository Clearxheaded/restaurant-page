export default function loadHome() {

    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";

    const headline = document.createElement("h1");
    headline.textContent = "Welcome to our restaurant!";
    headline.classList.add("restaurant-headline");

    const image = document.createElement("img");
    image.classList.add("restaurant-image");
    image.src = "https://via.placeholder.com/400";
    image.alt = "Restaurant image";

    const description = document.createElement("p");
    description.classList.add("restaurant-description");
    description.textContent = "Welcome to Gourmet Haven, where every meal is a celebration of flavor and tradition. Nestled in the heart of the city, our restaurant offers a cozy ambiance perfect for family dinners, romantic evenings, or casual gatherings with friends. Our chefs craft each dish with passion, using only the freshest ingredients sourced from local farms. From mouth-watering appetizers to decadent desserts, every bite tells a story of culinary excellence. Whether you're here for our signature dishes, a glass of fine wine, or just to enjoy the warm atmosphere, we promise an unforgettable dining experience. Come, savor the taste of perfection at Gourmet Haven!";

    contentDiv.appendChild(headline);
    contentDiv.appendChild(image);
    contentDiv.appendChild(description);
}