import useMulankUserDetails from "../../hooks/useUserDetails";
import { MULANK_SHORT_DATA, MULANK_LONG_DATA } from "./data";
import { useEffect, useState } from "react";
import style from "./style.module.scss";
const MulankSummarizer = () => {
  const { name, mulank, showSummarize, disableShowSummarize } = useMulankUserDetails();
  const [knowMore, setKnowMore] = useState<boolean>(false);
  useEffect(()=> {
    setKnowMore(false);
    disableShowSummarize();
  },[name,mulank])
  return (
    <>
      {showSummarize && (
        <section>
          <div className="container text-center">
            <h4>Mulank Number: {mulank}</h4>
            <p>{MULANK_SHORT_DATA[mulank as keyof typeof MULANK_SHORT_DATA]}</p>
            <button
              className={`btn px-3 py-2 ${style["collapse-btn"]}`}
              onClick={() => setKnowMore((prev: boolean) => !prev)}
            >
              {!knowMore && "Know More"}
              {knowMore && "Collapse"}
            </button>
            {knowMore && (
              <div className={`${style["result-box"]} mt-3`}>
                <p>
                  {
                    MULANK_LONG_DATA[mulank as keyof typeof MULANK_LONG_DATA]
                      .heading
                  }
                </p>
                <ul>
                  {
                    MULANK_LONG_DATA[mulank as keyof typeof MULANK_LONG_DATA]
                      .description
                  }
                </ul>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};
export default MulankSummarizer;
