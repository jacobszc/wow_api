import { useState, useEffect } from "react";
import * as urls from "./headers";


function SearchComp() {

const [input, setInput] = useState(""); // dynamic input that will change with key stroke
const [submittedMount, setSubmittedMount] = useState(null); // cleaned and final input to be submitted to api
const [mountIndexObj, setMountIndexObj] = useState({});




function customOnSubmit(e) {
  e.preventDefault();
  const q = input.trim();
  if(!q) return;
  console.log("your on submit function has been called and the value is", {q})
  setSubmittedMount(q)
   

 }

 //fetch(url, requestObject(HeaderObject))



 //// start useEffect for api call for sumbitted mouunt
 const wowApiRequest = new Request(urls.mountIndexUrl , urls.wowApiInit);
 useEffect(() => {
   
  if(!submittedMount) return;
  let ignore = false;

fetch(wowApiRequest).then((resolved) => {
return resolved.json()
}).then(data => console.log(data)).catch((error) =>{

  console.log("fetch failed: " , error)
}).finally(() => {
  console.log("fetch complete")
})

   
  
return() => ignore = true;

  
    

},[submittedMount]) 

//// end useEffect
 //console.log(mountIndexObj);



 


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