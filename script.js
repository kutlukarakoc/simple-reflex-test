document.body.style.background = 'lightblue';
document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.flexDirection = 'column';
document.body.style.fontFamily = 'arial';


const title = document.createElement('h1');
title.innerText = 'Welcome to the one of the hardest reflex test in the world! :)';
document.body.appendChild(title);

const subTitle = document.createElement('h2');
subTitle.style.fontFamily = 'Courier New, monospace';
document.body.appendChild(subTitle);

const text = 'Ready?';

[...text].forEach((item,index) => {
    let letter = document.createElement('span');
    letter.innerText = item;
    letter.style.fontSize = '1.8em';
    if(index == 0){
        letter.style.color = 'darkslateblue';
        subTitle.appendChild(letter);
    };
    if(index == 1){
        letter.style.color = 'khaki';
        subTitle.appendChild(letter);
    };
    if(index == 2){
        letter.style.color = 'black';
        subTitle.appendChild(letter);
    };
    if(index == 3){
        letter.style.color = 'orange';
        subTitle.appendChild(letter);
    };
    if(index == 4){
        letter.style.color = 'hotpink';
        subTitle.appendChild(letter);
    };
    if(index == 5){
        letter.style.color = 'grey';
        subTitle.appendChild(letter);
    };
});


const start_button = document.createElement('button');
start_button.innerText = 'Start';
start_button.style.padding = '5px 25px';
start_button.style.fontSize = '1em';
start_button.style.backgroundColor = 'black';
start_button.style.color = 'lightcoral';
start_button.style.border = 'none';
start_button.style.borderRadius = '10px';

document.body.appendChild(start_button);

start_button.addEventListener('click', function(){
    title.style.display = 'none';
    subTitle.style.display = 'none';
    start_button.style.display = 'none';  
    
    const start_test = setTimeout(() => {
        
        document.body.style.background = 'green';

        if(document.body.style.backgroundColor = 'green'){
            let start_chronometer = new Date();
    
            document.addEventListener('click', function(){

                let end_chronometer = new Date();
                let difference = end_chronometer - start_chronometer;

                difference = new Date(difference);

                let milliseconds = difference.getMilliseconds().toString().slice(0,2);
                let seconds = difference.getSeconds();
    
                if(seconds < 10){
                    results.innerText = '0' + seconds + ':' + milliseconds;
                    document.body.appendChild(results);
                    clearInterval(start_test);
                }else{
                    results.innerText = seconds + ':' + milliseconds;
                    document.body.appendChild(results);
                    clearInterval(start_test);
                };
            },{once : true});
            
            const results = document.createElement('h1');
            results.style.marginTop = '50px';
        };
    },Math.floor(Math.random() * 5000) + 1000);
});