function Header() {
  return (
    <header className="flex items-center   justify-between py-5  lg:px-28 px-3 bg-white font-family: inherit  mb-1">
      <div className="  flex items-center">
        <img
          src="https://edufundgh.org/landing/assets/img/edufund-logo.svg"
          alt="EduFund GH Logo"
          className="h-10  md:h-16"
        />
      </div>

      <a
        href="https://play.google.com/store/apps/details?id=com.anudsc.edufundgh"
        className="border py-3 px-7 bg-gray-600 hover:bg-gray-700 rounded-md text-white font-bold-none  text-sm text-center cursor-pointer hidden  md:block "
      >
        DOWNLOAD
      </a>
      <div className=" flex  flex-1 justify-end  block  md:hidden">
        <i className=" fas fa-bars text-xl"></i>
      </div>
    </header>
  );
}

export default Header;
