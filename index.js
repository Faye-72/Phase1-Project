const init = () => {
  //Add Event Listener
  const bookingForm = document
    .querySelector("#form")
    .addEventListener("submit", handleFormSubmit);

  console.log(bookingForm);
  console.log("before");

  //Event Handler
  function handleFormSubmit(e) {
    e.preventDefault();

    let patientDataObj = {
      fullNames: e.target.fullnames.value,
      telephoneNumber: e.target.telephone_number.value,
      location: e.target.location.value,
      symptom: e.target.symptom.value,
    };
    renderBooking(patientDataObj);
    console.log(patientDataObj);
  }

  function renderBooking(booking) {
    let card = document.createElement("li");
    card.innerHTML = `
    <h4>${booking.fullNames}</h4>
    <h5>${booking.telephoneNumber}</h5>
    <h5>${booking.location}</h5>
    <p><span>${booking.symptom}</span> </p>
    `;
    document.querySelector(".results").appendChild(card);
  }

  function postPatientData(patientDataObj) {
    fetch(" http://localhost:3000/patientData", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(patientDataObj),
    })
      .then((res) => res.json())
      .then((patientData) => console.log(patientData));
  }
};

document.addEventListener("DOMContentLoaded", init);
