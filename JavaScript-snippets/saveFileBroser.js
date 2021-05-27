/*
Save local file from browser.
*/

async function saveFile(content){
    const filePicker = await window.showSaveFilePicker();
    const writable = await filePicker.createWritable();
    writable.write(content);
    writable.close();
}