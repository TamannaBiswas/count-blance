document
  .getElementById("btn-coss-out-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cassMcneyValue = inputFileValue("input-cass-oute-money");
    const cassPinValue = inputFileValue("input-cass-out-pin");

    if (isNaN(cassMcneyValue)) {
      alert("Failed to cass out");
      return;
    }
    if (cassPinValue === 123) {
      const balance = accountBlance("account-blance");
      if (cassMcneyValue > balance) {
        alert("You do not have enough money to cash out");
        return;
      }
      const newBalance = balance - cassMcneyValue;
      document.getElementById("account-blance").innerText = newBalance;

      const div = document.createElement("div");
      div.classList.add("bg-yellow-200");
      div.innerHTML = `
      <h4 class="text-2xl font-bold">Cash Out</h4>
      <P>${cassMcneyValue} withdraw.New Balance ${newBalance}</P>
      `;

      document.getElementById("transaction-contaner").appendChild(div);
    } else {
      alert("faild");
    }
  });
