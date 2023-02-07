setInterval(
    function AddInputs() {
        let input1 = document.getElementById("deductAmount1").value;
        let input2 = document.getElementById("deductAmount2").value;
        let input3 = document.getElementById("deductAmount3").value;
        let input4 = document.getElementById("deductAmount4").value;
        let input5 = document.getElementById("deductAmount5").value;
        let input6 = document.getElementById("deductAmount6").value;
        let input7 = document.getElementById("deductAmount7").value;

        let totalGrossIncome = document.getElementById("grossIncomeTotal").value;

        totalGrossIncome.textContent = input1 + input2 + input3 + input4 + input5 + input6 + input7;
    }
)