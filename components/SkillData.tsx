interface PropsData {
  name: string;
  percent: string;
  percentClass: string;
}

const SkillData = ({ name, percent, percentClass }: PropsData) => {
  return (
    <div className="skills__data">
      <div className="skills__titles">
        <h3 className="skills__name">{name}</h3>
        <span className="skills__number">{percent}%</span>
      </div>

      <div className="skills__bar">
        <span className={`skills__percentage ${percentClass}`} />
      </div>
    </div>
  );
};

export default SkillData;
