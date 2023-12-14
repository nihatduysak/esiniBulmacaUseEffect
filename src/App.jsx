import { useState } from "react";
import Circle from "./components/Circle"
import Success from "./components/Success";

function App() {
 
const nums = [
  {id: 1, number: 3, status: false, isFound:false},
  {id: 2, number: 2, status: false, isFound:false},
  {id: 3, number: 5, status: false, isFound:false},
  {id: 4, number: 7, status: false, isFound:false},
  {id: 5, number: 12, status: false, isFound:false},
  {id: 6, number: 3, status: false, isFound:false},
  {id: 7, number: 2, status: false, isFound:false},
  {id: 8, number: 5, status: false, isFound:false},
  {id: 9, number: 7, status: false, isFound:false},
  {id: 10, number: 12, status: false, isFound:false},
  {id: 11, number: 1, status: false, isFound:false},
  {id: 12, number: 1, status: false, isFound:false},
  {id: 13, number: 4, status: false, isFound:false},
  {id: 14, number: 4, status: false, isFound:false},
  {id: 15, number: 6, status: false, isFound:false},
  {id: 16, number: 6, status: false, isFound:false}
];

const [trueCount, setTrueCount] = useState(0);
const [numbers,setNumbers] = useState(nums);
const [clickedCircles,setClickedCircles] = useState([]);
const [founded,setFounded] = useState(0);

function handleClickedCircles(item){
  let arr = clickedCircles;
  arr.push(item);
  if(arr.length == 2){
    for(let i=0;i<2;i++){
      if(arr[0].number === arr[1].number){
        isFoundToTrue(arr[i].id)
      }
    }
    arr=[];
  }

  setClickedCircles(arr);
}

function isFoundToTrue(id){

  let newNums = numbers.map((item)=>{
    if(item.id === id){
      item.isFound= true;
    }
      return item;
    });
  setFounded(founded+1);
  setNumbers(newNums);

}

function changeStatus(id){
  let newNums = numbers.map(item => {
    if(item.id === id){
      handleClickedCircles(item)
      item.status = !item.status;
      if(item.status){
        setTrueCount(()=>{
          if(trueCount+1 > 2){
            setStatusToFalse(id);
            return 1;
          }else{
            return trueCount+1
          }
        });
      }else{
        setTrueCount(trueCount-1)
      }
    }
    return item;
  })
  setNumbers(newNums);
}

function setStatusToFalse(id) {
  let newNums = numbers.map((item)=>{
      if(item.isFound){
        return item;
      }
      if(item.id !== id){
        item.status= false;
      }
      
      return item;
    });
  setNumbers(newNums);
}

  return (
    <>
      <div className="board">
        {
          numbers.map( (item,index)=> <Circle key={index} status={item.status} num={item.number} id={item.id} changeStatus={changeStatus} isFound={item.isFound} /> )
        }
      </div>

      <Success founded={founded} />
    </>
  )
}

export default App
