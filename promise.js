const posts=[
    {title:'Post one', body:'This is post one',createdat:new Date().getTime()},
    {title:'Post Two', body:'This is post Two',createdat:new Date().getTime()}
]
  const userActivity = {name : 'User', lastActivityTime : "Mon Dec 26 2022 03:16:19 GMT+0530 (India Standard Time)"}

let intervalid=0
function getpost(){
    clearInterval(intervalid);
     intervalid =setInterval(() => {
        setTimeout(() => {
            let output='';
            posts.forEach((post,index)=>{
             output+=`<li>${post.title}-- createdAT ${(new Date().getTime()-post.createdat)/1000} second ago</li>`;
            })
            document.body.innerHTML=output;
        }, 1000); 
    }, 1000);
    
}
function createpost(post,callback){
 setTimeout(() => {
    posts.push({...post,createdat:new Date().getTime()});
    callback()
 }, 2000);
}

 function create4post(post,callback){
     setTimeout(() => {
         posts.push({...post,createdat:new Date().getTime()});
         callback()
     }, 1000);
     }


let clr=1;
function deletePost() {
 
   let clr= setInterval(()=>{
       
         return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(posts.length > 0) {
                posts.pop();
                resolve("deleted")
            } else {
              //  getPosts();
              
              reject(" error: Array is empty now");
              clearInterval(clr)
            }
        },2000)
    })
    },3000)

   
   }
createpost({title:'Post Three',body:'This is post three'},getpost);
create4post({title:'Post Four',body:'This is post Four'},getpost);
deletePost().catch();



