import { useState } from "react";
import { toast } from "react-toastify";
import "./join_news.css";
import { useAuth } from "../../../../hooks/useAuth";

export default function JoinNews() {
   const { register, user } = useAuth();
  const [formJoin, setFormJoin] = useState([]);
  const [email, setMail] = useState("");
  const JoinOnChange = (e) => {
    setMail(e.target.value);
  };

  const onSubmitJoin = (e) => {
    if(!user || !register) {
      toast.error("please log in or create an account");
    } else {
    if (email === "") {
      toast.error("Please write your email");
    } else if (!email.includes("@")) {
      toast.error("Email must contain '@'");
    } else {
      e.preventDefault();
      toast.info("Thank you! We will send you an email with instructions");
      setFormJoin((prev) => [...prev, { email }]);
      setMail("");
    }
    }

  };
  return (
    <div className="newsletters_block">
      <p className="title_newsletters">Would you like to join newsletters?</p>
      <div className="input_button_footer">
        <div className="input_footer">
          <input
            placeholder="enter your email address..."
            type="email"
            name="email"
            onChange={JoinOnChange}
            value={email}
          />
        </div>
        <div className="button_join_footer">
          <button onClick={onSubmitJoin}>
            <span>Join</span>
          </button>
        </div>
      </div>
      <p className="p_newsletters">
        {" "}
        We usually post offers and challenges in newsletter. We’re <br />
        your online houseplant destination. We offer a wide range <br /> of
        houseplan ts and accessories shipped directly from our <br />
        (green)house to yours!{" "}
      </p>
    </div>
  );
}
