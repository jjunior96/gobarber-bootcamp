import Sequelize from 'sequelize';

import User from '../app/models/User';
import File from '../app/models/File';

import databaseConfig from '../config/database';

const models = [User, File];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connectionDatabase = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connectionDatabase))
      .map(
        (model) =>
          model.associate && model.associate(this.connectionDatabase.models)
      );
  }
}

export default new Database();
