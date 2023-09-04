const dropArea = document.getElementById('dropfile');
const { ipcRenderer } = require('electron');
dropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    
});

// Handle the dropped file(s)
dropArea.addEventListener('drop', (e) => {
    // console.log("dropped")
    e.preventDefault();
    // dropArea.classList.remove('active');
      const filePath = e.dataTransfer.files[0].path;
      console.log(filePath)
      ipcRenderer.send('file-dropped', filePath);
});
