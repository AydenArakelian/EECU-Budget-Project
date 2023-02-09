setInterval(
    function AddInputs() {
        //#region Pay Period Deductions
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

            //#endregion

        //#region Check Register
        let paymentAmount1 = document.getElementById("paymentAmount1").value;
        let depositAmount1 = document.getElementById("depositAmount1").value;
        let paymentAmount2 = document.getElementById("paymentAmount2").value;
        let depositAmount2 = document.getElementById("depositAmount2").value;
        let paymentAmount3 = document.getElementById("paymentAmount3").value;
        let depositAmount3 = document.getElementById("depositAmount3").value;
        let paymentAmount4 = document.getElementById("paymentAmount4").value;
        let depositAmount4 = document.getElementById("depositAmount4").value;
        let paymentAmount5 = document.getElementById("paymentAmount5").value;
        let depositAmount5 = document.getElementById("depositAmount5").value;
        let paymentAmount6 = document.getElementById("paymentAmount6").value;
        let depositAmount6 = document.getElementById("depositAmount6").value;
        let paymentAmount7 = document.getElementById("paymentAmount7").value;
        let depositAmount7 = document.getElementById("depositAmount7").value;
        let paymentAmount8 = document.getElementById("paymentAmount8").value;
        let depositAmount8 = document.getElementById("depositAmount8").value;
        let totalPaymentsText = document.getElementById("total-deduc-output");
        let totalDepositsText = document.getElementById("total-deposit-output");

        let paymentAmountValue1 = paymentAmount1;
        let depositAmountValue1 = depositAmount1;
        let paymentAmountValue2 = paymentAmount2;
        let depositAmountValue2 = depositAmount2;
        let paymentAmountValue3 = paymentAmount3;
        let depositAmountValue3 = depositAmount3;
        let paymentAmountValue4 = paymentAmount4;
        let depositAmountValue4 = depositAmount4;
        let paymentAmountValue5 = paymentAmount5;
        let depositAmountValue5 = depositAmount5;
        let paymentAmountValue6 = paymentAmount6;
        let depositAmountValue6 = depositAmount6;
        let paymentAmountValue7 = paymentAmount7;
        let depositAmountValue7 = depositAmount7;
        let paymentAmountValue8 = paymentAmount8;
        let depositAmountValue8 = depositAmount8;

        let totalPayments = (+paymentAmountValue1 + +paymentAmountValue2 + +paymentAmountValue3 + +paymentAmountValue4 + +paymentAmountValue5 + +paymentAmountValue6 + +paymentAmountValue7 + +paymentAmountValue8).toFixed(2);
        let totalDeposits = (+depositAmountValue1 + +depositAmountValue2 + +depositAmountValue3 + +depositAmountValue4 + +depositAmountValue5 + +depositAmountValue6 + +depositAmountValue7 + +depositAmountValue8).toFixed(2);
        let finalBalanceText = document.getElementById("final-balance");
        let finalBalanceValue = (totalDeposits - totalPayments).toFixed(2);

        totalPaymentsText.textContent = "-" + totalPayments;
        totalDepositsText.textContent = "+" + totalDeposits;

        finalBalanceText.textContent = "$" + finalBalanceValue;
        //#endregion
    }
, 100)