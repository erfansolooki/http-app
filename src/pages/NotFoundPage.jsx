import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <p>
        {" "}
        404
        <br />
        صفحه پیدا نشد
      </p>
      <Link to="/" style={{ textAlign: "center", display: "block" }}>
        برو به صفحه اصلی
      </Link>
    </>
  );
};

export default NotFound;
