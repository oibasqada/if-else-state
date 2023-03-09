function greeting(user, day){
        if (day >= 32){
                return `dear ${user}! There can't be in month more days than 31!`
        } else if (day % 2 === 0){
                return `welcome, ${user} how are you? today is ${day}, great day`
        } else {
                return `welcome, ${user} how are you? today is ${day}, simple day`
        }
}

console.log(greeting( 'Nurali', 41))
