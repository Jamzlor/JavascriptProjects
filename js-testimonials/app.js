function User(name, score, testimonial, img){
    this.userName = name;
    this.score = score;
    this.testimonial = testimonial;
    this.img = img;
}

let lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut laborum sapiente dignissimos ut tempora illo quae praesentium totam corporis odit repellat labore sint quam, nihil saepe. At, obcaecati recusandae!';

const userArr = [];

userArr.push(new User('Johnny', 3.5, lorem , "images/1.jpg"));
userArr.push(new User('Derek', 4.7, lorem , "images/2.jpg"));
userArr.push(new User('Peter', 4.0, lorem , "images/3.jpg"));
userArr.push(new User('Sandra', 2.4, lorem , "images/4.jpg"));
userArr.push(new User('Mike', 4.2, lorem , "images/5.jpg"));
userArr.push(new User('Jenny', 3.3, lorem , "images/6.jpg"));

const profileImg = document.getElementById('profileImg');
const score = document.getElementById('score');
const testimonial = document.getElementById('testimonial');
const userName = document.getElementById('name');

let count = 0;

function right(){
    if(count != userArr.length - 1){
        count ++;
        profileImg.style.background = `url(${userArr[count].img}) center/cover`;
        score.innerHTML = `${userArr[count].score}/5`;
        testimonial.innerHTML = userArr[count].testimonial;
        userName.innerHTML = `${userArr[count].userName}`;
    } else {
        count = 0;
        profileImg.style.background = `url(${userArr[count].img}) center/cover`;
        score.innerHTML = `${userArr[count].score}/5`;
        testimonial.innerHTML = userArr[count].testimonial;
        userName.innerHTML = `${userArr[count].userName}`;
    }
}

function left(){
    if(count != 0){
        count --;
        profileImg.style.background = `url(${userArr[count].img}) center/cover`;
        score.innerHTML = `${userArr[count].score}/5`;
        testimonial.innerHTML = userArr[count].testimonial;
        userName.innerHTML = `${userArr[count].userName}`;
    } else {
        count = userArr.length - 1;
        profileImg.style.background = `url(${userArr[count].img}) center/cover`;
        score.innerHTML = `${userArr[count].score}/5`;
        testimonial.innerHTML = userArr[count].testimonial;
        userName.innerHTML = `${userArr[count].userName}`;
    }
}

document.getElementById('leftButton').addEventListener('click', left);
document.getElementById('rightButton').addEventListener('click', right);