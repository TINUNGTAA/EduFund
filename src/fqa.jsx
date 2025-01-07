import { useState } from "react";

function FQA({question , answer}){

    const [accordion , setAccordion] = useState(false)
    return(
        <section className=" my-10 py-12 ">
            <h1 className="text-center font-semibold text-4xl text-gray-700 mb-20">Frequently Asked Questions</h1>
            <div className=" flex flex-col sm:w-3/4 lg:w-6/12 mx-auto px-2  my-5 mb-12">
            <button className="flex items-center justify-between border-b border-gray-300 mb-5"  onClick={()=>setAccordion(!accordion)}> 
                <span className="text-gray-700 font-semibold py-2 ">Do i have to make any payment during application?</span>
               {!accordion?  <sp> <i className="fas text-edufund-green fa-chevron-down"></i></sp> :  <sp> <i className="fas text-edufund-green fa-chevron-up"></i>
                
               
                </sp>
               }

            </button>
            <div className={`grid overflow-hidden  transition-all duration-300  ease-in-out  ${accordion? "grid-row-[1fr] opacity-100" :"grid-row-[0fr] opacity-0"}`}>
                   EduFund is 100% free. You do not need to pay any amount to register on the platform. Also, EduFund is free to to download. We do not take any percentage from the money donated to you.
                 
            </div>

            

            </div>


           

                 
            

        </section>
    )
}
export default  FQA;