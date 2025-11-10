import { getStudentsDb, addStudentDb } from '@/db/studentDb';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest): Promise<NextResponse> 
{
  const student = await req.json(); 
  const newStudent = await addStudentDb(student);

  console.log(newStudent);
  return NextResponse.json(newStudent); 
}