import { addStudentDb, getStudentsDb } from '@/db/studentDb';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(): Promise<Response> {
  const students = await getStudentsDb();

  return new Response(JSON.stringify(students), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export async function POST(req: NextRequest): Promise<NextResponse> 
{
  const student = await req.json(); 
  delete student['id'];
  const newStudent = await addStudentDb(student);

  console.log(newStudent);
  return NextResponse.json(newStudent); 
}