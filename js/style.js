const heading = document.querySelector(".heading");
heading.style.color = "orangered";

heading.style.setProperty('font-size', '4rem');

//const intro = document.querySelector('class''intro');
//intro.setAttribute('class','Getfit');

//const newGetfitsSection = document.querySelector(".Getfit");
//newGetfitsSection.style.color = 

//document.querySelector(".link").setAttribute("href", "https://8fit.com/fitness/different-types-of-exercise-and-why-variety-is-important/")

const newPara = document.querySelector(".newPara");

newPara.textContent += "This is a new paragraph";

const myButton = document.querySelector('.newButton');
myButton.addEventListener('click', function(){

    const clickSection = document.querySelector(".newPara")
    clickSection.style.background = "red";
    clickSection.classList.toggle('clicked');
});

var arrayofWorkouts = new Array();
arrayofWorkouts[0] = "Stretching";
arrayofWorkouts[1] = "Yoga";
arrayofWorkouts[3] = "Mobility work";

const myArray = document.querySelector(".arraySelection");
myArray.innerHTML = arrayofWorkouts;


//for (let i = 0; 1 < arrayofWorkouts.length; 1++) {
    //document.writeln(items[i]);
//}



//jQuery content

    $(".jQueryPara").html("New HTML content")

    

    $(".jQueryButton").click(function(){
        $(".jQueryPara2").before("<h4>Hello There!</h4>")
    });


    options = {
        chart: {
          type: 'bar'
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        series: [{
          data: [{
            x: 'Stretching',
            y: 15,
          }, {
            x: 'Yoga',
            y: 31
          }, {
            x: 'Mobility Work',
            y: 14
          }]
        }]
      }
      

var chart = new ApexCharts(document.querySelector(".BarChart"),options);
chart.render();
