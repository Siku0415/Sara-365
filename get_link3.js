import https from 'https';

https.get('https://sara365.fun', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const scripts = data.match(/<script[^>]*>([\s\S]*?)<\/script>/ig);
    if (scripts) {
      console.log('Scripts:', scripts.join('\n'));
    }
    const buttons = data.match(/<button[^>]*>([\s\S]*?)<\/button>/ig);
    if (buttons) {
      console.log('Buttons:', buttons.join('\n'));
    }
    const aTags = data.match(/<a[^>]*>([\s\S]*?)<\/a>/ig);
    if (aTags) {
      console.log('A Tags:', aTags.join('\n'));
    }
  });
});
