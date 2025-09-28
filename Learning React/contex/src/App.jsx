import TodoForm from './Components/TodoForm'
import TodoItems from './Components/TodoItems'
import ThemeBtn from './Components/ThemeBtn'
import { ThemeProvider } from './Contexts/ThemeContext'
import { useState } from 'react'

function App() {

  const [Theme , SetTheme] = useState("light")


  return (
    <ThemeProvider value={{Theme , toggleTheme}}>
      <div className="min-h-screen flex justify-center items-center 
                      bg-gradient-to-r from-blue-50 via-white to-blue-50 
                      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">

        <div className="border-2 border-black dark:border-gray-600 
                        rounded-xl shadow-lg w-full max-w-2xl p-8 
                        flex flex-col gap-6 bg-white dark:bg-gray-800 
                        text-gray-900 dark:text-gray-100">
          
          <ThemeBtn />
          <TodoForm />

          <div className="w-full space-y-4">
            <TodoItems />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App 
