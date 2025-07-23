const foodList = [
    {Food: "Carrot", Type: "Vegetable"},
    {Food: "Apple", Type: "Fruit"},
    {Food: "Banana", Type: "Fruit"},
    {Food: "Broccoli", Type: "Vegetable"},
]

foodList.forEach(item => {
    foodItem = document.createElement("option");
    foodItem.textContent = item.Food;
    foodItem.value = item.Food;
    foodItem.setAttribute("data-type", item.Type);
    document.getElementById("food-select").appendChild(foodItem);
})


document.getElementById("food-select").addEventListener("change", function() {
    const selectedFood = this.value;
    const foodType = this.options[this.selectedIndex].getAttribute("data-type");
    const label = document.createElement("label");


    
    if (foodType === "Fruit") {
        document.querySelector("label[for='food-select']").textContent = "Auglis: ";
        const label = document.createElement("label");
        label.textContent = "Dārzenis: ";
        label.setAttribute("for", "vegetable-select");
        document.getElementById("food-select").parentNode.appendChild(label);
        const vegetableMenu = document.createElement("select")
        vegetableMenu.id = "vegetable-select";
        

        document.getElementById("food-select").parentNode.appendChild(vegetableMenu);
        const originalSelect = document.getElementById("food-select");
        for (let i = originalSelect.options.length - 1; i >= 0; i--) {
        const opt = originalSelect.options[i];
        if (opt.getAttribute("data-type") === "Vegetable") {
            vegetableMenu.appendChild(opt);
          }
        }

    }
})