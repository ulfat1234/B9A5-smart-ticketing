// Function for scrolling to ticket purchase section by clicking Buy Tickets button
function scrollToTicketSection() {
  const ticketSection = document.getElementById('ticket-section');
  ticketSection.scrollIntoView({ behavior: 'smooth' });
 }
 
 
 // Access the buttons of bus seats (accessing only 8 buttons as required)
 const allBtn = document.getElementsByClassName('add-btn');
 
 
 // Use of utility function for updating numeric values
 let seatLeft = 40;
 let seatSelected = 0;
 let totalPrice = 0;
 let grandTotalPrice = 0;
 var selectedSeats = []; // it should be array
 
 
 // Use event delegation for handling button clicks
 document.addEventListener('click', function (event) {
  if (event.target.classList.contains('add-btn')) {
    handleSeatSelection(event.target.id);
  }
 });
 
 
 // Function to handle seat selection
 function handleSeatSelection(seatId) {
  if (seatSelected < 4 && selectedSeats.includes(seatId)) {
    seatLeft--;
    seatSelected++;
    totalPrice += 550;
    grandTotalPrice = totalPrice;
    updateUI();
  }
 }
 
 
 // Function to update UI
 function updateUI() {
  setInnerText("seats-left", seatLeft);
  setInnerText("seat-selected", seatSelected);
  setInnerText("total-price", totalPrice);
  setInnerText("grand-price", grandTotalPrice);
 }
 
 
 // Coupon code discounts lookup table
 const couponDiscounts = {
  'NEW15': 0.15,
  'Couple 20': 0.20
 };
 
 
 // Function to handle applying coupon code
 function setCouponCode() {
  if (seatSelected > 0) {
    const inputCoupon = document.getElementById("coupon").value;
    const discount = couponDiscounts[inputCoupon];
    if (discount !== undefined) {
      grandTotalPrice -= grandTotalPrice * discount;
      setInnerText("grand-price", grandTotalPrice);
      document.getElementById('inputField').classList.add('hidden');
    } else {
      alert('Please insert correct coupon code');
    }
  } else {
    alert('Please Select Your seat');
  }
 }
 
 
 // Event listeners for showing and hiding popups
 const nextBtn = document.getElementById('next');
 nextBtn.addEventListener('click', function (e) {
  document.getElementById('success').classList.remove('hidden');
 });
 
 
 const continueBtn = document.getElementById('continue-btn');
 continueBtn.addEventListener('click', function (e) {
  document.getElementById('success').classList.add('hidden');
 });
 
 
 // Utility Function for updating the numeric value of an element
 function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
 }
 
 
 // Highlight the selected seats
 function setBgColorById(buttonId) {
  const seatButton = document.getElementById(buttonId);
 
 
  if (selectedSeats.includes(buttonId)) {
    const index = selectedSeats.indexOf(buttonId);
    selectedSeats.splice(index, 1);
    seatButton.classList.remove('bg-[#1DD100]');
    seatButton.classList.remove('text-[#FFFFFF]');
    seatButton.classList.add('bg-[#F7F8F8]');
    removeSeatFromCard(buttonId);
    seatLeft++;
    seatSelected--;
    totalPrice -= 550;
    grandTotalPrice = totalPrice;
    updateUI();
  } else {
    if (selectedSeats.length >= 4) {
      return;
    }
    selectedSeats.push(buttonId);
    seatButton.classList.remove('bg-[#F7F8F8]');
    seatButton.classList.add('bg-[#1DD100]');
    seatButton.classList.add('text-[#FFFFFF]');
    addSeatToCard(buttonId);
  }
 }
 
 
 // Add selected seat to card section
 function addSeatToCard(seatId) {
  const cardSection = document.getElementById('card-section');
  cardSection.innerHTML += `
    <tr id="seat-id-${seatId}" class="font-inter mb-4">
                    <td class="flex gap-1 items-center">
                      <h4 class="text-left">${seatId}</h4>
                    </td>
                    <td class="text-left">Economy</td>
                    <td class="text-end">550</td>
                  </tr>
  `;
 }
 
 
 // Remove selected seat from card section
 function removeSeatFromCard(seatId) {
  const cardSection = document.getElementById('card-section');
  const seatElement = document.getElementById(`seat-id-${seatId}`);
  if (seatElement) {
    cardSection.removeChild(seatElement);
  }
 }
 
 
 