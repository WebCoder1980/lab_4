import StudentsInterface from '@/types/StudentInterface';

export const getStudentsApi = async (): Promise<StudentsInterface[]> => {

  try {
    const response = await fetch('http://localhost:3000/api/students');

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status} ${response.statusText}`);
    }

    var students = await response.json();
    console.log('Группы:', students);
  } catch (error) {
    console.error('Ошибка при получении данных:', error.message);
  }

  return students;
};