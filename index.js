const { exec } = require('child_process');

exec("box86 /home/pi/wine-6.0-rc5-x86/bin/wine start /d G:\\DEG\\CBX '../acucbl/WRUN32.EXE' -C CFG-WEB DGXC00A.CBX", (error, stdout, stderr) => {
  if (error) {
    console.error(`error: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }

  console.log(`stdout:\n${stdout}`);
});