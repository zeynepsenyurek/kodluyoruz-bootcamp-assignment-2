const Assistant = (props) => {
  const student = props.data;
  return (
    <div className="assistant">
      <span className="wrapper__students">{student?.name}</span>
    </div>
  );
};

export default Assistant;
