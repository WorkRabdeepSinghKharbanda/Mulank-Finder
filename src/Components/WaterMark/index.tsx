import style from "./style.module.scss";
const WaterMark = () => {
  return (
    <section className="text-center pe-3 pe-md-5">
      <p className={`${style.watermark} `}>
        Made with ❤️ by{" "}
        <a href="https://github.com/WorkRabdeepSinghKharbanda">
          Rabdeep Singh Kharbanda
        </a>
      </p>
    </section>
  );
};

export default WaterMark;
