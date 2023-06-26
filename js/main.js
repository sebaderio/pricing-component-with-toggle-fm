const periodToggle = document.getElementById("period-toggle");
const priceBasic = document.getElementById("price-basic");
const priceProfessional = document.getElementById("price-professional");
const priceMaster = document.getElementById("price-master");

function setPrices(isMonthly) {
    if (isMonthly) {
        priceBasic.children[1].children[1].textContent = "19.99";
        priceProfessional.children[1].children[1].textContent = "24.99";
        priceMaster.children[1].children[1].textContent = "39.99";
    } else {
        priceBasic.children[1].children[1].textContent = "199.99";
        priceProfessional.children[1].children[1].textContent = "249.99";
        priceMaster.children[1].children[1].textContent = "399.99";
    }
}

function pageTransitions() {
    // Toggle pricing content
    periodToggle.addEventListener("click", (e) => {
        setPrices(e.target.checked);
    });
}

setPrices(false);
pageTransitions();
