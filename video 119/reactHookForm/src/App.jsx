import { useState } from 'react'
import { useForm } from "react-hook-form";


function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting }
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }

  const onSubmit = async (data) => {
    await delay(2);//simulate network delay
    const response = await fetch('http://localhost:3000/', {
      method: "POST", headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify(data)
    });
    //npm i cors
    const content = await response.text();
    console.log(data, content)

    // if (data.username !== "rohan") {
    //   setError("InvalidCredentails", { message: "Invalid credentials" })
    // }
  };


  return (
    <>
      <div className="container border border-black w-[70vw] mt-32 p-9 rounded-xl mx-auto bg-violet-500">
        <form className='flex gap-3 flex-col' onSubmit={handleSubmit(onSubmit)}>
          <h1 className='w-[70%] mx-auto text-white'>Username</h1>
          <input placeholder='UserName' className='border p-3 border-black w-[70%] mx-auto rounded-xl' {...register("username", { required: { value: true, message: "Please enter a valid username" }, minLength: { value: 3, message: "Min length of username is 3" }, maxLength: { value: 15, message: "Max length of username is 15" } })} type="text" />
          <h1 className='w-[70%] mx-auto text-white'>Password</h1>
          <input placeholder='Password' className='border p-3 border-black w-[70%] mx-auto mb-3 rounded-xl' {...register("password", { required: { value: true, message: "Please enter a password" }, minLength: { value: 8, message: "Min length of password is 8" }, maxLength: { value: 15, message: "Max length of password is 15" } })} type="password" />
          {errors.username && <span className=' w-[35%] text-white mx-auto'>{errors.username.message}</span>}
          {errors.password && <span className=' w-[30%] text-white mx-auto'>{errors.password.message}</span>}
          {isSubmitting && <div className='w-[35%] font-sans font-bold text-4xl mx-auto italic text-white'>
            <h1>Submitting....</h1>
          </div>}
          {errors.InvalidCredentails && <span className=' w-[23%] text-white mx-auto'>{errors.InvalidCredentails.message}</span>}
          <input disabled={isSubmitting} className={isSubmitting ? "border cursor-pointer border-black w-[55%] lg:w-[30%] p-3 mx-auto my-3 rounded-xl bg-violet-900 text-slate-400" : 'border cursor-pointer border-black w-[55%] lg:w-[30%]  p-3 mx-auto my-3 rounded-xl bg-violet-950 text-white'} type="submit" value='Submit' />
        </form>
      </div>
    </>
  )
}

export default App
