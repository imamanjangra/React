function Card({username}){
   
    return(
        <>
        <div className='mx-auto flex-col flex justify-center items-center mt-20 border-2 w-50 shadow-2xl rounded-2xl h-auto'>
            <img className='h-50 w-50 rounded-xl' src="https://images.pexels.com/photos/30067568/pexels-photo-30067568.jpeg" alt="John" />
            <h1 className='font-bold text-2xl mb-2'>{username}</h1>
            <p >CEO & Founder, Example</p>
            <p>Harvard University</p>
            <p><button>Contact</button></p>
        </div>
        </>
    )
}

export default Card