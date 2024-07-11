const FiverrBadge = () => {
  const links = "";
  /* <!-- Put this code anywhere in the body of your page where you want the badge to show up. --> */
  return (
    <>
      <div
        itemScope
        itemType="http://schema.org/Person"
        className="fiverr-seller-widget"
        style={{ display: "inline-block" }}
      >
        <a
          itemProp="url"
          href='https://www.fiverr.com/jarvinmito rel="nofollow"'
          target="_blank"
          style={{ display: "inline-block" }}
        >
          <div
            className="fiverr-seller-content"
            id="fiverr-seller-widget-content-07a042c8-7ded-4ebe-ac95-9f6b4ca8f4e4"
            itemProp="contentURL"
            style={{ display: "none" }}
          ></div>
          <div id="fiverr-widget-seller-data" style={{ display: "none" }}>
            <div itemProp="name">jarvinmito</div>
            <div itemScope itemType="http://schema.org/Organization">
              <span itemProp="name">Fiverr</span>
            </div>
            <div itemProp="jobtitle">Seller</div>
            <div itemProp="description">
              I'm a seasoned software developer specializing in building
              user-friendly websites and web applications. With over a decade of
              experience in front-end development, I craft intuitive interfaces
              and engaging user experiences. My background in HTML, CSS, and
              responsive design has equipped me with the skills to create
              well-structured email templates. While I'm new to offering this
              service on Fiverr, I've successfully built email templates for
              personal projects, demonstrating my ability to translate design
              concepts into functional email code.
            </div>
          </div>
        </a>
      </div>
    </>
  );
};
export default FiverrBadge;
