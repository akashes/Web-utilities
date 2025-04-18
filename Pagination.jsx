// LOGIC INSIDE THE PARENT COMPONENT

// const[currentPage,setCurrentPage]=useState(1)
// const[itemsPerPage,setItemsPerPage]=useState(4)
// let indexOfLastDish = currentPage * itemsPerPage
// //1 x 4 = 4
// //2 x 4 =8
// //3 x 4 = 12

// let indexOfFirstDish = indexOfLastDish - itemsPerPage
// //4 - 4 = 0
// //8 - 4 =4
// //12 - 4 = 8

// let showPaginationDishes= filteredDishesCategory.slice(indexOfFirstDish,indexOfLastDish)


// <Pagination filteredDishesCategory={filteredDishesCategory} itemsPerPage={itemsPerPage} setCurrentPage={setCurrentPage} />

pagination



import React, { useState } from 'react'
import './Pagination.css'

function Pagination({filteredDishesCategory,itemsPerPage,setCurrentPage}) {
  const[activeButton,setActiveButton]=useState('')
    console.log({"filtered dishes are":filteredDishesCategory});
    let numberofItems=[]

    for(let i=1 ; i<=Math.ceil(filteredDishesCategory.length/itemsPerPage);i++){
numberofItems.push(i)
    }
    const paginationButtonHandle=(item)=>{
      setCurrentPage(item)
      setActiveButton(item)
    }


    let pages = numberofItems.map((item)=>{
        return(
            <li id='page-list' className={item===activeButton?'active':""} onClick={()=>(paginationButtonHandle(item))}>{item}</li>
        )
    })
  return (
    <section>
          <ul  id='pagination'>
            {
                pages
            }
       
      
    </ul>

    </section>
  
  )
} 

export default Pagination




// CSS

// #pagination{
//   display: flex;
//   flex-wrap: wrap;
//   margin-top: 30px;
//   justify-content: center;
  
  
// }

// #pagination #page-list{

//   /* border: 1px solid gray;
//   margin: 0 5px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   padding: 8px;
//   transition: all ease .3s;
//   border-radius: none!important; */

//   color:white;
//   font-weight: bold;
//   padding: 12px 20px;
//   border-radius: 10px;
//   margin-right: 20px;
//   margin-bottom: 20px;
//   cursor: pointer;
//   transition: all ease .3s;
//   font-weight: bold;
//   border: 2px solid #ffb902;
//   border-color: #ffb902;


// }

// #pagination li:hover{
//   background-color: #ffb902;
//   border-color: #ffb902;
// }

// #page-list.active{
//   background-color: #ffb902;
//   color: black!important;

// }
