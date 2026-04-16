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
  let url = 'https://us.api.blizzard.com/data/wow/mount/index?namespace=static-us&locale=en_US';
  if(!ignore) {
  fetch(url, {
    headers: {
      'Authorization': 'Bearer US5AMd2g9bPWoi3uF1R3BxhGiABID1PPRk'
    }

  }).then(response => {
  if (!response.ok) {
   throw new Error("404 error. page not found")
  }

return response.json()

 }).then(data => console.log(data)).catch(error => console.error("Fetch error: " , error))


  } // end if check for ingore

 


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