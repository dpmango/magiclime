//git checkout develop && git pull origin develop && npm run build &&
const Client = require('ssh2-sftp-client');
const path = require('path');
const sftp = new Client();

const config = {
  host: '185.100.87.66',
  port: '65222',
  username: 'root',
  password: 'GwhrWHRweHYK35yhreE',
};

const REMOTE_PATH = '/var/www/html';

sftp
  .connect(config)
  .then(() => {
    return sftp.list(REMOTE_PATH);
  })
  .then((data) => {
    const promises = data.map((el) => {
      if (el.type === 'd') return sftp.rmdir(REMOTE_PATH + `/${el.name}`, true);
      else return sftp.delete(REMOTE_PATH + `/${el.name}`);
    });
    return Promise.all(promises);
  })
  .then(() => {
    return sftp.uploadDir(path.resolve(__dirname, '../build'), REMOTE_PATH);
  })
  .then((data) => {
    console.log('Success deploy');
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  })
  .finally(() => {
    sftp.end();
  });
