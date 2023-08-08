import React ,{useState} from 'react';

const App3=()=>{
    const [fullName,setFullName] = useState({
        fname:'',
        lname:'',
        email:'',
        phone:'',

    });
    
    const inputEvent=(event)=>{
          console.log(event.target.value);
          console.log(event.target.name);

       //   const value=event.target.value;
         // const name =event.target.name;

         const {value,name}= event.target;

          setFullName((preValue)=>{
            if(name==="fName"){
                return{
                fname: value,
                lname: preValue.lname,
                email: preValue.email,
                phone: preValue.phone,
                };
            }
            else if(name==="lName"){
                return{
                fname: preValue.fname,
                lname: value,
                email: preValue.email,
                phone: preValue.phone,
                };
            }
            else if(name==="email"){
                return{
                fname: preValue.fname,
                lname: preValue.lname,
                email: value,
                phone: preValue.phone,
                };
            }
            else if(name==="phone"){
                return{
                fname: preValue.fname,
                lname: preValue.lname,
                email: preValue.email,
                phone: value,
                };
            }
          });
    };
    const onSubmits=(event)=>{
        event.preventDefault();
        alert("form submitted");
    
    };

   
    return(
        <>
        <div className='main_div'>
        
        <form  onSubmit={onSubmits}>
   <div>
    <h1>Hello {fullName.fname} {fullName.lname} {fullName.email} {fullName.phone}</h1>
    
    <input type="text" placeholder="Enter Your Name" name='fName' onChange={inputEvent}
    value={fullName.fname}

     />

    <input type="text" placeholder="Enter Your Last name" name='lName' onChange={inputEvent} value={fullName.lname}/>
    
    <input type="email" placeholder="Enter Your Email" name='email' onChange={inputEvent} value={fullName.email}
        autoComplete='off'
    />
    <input type="number" placeholder="Enter Your Mobile" name='phone' onChange={inputEvent} value={fullName.phone}/>
    <button type="submit">Submit me</button>
   </div>
   </form>
   </div>
  
   </>
    );
};

export default App3;