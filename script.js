const bookingForm = document.getElementById('booking-form');
const bookButton = document.getElementById('book-button');
const bookingSummary = document.getElementById('booking-summary');
const bookingDetails = document.getElementById('booking-details');

let bookingData = {};

bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const checkInDate = document.getElementById('check-in-date').value;
    const checkOutDate = document.getElementById('check-out-date').value;
    const roomType = document.getElementById('room-type').value;
    const numberOfGuests = document.getElementById('number-of-guests').value;

    bookingData = {
        checkInDate,
        checkOutDate,
        roomType,
        numberOfGuests
    };

    bookButton.disabled = true;
    bookButton.textContent = 'Booking...';

    setTimeout(() => {
        bookButton.disabled = false;
        bookButton.textContent = 'Book Now';
        displayBookingSummary();
    }, 2000);
});

function displayBookingSummary() {
    const checkInDate = bookingData.checkInDate;
    const checkOutDate = bookingData.checkOutDate;
    const roomType = bookingData.roomType;
    const numberOfGuests = bookingData.numberOfGuests;

    const summaryText = `
        Check-in Date: ${checkInDate}
        Check-out Date: ${checkOutDate}
        Room Type: ${roomType}
        Number of Guests: ${numberOfGuests}
    `;

    bookingDetails.textContent = summaryText;
    bookingSummary.style.display = 'block';
}
