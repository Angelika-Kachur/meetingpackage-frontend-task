let bookingRequestSummary = {
    "Title": "“Venue Luna House”",
    "Picture": "see attachment",
    "Date": "Friday, February 14, 2019 - 09: 00 to 17: 00",
    "Room": "Lounge",
    "Delegates": "10",
    "Price Per Delegate": "55 EUR",
    "Total Price": "550 EUR"
}

function fillBookingReqList() {
    let bookingReqListElem = document.getElementById("booking-req-list");

    for (key in bookingRequestSummary) {
        if (bookingRequestSummary.hasOwnProperty(key)) {
            let li = document.createElement("li");

            let spanTitle = document.createElement("span");
            spanTitle.classList.add("title");
            spanTitle.innerHTML = key + ": ";

            let spanValue = document.createElement("span");
            spanValue.classList.add("value");
            spanValue.innerHTML = bookingRequestSummary[key];

            li.appendChild(spanTitle);
            li.appendChild(spanValue);

            bookingReqListElem.appendChild(li)
        }
    }
};

fillBookingReqList();