interface StudentInterface {
  id: number;
  uuid?: string; 
  firstName: string;
  lastName: string;
  middleName: string;
  contacts?: string;
  groupId: number;
  delete?: boolean;
  isNew?: boolean;
  groupName?: string;
}

export default StudentInterface;