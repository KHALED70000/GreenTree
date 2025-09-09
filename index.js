


function MainFunction() {
    let AllcataURL = "https://openapi.programming-hero.com/api/categories"
    fetch(AllcataURL)
        .then(res => res.json())
        .then(data => {
            let categoriesNames = data.categories;
            let cataContainer = document.getElementById("cataContainer");
            categoriesNames.forEach(cataName => {
                let CataSerial = cataName.id;
                cataContainer.innerHTML += `
            <li onclick="selectCategory(${CataSerial}, event)" class="cursor-pointer text-[#1F2937] text-[16px] py-[10px] px-[8px] rounded hover:bg-green-200 active:bg-[#15803D] active:text-white">${cataName.category_name}</li>
            `;

            });

        });


    window.selectAll = () => {


        let plantURL = `https://openapi.programming-hero.com/api/plants`;
        fetch(plantURL)
            .then(res => res.json())
            .then(data => {
                let PLANTS = data.plants;
                const CART_CONTAINER = document.getElementById("cart_container");

                CART_CONTAINER.innerHTML = "";
                PLANTS.forEach(plant => {

                    CART_CONTAINER.innerHTML += `
                    <div id="cart" class="bg-white shadow-sm h-[400px] p-2 rounded-lg flex flex-col space-y-4">
                        <div onclick="modulShow(event)" class="cursor-pointer w-full h-[200px] overflow-hidden flex items-center justify-center rounded-lg">
                            <img src="${plant.image}" alt="demo" class="w-full h-full object-cover"/>
                        </div>
                        <h4 onclick="modulShow(event)" class="cursor-pointer text-[14px] font-inter font-semibold text-[#1F2937]">${plant.name}</h4>
                        <p onclick="modulShow(event)" class="cursor-pointer w-full overflow-hidden text-ellipsis line-clamp-2 text-[12px] font-inter text-[#1F2937]">${plant.description}</p>

                        <div onclick="modulShow(event)" class="flex justify-between items-center">
                            <span class="cursor-pointer bg-[#CFF0DC] rounded-full py-[2px] px-[10px] text-[14px] font-Geist font-medium text-[#15803D]">${plant.name}</span>
                            <span class="cursor-pointer text-[14px] font-Geist font-semibold text-[#1F2937]">৳${plant.price}</span>
                        </div>

                        <button onclick="addToCart(event); TTLLO(event);" class="AddToCart bg-[#15803D] text-white w-full px-4 py-2 rounded-full cursor-pointer">Add to Cart</button>
                    </div>
                `;

                });
            });
        
    };

    window.selectCategory = (id, e) => {
        let cataContainer = document.getElementById("cataContainer");
        let currentBtn = e.currentTarget;
        let buttons = cataContainer.querySelectorAll("li");
        buttons.forEach(btn => {
            if (btn.classList.contains("bg-[#15803D]") && btn.classList.contains("text-white")) {
                btn.classList.remove("bg-[#15803D]", "text-white");
            };
        });
        if (!(currentBtn.classList.contains("bg-[#15803D]") && currentBtn.classList.contains("text-white"))) {
            currentBtn.classList.add("bg-[#15803D]", "text-white");
            if (currentBtn.classList.contains("hover:bg-green-200")) {
                currentBtn.classList.remove("hover:bg-green-200");
            }
        };

        // Fetch plants based on selected category
        let plantURL = `https://openapi.programming-hero.com/api/category/${id}`;
        fetch(plantURL)
            .then(res => res.json())
            .then(data => {
                let PLANTS = data.plants;
                const CART_CONTAINER = document.getElementById("cart_container");
                CART_CONTAINER.innerHTML = "";
                PLANTS.forEach(plant => {

                    CART_CONTAINER.innerHTML += `
                    <div id="cart" class="bg-white shadow-sm h-[400px] p-2 rounded-lg flex flex-col space-y-4">
                        <div onclick="modulShow(event)" class="cursor-pointer w-full h-[200px] overflow-hidden flex items-center justify-center rounded-lg">
                            <img src="${plant.image}" alt="demo" class="w-full h-full object-cover"/>
                        </div>
                        <h4 onclick="modulShow(event)" class="cursor-pointer text-[14px] font-inter font-semibold text-[#1F2937]">${plant.name}</h4>
                        <p onclick="modulShow(event)" class="cursor-pointer w-full overflow-hidden text-ellipsis line-clamp-2 text-[12px] font-inter text-[#1F2937]">${plant.description}</p>

                        <div onclick="modulShow(event)" class="flex justify-between items-center">
                            <span class="cursor-pointer bg-[#CFF0DC] rounded-full py-[2px] px-[10px] text-[14px] font-Geist font-medium text-[#15803D]">${plant.name}</span>
                            <span class="cursor-pointer text-[14px] font-Geist font-semibold text-[#1F2937]">৳${plant.price}</span>
                        </div>

                        <button onclick="addToCart(event); TTLLO(event);" class="AddToCart bg-[#15803D] text-white w-full px-4 py-2 rounded-full cursor-pointer">Add to Cart</button>
                    </div>
                `;
                });
            });
    };


    // fetch(AllcataURL)
    //     .then(res => res.json())
    //     .then(data => {
    //         let categoriesNames = data.categories;
    //         let cataContainer = document.getElementById("cataContainer");


    //         categoriesNames.forEach(cataName => {
    //             let CataSerial = cataName.id;
    //             cataContainer.innerHTML += `
    //         <li onclick="selectCategory(${CataSerial}, event)" class="cursor-pointer text-[#1F2937] text-[16px] py-[10px] px-[8px] rounded hover:bg-green-200 active:bg-[#15803D] active:text-white">${cataName.category_name}</li>
    //         `;

    //         });

    //     });
};



