const inventoryTable = document.querySelector("#inventoryTable tbody");

function addItem() {
    const name = document.getElementById("itemName").value;
    const quantity = document.getElementById("itemQuantity").value;
    const price = document.getElementById("itemPrice").value;

    if (name === "" || quantity === "" || price === "") {
        alert("Please fill all fields");
        return;
    }

    const totalPrice = quantity * price;

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${quantity}</td>
        <td>$${price}</td>
        <td>$${totalPrice}</td>
        <td><button onclick="removeItem(this)">Remove</button></td>
    `;

    inventoryTable.appendChild(row);

    // Clear input fields
    document.getElementById("itemName").value = "";
    document.getElementById("itemQuantity").value = "";
    document.getElementById("itemPrice").value = "";
}

function removeItem(button) {
    button.parentElement.parentElement.remove();
}
