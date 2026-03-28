import https from 'https';

https.get('https://sara365.fun', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const apkMatch = data.match(/href="([^"]+\.apk)"/i);
    if (apkMatch) {
      console.log('APK Link:', apkMatch[1]);
    } else {
      console.log('No APK link found in href attributes.');
      // try to find any .apk
      const anyApk = data.match(/(https?:\/\/[^\s"']+\.apk)/i);
      if (anyApk) {
        console.log('Found APK:', anyApk[1]);
      } else {
        console.log('No APK link found at all.');
      }
    }
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
