document.addEventListener("DOMContentLoaded", showCart);

function showCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItems = document.getElementById("cart-items");
    let totalPrice = document.getElementById("total-price");

    cartItems.innerHTML = ""; // پاک کردن جدول قبلی
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;

        let row = document.createElement("tr");

        // نام محصول
        let tdName = document.createElement("td");
        tdName.textContent = item.name;
        row.appendChild(tdName);

        // قیمت
        let tdPrice = document.createElement("td");
        tdPrice.textContent = item.price;
        row.appendChild(tdPrice);

        // تعداد
        let tdQty = document.createElement("td");
        tdQty.textContent = item.quantity;
        row.appendChild(tdQty);

        // جمع ردیف
        let tdSum = document.createElement("td");
        tdSum.textContent = item.price * item.quantity;
        row.appendChild(tdSum);

        // سلول عملیات
        let tdAction = document.createElement("td");

        // دکمه افزایش
        let btnIncrease = document.createElement("button");
        btnIncrease.textContent = "➕";
        btnIncrease.addEventListener("click", () => {
            item.quantity++;
            localStorage.setItem("cart", JSON.stringify(cart));
            showCart();
        });
        tdAction.appendChild(btnIncrease);

        // دکمه کاهش
        let btnDecrease = document.createElement("button");
        btnDecrease.textContent = "➖";
        btnDecrease.addEventListener("click", () => {
            if (item.quantity > 1) {
                item.quantity--;
                localStorage.setItem("cart", JSON.stringify(cart));
                showCart();
            }
        });
        tdAction.appendChild(btnDecrease);

        // دکمه حذف
        let btnRemove = document.createElement("button");
        btnRemove.textContent = "❌ حذف";
        btnRemove.addEventListener("click", () => {
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            showCart();
        });
        tdAction.appendChild(btnRemove);

        row.appendChild(tdAction);

        cartItems.appendChild(row);
    });

    totalPrice.textContent = total;
}