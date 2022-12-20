import "./RadioBtnGroup.scss";

/* DIFFERENT TYPE OF RADIO BUTTON (YEAR、CAREER、AREA)*/
function RadioBtnGroup({ options, selectedValue, setSelectedValue, type }) {
  function getText({ option }, type) {
    if (type === "Area") {
      return (
        <span>
          {option.name}
          {option.percentage}%
        </span>
      );
    } else {
      return <span>{option.name}</span>;
    }
  }

  return (
    <div className="radio-btn-group">
      {options.map((option, index) => {
        return (
          <div
            className={index === selectedValue ? "radio-btn-group__radio-btn__selected" : "radio-btn-group__radio-btn__unselected"}
            onClick={() => setSelectedValue(index)}
          >
            {getText({ option }, type)}
          </div>
        );
      })}
    </div>
  );
}

export default RadioBtnGroup;
