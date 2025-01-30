export default function loadAboutUs() {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";

    const aboutUsDiv = document.createElement("div");
    aboutUsDiv.classList.add("about-us-container");

    const headline = document.createElement("h1");
    headline.textContent = "About Us";
    headline.classList.add("about-us-headline");

    const description = document.createElement("p");
    description.classList.add("about-us-description");
    description.textContent = "Gourmet Haven was founded with the goal of offering a place where culinary excellence meets a warm, welcoming atmosphere. Our team is passionate about creating dishes that not only tantalize the taste buds but also tell a story of tradition, love, and creativity. From farm-to-table ingredients to innovative recipes, we strive to make every meal a memorable experience for our guests.";

    const mission = document.createElement("p");
    mission.classList.add("about-us-mission");
    mission.textContent = "Our mission is simple: to provide exceptional food, exceptional service, and an exceptional experience. Whether you're dining with friends, family, or colleagues, we want every visit to be a celebration of food and community.";

    const image = document.createElement("img");
    image.classList.add("about-us-image");
    image.src = "https://via.placeholder.com/600";
    image.alt = "About Us image";

    aboutUsDiv.appendChild(headline);
    aboutUsDiv.appendChild(description);
    aboutUsDiv.appendChild(mission);
    aboutUsDiv.appendChild(image);

    contentDiv.appendChild(aboutUsDiv);
}
