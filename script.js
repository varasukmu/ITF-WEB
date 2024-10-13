function setName() {
    let username = document.getElementById("name");
    let inputname = document.getElementById("newname");
    username.textContent = inputname.value + ", 67070159"
    document.getElementById('newname').value = '';
}

function setPic() {
    let userpic = document.getElementById("pic");
    let inputpic = document.getElementById("newPic");
    userpic.style.backgroundImage = "url(" + inputpic.value + ")";
    document.getElementById('newPic').value = '';
}


let count = 1; // ใช้สำหรับลำดับที่

function AddBt() {
    const phoneNumber = document.getElementById('phoneCall').value;
    const name = document.getElementById('phoneName').value;

    if (phoneNumber === '' || name === '') {
        alert('กรุณากรอกข้อมูลให้ครบ');
        return;
    }

    const table = document.getElementById('phoneTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    cell1.textContent = count++;
    cell2.textContent = name;
    cell3.textContent = phoneNumber;

    // ล้างค่า input หลังจากเพิ่ม
    document.getElementById('phoneName').value = '';
    document.getElementById('phoneCall').value = '';
}



function ExportBt() {
    const table = document.getElementById("phoneTable");
    const rows = Array.from(table.rows);
    
    // สร้างข้อมูล CSV
    const csvContent = rows.map(row => 
        Array.from(row.cells).map(cell => cell.textContent).join(",")
    ).join("\n");

    // สร้าง Blob และ URL สำหรับดาวน์โหลด
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    
    link.setAttribute("href", url);
    link.setAttribute("download", "phone_numbers.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
