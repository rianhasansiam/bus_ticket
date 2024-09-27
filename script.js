const ticktDetails = document.getElementById("ticktDetails");
const indicator = document.getElementById("indicator");
const availableSeat = document.getElementById("availableSeat");
const cuponBtn=document.getElementById('cuponBtn')
const cuponInput=document.getElementById('cuponInput');
const totalPrice=document.getElementById('totalPrice');
const discount=document.getElementById('discount');
const grandTk=document.getElementById('grandTk');
const reload=document.getElementById('reload');




// button click
let arr = [];
let totalTk=0
let vgrandTK=totalTk
// let rian=['234','234','23']
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
  }
   else {
    if (arr.length >= 5) {
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
 
  totalTk=550*arr.length;
  totalPrice.innerHTML=`${totalTk} BDT`
  grandTk.innerText=`${totalTk} BDT`
// btn disabled
  if(arr.length > 3){
    cuponBtn.removeAttribute('disabled');
    
    cuponInput.removeAttribute('disabled');

    cuponBtn.classList.add('bg-green-500');
    cuponBtn.classList.remove('bg-gray-500');
    
  }
  else{
    discount.classList.add('hidden');
    cuponBtn.setAttribute("disabled",'')
    cuponInput.setAttribute("disabled",'')
    cuponBtn.classList.add('bg-gray-500');
    cuponBtn.classList.remove('bg-green-500');
  }

  

}
  


cuponBtn.addEventListener('click', function(){

if(cuponInput.value !=="RIAN"){
    
  alert('Cupon Number not matching...!')
  return cuponInput.value='';
  
  }
  cuponInput.value=''
  discount.classList.remove('hidden');
  vgrandTK=totalTk-200;

  grandTk.innerText=`${vgrandTK} BDT`

})

reload.addEventListener('click', function(){
  window.location.reload();
})