function MainFunction() {
    let AllcataURL = "https://openapi.programming-hero.com/api/categories"


    window.selectAll = (e) => {
        // let buttons = document.querySelectorAll("#cataContainer li");
        // buttons.forEach(btn => {


        //     if (btn.classList.contains("bg-[#15803D]") && btn.classList.contains("text-white")) {
        //         btn.classList.remove("bg-[#15803D]", "text-white");
        //     };
        // });

        // let currentBtn;
        // if (e && e.currentTarget) {
        //     currentBtn = e.currentTarget;
        // } else {
        //     currentBtn = buttons[0]; 
        // }



        // if (currentBtn && !(currentBtn.classList.contains("bg-[#15803D]") && currentBtn.classList.contains("text-white"))) {
        //     currentBtn.classList.add("bg-[#15803D]", "text-white");
        // };

        let plantURL = `https://openapi.programming-hero.com/api/plants`;
        fetch(plantURL)
            .then(res => res.json())
            .then(data => {
                let PLANTS = data.plants;
                const CART_CONTAINER = document.getElementById("cart_container");
                CART_CONTAINER.innerHTML = "";
                PLANTS.forEach(plant => {

                    CART_CONTAINER.innerHTML += `
                    <div id="cart" class="bg-white shadow-sm h-[400px] p-4 rounded-lg flex flex-col space-y-4">
                        <div class="w-full h-[200px] overflow-hidden flex items-center justify-center rounded-lg">
                            <img src="${plant.image}" alt="demo" class="w-full h-full object-cover"/>
                        </div>
                        <h4 class="text-[14px] font-inter font-semibold text-[#1F2937]">${plant.name}</h4>
                        <p class="w-full overflow-hidden text-ellipsis line-clamp-2 text-[12px] font-inter text-[#1F2937]">asdfasdfasdf asdfasdffs
                            asdfasdfasdf asdfasdfasdf asdfasdfasdf asdfasdf asdfasd sdasdf asdfsadf asdfasdf asdf asdf
                        </p>

                        <div class="flex justify-between items-center">
                            <span class="bg-[#CFF0DC] rounded-full py-[2px] px-[10px] text-[14px] font-Geist font-medium text-[#15803D]">${plant.name}</span>
                            <span class="text-[14px] font-Geist font-semibold text-[#1F2937]">৳${plant.price}</span>
                        </div>

                        <button class="bg-[#15803D] text-white w-full px-4 py-2 rounded-full cursor-pointer">Add to Cart</button>
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
            if(currentBtn.classList.contains("hover:bg-green-200")){
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
                    <div id="cart" class="bg-white shadow-sm h-[400px] p-4 rounded-lg flex flex-col space-y-4">
                        <div class="w-full h-[200px] overflow-hidden flex items-center justify-center rounded-lg">
                            <img src="${plant.image}" alt="demo" class="w-full h-full object-cover"/>
                        </div>
                        <h4 class="text-[14px] font-inter font-semibold text-[#1F2937]">${plant.name}</h4>
                        <p class="w-full overflow-hidden text-ellipsis line-clamp-2 text-[12px] font-inter text-[#1F2937]">asdfasdfasdf asdfasdffs
                            asdfasdfasdf asdfasdfasdf asdfasdfasdf asdfasdf asdfasd sdasdf asdfsadf asdfasdf asdf asdf
                        </p>

                        <div class="flex justify-between items-center">
                            <span class="bg-[#CFF0DC] rounded-full py-[2px] px-[10px] text-[14px] font-Geist font-medium text-[#15803D]">${plant.name}</span>
                            <span class="text-[14px] font-Geist font-semibold text-[#1F2937]">৳${plant.price}</span>
                        </div>

                        <button class="bg-[#15803D] text-white w-full px-4 py-2 rounded-full cursor-pointer">Add to Cart</button>
                    </div>
                `;

                });
            });
    };
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



};



MainFunction();
document.addEventListener("DOMContentLoaded", () => {
    selectAll(); // DOM ready হলে default প্রথম li তে highlight হবে
});






