function Person(first, last, age, gender, interests){
    this.name = {
        first: first,
        last: last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
        var pronoun = (this.gender === 'male') ? 'He' : 'She';
        var andMore = (this.interests.length > 2) ? ' and more..' : '';
        alert(`${this.name.first} ${this.name.last} is ${this.age} years old. ${pronoun} likes ${this.interests[0]} and ${this.interests[1]}${andMore}.`);
    }
    this.greeting = function(){
        alert(`Hi! I'm ${this.name.first}.`);
    };
}
