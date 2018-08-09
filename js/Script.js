var colorList = [];
const grid = document.querySelector('.gridContainer');
const clock = document.querySelector('.clock');
const hands = document.querySelectorAll('.hand');
const body = document.querySelector('body');
// const grid = document.getElementById('colorPicker');
function selectColor(colorValue){
    if (colorList.length < 3){
        for (i = 0; i < colorList.length; i++){
            if(colorValue.id == colorList[i]){
                colorList.splice(i, 1);
                var element = document.getElementById(colorValue.id);
                element.style.color = 'black';
                element.className = element.className.replace(/\b selected\b/g, "");
                console.log(colorList);
                return;
            }
        }
        colorList.push(colorValue.id);
        var element = document.getElementById(colorValue.id);
        element.className+=" selected"
        element.style.color = 'white';
        console.log(colorList.length);
        if (colorList.length >= 3){
            grid.style.visibility = 'hidden';
            clock.style.visibility = 'visible';
            hands[0].style.background = `#${colorList[0]}`;
            hands[1].style.background = `#${colorList[0]}`;
            hands[2].style.background = `#${colorList[0]}`;
            clock.style.borderColor = `#${colorList[1]}`;
            body.style.backgroundColor = `#${colorList[2]}`;
            // clock.style.boxShadow = `
            // 0 0 0 4px rgba(0,0,0,0.1),
            // inset 0 0 0 3px ${colorList[1]},
            // inset 0 0 10px black,
            // 0 0 10px rgba(0,0,0,0.2);`;

            

        }
    } else{
        for (i = 0; i < colorList.length; i++){
            if(colorValue.id == colorList[i]){
                colorList.splice(i, 1);
                var element = document.getElementById(colorValue.id);
                element.style.color = 'black';
                element.className = element.className.replace(/\b selected\b/g, "");
                return;
            }
        }
        alert("You can only select a max of 3 colors");
    }
    
    console.log(colorList);
    // alert(colorValue.id);

}