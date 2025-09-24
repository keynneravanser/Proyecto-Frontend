import React from 'react'
import { useState } from 'react'

const Form = () => {

  const [activeIndex, setactiveIndex] = useState(null)
  const [activeIndex1, setactiveIndex1] = useState(null)
  const [activeIndex2, setactiveIndex2] = useState(null)
  const [activeIndex3, setactiveIndex3] = useState(null)
  const [activeIndex4, setactiveIndex4] = useState(null)
  const [activeIndex5, setactiveIndex5] = useState(null)
  const [activeIndex6, setactiveIndex6] = useState(null)


  const handleButtonClick = (index) => {
    setactiveIndex(index)
  }

  const handleButtonClick1 = (index) => {
    setactiveIndex1(index)
  }
  const handleButtonClick2 = (index) => {
    setactiveIndex2(index)
  }
  const handleButtonClick3 = (index) => {
    setactiveIndex3(index)
  }
  const handleButtonClick4 = (index) => {
    setactiveIndex4(index)
  }
  const handleButtonClick5= (index) => {
    setactiveIndex5(index)
  }

  const handleButtonClick6= (index) => {
    setactiveIndex6(index)
  }



  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-40 bg-black/50 rouded-3xl flex justify-center w-1/2">
        <form className=" px-11 text-white py-24 w-full flex flex-col gap-6 border border-white">

          {/* BLOQUE 1: Título */}
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl">Product survey</h1>
            <p>
              Welcome to our survey! Your feedback is essential in helping us
              improve.
            </p>
          </div>

          {/* BLOQUE 2: Pregunta y opciones */}
          <div className="flex flex-col gap-4">
            <label>What is your first reaction to the product?</label>

            {/* Opciones en fila */}
            <div className="flex gap-6">
              {[...Array(10)].map((_, index) => (
                <p
                  key={index}
                  onClick={() => handleButtonClick(index)}
                  style={{
                    backgroundColor: activeIndex === index ? "#93c5fd" : "white",
                    color: "black",
                    padding: index !== 9 ? "9px 16px" : "9px 12px",
                    border: "1px solid black",
                    cursor: "pointer",
                    borderRadius: "50%",
                    fontSize: "14px",
                  }}
                >
                  {index + 1}
                </p>
              ))}
            </div>

            {/* Texto debajo de las opciones */}
            <div className="flex justify-between text-xs">
              <p>Very negative</p>
              <p>Very positive</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <label>What is your first reaction to the product?</label>

            {/* Opciones en fila */}
            <div className="flex gap-6">
              {[...Array(10)].map((_, index) => (
                <p
                  key={index}
                  onClick={() => handleButtonClick1(index)}
                  style={{
                    backgroundColor: 
                    activeIndex1 === index ? "#93c5fd" : "white",
                    color: "black",
                    padding: index !== 9 ? "9px 16px" : "9px 12px",
                    border: "1px solid black",
                    cursor: "pointer",
                    borderRadius: "50%",
                    fontSize: "14px",
                  }}
                >
                  {index + 1}
                </p>
              ))}
            </div>

            {/* Texto debajo de las opciones */}
            <div className="flex justify-between text-xs">
              <p>Very negative</p>
              <p>Very positive</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <label>What is your first reaction to the product?</label>

            {/* Opciones en fila */}
            <div className="flex gap-6">
              {[...Array(10)].map((_, index) => (
                <p
                  key={index}
                  onClick={() => handleButtonClick2(index)}
                  style={{
                    backgroundColor: 
                    activeIndex2 === index ? "#93c5fd" : "white",
                    color: "black",
                    padding: index !== 9 ? "9px 16px" : "9px 12px",
                    border: "1px solid black",
                    cursor: "pointer",
                    borderRadius: "50%",
                    fontSize: "14px",
                  }}
                >
                  {index + 1}
                </p>
              ))}
            </div>

            {/* Texto debajo de las opciones */}
            <div className="flex justify-between text-xs">
              <p>Very negative</p>
              <p>Very positive</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <label>What is your first reaction to the product?</label>

            {/* Opciones en fila */}
            <div className="flex gap-6">
              {[...Array(10)].map((_, index) => (
                <p
                  key={index}
                  onClick={() => handleButtonClick3(index)}
                  style={{
                    backgroundColor: 
                    activeIndex3 === index ? "#93c5fd" : "white",
                    color: "black",
                    padding: index !== 9 ? "9px 16px" : "9px 12px",
                    border: "1px solid black",
                    cursor: "pointer",
                    borderRadius: "50%",
                    fontSize: "14px",
                  }}
                >
                  {index + 1}
                </p>
              ))}
            </div>

            {/* Texto debajo de las opciones */}
            <div className="flex justify-between text-xs">
              <p>Very negative</p>
              <p>Very positive</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <label>What is your first reaction to the product?</label>

            {/* Opciones en fila */}
            <div className="flex gap-6">
              {[...Array(10)].map((_, index) => (
                <p
                  key={index}
                  onClick={() => handleButtonClick4(index)}
                  style={{
                    backgroundColor: 
                    activeIndex4 === index ? "#93c5fd" : "white",
                    color: "black",
                    padding: index !== 9 ? "9px 16px" : "9px 12px",
                    border: "1px solid black",
                    cursor: "pointer",
                    borderRadius: "50%",
                    fontSize: "14px",
                  }}
                >
                  {index + 1}
                </p>
              ))}
            </div>

            {/* Texto debajo de las opciones */}
            <div className="flex justify-between text-xs">
              <p>Very negative</p>
              <p>Very positive</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <label>What is your first reaction to the product?</label>

            {/* Opciones en fila */}
            <div className="flex gap-6">
              {[...Array(10)].map((_, index) => (
                <p
                  key={index}
                  onClick={() => handleButtonClick5(index)}
                  style={{
                    backgroundColor: 
                    activeIndex5 === index ? "#93c5fd" : "white",
                    color: "black",
                    padding: index !== 9 ? "9px 16px" : "9px 12px",
                    border: "1px solid black",
                    cursor: "pointer",
                    borderRadius: "50%",
                    fontSize: "14px",
                  }}
                >
                  {index + 1}
                </p>
              ))}
            </div>

            {/* Texto debajo de las opciones */}
            <div className="flex justify-between text-xs">
              <p>Very negative</p>
              <p>Very positive</p>
            </div>
          </div>

          <div className=" border-black">
            <label>Do you use a similar producter?</label>
            <div className="flex justify-between">
              <div className=" w-1/2 flex gap-2 items-center">
                 <input type="radio" />
                 <p>Yes</p>
              </div>
              <div className="w-1/2 flex gap-2 items-center">
                 <input type="radio" />
                 <p>No</p>
              </div>
            </div>
          </div>

                  <div className="flex flex-col gap-4">
            <label>What is your first reaction to the product?</label>

            {/* Opciones en fila */}
            <div className="flex gap-6">
              {[...Array(10)].map((_, index) => (
                <p
                  key={index}
                  onClick={() => handleButtonClick6(index)}
                  style={{
                    backgroundColor: 
                    activeIndex6 === index ? "#93c5fd" : "white",
                    color: "black",
                    padding: index !== 9 ? "9px 16px" : "9px 12px",
                    border: "1px solid black",
                    cursor: "pointer",
                    borderRadius: "50%",
                    fontSize: "14px",
                  }}
                >
                  {index + 1}
                </p>
              ))}
            </div>

            {/* Texto debajo de las opciones */}
            <div className="flex justify-between text-xs">
              <p>Not all likely</p>
              <p>Extremere likely</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label>what are the top 3 things you liked the most about this product?</label>
            <div className="flex justify-between gap-40">
              <p>1.</p>
              <input type="text" className='text-black w-full rounded-5m outline-none border border-r-black px-2 py-1' />
            </div>
            <div className="flex justify-between gap-40">
              <p>2.</p>
              <input type="text" className='text-black w-full rounded-5m outline-none border border-r-black px-2 py-1' />
            </div>
            <div className="flex justify-between gap-40">
              <p>3.</p>
              <input type="text" className='text-black  w-full rounded-5m outline-none border border-r-black px-2 py-1' />
            </div>
          </div>

<div className="flex flex-col gap-2">
            <label>what are the top 3 things you liked the most about this product?</label>
            <div className="flex justify-between gap-40">
              <p>1.</p>
              <input type="text" className='text-black w-full rounded-5m outline-none border border-r-black px-2 py-1' />
            </div>
            <div className="flex justify-between gap-40">
              <p>2.</p>
              <input type="text" className='text-black w-full rounded-5m outline-none border border-r-black px-2 py-1' />
            </div>
            <div className="flex justify-between gap-40">
              <p>3.</p>
              <input type="text" className='text-black w-full rounded-5m outline-none border border-r-black px-2 py-1' />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label>futher questions y comments</label>
            <textarea name="textarea" placeholder="type here..." rows={5} className=' rounded-5m outline-none border border-r-black px-2 py-1'></textarea>
          </div>
          <div className="flex justify-center">
            <button className="bg-blue-950 hover:bg-blue-950 py-2 rounded-5m text-white px8">submit</button>
          </div>


        </form>
      </div>
    </div>
  );
}

export default Form