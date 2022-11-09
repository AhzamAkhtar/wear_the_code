import React from 'react'

const Testing = () => {
    const handler =async () =>{
        const responce = await fetch("http://localhost:3000/api/rapyd")
        const res = await responce.json()
        console.log(res)
    }
    handler()
  return (
    <div>
        <h1>Testing</h1>
    </div>
  )
}

export default Testing