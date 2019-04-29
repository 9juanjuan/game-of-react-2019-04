import React from 'react'; 

// pull character from props
function Character({data}) {
    return (

        
                 <div class="card">
                     <div class="card-body">
                     <ul>
                        <h5 class="card-title text-center">name: {data.name}</h5>
                        <li class="card-text">born: {data.born}</li>
                        <li class="card=text">died: {data.died}</li>
                        <li class="card=text">culture: {data.culture}</li>
                     </ul>
                     </div>
                 </div>
           
    )



}




export default Character