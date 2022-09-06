import { useRef } from 'react'

export const FocusScreen = () => {

const inputRef = useRef( )

const onHandleClick = ()=>{
  console.log(inputRef);
  inputRef.current.select();
}

  return (
    <>
    <h3>UseRef</h3>

    <input
    ref={inputRef}
    type="text"
    palceholder="Enter your name"
    className='form-control'
     />

     <div className="btn btn-warning mt-3" onClick={onHandleClick}>Set focus</div>
    </>
  )
}
