import { getBoxOrder } from "./main.js";

function convertToLowerCase(inputString) {
    return inputString.toLowerCase();
}

export function isFilled() {
    // checking verilog module
    let fileName = document.getElementById("file-name");
    let VolSrcName = document.getElementById("voltage-source-name");
    let volPos = document.getElementById("voltage-positive-terminal-selector");
    let volNeg = document.getElementById("voltage-negative-terminal-selector");
    let subcktName = document.getElementById("subckt-name");
    let subcktIn1 = document.getElementById("subckt-in1-name");
    let subcktIn2 = document.getElementById("subckt-in2-name");
    let subcktOut = document.getElementById("subckt-out-name");
    let inv_instance = document.getElementById("call-inv-instance-name");
    let inv_in = document.getElementById("call-inv-in");
    let inv_out = document.getElementById("call-inv-out");
    let inv_subckt = document.getElementById("call-inv-subckt-name");
    let pmos1Name = document.getElementById("pmos1-name");
    let pmos1Drain = document.getElementById("pmos1-drain-terminal");
    let pmos1Gate = document.getElementById("pmos1-gate-terminal");
    let pmos1Source = document.getElementById("pmos1-source-terminal");
    let pmos1Body = document.getElementById("pmos1-body-terminal");
    let nmos1Name = document.getElementById("nmos1-name");
    let nmos1Drain = document.getElementById("nmos1-drain-terminal");
    let nmos1Gate = document.getElementById("nmos1-gate-terminal");
    let nmos1Source = document.getElementById("nmos1-source-terminal");
    let nmos1Body = document.getElementById("nmos1-body-terminal");
    let gateCallInstance = document.getElementById("gate-call-instance-name");
    let gateCallIn1 = document.getElementById("gate-call-input1");
    let gateCallIn2 = document.getElementById("gate-call-input2");
    let gateCallOut = document.getElementById("gate-call-output");
    let gateCallSubckt = document.getElementById("gate-call-subckt-name");

    let error = "Highlighted part of the code is incomplete."
    if (fileName.value.trim() == '') {
        printErrors(error, fileName);
        return false;
    }
    if (VolSrcName.value.trim() == '') {
        printErrors(error, VolSrcName);
        return false;
    }
    if (volPos.value === "") {
        printErrors(error, volPos);
        return false;
    }
    if (volNeg.value === "") {
        printErrors(error, volNeg);
        return false;
    }
    if (subcktName.value.trim() == '') {
        printErrors(error, subcktName);
        return false;
    }
    if (subcktOut.value.trim() == '') {
        printErrors(error, subcktOut);
        return false;
    }
    if (subcktIn1.value.trim() == '') {
        printErrors(error, subcktIn1);
        return false;
    }
    if (subcktIn2.value.trim() == '') {
        printErrors(error, subcktIn2);
        return false;
    }
    if(inv_instance.value.trim() == '') {
        printErrors(error, inv_instance);
        return false;
    }
    if(inv_in.value.trim() == '') {
        printErrors(error, inv_in);
        return false;
    }
    if(inv_out.value.trim() == '') {    
        printErrors(error, inv_out);
        return false;
    }
    if(inv_subckt.value.trim() == '') {
        printErrors(error, inv_subckt);
        return false;
    }
    if (pmos1Name.value.trim() == '') {
        printErrors(error, pmos1Name);
        return false;
    }
    if (pmos1Drain.value.trim() == '') {
        printErrors(error, pmos1Drain);
        return false;
    }
    if (pmos1Gate.value.trim() == '') {
        printErrors(error, pmos1Gate);
        return false;
    }
    if (pmos1Source.value.trim() == '') {
        printErrors(error, pmos1Source);
        return false;
    }
    if (pmos1Body.value.trim() == '') {
        printErrors(error, pmos1Body);
        return false;
    }
    if (nmos1Name.value.trim() == '') {
        printErrors(error, nmos1Name);
        return false;
    }
    if (nmos1Drain.value.trim() == '') {
        printErrors(error, nmos1Drain);
        return false;
    }
    if (nmos1Gate.value.trim() == '') {
        printErrors(error, nmos1Gate);
        return false;
    }
    if (nmos1Source.value.trim() == '') {
        printErrors(error, nmos1Source);
        return false;
    }
    if (nmos1Body.value.trim() == '') {
        printErrors(error, nmos1Body);
        return false;
    }
    if (gateCallInstance.value.trim() == '') {
        printErrors(error, gateCallInstance);
        return false;
    }
    if (gateCallIn1.value.trim() == '') {
        printErrors(error, gateCallIn1);
        return false;
    }
    if (gateCallIn2.value.trim() == '') {
        printErrors(error, gateCallIn2);
        return false;
    }
    if (gateCallOut.value.trim() == '') {
        printErrors(error, gateCallOut);
        return false;
    }
    if (gateCallSubckt.value.trim() == '') {
        printErrors(error, gateCallSubckt);
        return false;
    }
    return true;
}

