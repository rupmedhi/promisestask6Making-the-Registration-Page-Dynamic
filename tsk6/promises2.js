let posts = [
    {title : "post 1", body : "This is post 1", createdAt : `${new Date().getTime()}`},
    {title : "post 2", body : "This is post 2", createdAt : `${new Date().getTime()}`}
]

let userActivity = {name : 'User', lastActivityTime : "Mon Dec 26 2022 03:16:19 GMT+0530 (India Standard Time)"}

let intervalId;

function getPosts() {
   clearInterval(intervalId);
   intervalId = setInterval(() => {
       let output = "";
       if(posts.length === 0) 
       document.body.innerHTML = ` `
       posts.forEach(post => {
           output += `<li> ${post.title} created ${(new Date().getTime() - post.createdAt)/1000}s ago </li>`
           document.body.innerHTML = output;
       })
   }, 1000)
}

function createPost() {
   return new Promise((resolve, reject) => {
       setTimeout(() => {
           let postNumber = posts.length + 1;
           posts.push({title : `post ${postNumber}`, body : `This is post ${postNumber}`, createdAt : `${new Date().getTime()}`});
           const error = false;
           if(!error) {
               resolve("new post created");
           }
           else {
               reject("Error : Something went wrong!");
           }
       }, 2000)
   })
}

function deletePost() {
   return new Promise((resolve, reject) => {
       setTimeout(() => {
           if(posts.length > 0) {
               posts.pop();
               resolve("deleted");
           } else {
               getPosts();
               reject(new Error(" Array is empty now. You dont have to use for loop as there are only 3 posts . Just call delete post 3 times"))
           }
       },2000)
   })
}

createPost();
createPost();

const promise1 = Promise.resolve("Hello world");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
   setTimeout(resolve, 2000, "goodbye");
})

Promise.all([promise1, promise2, promise3]).then((values) => {
   console.log(values)
})

const updateLastUserActivityTime = new Promise((resolve, reject) => {
   resolve(() => {
       setTimeout(() => {
           console.log(`Before creating 5th Post, ${userActivity.name}'s lastActivity time ${userActivity.lastActivityTime}`);

           userActivity.lastActivityTime = new Date();
       },1000)
      
   })
})

Promise.all([updateLastUserActivityTime, createPost()]).then((value) => {
   value[0]();
   setTimeout(() => {
       posts.map(console.log)
       console.log(`After creating 5th Post, ${userActivity.name}'s lastActivity time ${userActivity.lastActivityTime}`);
   }, 1000);
}).then(() => {
   deletePost().then(() => {
       posts.map(console.log);
   })
})