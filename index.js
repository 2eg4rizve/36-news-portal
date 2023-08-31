// const handleCategory = () => {
//     fetch("https://openapi.programming-hero.com/api/news/categories")
//         .then((res) => res.json())
//         .then((data) => console.log(data))
//         .catch ((err) => console.log(err));
// }

const handleCategory = async () => {

    console.log("hello 1");
    const response = await fetch(
        "https://openapi.programming-hero.com/api/news/categories"
    );
    const data =await response.json();

    console.log(data);
}


handleCategory();