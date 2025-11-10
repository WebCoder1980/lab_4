'use client';

import { useState } from 'react';
import useStudents from '../../hooks/useStudents';
import useGroups from '../../hooks/useGroups';
import { useQuery } from '@tanstack/react-query';
import StudentInterface from '@/types/StudentsInterface';
import Student from './Student/StudentItemList';
import AddStudent from './AddStudent';
import { getStudentsApi } from "../../api/studentsApi";

const Students = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  const { data: students, isLoading, error } = useQuery({
    queryKey: ['students'],
    queryFn: getStudentsApi,
  });
  const { groups } = useGroups();
  const { deleteStudentMutate, addStudentMutate } = useStudents();

  const onDeleteHandler = (studentId: number): void => {

    debugger;
    console.log('Удален студент', studentId);

    if (confirm('Удалить студента?')) {
      deleteStudentMutate(studentId);
    }
  };

    const onAddHandler = (data: any) => {
    debugger;
    console.log('Добавление студента', data);

    addStudentMutate(data); 
    setShowAddForm(false);
  };

  if (isLoading) {
    return <div>Загрузка студентов...</div>;
  }

  if (error) {
    return <div>Ошибка при загрузке студентов: {error.message}</div>;
  }

  return (
    <div>
      <h1>Список студентов</h1>

      <button onClick={() => setShowAddForm(!showAddForm)}>
        {showAddForm ? 'Отмена добавления студента' : 'Добавить  студента'}
      </button>

      {showAddForm && (
        <AddStudent
          onAdd={onAddHandler}
          onCancel={() => setShowAddForm(false)}
          groups={groups}
        />
      )}

      {students && students.length > 0 ? (
        <ul>
          {students.map((student: StudentInterface) => (
            <li key={student.id}>
              <Student
                student={student}
                onDelete={onDeleteHandler}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>Студенты не найдены.</p>
      )}
    </div>
  );
};

export default Students;