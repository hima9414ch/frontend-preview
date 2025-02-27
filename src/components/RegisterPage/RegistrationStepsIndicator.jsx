import React from 'react';

const RegistrationStepsIndicator = ({ currentStep = 1 }) => {
  const steps = [
    { number: 1, title: 'Personal Info' },
    { number: 2, title: 'Account Details' },
    { number: 3, title: 'Preferences' },
    { number: 4, title: 'Confirmation' }
  ];

  return (
    <div id="RegistrationStepsIndicator_1" className="w-full max-w-4xl mx-auto py-8 px-4">
      <div id="RegistrationStepsIndicator_2" className="flex justify-between items-center relative">
        {steps.map((step, index) => (
          <div id={`RegistrationStepsIndicator_${index + 3}`} key={step.number} className="flex flex-col items-center relative z-10">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg
                ${currentStep >= step.number
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : 'bg-gray-200 text-gray-500'}
                transition-all duration-300 transform hover:scale-110`}
            >
              {step.number}
            </div>
            <p className={`mt-2 text-sm font-medium ${currentStep >= step.number ? 'text-blue-600' : 'text-gray-500'}`}>
              {step.title}
            </p>
          </div>
        ))}
        <div
          id="RegistrationStepsIndicator_7"
          className="absolute top-5 h-1 w-full bg-gray-200 -z-10"
        >
          <div
            id="RegistrationStepsIndicator_8"
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500"
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default RegistrationStepsIndicator;