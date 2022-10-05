function renderFilter(array){
    const ulFilter = document.querySelector(".filters-list");

    array.forEach(e => {
        const li = document.createElement("li");
        const button = document.createElement("button"); 

        button.innerText = e;
        button.classList.add("filter-button");

        button.addEventListener("click", (e)=>{
            e.preventDefault;


        })
        li.append(button);
        ulFilter.append(li);
    });
}

renderFilter(categories);