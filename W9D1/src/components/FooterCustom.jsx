function FooterCustom() {
  return (
    <div className=" w-50  d-flex  justify-content-center  align-items-center">
      <img
        src="https://instituteoftechnology.epicode.com/wp-content/uploads/2024/02/Institute-of-Technology.png"
        className=" w-25 "
        alt="logo"
      />{" "}
      <h2>•{new Date().getFullYear()}</h2>
    </div>
  );
}
export default FooterCustom;
