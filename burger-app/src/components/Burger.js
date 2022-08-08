import { useState } from 'react';
import './burger.css';

  function AddTomato(){
    return (
      <>
        
          <button className='addtomato'></button>
        
      </>
    );
  }

  function AddMeat(){
    return (
      <>
        <button className='addmeat'></button>
      </>
    );
  }

  function AddLattuce(){
    return (
      <>
        <button className='addlettuce'></button>
      </>
    );
  }

  function RemoveIngredient(){
    return (
      <>
      </>
    );
  }

function Burger(){

    const [showTomato, setShowTomato]=useState(false);
    const [showLattuce, setShowLattuce]=useState(false);
    const [showMeat, setShowMeat]=useState(false);

   

      function addTomato(action){
        if(action === 'add'){
            setShowTomato(true);
        }else{
            setShowTomato(false);
        }
      }

      function addMeat(action){
        if(action === 'add'){
            setShowMeat(true);
        }else{
            setShowMeat(false);
        }
      }

      function addLattuce(action){
        if(action === 'add'){
            setShowLattuce(true);
        }else{
            setShowLattuce(false);
        }
      }


    return(
      
        <div className='ingredients'>
            <div className='heading'>
            <header>WELCOME TO ACA BURGER</header>
            </div>
            <br></br>
        <button className='topbread'></button>
        <div>{showTomato ? <AddTomato /> : <RemoveIngredient/>}</div>
        <div>{showMeat ? <AddMeat /> : <RemoveIngredient />}</div>
        <div>{showLattuce ? <AddLattuce/> : <RemoveIngredient />}</div> 

        <button className='bottombread'></button>

        <div className='ingredientsBlock'>
            <p>Tomato</p>
            <div className='ingrBtns'>
            <button onClick={()=>addTomato('add')} className='ingrbtn'>Add</button>
            <button onClick={()=>addTomato('remove')} className='ingrbtn'>Remove</button>
        </div>
        
            <p>Meat</p>
            <div className='ingrBtns'>
            <button onClick={()=>addMeat('add')} className='ingrbtn'>Add</button>
            <button onClick={()=>addMeat('remove')} className='ingrbtn'>Remove</button>
        </div>
        
        
            <p>Lattuce</p>
            <div className='ingrBtns'>
            <button onClick={()=>addLattuce('add')} className='ingrbtn'>Add</button>
            <button onClick={()=>addLattuce('remove')} className='ingrbtn'>Remove</button>
        </div>
        
        
          </div>
        </div>
       
    
    );
}
export default Burger;