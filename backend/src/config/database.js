module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  usernae: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
