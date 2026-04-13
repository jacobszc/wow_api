import { useState } from "react";


function SearchComp() {

const [input, setInput] = useState("") // dynamic input that will change with key stroke
const [submittedItem, setSubmittedItem] = useState(null) // cleaned and final input to be submitted to api


function customOnSubmit(e) {
  e.preventDefault();
  const q = input.trim();
  if(!q) return;
  console.log("your on submit function has been called and the value is", {q})
  setSubmittedItem(q)
   

 }


    return (

    <form onSubmit = {customOnSubmit}>

    <input  
     type ="search" 
     id = "item-search" 
     placeholder="enter an item to search"
     value = {input}
     onChange = {(event)=> setInput(event.target.value)}
     />
     

     </form>

    );






}


export default SearchComp;