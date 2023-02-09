setInterval(
    function AddInputs() {
        let deductAmount1 = document.getElementById("deductAmount1");
        let deductAmount2 = document.getElementById("deductAmount2");
        let deductAmount3 = document.getElementById("deductAmount3");
        let deductAmount4 = document.getElementById("deductAmount4");
        let deductAmount5 = document.getElementById("deductAmount5");
        let deductAmount6 = document.getElementById("deductAmount6");

        let grossAnnualIncome = document.getElementById("grossAnnualIncome").value;
        let grossMonthlyIncome = document.getElementById("grossMonthlyIncome");
        let grossMonthlyIncomeValue = (grossAnnualIncome / 12).toFixed(2);
        let totalNetText = document.getElementById("netMonthlyIncomeText");

        grossMonthlyIncome.textContent = "$" + grossMonthlyIncomeValue;
            
        let deductAmountValue1 = (grossMonthlyIncomeValue * 0.12).toFixed(2);
        let deductAmountValue2 = (grossMonthlyIncomeValue * 0.07).toFixed(2);
        let deductAmountValue3 = (grossMonthlyIncomeValue * 0.062).toFixed(2);
        let deductAmountValue4 = (grossMonthlyIncomeValue * 0.0145).toFixed(2);
        let deductAmountValue5 = (grossMonthlyIncomeValue * 0.01).toFixed(2);
        let deductAmountValue6 = (grossMonthlyIncomeValue * 0.05).toFixed(2);

        deductAmount1.textContent = "$" + deductAmountValue1;
        deductAmount2.textContent = "$" + deductAmountValue2;
        deductAmount3.textContent = "$" + deductAmountValue3;
        deductAmount4.textContent = "$" + deductAmountValue4;
        deductAmount5.textContent = "$" + deductAmountValue5;
        deductAmount6.textContent = "$" + deductAmountValue6;

        let totalDeductions = (+deductAmountValue1 + +deductAmountValue2 + +deductAmountValue3 + +deductAmountValue4 + +deductAmountValue5 + +deductAmountValue6 + +180).toFixed(2);
        let netMonthlyIncomeValue = (grossMonthlyIncomeValue - totalDeductions).toFixed(2);
        
        if (grossAnnualIncome.length != 0)
            totalNetText.textContent = "$" + netMonthlyIncomeValue;
        else if (grossAnnualIncome.length == 0)
            totalNetText.textContent = 0;
    }
, 100)

// setInterval(
//     function AddInputs() {
//         let input1 = document.getElementById("deductAmount1").value;
//         let input2 = document.getElementById("deductAmount2").value;
//         let input3 = document.getElementById("deductAmount3").value;
//         let input4 = document.getElementById("deductAmount4").value;
//         let input5 = document.getElementById("deductAmount5").value;
//         let input6 = document.getElementById("deductAmount6").value;

//         let grossMonthlyIncome = document.getElementById("grossMonthlyIncome").value;
//         let netMonthlyIncome = document.getElementById("netMonthlyIncome").textContent;
//         let totalDeductions = +input1 + +input2 + +input3 + +input4 + +input5 + +input6 + +180;

//         netMonthlyIncome = grossMonthlyIncome - totalDeductions;
//     }
// )