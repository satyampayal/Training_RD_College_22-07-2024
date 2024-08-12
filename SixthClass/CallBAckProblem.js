let user=getUser(1)
console.log(user)
let repos=getRepos(user.id)
console.log(repos)
let comits=getCommits(repos[1])
console.log(comits,"")
function getUser(id){
    setTimeout(function(id){
    return{id:1,name:"ram"}
},30000)
}
function getRepos(id){
    setTimeout(function(id){
        return("r1","R2","R3")
    },3000)
}
function getCommits(id){
    setTimeout(function(id){
        return("C1","C2","C3")
    },3000)
}