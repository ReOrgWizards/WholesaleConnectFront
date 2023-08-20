import WCTitle from "../../components/TItle/TItle";

const WCBlogPage = () => {
  return (
    <div className="blog__page__wrapper">
      <div className="blog__page__img__wrapper">
        <img
          src="https://www.virginmegastore.qa/medias/VM-Hero-PlayStation-Ramadan-AR-1920x493.webp?context=bWFzdGVyfHJvb3R8MTA5NTI0fGFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbXxoZTQvaDcyLzEwMzAwMTQ2Nzc4MTQyL1ZNLUhlcm8tUGxheVN0YXRpb24tUmFtYWRhbi1BUi0xOTIweDQ5My53ZWJwfDI3YmU3YTc3MDNiYzRmNjk0ZTkxMWMyOTUwMjM2NzFkMjk4YWNmYWQyYTI5ZjI1YmU0NzQzYTliNTJiZTU3ZWY"
          alt=""
        />
      </div>
      <div className="blog__page__content">
        <WCTitle title="Blog" />
        <div className="container">
          <div className="blog__page__description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod,
            expedita harum reiciendis veniam provident dolores qui quaerat.
            Inventore iure sequi numquam dicta nisi ipsam, tempore tenetur
            ipsum, quibusdam, minus modi. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Quod, expedita harum reiciendis veniam
            provident dolores qui quaerat. Inventore iure sequi numquam dicta
            nisi ipsam, tempore tenetur ipsum, quibusdam, minus modi.
          </div>
          <div className="blog__page__description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod,
            expedita harum reiciendis veniam provident dolores qui quaerat.
            Inventore iure sequi numquam dicta nisi ipsam, tempore tenetur
            ipsum, quibusdam, minus modi. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Quod, expedita harum reiciendis veniam
            provident dolores qui quaerat. Inventore iure sequi numquam dicta
            nisi ipsam, tempore tenetur ipsum, quibusdam, minus modi.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WCBlogPage;
