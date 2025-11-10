import sqlite3 from 'sqlite3';
sqlite3.verbose();

import { Student } from './Entity/Student.entity';
import type StudentInterface from '@/types/StudentsInterface';
import getRandomFio from '@/utils/getRandomFio';
import AppDataSource from './AppDataSource';

const studentRepository = AppDataSource.getRepository(Student);

/**
 * Получение студентов
 * @returns Promise<StudentInterface[]>
 */
export const getStudentsDb = async (): Promise<StudentInterface[]> => {
  return await studentRepository.find();
};

/**
 * Удаления студента
 * @param studentId
 * @returns Promise<number>
 */
export const deleteStudentDb = async (studentId: number): Promise<number> => {
  await studentRepository.delete(studentId);
  return studentId;
};

/**
 * Добавление студента
 * @param studentField поля студента
 * @returns Promise<StudentInterface>
 */
export const addStudentDb = async (studentFields: Omit<StudentInterface, 'id'>): Promise<StudentInterface> => {
  const student = new Student();
  const newStudent = await studentRepository.save({
    ...student,
    ...studentFields,
  });
  return newStudent;
};

/**
 * Добавление  рандомных студента
 * @param mount количество добавляемых записей - 10 по умолчанию
 * @returns Promise<StudentInterface>
 */
export const addRandomStudentsDb = async (amount: number = 10): Promise<StudentInterface[]> => {
  const students: StudentInterface[] = [];

  for (let i = 0; i < amount; i++) {
    const fio = getRandomFio();

    const newStudent = await addStudentDb({
      ...fio,
      contacts: 'contact',
      groupId: 1,
    });
    students.push(newStudent);
  }

  return students;
};
