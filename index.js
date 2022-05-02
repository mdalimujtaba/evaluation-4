// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",indexfun)
var homeArr=JSON.parse(localStorage.getItem("schedule"))||[];
function indexfun(){
  event.preventDefault();
  console.log("adsdfdf")
  var homeObj={
    number: masaiForm.matchNum.value,
    teamA: masaiForm.teamA.value,
    teamB:masaiForm.teamB.value,
    date:masaiForm.date.value,
    venue:masaiForm.venue.value
  }
  homeArr.push(homeObj)
  console.log(homeArr)
  localStorage.setItem("schedule",JSON.stringify(homeArr))
}