
// function for scroll to ticket purchase section by clicking Buy Tickets button
function scrollToTicketSection() {
    const ticketSection = document.getElementById('ticket-section');
    ticketSection.scrollIntoView({ behavior: 'smooth' });
}

// Access the buttons of bus seats(**accessed only 8 buttons as required**)
const allBtn = document.getElementsByClassName('add-btn');


// Use of utility function for updating numeric values
let seatLeft = 40;
let seatSelected = 0;
let totalPrice = 0;
for (btn of allBtn) {
    btn.addEventListener('click', function (e) {
        seatLeft = seatLeft - 1;
        setInnerText("seats-left", seatLeft);

        seatSelected = seatSelected + 1;
        setInnerText("seat-selected", seatSelected);

        totalPrice = totalPrice + 550;
        setInnerText("total-price", totalPrice);
    })
}

// highlight the selected seats
function setBgColorById(buttonId) {
    const element = document.getElementById(buttonId);
    element.classList.remove('bg-[#F7F8F8]');
    element.classList.add('bg-[#1DD100]');
}


// show popup when click the next button
const nextBtn = document.getElementById('next');
nextBtn.addEventListener('click', function (e) {
    const hiddenItem = document.getElementById('success');
    hiddenItem.classList.remove('hidden');
});
console.log(nextBtn)

// hide popup when click the continue button
const continueBtn = document.getElementById('continue-btn');
continueBtn.addEventListener('click', function (e) {
    const hiddenItem = document.getElementById('success');
    hiddenItem.classList.add('hidden');
})

// Utility Function for updating the numeric value of an element
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}
