import { UilCalendarAlt } from "@iconscout/react-unicons";

interface PropsData {
  title: string;
  subtitle: string;
  dateStart: string;
  dateEnd?: string;
  isLast: boolean;
}

const QualificationDataOdd = ({
  title,
  subtitle,
  dateStart,
  dateEnd = "Present",
  isLast,
}: PropsData) => {
  return (
    <div className="qualification__data">
      <div />

      <div>
        <span className="qualification__rounder" />
        {!isLast && <span className="qualification__line" />}
      </div>

      <div>
        <h3 className="qualification__title">{title}</h3>

        <span className="qualification__subtitle">{subtitle}</span>

        <div className="qualification__calendar">
          <UilCalendarAlt />
          {dateStart} - {dateEnd}
        </div>
      </div>
    </div>
  );
};

export default QualificationDataOdd;
