function createBlob(ev){
    ev.preventDefault();
    let ab = new ArrayBuffer(2) // 2 bytes /1 bytes = 8 bits 0-255
    
    let dataview = new DataView(ab);
    dataview.setInt8(0,104);
    dataview.setInt8(1, 105);
    console.log(new Uint8Array(ab).toString());
   
    let b = new Blob([ab]);
    console.log(b);

    let f = new File([ab], 'myinfo.txt', {type:'text/plain'})
    console.log(f)

}
    