function MidSection(){
    return(
       <section className="flex flex-col md:flex-row items-center justify-between px-28 py-1 bg-white">
        <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl font-bold text-edufund-green mb-6">Help a student continue <br/>schooling 
            <div className="hidden lg:flex my-6 w-16 h-1 bg-edufund-green"></div>
            </h1>
            <p className="mb-6 text-gray-700 text-center  lg:text-left text-xl " > Invest in the future, fund a student today</p>
            <div className="flex lg:my-6 my-2 justify-center sm:justify-start flex-wrap gap-6 ">
                <a href="#" className=" bg-edufund-green text-white py-3 px-6  hover:bg-green-700  rounded-sm  mb-6">Get funding for your education</a>
               

            </div>
            <div className="flex text-center justify-center sm:justify-start">  <a href="#" className=" bg-white text-edufund-green py-3 px-6 bg-gray-500 border-edufund-green rounded-sm border border-edufund-green  ">Support a student</a>
            </div>
        </div>
        <div className=" flex flex-1  justify-center md:mb-8 lg:mb-0">
            <img src="https://edufundgh.org/landing/assets/img/edufund-hero-image.png" alt="illustration " className="w-10/12" />

        </div>

       </section> 
    )
}
export default MidSection;