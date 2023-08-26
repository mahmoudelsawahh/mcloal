import { useRouter } from "next/navigation";
import styles from "../productDetails.module.css";
import { Rating } from "primereact/rating";
const Reviews = () => {
  const router = useRouter();
  const data = [
    {
      id: 1,
      client: {
        name: "Client",
        date: "1 week ago",
        question: "White is the delivarey time & coast",
      },
      seller: {
        name: "Seller",
        date: "6 days ago",
        answer:
          "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam a nesciunt optio harum voluptatum, sequi omnis eligendi vel, nostrum laboriosam eos ipsum cupiditate nisi autem atque earum! Unde, autem distinctio. ",
      },
    },
    {
      id: 2,
      client: {
        name: "Client",
        date: "1 week ago",
        question: "White is the delivarey time & coast",
      },
      seller: {
        name: "Seller",
        date: "6 days ago",
        answer:
          "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam a nesciunt optio harum voluptatum, sequi omnis eligendi vel, nostrum laboriosam eos ipsum cupiditate nisi autem atque earum! Unde, autem distinctio. ",
      },
    },
    {
      id: 3,
      client: {
        name: "Client",
        date: "1 week ago",
        question: "White is the delivarey time & coast",
      },
      seller: {
        name: "Seller",
        date: "6 days ago",
        answer:
          "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam a nesciunt optio harum voluptatum, sequi omnis eligendi vel, nostrum laboriosam eos ipsum cupiditate nisi autem atque earum! Unde, autem distinctio. ",
      },
    },
    {
      id: 4,
      client: {
        name: "Client",
        date: "1 week ago",
        question: "White is the delivarey time & coast",
      },
      seller: {
        name: "Seller",
        date: "6 days ago",
        answer:
          "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam a nesciunt optio harum voluptatum, sequi omnis eligendi vel, nostrum laboriosam eos ipsum cupiditate nisi autem atque earum! Unde, autem distinctio. ",
      },
    },
  ];
  return (
    <div className={styles.Questions}>
      {/* <div className={styles.ask}>
        <input type="text" placeholder="Ask Seeler a Question" id="ask_Qu" />
        <label htmlFor="ask_Qu">
          {" "}
          <button>Ask Question</button>
        </label>
      </div> */}
      <div className={styles.Qutions_container}>
        {data.map((ele) => {
          return (
            <div key={ele.id} className={styles.quest_row}>
              <div className={styles.client}>
                <div className={styles.Name}>
                  <h3>{ele.client.name}</h3>
                  <span>{ele.client.date}</span>
                </div>
                <p>client@gmail.com</p>
              </div>
              <div className={styles.seller}>
                <div className={styles.Name}>
                  <h3 className={"mr-2"}>Review </h3>
                  <div className="Rate m-0  ">
                    <Rating value={5} readOnly cancel={false} />
                  </div>
                </div>
                <p>{ele.seller.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className={"main_btn mt-3"}
        onClick={() => router.push("/product/name/10/review")}
      >
        Add Review
      </button>
    </div>
  );
};

export default Reviews;
