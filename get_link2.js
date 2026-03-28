import https from 'https';

https.get('https://sara365.fun', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const links = data.match(/href="([^"]+)"/ig);
    if (links) {
      console.log('Links:', links.join('\n'));
    }
  });
});
