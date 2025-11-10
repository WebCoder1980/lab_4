import StudentInterface from '@/types/StudentInterface';

interface StudentProps {
  student: StudentInterface;
}

const StudentDetails = ({ student }: StudentProps) => {
    return (
        <div>
            <h2>Студент</h2>
            <ul>
                <li><strong>Id:</strong> {student.id}</li>
                <li><strong>Фамилия:</strong> {student.lastName}</li>
                <li><strong>Имя:</strong> {student.firstName}</li>
                <li><strong>Отчество:</strong> {student.middleName}</li>
                <li><strong>Группа Id:</strong> {student.groupId}</li>
            </ul>
        </div>
    );
};

export default StudentDetails;