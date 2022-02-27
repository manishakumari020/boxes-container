const Box = (props) => {
  //  Write your code here.
  const { text, className } = props;

  return (
    <div className={`box ${className}`}>
      <p className="box-heading">{text}</p>
    </div>
  );
};

const element = (
  <div className="box-background-container">
    <h1 className="box-header">Boxes</h1>
    <div className="box-container">
      <Box text="Small" className="small-box" />
      <Box text="Medium" className="medium-box" />
      <Box text="Large" className="large-box" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
