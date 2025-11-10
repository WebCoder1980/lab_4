import type StudentInterface from '../../../types/StudentsInterface';
import styles from './Student.module.scss';
import Link from 'next/link';

interface Props {
  student: StudentInterface;
  onDelete: (id: number) => void;
}

const Student = ({ student, onDelete }: Props): React.ReactElement => {
  const onDeleteHandler = (): void => {
    onDelete(student.id);
  };

    const modifier = student.delete ? '--delete' : '';

  return (
    <div
     className={`${styles.Student} ${styles[modifier]}`}>
      <Link href={`/students/${student.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div>
          {student.id} - '{student.lastName}' '{student.firstName}' '{student.middleName}'
        </div>
      </Link>
      <button onClick={onDeleteHandler}>Удалить</button>
    </div>
  );
};

export default Student;