MainFunction();
document.addEventListener("DOMContentLoaded", () => {
    selectAll();
});





let addToCart = (e) => {
    let AddCartBtn = e.currentTarget;
    let CART = AddCartBtn.parentElement;

    // AddCartBtn.addEventListener("click", TTLLO()) 

    let plantName = CART.querySelector("h4").innerText;
    let plantPrice = parseInt(CART.querySelector("div span:nth-child(2)").innerText.slice(1));

    // console.log(plantPrice); //

    let AddCartContainer = document.getElementById("AddCartContainer");


    AddCartContainer.innerHTML += `
    <div class="nam_price flex justify-between items-center mb-2 pb-2 bg-[#E6FAED] p-2 rounded-lg">
                                <div>
                                    <h5 class="font-inter font-semibold">${plantName}</h5>
                                    <span class="priceCart text-[12px] font-inter text-[#1F2937]">৳ <span class="ntg">${plantPrice}</span> x 1</span>
                                </div>
                                <button onclick="DecreaseTTLLO(event)" class="text-[#8C8C8C] cursor-pointer"><i class="fa-solid fa-xmark"></i></button>
                            </div>
    `;
    let totalCoubter = document.getElementById("ParentAddCartContainer");
    if (totalCoubter) {
        if (AddCartContainer.innerHTML !== "") {

            totalCoubter.style.display = "block";

        }
    };

    let removeItemButtons = AddCartContainer.querySelectorAll("button");
    removeItemButtons.forEach(button => {
        button.addEventListener("click", () => {
            button.parentElement.remove();

            let currentButtons = AddCartContainer.querySelectorAll("button");

            if (currentButtons.length === 0) {
                totalCoubter.style.display = "none";
            };

        });
    });

};


let allProce = [];

function TTLLO(e) {
    let AddCartBtn = e.currentTarget;
    let CART = AddCartBtn.parentElement;
    let plantPrice = parseInt(CART.querySelector("div span:nth-child(2)").innerText.slice(1));

    let showTotalElem = document.getElementById("totalCartPrice");
    allProce.push(plantPrice);

    let totalAmount = allProce.reduce((sum, price) => sum + price, 0);



    showTotalElem.innerText = `${totalAmount}`;

    // console.log(totalAmount);
};


// .innerText.slice(1)
function DecreaseTTLLO(e) {
    let CrossCartBtn = e.currentTarget;
    let CART = CrossCartBtn.parentElement;
    let plantPriceElem = CART.querySelector("div .priceCart .ntg");
    let plantPrice = parseInt(plantPriceElem.innerText);
    // allProce.push(plantPrice);

    let index = allProce.indexOf(plantPrice);
    if (index !== -1) {
        allProce.splice(index, 1);
    }

    let totalAmount = allProce.reduce((sum, price) => sum + price, 0);
    let showTotalElem = document.getElementById("totalCartPrice");

    // let decewaseAmmount = totalAmount - plantPrice;

    // let showTotalElem = document.getElementById("totalCartPrice");
    showTotalElem.innerText = `${totalAmount}`;

    // console.log(totalAmount);
};


function modulRemove(e) {
    let closeBtn = e.currentTarget;
    let PRcloseBtn = closeBtn.parentElement;
    let MODULcart = PRcloseBtn.parentElement;
    let MODULbox = MODULcart.parentElement;

    MODULbox.style.display = "none";
};

function modulShow(e) {
    let MODULbox = document.getElementById("MODULID");
    MODULbox.style.display = "flex";

    let ThisItem = e.currentTarget;
    let CART = ThisItem.parentElement;

    let PlantName = CART.querySelector("h4").innerText;
    let PlantDescription = CART.querySelector("p").innerText;
    let PlantPrice = CART.querySelector("div span:nth-child(2)").innerText;
    let PlantImage = CART.querySelector("img").src;

    document.getElementById("PlantImage").src = `${PlantImage}`;
    document.getElementById("PlantName").innerText = `${PlantName}`;
    document.getElementById("PlantPrice").innerText = `${PlantPrice}`;
    document.getElementById("PlantDescription").innerText = `${PlantDescription}`;

}