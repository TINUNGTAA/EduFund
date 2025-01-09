function FunderSection() {
  return (
    <section>
      <div className="mt-20 lg:mt-24 lg:w-8/12 mx-auto ">
        <div className="flex flex-col lg:flex-row items-center justify-center text-left ">
          <div className="flex-1 flex-col justify-center ">
            <p className="text-gray-500 font-bold mb-8">GET STARTED AS</p>
            <h1 className=" text-gray-700  font-medium">
              Funder (Investor)
              <div className="hidden lg:flex my-4 w-16 bg-edufund-green"></div>
            </h1>
            <div className="my-12">
              <img
                src="https://edufundgh.org/landing/assets/img/search_icon.svg"
                alt="search icon"
                className="mb-3 w-7"
              />
              <p className="font-semibold text-gray-700">Find a Fund Request</p>
              <p className="text-sm  mt-1 text-gray-700">
                Start by selecting a student you would like to support
              </p>
            </div>
            <div className="my-12">
              <img
                src=" https://edufundgh.org/landing/assets/img/donation_icon.svg"
                alt="search icon"
                className="mb-3 w-7"
              />
              <p className="font-semibold text-gray-700">
                Donate to Fund Request
              </p>
              <p className="text-gray-700 text-sm mt-1">
                Contribute to fund the request
              </p>
            </div>
          </div>

          <div className="hidden lg:flex flex-1 justify-center lg:justify-center mb-10 lg:mb-0">
            <img
              src="https://edufundgh.org/landing/assets/img/funders.svg"
              className=""
              alt=" funderimage prompt"
            />
          </div>
        </div>
        <div className="flex flex-col  lg:flex-row items-center justify-center pt-8 ">
          <div className=" hidden lg:flex flex-1 justify-center  lg:justify-center mb-10">
            <img
              src="https://edufundgh.org/landing/assets/img/student.svg"
              className=""
              alt=""
            />
          </div>
          <div className="flex-1 flex-col justify-center lg:px-8 lg:ml-24">
            <p className="text-gray-500 font-bold mb-8">GET STARTED AS</p>
            <h1 className=" text-gray-700  font-medium">
              Fundee (Student)
              <div className="hidden lg:flex my-4 w-16 bg-edufund-green"></div>
            </h1>

            <div className="my-12">
              <img
                src="https://edufundgh.org/landing/assets/img/apply_icon.svg"
                alt="search icon"
                className="mb-3 w-7"
              />
              <p className="font-semibold text-gray-700">
                Create a Fund Request
              </p>
              <p className="text-sm  mt-1 text-gray-700">
                Tell your story and submit a request for the amount you need
              </p>
            </div>

            <div className="my-12">
              <img
                src="https://edufundgh.org/landing/assets/img/share_icon.svg"
                alt="search icon"
                className="mb-3 w-7"
              />
              <p className="font-semibold text-gray-700">
                Share with family & friends
              </p>
              <p className="text-sm  mt-1 text-gray-700">
                Share your approved request on social media platforms
              </p>
            </div>

            <div className="my-12">
              <img
                src="https://edufundgh.org/landing/assets/img/document_icon.svg"
                alt="search icon"
                className="mb-3 w-7"
              />
              <p className="font-semibold text-gray-700">Receive Funds</p>
              <p className="text-sm  mt-1 text-gray-700">
                Get contributions from people around the globe
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default FunderSection;
