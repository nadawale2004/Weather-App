

/*
    -JSON
    - API
    - GitHub
*/

// client -- JSON  --server
// client --  request =>  -- server
// client --  <= response -- server
//               API
//
console.log("1")
console.log(alert("hello"))
console.log("3")
// /about

// /Login

// /login/quiz

//https://jsonplaceholder.typicode.com/users


//let api = fetch("https://jsonplaceholder.typicode.com/users")
// .then((response) => response.json())
// .then((data) => console.log(data[5]));

// body params /:id
// path params /name page
// quary params ?key= ,value=

/* 
get - post - put - delete */

//https://api.openweathermap.org/data/2.5/weather?units=metric&q=
// f112ffd524d1f7938ad75467818c715f
document.body.style.background="purple";
const searchBtn = document.querySelector("button");
const searchBox = document.querySelector("input");
searchBtn.addEventListener("click", () => { checkweather(searchBox.value) })

async function checkweather(city) {
    // console.log("city");
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?units=metric&q='
        + city + '&appid=f112ffd524d1f7938ad75467818c715f'
    );
    const data = await response.json();
    console.log(data);
    document.querySelector(".Country").innerHTML ="Country:"+data.sys.country;
    document.querySelector(".City").innerHTML ="City:"+data.name;
    document.querySelector(".Temperature").innerHTML ="Temp:"+data.main.temp + "C";
    document.querySelector(".Speed").innerHTML ="Speed:"+ data.wind.speed + "km/h";
    
}

