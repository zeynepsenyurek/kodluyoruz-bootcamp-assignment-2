// Get data by props
// Add dynamic class names depending on their group

const Student = (props) => {
  const student = props.data;
  return (
    <div className={student?.group}>
      <span className="wrapper__students"> {student?.name}</span>
    </div>
  );
};

export default Student;
