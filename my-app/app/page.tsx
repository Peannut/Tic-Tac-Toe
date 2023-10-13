"use client"
import Image from 'next/image'
import { use, useEffect, useState } from 'react'
import Cell from './components/cell';

const winingCombos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

export default function Home() {

  const [cells , setCells] = useState(["","","","","","","","",""]);

  const [go, setGo] = useState("circle");
  const [winingmessage, setWiningmessage] = useState("");
  

  useEffect(() => {
    winingCombos.forEach((combo) => {
      const circlewins = combo.every((cell) => cells[cell] === "circle");
      const crosswins = combo.every((cell) => cells[cell] === "cross");
      if (circlewins){
        setWiningmessage("circle wins");
      }
      if (crosswins){
        setWiningmessage("cross wins");
      }

    })
  }, [cells])

  useEffect(() => {
    if (cells.every((cell) => cell !== "") && !winingmessage){
      setWiningmessage("draw");
    }
  } , [cells, winingmessage])

  
  return (
    <div className='container'>
      <div className='gameboard'>
       {cells.map((cell, index) => (
          <Cell 
          id={index} 
          go={go} 
          setGo={setGo} 
          key={index} 
          cells={cells} 
          setCells={setCells} 
          cell={cell}
          winingmessage={winingmessage}
          />

        )
       )}

      </div>
      <div>{winingmessage}</div>
      {!winingmessage && <div>{`it now ${go} turn!`}</div>}
    </div>
  )
}
