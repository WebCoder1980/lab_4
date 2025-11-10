import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Group } from './Entity/Group.entity';
import { Student } from './Entity/Student.entity';

const AppDataSource = new DataSource({
  type: 'sqlite',
  database: process.env.DB ?? './db/vki-web.db',
  entities: [Group, Student],
  synchronize: true,
  logging: false,
});


AppDataSource.initialize()
  .then(() => {
    console.log('Инициализация прошла успешно');
  })
  .catch((err) => {
    console.error('Инициализация упала с ошибкой', err);
  });

export default AppDataSource;