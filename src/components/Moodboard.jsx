const Moodboard = () => {
  return (
    <section className="moodboard">
      <div className="container">
        <div className="row">
          <p>i bring value through my design by the following my</p>
          <div className="research">
            <img className="search" src="/images/search.png" alt="" />
            <h3>
              Research <br /> Moodboard
            </h3>
            <img className="moodboard-img" src="/images/moodboard.png" alt="" />
            <img className="vector" src="/images/Vector.png" alt="" />
          </div>
          <div className="type-test">
            <img className="pen" src="/images/graphic-design.png" alt="" />
            <p>
              Create <br /> Prototype <br /> Test
            </p>
            <img className="inter" src="/images/user-interface.png" alt="" />
            <img className="prototype" src="/images/prototype.png" alt="" />
            <img className="vector2" src="/images/Vector.png" alt="" />
          </div>
          <h4 className="go-live">
            Go live
            <img src="/images/mail.png" alt="" />
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Moodboard;
