//git checkout develop && git pull origin develop && npm run build &&
const Client = require('ssh2-sftp-client');
const sftp = new Client();

sftp
  .connect({
    host: '185.100.87.66',
    port: '65222',
    username: 'root',
    password: 'GwhrWHRweHYK35yhreE',
  })
  .then(() => {
    return sftp.list('/root');
  })
  .then((data) => {
    console.log(data, 'the data info');
    process.exit(0);
  })
  .catch((err) => {
    console.log(err, 'catch error');
    process.exit(1);
  });
