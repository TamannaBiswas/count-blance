function inputFileValue(id) {
  const addInput = document.getElementById(id).value;
  const numberAddInput = parseFloat(addInput);
  return numberAddInput;
}
function accountBlance(id) {
  const accountBlanceValue = document.getElementById(id).innerText;
  const numberAccountBlance = parseFloat(accountBlanceValue);
  return numberAccountBlance;
}
function showSectionById(id) {
  document.getElementById("add-money-form").classList.add("hidden");
  document.getElementById("add-cass-out-form").classList.add("hidden");
  document.getElementById("transitio-section").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");
}
