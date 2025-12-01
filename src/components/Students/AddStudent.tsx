'use client';

import {SubmitHandler, useForm} from 'react-hook-form';
import styles from './AddStudent/AddStudent.module.scss';
import GroupInterface from "../../types/GroupInterface";

interface AddStudentForm {
  firstName: string;
  lastName: string;
  middleName?: string;
  groupId?: number;
}

export default function AddStudent({ onAdd, onCancel, groups }: {
  onAdd: (data: AddStudentForm) => void;
  onCancel: () => void;
  groups: GroupInterface[];
}) {
  const { register, handleSubmit, formState: { errors } } = useForm<AddStudentForm>();

  const onSubmit: SubmitHandler<AddStudentForm> = studentForm => onAdd(studentForm);

return (
  <div className={styles.AddStudent}>
    <h2>Добавления студента</h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        <input
            placeholder="Фамилия"
            {...register('lastName', { required: true })}
        />
        {errors.lastName && <div>Обязательное поле</div>}

        <input
            placeholder="Имя"
            {...register('firstName', { required: true })}
        />
        {errors.firstName && <div>Обязательное поле</div>}

        <input
            placeholder="Отчество"
            {...register('middleName', { required: true })}
        />
        {errors.middleName && <div>Обязательное поле</div>}

        <select id="mySelect" {...register('groupId', { required: true })}>
            <option value="">--Выберите группу--</option>
            {groups.map(group => (
                <option value={group.id} key={group.id}>{group.name}</option>
            ))}
        </select>

        <input type="submit" value="Добавить" className={styles.StyledButton}/>
      </form>

    </div>
  );
}