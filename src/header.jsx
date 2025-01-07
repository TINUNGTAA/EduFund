function Header() {
  return (
    <header className="flex items-center justify-between py-5 px-28 bg-white font-family: inherit  mb-1">
      <div className="text-green-600 font-bold text-xl flex items-center">
        <img
          src="https://edufundgh.org/landing/assets/img/edufund-logo.svg"
          alt="EduFund GH Logo"
          className="h-10 md:h-14"
        />
      </div>

      <a
        href="https://play.google.com/store/apps/details?id=com.anudsc.edufundgh"
        className="border py-3 px-7 bg-gray-600 hover:bg-gray-700 rounded-md text-white font-bold-none  text-sm text-center cursor-pointer"
      >
        DOWNLOAD
      </a>
    </header>
  );
}

export default Header;
