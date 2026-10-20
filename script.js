/*jslint browser*/
(function () {
    "use strict";

    function calculateCost(event) {
        var form = event.currentTarget;
        var quantityInput = form.elements.quantity;
        var productSelect = form.elements.product;
        var result = document.getElementById("result");
        var quantityText = quantityInput.value;
        var quantityMatch = quantityText.match(/^\d+$/);
        var quantity;
        var price;
        var total;

        event.preventDefault();
        result.classList.remove("success", "error");

        if (quantityMatch === null) {
            result.textContent = "Ошибка: количество должно содержать только цифры.";
            result.classList.add("error");
            return;
        }

        quantity = parseInt(quantityText, 10);

        if (quantity < 1) {
            result.textContent = "Ошибка: количество товара должно быть больше нуля.";
            result.classList.add("error");
            return;
        }

        price = parseInt(productSelect.value, 10);
        total = price * quantity;

        result.textContent = "Стоимость заказа: " + total + " ₽";
        result.classList.add("success");
    }

    window.addEventListener("DOMContentLoaded", function () {
        var form = document.getElementById("order-form");
        form.addEventListener("submit", calculateCost);
    });
}());
