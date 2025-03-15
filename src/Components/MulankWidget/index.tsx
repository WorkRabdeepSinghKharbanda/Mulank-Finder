import useMulankUserDetails from "../../hooks/useUserDetails";

const MulankWidget = () => {
  const {
    name,
    mulank,
    updateUserName,
    updateUserMulank,
    enableShowSummarize,
  } = useMulankUserDetails();
  const handleDate = (date: string) => {
    let day = parseInt(date.split("-")[2]);
    let mulankAnk = 0;
    while (day > 0) {
      mulankAnk += day % 10;
      day = Math.floor(day / 10);
    }
    
    if(mulankAnk >= 10){
      let temp = mulankAnk;
      mulankAnk = 0;
      while(temp > 0){
        mulankAnk += temp % 10;
        temp = Math.floor(temp / 10);
      }
    }
    updateUserMulank(mulankAnk);
  };

  return (
    <>
      <section className="container">
        <div className="mx-auto my-5 d-flex flex-column gap-3">
          <input
            className="mb-3"
            type="text"
            placeholder="Enter your name"
            onChange={(e) => updateUserName(e.target.value)}
          />
          <input type="date" onChange={(e) => handleDate(e.target.value)} />

          <div
            className={`m-auto`}
          >
            <button
              disabled={name === "" || mulank === 0}
              className="btn btn-primary mt-3 py-2 px-3"
              onClick={() => enableShowSummarize()}
            >
              Find My Mulank 🔮
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MulankWidget;
