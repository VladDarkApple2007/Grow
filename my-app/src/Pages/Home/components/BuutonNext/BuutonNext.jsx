
import "./buuton_next.css";


export default function BuutonNext({ NumberNext, setNextButton, nextButton }) {
  return (
    <div className="buuton_next">
      {NumberNext.map((number, id) => {
        return (
          <button
            key={id}
            onClick={() => setNextButton(id)}
            className={
              nextButton == id ? "active_next_block" : "number_next_block"
            }
          >
            <span>{number}</span>
          </button>
        );
      })}
    </div>
  );
}
