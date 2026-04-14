import { useState, useEffect } from "react";


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



 //// start useEffect for api call for sumbitted mouunt

 useEffect(() => {

 let ignore = false;


 //let mountName = submittedItem;
 let url = 'https://us.api.blizzard.com/data/wow/index';

 fetch(url).then(response => {
if (!response.ok) {
   throw new Error("404 error. page not found")
}

return response.json()

 }).then(data => console.log(data)).catch(error => console.error("Fetch error: " , error))




 


 return () => ignore = true;

 },[]) 



 


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