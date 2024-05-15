"use client"
import { Button, Card, CardContent, CardHeader, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios"
export default function Home() {
  const [buttonDisabled,setButtonDisabled]= useState(false)
  const [loading,setLoading]= useState(false) 
  const [email,setEmail] = useState({
    sender:"",
    reciever:"",
    subject:"",
    body:""
    
  })
  async function handleSubmit(event:any) {
    event.preventDefault();
    try {
      console.log(email)
      setLoading(true);
      const response = await axios.post("/api/mail", email);
      console.log("Email Send successfully", response.data);
     
  } catch (error:any) {
      console.log("Signup failed", error.message);
      
      
  }finally {
      setLoading(false);
  }
  };
  useEffect(() => {
    if( email.reciever.length > 0 && email.body.length > 0 && email.subject.length>0) {
        setButtonDisabled(false); 
    } else {
        setButtonDisabled(true);
    }
}, [email]);
  return (
    <Stack sx={{width:"100%", height:"100vh",alignItems:"center",justifyContent:"center"}}>
      <Card sx={{width:"500px"}}>
        <CardHeader title= "Email Template"/>
        <CardContent>
          <Stack gap={"10px"}>
          <TextField placeholder="Reciever Email" value={email.reciever} type="email" required onChange={(e)=>{setEmail({...email,reciever:e.target.value})}}/>
          <TextField placeholder="Subject" value={email.subject} required onChange={(e)=>{setEmail({...email,subject:e.target.value})}}/>
          <TextField placeholder="Please enter your good name" size="medium" value={email.body} required onChange={(e)=>{setEmail({...email,body:e.target.value})}}/>
          <Button type='submit' variant='contained' disabled={buttonDisabled}  onClick={handleSubmit}>{loading? "Loading....":"Signup" }</Button>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
}