export function printErrors(errorMsg, errorID) {
    document.getElementById('result').innerHTML = errorMsg;
    document.getElementById('result').classList.remove('text-success');
    document.getElementById('result').classList.add('text-danger');
    if (errorID) {
        errorID.classList.add('highlight');
        setTimeout(function () {
            errorID.classList.remove('highlight');
        }, 3000);
    }
}

export function isValid() {

    // checking the order of the codeblocks
    const boxOrder1 = getBoxOrder('spice-code');
    let container = document.getElementById("container");
    if (boxOrder1[0] !== "1" || boxOrder1[1] !== "2" || boxOrder1[2] !== "3" || boxOrder1[3] !== "4" || boxOrder1[4] !== "5" || boxOrder1[5] !== "6" || boxOrder1[6] !== "7") {
        let msg = "Please rearrange the code blocks in the correct order."
        printErrors(msg, container);
        return false;
    }

    // Checking if the node and variable names are valid
    let fileName = document.getElementById("file-name");
    let VolSrcName = document.getElementById("voltage-source-name");
    let subcktName = document.getElementById("subckt-name");
    let subcktIn1 = document.getElementById("subckt-in1-name");
    let subcktIn2 = document.getElementById("subckt-in2-name");
    let subcktOut = document.getElementById("subckt-out-name");
    let pmos1Name = document.getElementById("pmos1-name");
    let nmos1Name = document.getElementById("nmos1-name");
    let gateCallInstance = document.getElementById("gate-call-instance-name");
    let gateCallSubckt = document.getElementById("gate-call-subckt-name");
    let inv_instance = document.getElementById("call-inv-instance-name");
    let inv_subckt = document.getElementById("call-inv-subckt-name");
    
    var regex = /^[a-zA-Z_$%][a-zA-Z0-9_$%]*$/;
    if (!regex.test(VolSrcName.value.trim())) {
        let msg = "Invalid Name.";
        printErrors(msg, VolSrcName);
        return false;
    }
    if (!regex.test(subcktName.value.trim())) {
        let msg = "Invalid Name."
        printErrors(msg, subcktName);
        return false;
    }
    if (!regex.test(subcktIn1.value.trim())) {
        let msg = "Invalid Name.";
        printErrors(msg, subcktIn1);
        return false;
    }
    if (!regex.test(subcktIn2.value.trim())) {
        let msg = "Invalid Name.";
        printErrors(msg, subcktIn2);
        return false;
    }
    if (!regex.test(subcktOut.value.trim())) {
        let msg = "Invalid Name.";
        printErrors(msg, subcktOut);
        return false;
    }
    if (!regex.test(pmos1Name.value.trim())) {
        let msg = "Invalid Name."
        printErrors(msg, pmos1Name);
        return false;
    }
    if (!regex.test(nmos1Name.value.trim())) {
        let msg = "Invalid Name."
        printErrors(msg, nmos1Name);
        return false;
    }
    if (!regex.test(gateCallInstance.value.trim())) {
        let msg = "Invalid Name."
        printErrors(msg, gateCallInstance);
        return false;
    }
    if (!regex.test(gateCallSubckt.value.trim())) {
        let msg = "Invalid Name."
        printErrors(msg, gateCallSubckt);
        return false;
    }

    if (!regex.test(inv_instance.value.trim())) {
        let msg = "Invalid Name."
        printErrors(msg, inv_instance);
        return false;
    }
    if (!regex.test(inv_subckt.value.trim())) {
        let msg = "Invalid Name."
        printErrors(msg, inv_subckt);
        return false;
    }
    if(gateCallInstance.value.trim()[0]!="x" && gateCallInstance.value.trim()[0]!="X")
    {
        let msg = "When instantiating a sub circuit, the name of the instance must always start with 'x' or 'X'"
        printErrors(msg, gateCallInstance);
        return false;
    }
    if(inv_instance.value.trim()[0]!="x" && gateCallInstance.value.trim()[0]!="X")
    {
        let msg = "When instantiating a sub circuit, the name of the instance must always start with 'x' or 'X'"
        printErrors(msg, inv_instance);
        return false;
    }
    if(pmos1Name.value.trim()[0]!="m" && pmos1Name.value.trim()[0]!="M")
    {
        let msg = "When instantiating a MOSFET, the name of the instance must always start with 'm' or 'M'"
        printErrors(msg, pmos1Name);
        return false;
    }
    if(nmos1Name.value.trim()[0]!="m" && nmos1Name.value.trim()[0]!="M")
    {
        let msg = "When instantiating a MOSFET, the name of the instance must always start with 'm' or 'M'"
        printErrors(msg, nmos1Name);
        return false;
    }

    // mapping variables
    const variableMap = new Map();
    const variableSubcktMap = new Map();
    let variableList = ["ptm_45nm.txt", "supply", "lmin", "wmin", "wp", convertToLowerCase(VolSrcName.value.trim()), convertToLowerCase(subcktName.value.trim()), convertToLowerCase(gateCallInstance.value.trim()), "V1", "vdd", "gnd", "inverter"];
    let variableSubcktList = [convertToLowerCase(subcktName.value.trim()), convertToLowerCase(pmos1Name.value.trim()), convertToLowerCase(inv_instance.value.trim()), convertToLowerCase(nmos1Name.value.trim()), convertToLowerCase(inv_subckt.value.trim()), "vdd", "gnd", "wmin", "lmin"];
    let variables_regular = [VolSrcName, subcktName, gateCallInstance];
    let subcktVars = [subcktName, pmos1Name, nmos1Name, inv_instance, inv_subckt];

    // Iterate over the variable list
    for (let variable in variableList) {
        // Check if the variable already exists in the Map
        if (variableMap.has(variableList[variable])) {
            // If it exists, increment the count by 1
            let count = variableMap.get(variableList[variable]);
            variableMap.set(variableList[variable], count + 1);
        } else {
            // If it doesn't exist, set the count to 1
            variableMap.set(variableList[variable], 1);
        }

    }
    // Iterate over the variable list subckt
    for (let variable in variableSubcktList) {
        // Check if the variable already exists in the Map
        if (variableSubcktMap.has(variableSubcktList[variable])) {
            // If it exists, increment the count by 1
            let count = variableSubcktMap.get(variableSubcktList[variable]);
            variableSubcktMap.set(variableSubcktList[variable], count + 1);
        } else {
            // If it doesn't exist, set the count to 1
            variableSubcktMap.set(variableSubcktList[variable], 1);
        }
    }
    // checking if variables names declared more than once
    for (let variable in variables_regular) {
        if (variableMap.get(convertToLowerCase(variables_regular[variable].value.trim())) > 1) {
            let msg = 'Highlighted variable declared more than once'
            printErrors(msg, variables_regular[variable]);
            return false;
        }
    }
    for (let variable in subcktVars) {
        if (variableSubcktMap.get(convertToLowerCase(subcktVars[variable].value.trim())) > 1) {
            let msg = 'Highlighted variable declared more than once'
            printErrors(msg, subcktVars[variable]);
            return false;
        }
    }
    // checking if file name matches
    if (fileName.value.trim() !== 'PTM_45nm.txt') {
        let msg = "There is no file defined with the name " + fileName.value.trim();
        printErrors(msg, fileName);
        return false;
    }

    // checking if voltage source name is not equal to vdd
    if (convertToLowerCase(VolSrcName.value.trim()) === "vdd") {
        let msg = "Name of the voltage source cannot be vdd as this variable already in use";
        printErrors(msg, VolSrcName);
        return false;
    }

    return true;
}

