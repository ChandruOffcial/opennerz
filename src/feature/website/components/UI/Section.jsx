const Section = ({ sectionNo, url, children }) => {
  return (
    <section className="slide fade-6 kenBurns">
      <div className="content">
        <div className="container">
          <div className="wrap">{children}</div>
        </div>
      </div>
      <div className="background" style={{ backgroundImage: `url(${url})` }} />
    </section>
  );
};

export default Section;
