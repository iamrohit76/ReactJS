 import React from 'react'
 import Card from './components/Card'
 const App = () => {
   return (
     <div className='parent'>
      <Card user="Rahul Saha" age = {24} img ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToPgDPluwm_24Sua4a-UOLS0OLfzXYxwwZJnBDclH3Iw&s=10'></Card>
      <Card user="Rohit Sah" age = {22 } img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoq9x6jj9rugqEiPfe88txvZOtX_1WY_fRleVuSZW2QA&s=10' ></Card>
        
     </div>
   )
 }
 
 export default App