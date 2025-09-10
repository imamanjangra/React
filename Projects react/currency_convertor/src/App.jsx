import { useState } from 'react'
import UseCurrencyinfo from './hooks/usecurrencyinfo'
import {InputBox} from './components'

import './App.css'

function App(){

    const [amount , setAmount] = useState(0)
    const [from , setFrom] = useState("inr")
    const [to , setTo] = useState("usd");
    const [converted , setconverted] = useState(0)

    const useCurrency = UseCurrencyinfo(from);

    const option = Object.keys(useCurrency)

    const swap = () =>{
      setFrom(to)
      setTo(from);
      setconverted(amount)
      setAmount(converted)
    }

    const convert = () =>{
      setconverted(amount * useCurrency[to])
    }

 return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('${'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-eDfALfTMs9ucn9VSaJOAScgxlJkFRnW2yg&s'}')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOption={option}
                                onCurrencyChange={(currency)=>
                                  setAmount(amount)}
                                  selectedCurrency={from}
                                  onAmountChange={(amount) => 
                                    setAmount(amount)
                                  }
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="TO"
                                amount={convert}
                                currencyOption={option}
                                onCurrencyChange={(currency) =>
                                  setTo(currency)
                                
                                }
                                  selectedCurrency={from}
                                 amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from } to {to}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App