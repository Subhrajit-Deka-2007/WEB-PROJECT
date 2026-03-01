const accessKey = "mEkSa8Jtr8itUy1Xyhsvo1o0SgiMU5a9ZELnqDr_B0Y";
const formE1 = document.querySelector("form");
const searchInputE1 = document.getElementById("search-input");
const searchResultsE1 = document.querySelector(".search-results");
const showMoreButtonE1 = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

// async function searchImages() {
//     inputData = searchInputE1.value;
//     const url = `https://api.unsplash.com/photos/?client_id=${
//         accessKey}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     if (page === 1) searchResultsE1.innerHTML = "";


//     const results = data.results;
//     results.map((result) => {
//         const imageWrapper = document.getElementById("div");
//         imageWrapper.classList.add("search-result");
//         const image = document.createElement("img");
//         image.src = results.urls.small;
//         image.alt = results.alt_description;
//         const imageLink = document.createElement("a");
//         imageLink.href = results.link.html;
//         imageLink.target = "_blank"
//         imageLink.textContent = result.alt_description;
//         imageWrapper.appendChild(image);
//         imageWrapper.appendChild(imageLink);
//         searchResultsE1.appendChild(imageWrapper);
//     });
//     page++;
//     if (page > 1) showMoreButtonE1.style.display = "block";
// }
async function searchImages() {
  inputData = searchInputE1.value;

  // 1. Corrected URL for searching and pagination
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) searchResultsE1.innerHTML = "";

  // 2. Search endpoint returns { results: [...] }, but /photos returns [...]
  // Since we changed to /search/photos, we use data.results
  const results = data.results;

  results.map((result) => {
    // 3. Create a NEW div for every result (don't use getElementById)
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-result");

    const image = document.createElement("img");
    // 4. Use 'result' (the individual item), not 'results' (the array)
    image.src = result.urls.small;
    image.alt = result.alt_description || "Unsplash Image";

    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description || "View on Unsplash";

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    searchResultsE1.appendChild(imageWrapper);
  });

  page++;
  if (page > 1) showMoreButtonE1.style.display = "block";
}
formE1.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
});

showMoreButtonE1.addEventListener("click", () => {
    searchImages();
})
