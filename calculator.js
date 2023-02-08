setInterval(
    function AddInputs() {
        let deductAmount1 = document.getElementById("deductAmount1");
        let deductAmount2 = document.getElementById("deductAmount2");
        let deductAmount3 = document.getElementById("deductAmount3");
        let deductAmount4 = document.getElementById("deductAmount4");
        let deductAmount5 = document.getElementById("deductAmount5");
        let deductAmount6 = document.getElementById("deductAmount6");

        let grossAnnualIncome = document.getElementById("grossAnnualIncome");
        let grossMonthlyIncome = document.getElementById("grossMonthlyIncome");
        let netMonthlyIncome = document.getElementById("netMonthlyIncome");

        if (grossAnnualIncome != null)
            grossMonthlyIncome = grossAnnualIncome / 12;

        deductAmount1.textContent = grossMonthlyIncome * 0.12;
        deductAmount2.textContent = grossMonthlyIncome * 0.07;
        deductAmount3.textContent = grossMonthlyIncome * 0.062;
        deductAmount4.textContent = grossMonthlyIncome * 0.0145;
        deductAmount5.textContent = grossMonthlyIncome * 0.01;
        deductAmount6.textContent = grossMonthlyIncome * 0.05;

        let totalDeductions = +deductAmount1 + +deductAmount2 + +deductAmount3 + +deductAmount4 + +deductAmount5 + +deductAmount6 + +180;

        netMonthlyIncome = grossMonthlyIncome - totalDeductions;
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