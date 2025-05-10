import { useState,useRef } from 'react'
import { TbFileUpload } from "react-icons/tb";
import { LuFileSearch } from "react-icons/lu";
import { MdOutlinePaid } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoShieldCheckmark } from "react-icons/io5";
import { PiCurrencyDollarSimpleFill } from "react-icons/pi";
import { BiSupport } from "react-icons/bi";
import { IoMdThumbsUp } from "react-icons/io";
import Navbar from './components/navbar'
import { useForm } from "react-hook-form"
import { ImQuotesLeft,ImQuotesRight } from "react-icons/im";
import { motion } from "framer-motion";
import {useScreenSize} from './usescreensize';
import { FaArrowDownLong } from "react-icons/fa6";


function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  const [quotebox, setQuotebox] = useState(false)
  const [quote, setquote] = useState([])

  const desc = useRef(null)//scroll to top
  const test = useRef(null)//scroll to testimonials
  const cont = useRef(null)//scroll to contact

  const screenSize = useScreenSize();

  const isLargeScreen = screenSize > 768;

  const motionProps = isLargeScreen
    ? {
      initial: { opacity: 0, x: -100 },
      whileInView: { opacity: 1, x: 0 },
      transition: { duration: 0.6, ease: "easeOut" },
      viewport: { once: false, amount: 0.5 }
    }
    : {
      initial: { opacity: 0, y: -100 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.6, ease: "easeOut" },
      viewport: { once: false, amount: 0.5 }
    };


  const handlequotes=async() => {
    const response=await fetch("https://api.api-ninjas.com/v1/quotes",{
      method:"GET",
      headers:{"X-Api-Key": "LZ4crGvM0+YmaRNa+zGMHQ==Osxt7Rbk75h9KLkg"}
    } )
    if (response.ok) {
      const data=await response.json()
      setQuotebox(true)
      setquote(data[0])
      console.log(quote);
      

    }
    else {
      console.log("Error:", response.status, await response.text)
    }
  }

  return (
    <>
      {quotebox===true && <div className='p-10 grid justify-around items-center fixed right-80 mt-60 w-150  bg-white border-1 motion-preset-fade motion-duration-500'>
        <div className='p-5 grid gap-4' >
          <p className='font-bold'><sup><ImQuotesLeft className='inline' /></sup> {quote.quote} <sup><ImQuotesRight className='inline' /></sup></p>
          <p>-{quote.author}</p>
        </div>
        <button className='rounded-full w-20 m-auto text-white bg-[rgb(23,55,112)] p-2 cursor-pointer transition hover:scale-110 ease-in-out duration-75' onClick={()=>{setQuotebox(false)}}>OK</button>
      </div> }
      <Navbar desc={desc} cont={cont} test={test} />
      
      <section ref={desc} className='md:flex md:justify-between grid items-center p-2 md:w-full w-[16rem] place-items-center'>
        <article className='grid md:p-15 text-[rgb(37,55,112)] md:mt-15  '>
          <div>
            <p className='font-extrabold md:text-4xl md:w-xl w-46 '>Your Trusted Partner in Software License Resale.</p>
            <p className='md:mt-5 md:w-xl md:text-lg text-[10px] w-46 mt-2'>Maximize the value of your unused software licenses with a fast, secure, and hassle-free resale process.</p>
          </div>
          <div className='mt-3 md:mt-6'>
            <button onClick={handlequotes} className='md:mr-5 md:text-xl rounded-full border-2 md:p-3 border-[rgb(23,55,112)] cursor-pointer hover:scale-110 ease-in-out transition duration-100 text-[10px] p-1 mr-3'>Get a Quote</button>
            <button className='rounded-full border-2 md:text-xl md:p-3 border-[rgb(23,55,112)] cursor-pointer bg-[rgb(23,55,112)] text-white hover:scale-110 ease-in-out transition duration-100 text-[10px] p-1 '>Sell my Licenses</button>
          </div>
        </article>
        <motion.img className='w-50 h-50 md:w-120 md:h-120' initial={{scale:0}} whileInView={{scale:1}} transition={{duration:0.3,ease:"easeOut"}} viewport={{once:false,amount:0.6}} src="https://i.postimg.cc/pXKJFckM/10276612-4421959.png" alt="" />
      </section>


      <section className='md:h-100 bg-[rgb(23,55,112)] mt-20 grid md:w-full w-[16rem] h-auto place-items-center'>
        <h1 className='md:text-7xl text-white md:m-auto text-xl mt-5'>How It Works</h1>
        <motion.div className='md:flex md:w-200 md:justify-around md:m-auto m-auto grid p-5' {...motionProps}>
          <div className="flex flex-col items-center justify-center text-white md:h-30 h-10">
            <p className="md:text-7xl text-4xl">
              <TbFileUpload />
            </p>
            <p className="md:m-auto text-[10px] ml-2">Upload License</p>
          </div>
          {
            screenSize > 768 ? (
              <FaArrowRightLong className='text-5xl text-white mt-5' />
            ) : (
              <FaArrowDownLong className='text-3xl text-white mt-5 ml-6 mb-5' />
            )
          }

          <div className="flex flex-col items-center justify-center text-white md:h-30 h-10">
            <p className="md:text-7xl text-4xl">
              <LuFileSearch />
            </p>
            <p className="md:m-auto text-[10px] ml-2">Get Valuation</p>
          </div>
          {
            screenSize >768 ? (
              <FaArrowRightLong className='text-5xl text-white mt-5' />
            ) : (
              <FaArrowDownLong className='text-3xl text-white mt-5 ml-6 mb-5' />
            )
          }
          <div className="flex flex-col items-center justify-center text-white md:h-30 h-10">
            <p className="md:text-7xl text-4xl">
              <MdOutlinePaid />
            </p>
            <p className="md:m-auto text-[10px] ml-1">Get Paid</p>
          </div>
        </motion.div>

      </section>

      <section className='md:h-80 mt-5 grid md:w-full w-[16rem] place-items-center'>
        <h1 className='md:text-7xl md:m-auto '>Why Choose Us</h1>
        <motion.div
          className='grid md:h-auto md:mb-10 md:w-full w-50 p-3 md:p-5 place-items-center '
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <div className='grid md:flex items-center justify-center gap-10 md:mb-5'>
            <div className='flex flex-col items-center md:mr-20'>
              <IoShieldCheckmark className='text-[rgb(23,55,112)] text-4xl md:text-6xl' />
              <p className='text-[rgb(23,55,112)] text-xs text-center md:text-md'>Reliable service</p>
            </div>
            <div className='flex flex-col items-center'>
              <PiCurrencyDollarSimpleFill className='text-[rgb(23,55,112)] text-4xl md:text-6xl' />
              <p className='text-[rgb(23,55,112)] text-xs text-center'>Competitive offers</p>
            </div>
          </div>

          <div className='grid md:flex items-center justify-center gap-10 mt-5 md:mt-0'>
            <div className='flex flex-col items-center md:mr-24'>
              <IoMdThumbsUp className='text-[rgb(23,55,112)] text-4xl md:text-6xl' />
              <p className='text-[rgb(23,55,112)] text-xs text-center'>Fast process</p>
            </div>
            <div className='flex flex-col items-center'>
              <BiSupport className='text-[rgb(23,55,112)] text-4xl md:text-6xl' />
              <p className='text-[rgb(23,55,112)] text-xs text-center'>Expert support</p>
            </div>
          </div>
        </motion.div>

      </section>

      <section ref={test} className='text-white grid md:justify-center md:p-15 bg-[rgb(23,55,112)] md:w-full w-[16rem] place-items-center '>
        <h1 className='md:m-auto md:text-7xl mb-3  mt-3 '>Testimonials</h1>
        <motion.div className='md:flex md:justify-between md:w-180 md:mt-10 grid md:ml-0 ' initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}>
          <article className='border-1 md:w-80 grid md:p-5 w-40 text-[10px] md:text-lg p-2 mb-3 md:mb-0'>
            <p>SoftSell made it incredibly easy to sell our unused licenses. We recovered costs we thought were sunk — all within days.</p>
            <b className='md:mt-2 mt-1'>- Sarah M</b>
            <p>IT Manager</p>
          </article>
          <article className='border-1 md:w-80 grid md:p-5 w-40 text-[10px] md:text-lg p-2 mb-3 md:mb-0'>
            <p>I was skeptical at first, but SoftSell delivered exactly as promised. Fast valuation, transparent process, and secure payment.</p>
            <b className='md:mt-2 mt-1'>- Jason L.</b>
            <p>Operations Director</p>
          </article>
        </motion.div>
      </section>


      <section ref={cont} className='grid md:w-full w-[16rem] text-[10px] md:text-lg place-items-center'>
        <h1 className='md:m-auto md:text-7xl text-[rgb(23,55,112)] mt-10 text-xl'>Contact Us</h1>
        <motion.form initial={{opacity:0,y:-100}} whileInView={{opacity:1,y:0}} transition={{duration:0.5,ease:"easeInOut"}} viewport={{once:false,amount:0.6}} className='p-5 text-[rgb(23,55,112)] grid m-auto' onSubmit={handleSubmit(onSubmit)}>
          <input className='mb-3 border-1 p-1 md:w-80 w-40 border-[rgb(23,5,112)] outline-[rgb(23,55,112)]' type="text" defaultValue="" placeholder='Name' {...register("name",{required:true})} />
          {errors.name && <span className="text-red-500 md:text-sm text-[8px]">Name is required</span>}
          <input className='mb-3 border-1 p-1 md:w-80 w-40 border-[rgb(23,5,112)] outline-[rgb(23,55,112)]' type="text" defaultValue="" placeholder='Email' {...register("email",{required:true})} />
          {errors.email && <span className="text-red-500 md:text-sm text-[8px]">Email is required</span>}
          <input className='mb-3 border-1 p-1 md:w-80 w-40 border-[rgb(23,5,112)] outline-[rgb(23,55,112)]' type="text" defaultValue="" placeholder='Company' {...register("company",{required:true})} />
          {errors.company && <span className="text-red-500 md:text-sm text-[8px]">Company is required</span>}
          <select className='text-[rgb(23,55,112)] border-1 border-[rgb(23,55,112)] outline-[rgb(23,55,112)] p-1 md:w-80 mb-3 w-40' {...register("licensetype",{required:true})} name="" id="">
            <optgroup label='License types'>
              <option hidden disabled value="">Select</option>
              <option value="CreativeCommon">Creative Common</option> text-[8px]
              <option value="PublicDomain">Public Domain</option>
              <option value="Freetoshareanduse">Free to share and use</option>
            </optgroup>
          </select>
          {errors.licensetype && <span className="text-red-500 md:text-sm text-[8px]">license is required</span>}
          <textarea {...register("description",{required:true})} className='mb-3 border-1 p-1 md:w-80 w-40 border-[rgb(23,5,112)] outline-[rgb(23,55,112)] h-30' placeholder='Description'></textarea>
          {errors.description && <span className="text-red-500 md:text-sm text-[8px]">Description is required</span>}
          <input className='bg-[rgb(23,55,112)] text-white p-2 cursor-pointer' type="submit" />
        </motion.form>
      </section>
    </>
  )
}

export default App