export function printObsTable() {
    // Wrong if in1in2,out name same in calling circuit and also in subckt definition
    let correct = true;
    let subcktName = document.getElementById("subckt-name");
    let subcktIn1 = document.getElementById("subckt-in1-name");
    let subcktIn2 = document.getElementById("subckt-in2-name");
    let subcktOut = document.getElementById("subckt-out-name");
    let pmos1Name = document.getElementById("pmos1-name");
    let pmos1Drain = document.getElementById("pmos1-drain-terminal");
    let pmos1Gate = document.getElementById("pmos1-gate-terminal");
    let pmos1Source = document.getElementById("pmos1-source-terminal");
    let pmos1Body = document.getElementById("pmos1-body-terminal");
    let nmos1Name = document.getElementById("nmos1-name");
    let nmos1Drain = document.getElementById("nmos1-drain-terminal");
    let nmos1Gate = document.getElementById("nmos1-gate-terminal");
    let nmos1Source = document.getElementById("nmos1-source-terminal");
    let nmos1Body = document.getElementById("nmos1-body-terminal");
    let gateCallIn1 = convertToLowerCase(document.getElementById("gate-call-input1").value.trim());
    let gateCallIn2 = convertToLowerCase(document.getElementById("gate-call-input2").value.trim());
    let gateCallOut = convertToLowerCase(document.getElementById("gate-call-output").value.trim());
    let gateCallSubckt = document.getElementById("gate-call-subckt-name");
    let inv_in = document.getElementById("call-inv-in");
    let inv_out = document.getElementById("call-inv-out");
    let inv_subckt = document.getElementById("call-inv-subckt-name");
    
    var regex = /^[a-zA-Z_$%][a-zA-Z0-9_$%]*$/;
    let inv=false,p1=false,n1=false;
    // checking subckt connection
    const out = convertToLowerCase(subcktOut.value.trim())
    const in1 = convertToLowerCase(subcktIn1.value.trim())
    const in2 = convertToLowerCase(subcktIn2.value.trim())

    const invIn = convertToLowerCase(inv_in.value.trim())
    const invOut = convertToLowerCase(inv_out.value.trim())
    const invSubckt = convertToLowerCase(inv_subckt.value.trim())

    const p1_drain = convertToLowerCase(pmos1Drain.value.trim())
    const p1_gate = convertToLowerCase(pmos1Gate.value.trim())
    const p1_source = convertToLowerCase(pmos1Source.value.trim())
    const p1_body = convertToLowerCase(pmos1Body.value.trim())

    const n1_drain = convertToLowerCase(nmos1Drain.value.trim())
    const n1_gate = convertToLowerCase(nmos1Gate.value.trim())
    const n1_source = convertToLowerCase(nmos1Source.value.trim())
    const n1_body = convertToLowerCase(nmos1Body.value.trim())

    if(invSubckt==="inverter" && invIn===in1 && gateCallIn1==="control" && gateCallIn2==="in")
    {  
        if(invOut!==in1 && invOut!==in2 && invOut!==out && invOut!=="vdd" && invOut!=="gnd" && invOut!=="Wmin", invOut!=="Wp", invOut!=="Lmin")
        {
            if (regex.test(invOut)) {
                inv = true;
            }
        }
        if(p1_drain===out && p1_gate===invOut && p1_source===in2 && p1_body==="vdd")
        {
            p1=true;
        }
        if(n1_drain===out && n1_gate===in1 && n1_source===in2 && (n1_body==="gnd" || n1_body==="0"))
        {
            n1=true;
        }
    }
    else if(invSubckt==="inverter" && invIn===in2 && gateCallIn1==="in" && gateCallIn2==="control")
    {
        if(invOut!==in1 && invOut!==in2 && invOut!==out && invOut!=="vdd" && invOut!=="gnd" && invOut!=="Wmin", invOut!=="Wp", invOut!=="Lmin")
        {
            if (regex.test(invOut)) {
                inv = true;
            }
        }
        if(p1_drain===out && p1_gate===invOut && p1_source===in1 && p1_body==="vdd")
        {
            p1=true;
        }
        if(n1_drain===out && n1_gate===in2 && n1_source===in1 && (n1_body==="gnd" || n1_body==="0"))
        {
            n1=true;
        }
    }

    else if(invSubckt!=="inverter")
    {
        correct=false;
    }

    if(in1===in2 || in1===out || in2===out)
    {
        correct=false
    }

    if (p1 !== true || n1 !== true || inv !== true) {
        correct = false;
    }
    // checking if voltage source declared correctly
    let volPos = document.getElementById("voltage-positive-terminal-selector");
    let volNeg = document.getElementById("voltage-negative-terminal-selector");
    if (volPos.value !== "vdd") {
        correct = false;
    }
    if (volNeg.value === "vdd" || volNeg.value === "1.1") {
        correct = false;
    }
     // checking the subcircuit calling
    if (gateCallIn1 !== "control" && gateCallIn1!== "in") {
        correct = false;
    }
    if (gateCallIn2 !== "control" && gateCallIn2!== "in") {
        correct = false;
    }
    if (gateCallIn1=== gateCallIn2) {
        correct = false;
    }
    if (gateCallOut !== "out") {
        correct = false;
    }
    if (convertToLowerCase(gateCallSubckt.value.trim()) !== convertToLowerCase(subcktName.value.trim())) {
        correct = false;
    }

    if (correct === true) {
        document.getElementById("obs-table").innerHTML = `<div>
    <div class="is-size-4">Report</div>
    <pre>
        Circuit: *pass_transistor*

        Doing analysis at TEMP = 27.000000 and TNOM = 27.000000

        Warning: v1: no DC value, transient time 0 value used

        Initial Transient Solution
        --------------------------

        Node                                   Voltage
        ----                                   -------
        vdd                                        1.1
        xn.mp1                                     1.1
        control                                      0
        out                                   0.414316
        in                                           0
        v2#branch                                    0
        v1#branch                          2.48026e-12
        vvdd#branch                       -4.94638e-12

        No. of Data Rows : 8364
    </pre>
    <div class="is-size-4">Input graph</div>
    <img src='images/input.png' alt='image of pass transistor input graph'>
    <div class="is-size-4">Output graph</div>
    <img src='images/output.png' alt='image of pass transistor output graph'>
</div>`;
        document.getElementById("result").innerHTML = "<span>&#10003;</span> Success"
        document.getElementById("result").className = "text-success";
    }
    else {
        document.getElementById("result").innerHTML = "<span>&#10007;</span> Fail";
        document.getElementById("result").className = "text-danger";
    }
    return;
}

