//exec("box86 /home/pi/wine-6.0-rc5-x86/bin/wine start /d G:\\DEG\\CBX '../acucbl/WRUN32.EXE' -C CFG-WEB DGXC00A.CBX", (error, stdout, stderr) => {


const { spawn } = require('child_process');
const ls = spawn('box86', [
    '/home/pi/wine-6.0-rc5-x86/bin/wine', 
    "start /d G:\\DEG\\CBX ../acucbl/WRUN32.EXE -C CFG-WEB DGXC00A.CBX",
]);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});