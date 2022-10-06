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

            const filteredAlbum = filterActivate(filter, products);

            arrayRender(filteredAlbum);
        })
        li.append(button);
        ulFilter.append(li);
    });
}
renderFilter(categories)

function filterActivate(value) {

    filteredArray = [];
    let minValue = parseInt(rangeInput[0].value);
    let maxValue = parseInt(rangeInput[1].value);


    products.forEach((e) =>{
        if(value == `${e.category}` && e.price <= maxValue && e.price >= minValue){
            filteredArray.push(e);
        }
    })
    return filteredArray;

    
}