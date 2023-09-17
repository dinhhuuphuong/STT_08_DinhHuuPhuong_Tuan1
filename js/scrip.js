//Bai tap 1 & 2
console.log("Challenge_1&2:")
var Marks = {
     weights: 78,
     height: 1.69
}

var John = {
     weights: 78,
     height: 1.69
}

function calculateBMI({weights, height}) {
    return (weights / (height * height)).toFixed(2);
}

Marks.BMI = calculateBMI(Marks);
     John.BMI = calculateBMI(John); 
     var markHigerBMI = Marks.BMI > John.BMI;  

    if( markHigerBMI ) { 
         console.log(`Mark's BMI(${Marks.BMI}) is higher than John's(${John.BMI})`);
    } else {
        console.log(`John's BMI(${John.BMI}) is higher than Mark's(${Marks.BMI})`);
 }

//Bai tap 3:
console.log("Challenge_3:")

const averageScore = (score) => {
const totalScore = score.reduce((scoreAcc, scoreNum) => {
    return scoreAcc + scoreNum;
});
const averageScore = totalScore / 3;
    return averageScore;
}

const dolphinScore = averageScore([96, 108, 89])
const koalaScore = averageScore([88, 91, 110])

if (dolphinScore >= 100 || koalaScore >= 100) {
    if (dolphinScore > koalaScore) {
        console.log(`Dolphin ${dolphinScore} win over Koala ${koalaScore} `);
    } else if (koalaScore > dolphinScore) {
        console.log(`Koala ${koalaScore} win over Dolphin ${dolphinScore} `);
    } else {
        console.log(`It's a tie with Dolphin ${dolphinScore} and koalaScore ${koalaScore}`);
    }
} else {
    console.log('No team win the trophy');
}



//Bai tap 4:
console.log("Challenge_4:")
function calcTip(billValue) {
        var tipValue = billValue <= 300 && billValue >= 50 ?
            billValue * 0.15 :
            billValue * 0.2;
        console.log(`The bill was ${billValue}, the tip was ${tipValue}, and the total value ${billValue+tipValue}`);
        return tipValue;
    }
        
        console.log('Data 1: Test for bill values 270, 40 and 430'); 
        calcTip(270); 
        calcTip(40); 
        calcTip(430); 


// Bài 5:
console.log("Challenge_5:") 

// Tinh Trung binh cong
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Tinh Trung bình cộng  2 đội
const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);

const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

// jaw kiểm tra đội thắng
const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins");
  }
};
console.log("Dữ liệu 1:");
checkWinner(avgDolphins1, avgKoalas1);

console.log("Dữ liệu 2:");
checkWinner(avgDolphins2, avgKoalas2);

//Bai tap 6:
console.log("Challenge_6:")

function calcTip(billValue) {
    var tipValue = billValue <= 300 && billValue >= 50 ?
        billValue * 0.15 :
         billValue * 0.2;
        return tipValue;
} 

    var bills = [125, 555, 44]; 
    var tips = bills.map(calcTip) 
     var total = bills.map( (money)=> money+calcTip(money) )
        
     console.log('bills ', bills)
     console.log('tips ', tips)
     console.log('total ', total)
//Bai tap 7:
console.log("Challenge_7:")

const mark = {
    fullName: "Mark Miller",
    mass: 78, 
    height: 1.69, 
  };
  
  const john = {
    fullName: "John Smith",
    mass: 92, 
    height: 1.95, 
  };
  
// Tạo phương thức tính BMI 
  mark.calcBMI = function () {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  };
  
  john.calcBMI = function () {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  };
  
// Tính BMI 
  mark.calcBMI();
  john.calcBMI();
  
  if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.fullName}'s (${john.bmi.toFixed(1)})!`);
  } else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(1)})!`);
  } else {
    console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi.toFixed(1)})!`);
  }

//bai tap 9
console.log("Challenge_9:")

function printForecast(arr){
    var str = "... "
    for (let i = 0; i < arr.length; i++){
         str+= `${arr[i]}oC in ${i+1} days ... `
        }
    console.log(str)
} 


    var data1 = [17, 21, 23];
    var data2 = [12, 5, -5, 0, 4];
        
    console.log(data1)
    console.log(printForecast(data1))

    console.log(data2)
    console.log(printForecast(data2))