const ulMain = document.querySelector("#album-list");

const cardValue  = document.querySelector(".value");

function renderFilter(array) {
    const ulFilter = document.querySelector(".filters-list");

    array.forEach(e => {
        const li = document.createElement("li");
        const button = document.createElement("button"); 
        const value = categories.indexOf(e, 0);

        button.innerText = e; 
        button.value = value;
        button.classList.add("filter-button");

        button.addEventListener("click", (e)=>{
            e.preventDefault;

            ulMain.innerHTML = "";

            const filter = button.value;

            if(filter === "0") {
             arrayRender(products);
            }

            const filteredAlbum = filterActivate(filter);

            arrayRender(filteredAlbum);
        })
        li.append(button);
        ulFilter.append(li);
    });
}
renderFilter(categories)

function filterActivate(value){

    filteredArray = [];

    products.forEach((e) =>{
        if(value == `${e.category}`){
            filteredArray.push(e);
        }
    })
    return filteredArray;
}