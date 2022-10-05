function arrayRender(array) { 

    const ulMain = document.querySelector("#album-list");
    array.forEach(element => {

        const li     = document.createElement("li");
        const div1   = document.createElement("div");
        const div2   = document.createElement("div");
        const div3   = document.createElement("div");
        const img    = document.createElement("img");
        const p1     = document.createElement("p");
        const p2     = document.createElement("p");  
        const p3     = document.createElement("p");
        const p4     = document.createElement("p");
        const p5     = document.createElement("p");
        const button = document.createElement("button");

        p1.innerText = element.title;
        categories.forEach( newElement => {
            const comparative = categories.indexOf(newElement, 0);
            if(element.category == comparative){
                p2.innerText = newElement;
            }
        }) 
        p3.innerText = `R$${element.price},00`;
        img.src = element.img;
        p4.innerText = element.band;
        p5.innerText = element.year;
        button.innerText = "Comprar";

        li.classList.add("album");
        img.classList.add("album-image");
        div2.classList.add("flex");
        p1.classList.add("album-name");
        p1.classList.add("title");
        div3.classList.add("album-footer");
        div3.classList.add("flex-between-center");
        p3.classList.add("album-value");
        p2.classList.add("album-phrase");
        p2.classList.add("value");
        p4.classList.add("album-phrase");
        p5.classList.add("album-phrase");
        button.classList.add("buy-button");

        div1.append(img);
        div2.append(p4, p5, p2);
        div3.append(p3, button);
        li.append(div1, div2, p1, div3);

        ulMain.append(li);
    });
}
arrayRender(products);
