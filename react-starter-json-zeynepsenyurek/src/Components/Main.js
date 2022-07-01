import Assistant from "./Assistant";
import data from "../data.json";
import Student from "./Student";

const Main = () => {
  // Sort students by group
  data.sort((a, b) => {
    if (a.group < b.group) {
      return -1;
    }
    if (a.group > b.group) {
      return 1;
    }
    // names must be equal
    return 0;
  });

  // Render students by mapping the data

  return (
    <div className="wrapper">
      <h1 className="wrapper__header">Kodluyoruz Bootcamp Students</h1>
      {data.map((student) =>
        student.assistant ? (
          <Assistant key={student.id} data={student} />
        ) : (
          <Student key={student.id} data={student} />
        )
      )}
    </div>
  );
};

export default Main;
