document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoney = inputFileValue("input-add-money");
    const addPin = inputFileValue("input-pin-pass");

    if (isNaN(cassMcneyValue)) {
      alert("Failed to add money");
      return;
    }
    if (addPin === 123) {
      const account = accountBlance("account-blance");
      const newAccount = account + addMoney;
      document.getElementById("account-blance").innerText = newAccount;
      // add to transaction
      const p = document.createElement("p");
      p.innerText = `
      Added: ${addMoney} Tk. Balance :${newAccount} 
      `;
      document.getElementById("transaction-contaner").appendChild(p);

      // should be a common function
    } else {
      alert("faild");
    }
  });
