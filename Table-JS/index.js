const textShow = document.querySelector('.text-show');

function tabFunction() {
    let table = 19;
    let tableHtml ="";
    for (let i=1; i<=10; i++) {
        tableHtml += `${table} x ${i} = ${table*i} <br>`;
    }
    textShow.innerHTML = tableHtml;
}
tabFunction();

let table =19;
for (let i=1; i<=10; i++) {
    tableHTML = `${table} x ${i} = ${table*i}`;
    console.log("🚀 ~ tableHTML:", tableHTML);
}
