import type GroupInterface from '@/types/GroupInterface';

const URL = process.env.NEXT_PUBLIC_API;

export const getGroupsApi = async (): Promise<GroupInterface[]> => 
{
  const response = await fetch(`${URL}/groups`);

  return await response.json();
};