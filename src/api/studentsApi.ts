import type StudentInterface from '@/types/StudentsInterface';

const URL = process.env.NEXT_PUBLIC_API;

export const getStudentsApi = async (): Promise<StudentInterface[]> => {

  const response = await fetch(`${URL}/students`);

  return await response.json();
};

export const deleteStudentApi = async (studentId: number): Promise<number> => {
  console.log('Удаление студентика', studentId);
  debugger;

  try{
    await fetch(`${URL}/students/${studentId}`, { method: 'DELETE' });

    debugger;
    console.log('Успешное удаление студента', studentId);

    return studentId;
  }
  catch
  {
    return -1;
  }
};

export const addStudentApi = async (studentData: Partial<StudentInterface>): Promise<StudentInterface> => {
  const response = await fetch(`${URL}/students`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(studentData),
  });

  return response.json();
};