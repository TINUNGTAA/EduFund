function Footer() {
  return (
    <footer className=" bg-green-900 py-8  lg:px-28">
      <div className=" flex   flex-col  md:flex-row items-center   justify-center ">
        <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12   mb-12 lg:mb-0">
          <img
            src="https://edufundgh.org/landing/assets/img/edufund-logo.svg"
            className="h-7 "
          />

          <ul className="flex text-white gap-12 text-xs ">
            <li className="">
              <a href="">DONATE</a>
            </li>
            <li className="">
              <a href="">CONTACT: +233 20 358 0427</a>
            </li>
          </ul>
        </div>

        <ul className=" flex  gap-10 text-white  items-center justify-center  ">
          <li>
            <a href="https://twitter.com/EduFundGhana">
              {" "}
              <i className="fab fa-twitter text-2xl "></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/EduFund-Ghana-104576088576349">
              {" "}
              <i className="fab fa-facebook  text-2xl "></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
