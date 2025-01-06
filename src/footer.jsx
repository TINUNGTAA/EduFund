function Footer(){
    return(
       <footer className="flex items-center bg-green-900 py-8  px-28 justify-between"> 
       <div className=" flex  items-center  gap-12  text-white text-sm ">
        <img src="https://edufundgh.org/landing/assets/img/edufund-logo.svg" className="h-7"/>
        <ul className="flex gap-12">
          <li className=""><a href="">DONATE</a></li> 
          <li className=""><a href="">CONTACT: +233 20 358 0427</a></li> 

           
        </ul>

        

       </div>
       <ul className=" flex  gap-10 text-white ">
        <li> 
            <a  href="https://twitter.com/EduFundGhana"> < i className="fab fa-twitter text-2xl "></i>
            </a>
     
        </li>
        <li> 
            <a href="https://www.facebook.com/EduFund-Ghana-104576088576349" > < i  className="fab fa-facebook  text-2xl "></i>
            </a>
     
        </li>

       </ul>
       
      

       </footer> 
    )
   
        
}
export default Footer;