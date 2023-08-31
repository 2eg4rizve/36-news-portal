// const handleCategory = () => {
//     fetch("https://openapi.programming-hero.com/api/news/categories")
//         .then((res) => res.json())
//         .then((data) => console.log(data))
//         .catch ((err) => console.log(err));
// }

const handleCategory = async () => {


    // console.log("hello 1");
    const response = await fetch(
        "https://openapi.programming-hero.com/api/news/categories"
    );
    const data = await response.json();

    const tabContainer = document.getElementById('tab-container');

    data.data.news_category.slice(0,3).forEach((category) => {
    
    console.log(category);

    const div = document.createElement("div");

    div.innerHTML = `

        <a onclick="handelLoadNews ('${category
            .category_id}') " class="tab">${category.category_name}</a>

        `;

        tabContainer.appendChild(div);

    });



console.log(data.data.news_category);
}

const handelLoadNews = (categoryId) =>{
    console.log(categoryId);
}


handleCategory();