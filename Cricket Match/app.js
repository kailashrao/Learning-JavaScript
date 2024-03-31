function Batsman(name, runs) {
    this.name = name;
    this.runs = runs;
}

function Bowler(name, wickets) {
    this.name = name;
    this.wickets = wickets;
}

function processCSV(string1) {
    const allLines = string1.split("\n");
    const firstBallIndex = 71;

    let batsmanList = [];
    let bowlerList = []

    for (let i = firstBallIndex; i<allLines.length; i++){
        const lineInfo = allLines[i].split(",");

        let batsmanExists = false;
        let batsmanIndex = -1;
        for(let j = 0; j<batsmanList.length; j++){
            if(batsmanList[j].name === lineInfo[4]) {
                batsmanExists = true;
                batsmanIndex = j; 
            }
        }

        if(batsmanExists){
            batsmanList[batsmanIndex].runs += Number(lineInfo[7]);
        }
        else{
            let batsman1 = new Batsman(lineInfo[4], Number(lineInfo[7]));
            batsmanList.push(batsman1);
        }


        // const wickets = lineInfo[14] === "" ? 0 : 1;
        // let bowler1 = new Bowler(lineInfo[6], wickets);
        // bowlerList.push(bowler1);
        // console.log(bowlerList);

    } 



    let bestBatsman = batsmanList[0].name;
    let highestRuns = batsmanList[0].runs;
    for(let i = 1; i<batsmanList.length; i++){
        if(batsmanList[i].runs > highestRuns){
            bestBatsman = batsmanList[i].name;
            highestRuns = batsmanList[i].runs;
        }
    }

    console.log("The best batsman is: " + bestBatsman + " with " + highestRuns + " runs!");


}

const response = fetch('cric_1273727.csv').then(response => response.text()).then(processCSV);
