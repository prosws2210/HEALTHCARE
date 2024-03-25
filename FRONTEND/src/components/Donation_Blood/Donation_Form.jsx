import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaPlus, FaEquals, FaCreditCard, FaMoneyBill, FaFileAlt, FaFileUpload, FaTrello, FaWallet } from 'react-icons/fa';

const donationOptions = [
  4500.00,
  9000.00,
  13500.00,
  18000.00,
  24000.00,
  30000.00,
  37500.00,
  45000.00,
  60000.00,
  75000.00,
  90000.00,
  105000.00,
];

const DonationForm = () => {
  const [step, setStep] = React.useState(1);
  const [num1, setNum1] = useState(Math.floor(Math.random() * 10));
  const [num2, setNum2] = useState(Math.floor(Math.random() * 10));
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('credit-card');
  const amount = Number(selectedAmount);
  const childrenFed = !isNaN(amount) ? Math.floor(amount / 1500) : 0;

  const handleAmountChange = (value) => {
    setSelectedAmount(value);
  };

  useEffect(() => {
    setNum1(Math.floor(Math.random() * 10));
    setNum2(Math.floor(Math.random() * 10));
  }, []);

  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
  };


  return (
    <div className="bg-violet-50 px-32 pt-8 pb-12">

      <h2 className="text-2xl text-center font-bold pb-6">DONATE NOW</h2>

      <div className="p-6 bg-white shadow-md rounded-lg">

        <div className="grid grid-cols-3 gap-6 mb-6 text-center text-lg">
          <div className={`border-b-4 ${step === 1 ? 'border-blue-500' : ''} hover:font-bold cursor-pointer `} style={{ height: '65px' }} onClick={() => setStep(1)}>
            STEP 1
            <br />
            Choose donation amount
          </div>
          <div className={`border-b-4 ${step === 2 ? 'border-blue-500' : ''} hover:font-bold cursor-pointer`} style={{ height: '65px' }} onClick={() => setStep(2)}>
            STEP 2
            <br />
            Select Payment Method
          </div>
          <div className={`border-b-4 ${step === 3 ? 'border-blue-500' : ''} hover:font-bold cursor-pointer `} style={{ height: '65px' }} onClick={() => setStep(3)}>
            STEP 3
            <br />
            Donation Submitted
          </div>
        </div>

        
        
        {/* STEP 1 */}
        {step === 1 && (
          <div>
            <div className="mb-4 grid grid-cols-4 gap-4">
              {donationOptions.map((amount, index) => (
                <button
                  key={index}
                  className="bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-200 ease-in-out shadow-lg py-2"
                  onClick={() => handleAmountChange(amount)}
                >
                  {amount}
                </button>
              ))}
            </div>
            
            <div className="flex flex-row justify-start items-center mt-4">
              <input
                className="w-1/3 mr-4 rounded-lg border border-gray-300 p-2"
                placeholder="Other Amount"
                onChange={(e) => handleAmountChange(e.target.value)}
              />
              {selectedAmount && 
                <div className="flex items-center text-lg">
                  <FaCheckCircle className="text-green-500 mr-2 w-8 h-8" />
                  <span style={{ WebkitTextStroke: '1px black' }}>
                    {`₹${selectedAmount} feeds ${childrenFed} children / year.`}
                  </span>
                </div>
              }
            </div>

            <div className="p-6">
              <div className="mb-8">
                <div className="mb-2 text-lg font-bold">Select your citizenship</div>
                <div className="flex items-center mb-4 space-x-12">
                  <div>
                    <input className="mr-2" id="indian-citizen" name="citizenship" type="radio" />
                    <label htmlFor="indian-citizen">
                      Indian Citizen
                    </label>
                  </div>
                  <div>
                    <input className="mr-2" id="foreign-citizen" name="citizenship" type="radio" />
                    <label htmlFor="foreign-citizen">Foreign Citizen</label>
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <div className="mb-2 text-lg font-bold">Personal Details</div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <input className="border border-gray-300 p-2 rounded" placeholder="Full Name*" />
                  <input className="border border-gray-300 p-2 rounded" placeholder="Email ID*" />
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <input className="border border-gray-300 p-2 rounded" placeholder="Birthdate" />
                  <input className="border border-gray-300 p-2 rounded" placeholder="Mobile*" />
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <input className="border border-gray-300 p-2 rounded" placeholder="PAN Number*" />
                  <input className="border border-gray-300 p-2 rounded" placeholder="Address*" />
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <input className="border border-gray-300 p-2 rounded" placeholder="Pin Code*" />
                  <input className="border border-gray-300 p-2 rounded" placeholder="State*" />
                  <select className="border border-gray-300 p-2 rounded">
                    <option value="">Select your Preference State</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Delhi">Delhi (National Capital Territory of Delhi)</option>
                    <option value="Puducherry">Puducherry (Pondicherry)</option>
                    <option value="Ladakh">Ladakh</option>
                </select>
                </div>
              </div>
              <div className="mb-4">
                <div className="mb-2 text-lg font-bold">Captcha</div>
                <div className="flex items-center mb-4 space-x-2">
                  <div className='font-bold font-6xl'>{num1}</div>                    
                  <FaPlus className="w-4 h-4 mx-2" />
                  <div className="mr-2 font-bold font-6xl">{num2}</div>
                  <FaEquals className="w-4 h-4 mx-2" />
                  <input className="w-20 border border-gray-300 p-2 rounded" />
                </div>
              </div>
              <div className="mb-8">
                <input id="privacy-policy" type="checkbox" />
                <label className="text-sm ml-2" htmlFor="privacy-policy">
                  I have read through the website's Privacy Policy & Terms and Conditions to make a donation.
                </label>
              </div>
              <button 
                onClick={nextStep} 
                className="w-full bg-blue-500 text-white py-2 rounded-2xl font-bold hover:bg-blue-700 transition duration-200 ease-in-out shadow-lg"
              >
                Make a difference in someone's life by donating to the charity
              </button>            
            </div>
          </div>
        )}
        
        {/* STEP 2 */}
        {step === 2 && (
          <div>
            <div className="mx-auto w-full bg-white p-6">
              <div className="flex justify-between border-b pb-4">
                <h1 className="text-xl font-semibold">SELECT PAYMENT METHOD</h1>
                <span>Transaction ID : {Math.floor(Math.random() * 1000000)}</span>
              </div>
              <div className="mt-4 mb-8">
                <span className="font-medium">Amount : Rs {selectedAmount}/- </span>
              </div>
              <div className="flex gap-20">
                <div className="flex flex-col w-1/4">
                  
                  <input type="radio" id="credit-card" name="payment-method" className="hidden" onClick={() => setSelectedPaymentMethod('credit-card')} />
                  <label htmlFor="credit-card" className={`mb-4 flex items-center justify-between p-4 rounded-md cursor-pointer ${selectedPaymentMethod === 'credit-card' ? 'bg-[#e6f7ff] text-[#1890ff]' : ''}`}>
                    <FaCreditCard className={`text-[${selectedPaymentMethod === 'credit-card' ? '#1890ff' : 'black'}]`} />
                    <span>CREDIT CARD</span>
                  </label>
                  
                  <input type="radio" id="debit-card" name="payment-method" className="hidden" onClick={() => setSelectedPaymentMethod('debit-card')} />
                  <label htmlFor="debit-card" className={`mb-4 flex items-center justify-between p-4 rounded-md cursor-pointer ${selectedPaymentMethod === 'debit-card' ? 'bg-[#e6f7ff] text-[#1890ff]' : ''}`}>
                    <FaMoneyBill className={`text-[${selectedPaymentMethod === 'debit-card' ? '#1890ff' : 'black'}]`} />
                    <span>DEBIT CARD</span>
                  </label>
                  
                  <input type="radio" id="net-banking" name="payment-method" className="hidden" onClick={() => setSelectedPaymentMethod('net-banking')} />
                  <label htmlFor="net-banking" className={`mb-4 flex items-center justify-between p-4 rounded-md cursor-pointer ${selectedPaymentMethod === 'net-banking' ? 'bg-[#e6f7ff] text-[#1890ff]' : ''}`}>
                    <FaFileAlt className={`text-[${selectedPaymentMethod === 'net-banking' ? '#1890ff' : 'black'}]`} />
                    <span>NET BANKING</span>
                  </label>
                  
                  <input type="radio" id="upi" name="payment-method" className="hidden" onClick={() => setSelectedPaymentMethod('upi')} />
                  <label htmlFor="upi" className={`mb-4 flex items-center justify-between p-4 rounded-md cursor-pointer ${selectedPaymentMethod === 'upi' ? 'bg-[#e6f7ff] text-[#1890ff]' : ''}`}>
                    <FaFileUpload className={`text-[${selectedPaymentMethod === 'upi' ? '#1890ff' : 'black'}]`} />
                    <span>UPI</span>
                  </label>
                  
                  <input type="radio" id="tez" name="payment-method" className="hidden" onClick={() => setSelectedPaymentMethod('tez')} />
                  <label htmlFor="tez" className={`mb-4 flex items-center justify-between p-4 rounded-md cursor-pointer ${selectedPaymentMethod === 'tez' ? 'bg-[#e6f7ff] text-[#1890ff]' : ''}`}>
                    <FaTrello className={`text-[${selectedPaymentMethod === 'tez' ? '#1890ff' : 'black'}]`} />
                    <span>TEZ</span>
                  </label>
                  
                  <input type="radio" id="wallet" name="payment-method" className="hidden" onClick={() => setSelectedPaymentMethod('wallet')} />
                  <label htmlFor="wallet" className={`flex items-center justify-between p-4 rounded-md cursor-pointer ${selectedPaymentMethod === 'wallet' ? 'bg-[#e6f7ff] text-[#1890ff]' : ''}`}>
                    <FaWallet className={`text-[${selectedPaymentMethod === 'wallet' ? '#1890ff' : 'black'}]`} />
                    <span>WALLET</span>
                  </label>

                </div>

                <div className="flex-1 flex-col w-3/4">

                  {selectedPaymentMethod === 'credit-card' && (
                    // Credit Card form
                    <div>
                      <div className="mb-4">
                        <h2 className="text-2xl font-bold text-gray-700">CREDIT CARD INFO</h2>
                        <hr className="border-b-2 border-blue-200 mt-2 mb-6"/>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col">
                          <label className="mb-1" htmlFor="card-type">
                            Card Type
                          </label>
                          <select id="card-type" className="p-2 border rounded-md focus:outline-none focus:border-blue-500">
                            <option value="">-- Select Card Type --</option>
                            <option value="visa">Visa</option>
                            <option value="mastercard">MasterCard</option>
                            <option value="amex">American Express</option>
                          </select>
                        </div>
                        <div className="flex flex-col">
                          <label className="mb-1" htmlFor="card-number">
                            Card Number
                          </label>
                          <input id="card-number" type="text" className="p-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="Card Number" />
                        </div>
                        <div className="flex flex-col col-span-2">
                          <label className="mb-1" htmlFor="name-on-card">
                            Name On Card
                          </label>
                          <input id="name-on-card" type="text" className="p-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="Name On Card" />
                        </div>
                        <div className="flex flex-col">
                          <label className="mb-1">Card Expiry Date</label>
                          <div className="flex gap-2">
                            <select id="expiry-month" className="p-2 border rounded-md focus:outline-none focus:border-blue-500">
                              <option value="">Month</option>
                              <option value="01">January</option>
                              <option value="02">February</option>
                              <option value="03">March</option>
                              <option value="04">April</option>
                              <option value="05">May</option>
                              <option value="06">June</option>
                              <option value="07">July</option>
                              <option value="08">August</option>
                              <option value="09">September</option>
                              <option value="10">October</option>
                              <option value="11">November</option>
                              <option value="12">December</option>
                            </select>
                            <select id="expiry-year" className="p-2 border rounded-md focus:outline-none focus:border-blue-500">
                              <option value="">Year</option>
                              {
                                Array.from({length: 100}, (_, i) => new Date().getFullYear() - 50 + i).map(year => 
                                  <option key={year} value={year}>{year}</option>
                                )
                              }
                            </select>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <label className="mb-1" htmlFor="cvv">
                            CVV Number
                          </label>
                          <input id="cvv" type="text" className="p-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="CVV Number" />
                          <a className="text-xs text-blue-600" href="#">
                            What is CVV number?
                          </a>
                        </div>
                        <div className="col-span-2">
                          <p className="text-xs italic">
                            Note: In the next step you will be redirected to your bank's website to verify yourself.
                          </p>
                          {/* <div className="mt-4 p-4 bg-blue-500 text-white text-center font-bold rounded-2xl hover:bg-blue-700 cursor-pointer">Donate Now</div> */}
                          <button 
                            onClick={nextStep} 
                            className="w-full mt-4 bg-blue-500 text-white py-2 rounded-2xl font-bold hover:bg-blue-700 transition duration-200 ease-in-out shadow-lg"
                          >
                            Donate Now
                          </button>  
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedPaymentMethod === 'debit-card' && (
                    // Debit Card form
                    <div>
                      <div className="mb-4">
                        <h2 className="text-2xl font-bold text-gray-700">DEBIT CARD INFO</h2>
                        <hr className="border-b-2 border-blue-200 mt-2 mb-6"/>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col">
                          <label className="mb-1" htmlFor="debit-card-type">
                            Card Type
                          </label>
                          <select id="debit-card-type" className="p-2 border rounded-md focus:outline-none focus:border-blue-500">
                            <option value="">-- Select Card Type --</option>
                            <option value="visa">Visa</option>
                            <option value="mastercard">MasterCard</option>
                            <option value="amex">American Express</option>
                          </select>
                        </div>
                        <div className="flex flex-col">
                          <label className="mb-1" htmlFor="debit-card-number">
                            Card Number
                          </label>
                          <input id="debit-card-number" type="text" className="p-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="Card Number" />
                        </div>
                        <div className="flex flex-col col-span-2">
                          <label className="mb-1" htmlFor="debit-name-on-card">
                            Name On Card
                          </label>
                          <input id="debit-name-on-card" type="text" className="p-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="Name On Card" />
                        </div>
                        <div className="flex flex-col">
                          <label className="mb-1">Card Expiry Date</label>
                          <div className="flex gap-2">
                            <select id="debit-expiry-month" className="p-2 border rounded-md focus:outline-none focus:border-blue-500">
                              <option value="">Month</option>
                              <option value="01">January</option>
                              <option value="02">February</option>
                              <option value="03">March</option>
                              <option value="04">April</option>
                              <option value="05">May</option>
                              <option value="06">June</option>
                              <option value="07">July</option>
                              <option value="08">August</option>
                              <option value="09">September</option>
                              <option value="10">October</option>
                              <option value="11">November</option>
                              <option value="12">December</option>
                            </select>
                            <select id="debit-expiry-year" className="p-2 border rounded-md focus:outline-none focus:border-blue-500">
                              <option value="">Year</option>
                              {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - 50 + i).map((year) => (
                                <option key={year} value={year}>{year}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <label className="mb-1" htmlFor="debit-cvv">
                            CVV Number
                          </label>
                          <input id="debit-cvv" type="text" className="p-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="CVV Number" />
                          <a className="text-xs text-blue-600" href="#">
                            What is CVV number?
                          </a>
                        </div>
                        <div className="col-span-2">
                          <p className="text-xs italic">
                            Note: In the next step you will be redirected to your bank's website to verify yourself.
                          </p>
                          {/* <div className="mt-4 p-4 bg-blue-500 text-white text-center font-bold rounded-2xl hover:bg-blue-700 cursor-pointer">Donate Now</div> */}
                          <button 
                            onClick={nextStep} 
                            className="w-full mt-4 bg-blue-500 text-white py-2 rounded-2xl font-bold hover:bg-blue-700 transition duration-200 ease-in-out shadow-lg"
                          >
                            Donate Now
                          </button>  
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedPaymentMethod === 'net-banking' && (
                    // Net Banking form
                    <div className="bg-white rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                      <div className="mb-4">
                        <h2 className="text-2xl font-bold text-gray-700">NET BANKING</h2>
                        <hr className="border-b-2 border-blue-200 mt-2 mb-6"/>
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bank-name">
                          Select Bank
                        </label>
                        <select id="bank-name" className="p-2 border rounded-md focus:outline-none focus:border-blue-500">
                          <option value="">-- Select Bank --</option>
                          <option value="sbi">State Bank of India</option>
                          <option value="icici">ICICI Bank</option>
                          <option value="hdfc">HDFC Bank</option>
                          <option value="axis">Axis Bank</option>
                          <option value="kotak">Kotak Mahindra Bank</option>
                          <option value="canara">Canara Bank</option>
                          <option value="pnb">Punjab National Bank</option>
                          <option value="boi">Bank of India</option>
                          <option value="bob">Bank of Baroda</option>
                          <option value="idbi">IDBI Bank</option>
                        </select>

                      </div>
                      
                      <div className="col-span-2">
                        <p className="text-xs italic">
                          Note: In the next step you will be redirected to your bank's website to verify yourself.
                        </p>
                        {/* <div className="mt-4 p-4 bg-blue-500 text-white text-center font-bold rounded-2xl hover:bg-blue-700 cursor-pointer">Donate Now</div> */}
                        <button 
                          onClick={nextStep} 
                          className="w-full mt-4 bg-blue-500 text-white py-2 rounded-2xl font-bold hover:bg-blue-700 transition duration-200 ease-in-out shadow-lg"
                        >
                          Donate Now
                        </button>  
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </div>
        )} 

        {/* STEP 3 */}
        {step === 3 && (
          <div>
            <div className="bg-white p-6 rounded-lg">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold">DONATION SUMMARY</h1>
                <span>Transaction ID : {Math.floor(Math.random() * 1000000)}</span>
              </div>
              <div className="mt-4">
                <span className="font-medium">Amount : Rs {selectedAmount}/- </span>
              </div>
              <div className="mt-4">
                <span className="font-medium">Payment Method : {selectedPaymentMethod} </span>
              </div>
              <div className="mt-4">
                <span className="font-medium">Children Fed : {childrenFed} </span>
              </div>
              <div className="mt-4 flex flex-row gap justify-center gap-7 items-center">
                <div>
                  <span className="text-3xl font-semibold">Thank you for your donation! </span>
                </div>
                <div className="">
                  <img src="assets/images/umeed_homepg/tick.jpg" alt="Thank you for your donation" className="w-16 rounded-lg" />
                </div>
              </div>
            </div>

            {/* Add a image */}
            
          </div>
        )}
        

      </div>
    </div>

  );
};

export default DonationForm;
