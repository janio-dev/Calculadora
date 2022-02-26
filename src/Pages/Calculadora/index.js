import React from 'react'
import ButtonCalc from '../../Components/ButtonCalc/';
import * as math from "mathjs";

const icons = {
  Vezes: <svg xmlns="http://www.w3.org/2000/svg" id="*" className="m-auto w-6" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
</svg>
,
Mais: <svg xmlns="http://www.w3.org/2000/svg" id="+" className="m-auto w-6" viewBox="0 0 20 20" fill="currentColor">
<path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
</svg>
,
Menos: <svg xmlns="http://www.w3.org/2000/svg" id="-" className="m-auto w-6" viewBox="0 0 20 20" fill="currentColor">
<path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
</svg>
,
}


const Calculadora = () => {
  const [Thema,setThema] = React.useState(true);
  const [input, setInput] = React.useState("");
  const [resultado, setResultado] = React.useState("");

  const Operadores = ['/','*','-','+'];

  function insereNum(val) {
    let verificacao = Operadores.includes(input[input.length - 1]);
    if(verificacao){
      const found = Operadores.every((elemento) => elemento !== val.id);
      console.log(found)
      if(found){
        setInput(input + val.id)
      }
    }else{
      setInput(input + val.id)
    }
  }

  function Operacao(){
    setResultado(math.round(math.evaluate(input),2))
  }

  function ClearOperation(){
    setResultado("");
    setInput("");
  }

  function ClearOne(){
    setInput(input.substring(0, input.length - 1));
  }

  return (
    <>
      {Thema &&  <section className="m-auto h-auto pb-10 pt-10 bg-violet-500">
      <div className='flex m-auto rounded-[30px] bg-stone-700 max-w-[27%] min-w-[320px] min-h-screen'>
        <div className='flex w-[90%] min-w-[300px] rounded-lg bg-[#1E1E1E] h-[35rem] m-auto flex-col'>
        <div className="flex w-[100%] h-[25px] items-center justify-between px-3">
          <div>
            <p className="font-sans text-[#FFFFFF]">12:25PM</p>
          </div>
          <div className="flex ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path className='text-[#FFFFFF]' fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path className='text-[#FFFFFF]' d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
          </div>
        </div>
        <div className='flex w-[100%] h-[60px] items-center justify-between px-3'>
          <svg onClick={()=>{setThema(!Thema)}} xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path className='text-[#FFFFFF]' d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
          <svg onClick={()=>{ClearOperation()}} xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path className='text-[#FFFFFF]' fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </div>
        <div className='flex w-[100%]  h-[150px] items-center flex-col'>
          <div className='flex w-[100%] h-[50%] items-center justify-end px-3'>
            <p className="px-2 text-[#FFFFFF] font-sans text-lg font-medium">{input}</p>
            <svg onClick={()=>{ClearOne()}} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
              <path className='text-[#FFFFFF]' fillRule="evenodd" d="M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div className='flex w-[100%] h-[50%] items-center justify-end px-3'>
            <p className="text-[#FFFFFF] font-sans text-4xl font-bold">{resultado}</p>
          </div>
        </div>
        <div className='flex flex-wrap w-[100%] h-[20rem] items-center justify-center' >
          <ButtonCalc onClick={({target})=>{insereNum(target)}} className='bg-[#242424] min-w-[65px] w-[60px] h-[60px] mx-[5px] text-[#EFEFEF] font-sans text-2xl font-medium' id="7">7</ButtonCalc>
          <ButtonCalc onClick={({target})=>{insereNum(target)}} className='bg-[#242424] min-w-[65px] w-[65px] h-[60px] mx-[5px] text-[#EFEFEF] font-sans text-2xl font-medium' id="8">8</ButtonCalc>
          <ButtonCalc onClick={({target})=>{insereNum(target)}} className='bg-[#242424] min-w-[65px] w-[65px] h-[60px] mx-[5px] text-[#EFEFEF] font-sans text-2xl font-medium' id="9">9</ButtonCalc>
          <ButtonCalc onClick={({target})=>{insereNum(target)}} className='bg-[#242424] min-w-[65px] w-[65px] h-[60px] mx-[5px] text-[#9276F0] font-sans text-2xl font-medium' id='/'>/</ButtonCalc>
          <ButtonCalc onClick={({target})=>{insereNum(target)}} className='bg-[#242424] min-w-[65px] w-[65px] h-[60px] mx-[5px] text-[#EFEFEF] font-sans text-2xl font-medium' id="4">4</ButtonCalc>
          <ButtonCalc onClick={({target})=>{insereNum(target)}} className='bg-[#242424] min-w-[65px] w-[65px] h-[60px] mx-[5px] text-[#EFEFEF] font-sans text-2xl font-medium' id="5">5</ButtonCalc>
          <ButtonCalc onClick={({target})=>{insereNum(target)}} className='bg-[#242424] min-w-[65px] w-[65px] h-[60px] mx-[5px] text-[#EFEFEF] font-sans text-2xl font-medium' id="6">6</ButtonCalc>
          <ButtonCalc onClick={({target})=>{insereNum(target)}} className='bg-[#242424] min-w-[65px] w-[65px] h-[60px] mx-[5px] text-[#9276F0] font-sans text-2xl font-medium' id="*">{icons.Vezes}</ButtonCalc>
          <ButtonCalc onClick={({target})=>{insereNum(target)}} className='bg-[#242424] min-w-[65px] w-[65px] h-[60px] mx-[5px] text-[#EFEFEF] font-sans text-2xl font-medium' id="1">1</ButtonCalc>
          <ButtonCalc onClick={({target})=>{insereNum(target)}} className='bg-[#242424] min-w-[65px] w-[65px] h-[60px] mx-[5px] text-[#EFEFEF] font-sans text-2xl font-medium' id="2">2</ButtonCalc>
          <ButtonCalc onClick={({target})=>{insereNum(target)}} className='bg-[#242424] min-w-[65px] w-[65px] h-[60px] mx-[5px] text-[#EFEFEF] font-sans text-2xl font-medium' id="3">3</ButtonCalc>
          <ButtonCalc onClick={({target})=>{insereNum(target)}} className='bg-[#242424] min-w-[65px] w-[65px] h-[60px] mx-[5px] text-[#9276F0] font-sans text-2xl font-medium' id="+">{icons.Mais}</ButtonCalc>
          <ButtonCalc onClick={({target})=>{insereNum(target)}} className='bg-[#242424] min-w-[140px] w-[65px] h-[60px] mx-[5px] text-[#EFEFEF] font-sans text-2xl font-medium' id="0">0</ButtonCalc>
          <ButtonCalc onClick={({target})=>{insereNum(target)}} className='bg-[#242424] min-w-[65px] w-[65px] h-[60px] mx-[5px] text-[#EFEFEF] font-sans text-2xl font-medium' id=".">.</ButtonCalc>
          <ButtonCalc onClick={({target})=>{insereNum(target)}} className='bg-[#242424] min-w-[65px] w-[65px] h-[60px] mx-[5px] text-[#9276F0] font-sans text-2xl font-medium' id="-">{icons.Menos}</ButtonCalc>
          <ButtonCalc onClick={()=>{Operacao()}} className='bg-[#9276F0] min-w-[290px] w-[260px] h-[60px] mx-[5px] text-[#EFEFEF] font-sans text-2xl font-medium' id="=">=</ButtonCalc>
        </div>
        </div>
      </div>
    </section>}
    {!Thema && <section className="m-auto h-auto pb-10 pt-10 bg-violet-500">
      <div className='flex m-auto rounded-[30px] bg-stone-700 max-w-[27%] min-w-[320px] min-h-screen'>
        <div className='flex w-[90%] rounded-lg min-w-[300px] bg-stone-50 h-[35rem] m-auto flex-col'>
        <div className="flex w-[100%] h-[25px] items-center justify-between px-3">
          <div>
            <p className="font-sans text-base">12:25PM</p>
          </div>
          <div className="flex ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
          </div>
        </div>
        <div className='flex w-[100%] h-[60px] items-center justify-between px-3'>
          <svg onClick={()=>{setThema(!Thema)}} xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
          <svg onClick={()=>{ClearOperation()}} xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </div>
        <div className='flex w-[100%]  h-[150px] items-center flex-col'>
          <div className='flex w-[100%] h-[50%] items-center justify-end px-3'>
            <p className="px-2 text-[#44403C] font-sans text-lg font-medium">{input}</p>
            <svg onClick={()=>{ClearOne()}} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div className='flex w-[100%] h-[50%] items-center justify-end px-3'>
            <p className="text-[#44403C] font-sans text-4xl font-bold">{resultado}</p>
          </div>
        </div>
        <div className='flex flex-wrap w-[100%] h-[20rem] items-center justify-center' >
          <button onClick={({target})=>{insereNum(target)}} className='bg-[#E4DBFF] min-w-[65px] w-[60px] h-[60px] mx-[5px] text-[#44403C] font-sans text-2xl font-medium' id="7">7</button>
          <button onClick={({target})=>{insereNum(target)}} className='bg-violet-200 min-w-[65px] w-[65px] h-[60px] mx-[5px] text-[#44403C] font-sans text-2xl font-medium' id="8">8</button>
          <button onClick={({target})=>{insereNum(target)}} className='bg-violet-200 min-w-[65px] w-[65px] h-[60px] mx-[5px] text-[#44403C] font-sans text-2xl font-medium' id="9">9</button>
          <button onClick={({target})=>{insereNum(target)}} className='bg-violet-200 min-w-[65px] w-[65px] h-[60px] mx-[5px] text-[#9276F0] font-sans text-2xl font-medium' id="/">/</button>
          <button onClick={({target})=>{insereNum(target)}} className='bg-[#E4DBFF] min-w-[65px] w-[65px] h-[60px] mx-[5px] text-[#44403C] font-sans text-2xl font-medium' id="4">4</button>
          <button onClick={({target})=>{insereNum(target)}} className='bg-[#E4DBFF] min-w-[65px] w-[65px] h-[60px] mx-[5px] text-[#44403C] font-sans text-2xl font-medium' id="5">5</button>
          <button onClick={({target})=>{insereNum(target)}} className='bg-[#E4DBFF] min-w-[65px] w-[65px] h-[60px] mx-[5px] text-[#44403C] font-sans text-2xl font-medium' id="6">6</button>
          <button onClick={({target})=>{insereNum(target)}} className='bg-[#E4DBFF] min-w-[65px] w-[65px] h-[60px] mx-[5px] text-[#9276F0] font-sans text-2xl font-medium' id="*">{icons.Vezes}</button>
          <button onClick={({target})=>{insereNum(target)}} className='bg-[#E4DBFF] min-w-[65px] w-[65px] h-[60px] mx-[5px] text-[#44403C] font-sans text-2xl font-medium' id="1">1</button>
          <button onClick={({target})=>{insereNum(target)}} className='bg-[#E4DBFF] min-w-[65px] w-[65px] h-[60px] mx-[5px] text-[#44403C] font-sans text-2xl font-medium' id="2">2</button>
          <button onClick={({target})=>{insereNum(target)}} className='bg-[#E4DBFF] min-w-[65px] w-[65px] h-[60px] mx-[5px] text-[#44403C] font-sans text-2xl font-medium' id="3">3</button>
          <button onClick={({target})=>{insereNum(target)}} className='bg-[#E4DBFF] min-w-[65px] w-[65px] h-[60px] mx-[5px] text-[#9276F0] font-sans text-2xl font-medium' id="+">{icons.Mais}</button>
          <button onClick={({target})=>{insereNum(target)}} className='bg-[#E4DBFF] min-w-[140px] w-[65px] h-[60px] mx-[5px] text-[#44403C] font-sans text-2xl font-medium' id="0">0</button>
          <button onClick={({target})=>{insereNum(target)}} className='bg-[#E4DBFF] min-w-[65px] w-[65px] h-[60px] mx-[5px] text-[#44403C] font-sans text-2xl font-medium' id=".">.</button>
          <button onClick={({target})=>{insereNum(target)}} className='bg-[#E4DBFF] min-w-[65px] w-[65px] h-[60px] mx-[5px] text-[#9276F0] font-sans text-2xl font-medium' id="-">{icons.Menos}</button>
          <button onClick={()=>{Operacao()}} className='bg-[#9276F0] min-w-[290px] w-[260px] h-[60px] mx-[5px] text-[#EFEFEF] font-sans text-2xl font-medium'>=</button>
        </div>
        </div>
      </div>
    </section>}
    </>
  )
}

export default Calculadora;