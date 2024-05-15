import style from "./course.module.scss";

const Course = (props: { num: number }) => {
  return (
    <div className={style.Course}>
      <h1>Curso {props.num}</h1>
    </div>
  );
};

export default Course;
