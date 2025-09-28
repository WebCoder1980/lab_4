'use client';

import { useQuery } from '@tanstack/react-query';
import { getStudentsApi } from '@/api/studentsApi';
import StudentsInterface from '@/types/StudentInterface';

const Students = () => {
  const { data: students, isLoading, error } = useQuery({
    queryKey: ['students'],
    queryFn: getStudentsApi,
  });

  return (
    <div>
      <h1>Student list</h1>
        <ul>
          {students.map((student: StudentsInterface, index: number) => (
            <li key={index}>{student.name}</li>
          ))}
        </ul>
    </div>
  );
};

export default Students;