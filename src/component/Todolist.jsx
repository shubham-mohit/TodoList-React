import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
const Todolist = () => {
  const [list,setList] = useState("")
  const [Description,setDescription] = useState("")
  const [data,setData] = useState([])

  const adddata = (()=>{
    setData ([...data,{list,Description}])
    setList("")
    setDescription("")
  })

  return (
    <>
    <div className='box'>
        <Stack direction="row" spacing={2}>
          <TextField id="outlined-basic" label="List" variant="outlined" value={list} onChange={(e)=>setList(e.target.value)}/>
          <TextField id="outlined-basic" label="Description" variant="outlined" value={Description} onChange={(e)=>setDescription(e.target.value)}/>
          <Button variant="contained" color="success" onClick={adddata}> 
            <AddIcon/>
          </Button>
        </Stack>
     <div className='showdata'>
          <div className='info'> 
            <h4> List </h4>
            <h4> Description </h4>
            <h4> Remove </h4>
          </div>
          {console.log(data)}
          {data.map((element,index)=>{
            return (
              <div className='info'>
                <h4>{data.List}</h4>
                <h4>{data.Description}</h4>
              </div>
            )
          })} 
     </div>
     </div>
     </>

  
 
  )
}

export default Todolist