const Landing = () => {
  return (
    <div className="landing">
      <div className="container">
        <div className="site-logo">
          <h1>
            Rev<span>.</span>
          </h1>
          <h2>
            My Designs <br /> About me
          </h2>
        </div>
      </div>
      <div className="container p-r">
        <h3 className="title">Hey There, I’m Revanth</h3>
        <p className="text">
          A UI UX Designer with 4 years of Industrial expertise in various
          domains. Worked in muliple projects ie in Medical sector, Agriculture
          Technology etc...
        </p>
        <img className="designer p-a" src="/images/Designer.png" alt="" />
        <img className="phone p-a" src="/images/phone.png" alt="" />
        <img className="yulduzcha p-a" src="/images/yulduzcha.png" alt="" />
      </div>
    </div>
  );
};

export default Landing;
