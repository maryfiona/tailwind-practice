import branch from '../assets/branch.PNG'




const Navbar =()=>{
    return(
        <>
        <div className='grid grid-cols-2  pt-20 '>
 
    <img className='ml-60 w-8/12' src={branch} alt='branch'/>
    <form className='  bg-yellow-400  mr-32  pt-20 space-y-6 '>
        
        <b className='font-sans flex justify-center'>great 
         jones</b> 
       
        <b className='flex justify-center'>sign-up now to enjoy</b>
        <b className='text-4xl flex justify-center'>$ 100 0FF</b>
        <b className='flex justify-center'>Our family style,five piece set of  <br />cookware essentials!</b>
        <div className='flex justify-center' >
        <input className='pl-5 w-80 h-10 rounded-md'  type='Email' placeholder='Email Address' />
        </div>
        <div className='flex justify-center'>
        <button  className='bg-black text-white w-80 h-10 rounded-md'>Continue</button>
        </div>
        <p className='flex justify-center underline'>NO, I'LL PAY FULL PRICE</p>
       
    </form>
    
    </div>


        </>
    )
}
export default Navbar;

