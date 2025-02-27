import React, { useState } from 'react';

const MortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);

  const calculateMortgage = (e) => {
    e.preventDefault();
    const principal = parseFloat(loanAmount);
    const monthlyRate = parseFloat(interestRate) / 100 / 12;
    const numberOfPayments = parseFloat(loanTerm) * 12;

    const monthly = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    setMonthlyPayment(monthly.toFixed(2));
    setTotalPayment((monthly * numberOfPayments).toFixed(2));
  };

  return (
    <div id="MortgageCalculator_1" className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 id="MortgageCalculator_2" className="text-3xl font-bold text-center text-indigo-600 mb-8">Mortgage Calculator</h2>
          
          <form onSubmit={calculateMortgage} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label id="MortgageCalculator_3" className="block text-sm font-medium text-gray-700">Loan Amount ($)</label>
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter loan amount"
                  required
                />
              </div>

              <div>
                <label id="MortgageCalculator_4" className="block text-sm font-medium text-gray-700">Annual Interest Rate (%)</label>
                <input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter interest rate"
                  step="0.01"
                  required
                />
              </div>

              <div>
                <label id="MortgageCalculator_5" className="block text-sm font-medium text-gray-700">Loan Term (Years)</label>
                <input
                  type="number"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter loan term"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              id="MortgageCalculator_6"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150"
            >
              Calculate
            </button>
          </form>

          {monthlyPayment && (
            <div className="mt-8 space-y-4">
              <div className="bg-indigo-50 rounded-lg p-6">
                <h3 id="MortgageCalculator_7" className="text-lg font-medium text-indigo-800 mb-2">Monthly Payment</h3>
                <p id="MortgageCalculator_8" className="text-3xl font-bold text-indigo-600">${monthlyPayment}</p>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h3 id="MortgageCalculator_9" className="text-lg font-medium text-green-800 mb-2">Total Payment</h3>
                <p id="MortgageCalculator_10" className="text-3xl font-bold text-green-600">${totalPayment}</p>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 id="MortgageCalculator_11" className="text-lg font-medium text-blue-800 mb-2">Total Interest</h3>
                <p id="MortgageCalculator_12" className="text-3xl font-bold text-blue-600">
                  ${(totalPayment - loanAmount).toFixed(2)}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;