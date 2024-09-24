const ticktDetails = document.getElementById("ticktDetails");
const indicator = document.getElementById("indicator");
const availableSeat = document.getElementById("availableSeat");

let arr = [];
function busTicket(access) {
  const div = document.createElement("div");
  if (arr.includes(access.innerText)) {
    access.classList.toggle("bg-green-500");
    ticktDetails.removeChild(document.getElementById(access.innerText));
    const newAvaiableSeat = parseFloat(availableSeat.innerText) + 1;
    availableSeat.innerText = newAvaiableSeat;

    const newIndicatorSeat = parseFloat(indicator.innerText) - 1;
    indicator.innerText = newIndicatorSeat;

    arr = arr.filter(function (eachElement) {
      return eachElement !== access.innerText;
      // function Nucleus
    });
  } else {
    if (arr.length >= 4) {
      alert("One person can booked maximum 4 tickets");
      return;
    }
    access.classList.toggle("bg-green-500");
    // flex justify-between py-2
    div.setAttribute("id", `${access.innerText}`);
    div.classList.add("flex", "justify-between", "py-2");
    div.innerHTML = `<h4>${access.innerText}</h4>
        <h4>Economoy</h4>
        <h4>550</h4>
        </div>`;
    ticktDetails.append(div);
    arr.push(access.innerText);

    const newAvaiableSeat = parseFloat(availableSeat.innerText) - 1;
    availableSeat.innerText = newAvaiableSeat;

    const newIndicatorSeat = parseFloat(indicator.innerText) + 1;
    indicator.innerText = newIndicatorSeat;
  }
}
