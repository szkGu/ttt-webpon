
const updateTable = () => {
    const inputs = document.getElementById("goods-input").value.split("\n");
    const counts = inputs.reduce((prev, line) => {
        try {
            let [id, num, name] = line.split("\t");
            id = id.match(/(TTT-.+)\]/)[1].replace(/-/, "_");
            num = parseInt(num.match(/(\d+)個/)[1]);
            if (id in prev) {
                prev[id] += num;
            } else {
                if (name.includes("メッセージ")) {
                    prev["TTT_SR01"] += num;
                } else if (name.includes("キャンバス")) {
                    prev["TTT_R01"] += num;
                }
            }
            return prev;
        } catch (e) {
            console.log(e);
            return prev;
        }
    }, {
        TTT_SR01: 0,
        TTT_R01: 0,
        TTT_A01: 0,
        TTT_A02: 0,
        TTT_A03: 0,
        TTT_A04: 0,
        TTT_B01: 0,
        TTT_C01: 0,
        TTT_D01: 0,
        TTT_D02: 0,
        TTT_D03: 0,
        TTT_D04: 0,
        TTT_E01: 0,
        TTT_E02: 0,
        TTT_E03: 0,
        TTT_E04: 0,
        TTT_F01: 0,
        TTT_F02: 0,
        TTT_F03: 0,
        TTT_F04: 0,
        TTT_F05: 0,
        TTT_F06: 0,
        TTT_F07: 0,
        TTT_F08: 0,
        TTT_G01: 0,
        TTT_G02: 0,
        TTT_G03: 0,
        TTT_G04: 0,
        TTT_G05: 0,
        TTT_G06: 0,
        TTT_G07: 0,
        TTT_G08: 0
    });

    const sum = Object.keys(counts).reduce((prev, key) => {
        document.getElementById(key).textContent = counts[key];
        return prev + counts[key];
    }, 0);
    document.getElementById("TTT_SR").textContent = counts["TTT_SR01"];
    document.getElementById("TTT_R").textContent = counts["TTT_R01"];
    document.getElementById("TTT_A").textContent = counts["TTT_A01"] + counts["TTT_A02"] + counts["TTT_A03"] + counts["TTT_A04"];
    document.getElementById("TTT_B").textContent = counts["TTT_B01"];
    document.getElementById("TTT_C").textContent = counts["TTT_C01"];
    document.getElementById("TTT_D").textContent = counts["TTT_D01"] + counts["TTT_D02"] + counts["TTT_D03"] + counts["TTT_D04"];
    document.getElementById("TTT_E").textContent = counts["TTT_E01"] + counts["TTT_E02"] + counts["TTT_E03"] + counts["TTT_E04"];
    document.getElementById("TTT_F").textContent = counts["TTT_F01"] + counts["TTT_F02"] + counts["TTT_F03"] + counts["TTT_F04"] + counts["TTT_F05"] + counts["TTT_F06"] + counts["TTT_F07"] + counts["TTT_F08"];
    document.getElementById("TTT_G").textContent = counts["TTT_G01"] + counts["TTT_G02"] + counts["TTT_G03"] + counts["TTT_G04"] + counts["TTT_G05"] + counts["TTT_G06"] + counts["TTT_G07"] + counts["TTT_G08"];
    document.getElementById("TTT_SUM").textContent = sum;
    
    console.log(sum);
    console.log(counts);
    updatePng();
};

const updatePng = () => {
    const elem = document.getElementById("table");
    domtoimage.toPng(elem, {
        bgcolor: "#ffffff"
    }).then(dataUrl => {
        document.getElementById("ss").href = dataUrl;
        //const img = new Image();
        //img.src = dataUrl;
        //document.body.appendChild(img);
    });
};

window.onload = () => {
    document.getElementById("goods-input").addEventListener("input", updateTable);
    updatePng();
};