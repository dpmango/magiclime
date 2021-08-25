//git checkout develop && git pull origin develop && npm run build &&
const Client = require('ssh2-sftp-client');
const path = require('path');
const sftp = new Client();
const fs = require('fs');

if (
  !process.argv[2] ||
  !(process.argv[2] === 'prod' || process.argv[2] === 'dev')
) {
  console.log('Неверный параметр! Доступные параметры: dev, prod');
  process.exit(1);
}

const prodConfig = {
  host: '185.100.87.66',
  port: '65222',
  username: 'root',
  password: 'GwhrWHRweHYK35yhreE',
};

const devConfig = {
  host: '178.154.196.41',
  port: '443',
  username: 'dev',
  privateKey: fs.readFileSync('~/.ssh/id_rsa.pub'),
};

const REMOTE_PATH = '/var/www/html';

sftp
  .connect(process.argv[2] === 'prod' ? prodConfig : devConfig)
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
