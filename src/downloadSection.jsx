function DownloadSection(){
    return(
        <section className="py-12 mt-10 lg:mt-20 bg-gray-50">
            <div className="fsm:w-3/4 lg:w-6/12 mx-auto px-2">

            <h1 className=" text-4xl font-semibold text-center text-gray-700 ">Download 
                <div className="hidden lg:flex my-6 w-16 h-1 bg-edufund-green mx-auto"></div>
            </h1>
            <p>Get the app to start applying for funds. Funders can also download the app to view all approved requests for funding </p>

            <div className="flex flex-col lg:flex-row  items-center justify-center gap-6 mt-10">
                <a className="cursor-pointer flex min-w-max items-center justify-center transition duration-300 hover:bg-green-700 text-white bg-edufund-green py-3 px-6 rounded-sm "  href="https://play.google.com/store/apps/details?id=com.anudsc.edufundgh" target="_blank">
                <img src="https://edufundgh.org/landing/assets/img/google_play.svg" className=" w-7 h-7" alt="Document Andriod"/> Download for Andriod
                </a>

            </div>

            </div>
        </section>
    )
}
export default DownloadSection;