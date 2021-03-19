import React, { useEffect, useState } from 'react'

function HookSon(){
  const [count, setCount] = useState(1)
  const [age, setAge] = useState(18)
  useEffect(()=>{
    document.getElementsByClassName('p')[0].style.color = 'red'
  })
  return (
    <>
      <p className='p'>this number is {count}</p>
      <button onClick={()=>setCount(count+1)}>click</button>
    </>
  )
}

export default HookSon;