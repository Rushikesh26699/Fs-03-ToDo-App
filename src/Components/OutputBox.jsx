import React from 'react'
// import { GlobalContext } from '../App'
import '../CSS_files/OutputBox.css'

const OutputBox = ({currList,setCurrList,currValue,setCurrValue}) => {
    // const{currList,setCurrList,setCurrValue,edit,setEdit}=useContext(GlobalContext);

    const deleteHandeler=(id)=>{
       
        const deleteValue = currList.filter((ele)=>{
            return ele.id !== id
        })
        setCurrList(deleteValue)
        // console.log(currList);  
    }
   
  return (
    <>
    <div className='outbox'>
        {currList.map((e)=>{
            return<>
            <div key={e.id} className='result'>
                {/* <input type="checkbox" name="" id="checkbox1" /> */}
                <h2>{e.currValue}</h2>
                <button onClick={()=>{
                    deleteHandeler(e.id)
                }}>Delete</button>
            </div>
            </>
        })  }
       
    </div>
    </>
  )
}

export default OutputBox