function MidSection() {
  return (
    <section>
      <div className="flex flex-col-reverse lg:flex-row items-center  gap-12 mt-6 lg:px-28 lg:mt-16 ">
        <div className="flex flex-1 flex-col items-center  lg:items-start ">
          <h2 className="text-edufund-green text-3xl lg:5xl md:5xl text-center font-bold  lg:text-left mb-6">
            Help a student continue <br />
            schooling
            <div className="hidden lg:flex my-6 w-16 h-1 bg-edufund-green"></div>
          </h2>
          <p className="text-gray-700 text-lg lg:text-xl md:xl lg:text-left mb-6 ">
            Invest in the future, fund a student today
          </p>
          <div className="flex lg:my-6  justify-center sm:justify-start  flex-wrap gap-6">
            <a
              href="https://paystack.com/pay/edufund"
              target="_blank"
              className="text-center cursor-pointer py-3 px-6 rounded-sm bg-edufund-green text-white w-10/12 transition duration-300 hover:bg-green-900 lg:left "
            >
              Get funding for you education
            </a>
            <a
              href="https://paystack.com/pay/edufund"
              target="_blank"
              className="text-center cursor-pointer py-3 px-6 rounded-sm bg-white text-edufund-green border border-edufund-green w-10/12 transition duration-300 hover:text-green-900 "
            >
              Support a student
            </a>
          </div>
        </div>

        <div className="flex justify-center flex-1 md:-8 lg:mb-0">
          <img
            src="https://edufundgh.org/landing/assets/img/edufund-hero-image.png"
            className="w-8/12 "
          />
        </div>
      </div>
    </section>
  );
}
export default MidSection;
