const Box = (props) => {
  const { style, text } = props;
  return <div className={style}>{text}</div>;
};

const element = (
  <div>
    <h1 className="heading">Boxes</h1>
    <div className="container">
      <Box style="small-box" text="Small" />
      <Box style="medium-box" text="Medium" />
      <Box style="large-box" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
