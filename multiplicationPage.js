//Model
const enGangen = [1,2,3,4,5,6,7,8,9,10];

// View

function updateViewMultiplicationTable() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <h2>Gangetabell fra 1 til 25 gangen:</h2>
    <button id="backBtnMultiplicationTable" onclick="updateView()">Go back to start page</button>
    <div id="containerDivMultiplicationTablePage">
        <button id="resetBtnMultiplicationTablePage" onclick="resetClear()">Reset/Clear</button>
    <div id="buttonDivMultiplicationTablePage">
    <button class="multiplyBtns" onclick="gangeOppOgPrint(1)">1-multiplication-table</button>
    <button class="multiplyBtns" onclick="gangeOppOgPrint(2)">2-multiplication-table</button>
    <button class="multiplyBtns" onclick="gangeOppOgPrint(3)">3-multiplication-table</button>
    <button class="multiplyBtns" onclick="gangeOppOgPrint(4)">4-multiplication-table</button>
    <button class="multiplyBtns" onclick="gangeOppOgPrint(5)">5-multiplication-table</button>
    <button class="multiplyBtns" onclick="gangeOppOgPrint(6)">6-multiplication-table</button>
    <button class="multiplyBtns" onclick="gangeOppOgPrint(7)">7-multiplication-table</button>
    <button class="multiplyBtns" onclick="gangeOppOgPrint(8)">8-multiplication-table</button>
    <button class="multiplyBtns" onclick="gangeOppOgPrint(9)">9-multiplication-table</button>
    <button class="multiplyBtns" onclick="gangeOppOgPrint(10)">10-multiplication-table</button>
    <button class="multiplyBtns" onclick="gangeOppOgPrint(11)">11-multiplication-table</button>
    <button class="multiplyBtns" onclick="gangeOppOgPrint(12)">12-multiplication-table</button>
    <button class="multiplyBtns" onclick="gangeOppOgPrint(13)">13-multiplication-table</button>
    <button class="multiplyBtns" onclick="gangeOppOgPrint(14)">14-multiplication-table</button>
    <button class="multiplyBtns" onclick="gangeOppOgPrint(15)">15-multiplication-table</button>
    <button class="multiplyBtns" onclick="gangeOppOgPrint(16)">16-multiplication-table</button>
    <button class="multiplyBtns" onclick="gangeOppOgPrint(17)">17-multiplication-table</button>
    <button class="multiplyBtns" onclick="gangeOppOgPrint(18)">18-multiplication-table</button>
    <button class="multiplyBtns" onclick="gangeOppOgPrint(19)">19-multiplication-table</button>
    <button class="multiplyBtns" onclick="gangeOppOgPrint(20)">20-multiplication-table</button>
    <button class="multiplyBtns" onclick="gangeOppOgPrint(21)">21-multiplication-table</button>
    <button class="multiplyBtns" onclick="gangeOppOgPrint(22)">22-multiplication-table</button>
    <button class="multiplyBtns" onclick="gangeOppOgPrint(23)">23-multiplication-table</button>
    <button class="multiplyBtns" onclick="gangeOppOgPrint(24)">24-multiplication-table</button>
    <button class="multiplyBtns" onclick="gangeOppOgPrint(25)">25-multiplication-table</button>
    </div>
    <div id="showMathDivMultiplicationTablePage"></div>
    </div>
    `;

}


//Controller
function gangeOppOgPrint(multiplier){
    let mathDiv = document.getElementById('showMathDivMultiplicationTablePage');
    mathDiv.innerHTML = /*HTML*/``;

    for (number of enGangen){
        const result = number * multiplier;
        mathDiv.innerHTML += /*HTML*/`

        <div class="printOutDivMultiplicationTablePage">${number} x ${multiplier} = ${result}</div>

        `;
    };
}
function resetClear(){
    let mathDiv = document.getElementById('showMathDivMultiplicationTablePage');
    mathDiv.innerHTML = /*HTML*/``;
}