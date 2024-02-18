const allBtn = document.getElementsByClassName('add-btn');
console.log(allBtn);

let seatLeft = 40;
let seatSelected = 0;
for (btn of allBtn) {
    btn.addEventListener('click', function (e) {
        seatLeft = seatLeft - 1;
        setInnerText("seats-left", seatLeft);
    })
}

for (btn of allBtn) {
    btn.addEventListener('click', function (e) {
        seatSelected = seatSelected + 1;
        setInnerText("seat-selected", seatSelected)
    })
}

// Utility Function
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}