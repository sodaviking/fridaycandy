const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", function() {
    const card = this.closest(".product-card");
    const extraItems = card.querySelectorAll(".extra-content");
    const isHidden = extraItems[0].style.display === "" || extraItems[0].style.display === "none";

    extraItems.forEach(item => {
      item.style.display = isHidden ? "list-item" : "none";
    });

    this.textContent = isHidden ? "Mindre.." : "Mer..";
  });
});