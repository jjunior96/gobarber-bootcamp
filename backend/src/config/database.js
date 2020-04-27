module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5433,
  usernae: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
