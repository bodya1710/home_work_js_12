//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// let wrapUser = document.createElement('div');
// document.body.appendChild(wrapUser);
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(posts =>{
//         for (const post of posts) {
//             let postIdBlock = document.createElement('p');
//             postIdBlock.innerText = `Post ID ${post.userId}`;
//             let titlePost = document.createElement('h2');
//             titlePost.innerText = `${post.title}`;
//             let bodyPost = document.createElement('p');
//             bodyPost.innerText = `${post.body}`;
//             wrapUser.appendChild(postIdBlock);
//             wrapUser.appendChild(titlePost);
//             wrapUser.appendChild(bodyPost);
//         }
//     }
// );

// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
// let wrapUser = document.createElement('div');
// document.body.appendChild(wrapUser);
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(posts =>{
//             for (const post of posts) {
//                 let postContainer = document.createElement('div');
//                 let postIdBlock = document.createElement('p');
//                 postIdBlock.innerText = `Post ID ${post.userId}`;
//                 let titlePost = document.createElement('h2');
//                 titlePost.innerText = `${post.title}`;
//                 let bodyPost = document.createElement('p');
//                 bodyPost.innerText = `${post.body}`;
//                 let buttonComents = document.createElement('button');
//                 buttonComents.innerText = `Click`;
//                 wrapUser.appendChild(postContainer);
//                 postContainer.appendChild(postIdBlock);
//                 postContainer.appendChild(titlePost);
//                 postContainer.appendChild(bodyPost);
//                 postContainer.appendChild(buttonComents);
//                 postContainer.addEventListener('click', function (e) {
//                     e.preventDefault()
//                     let comentWrapDefined = document.getElementById('comentWrap')
//                     if (comentWrapDefined === null) {
//                         let comentWrap = document.createElement('div');
//                         comentWrap.setAttribute(`id`,`comentWrap`);
//                         postContainer.appendChild(comentWrap);
//                         fetch('https://jsonplaceholder.typicode.com/comments')
//                             .then(item => item.json())
//                             .then(item =>{
//                                 item.forEach(comment =>{
//                                     console.log(comment.postId);
//                                     if (comment.postId === post.userId){
//                                         let comentContent = document.createElement('h3');
//                                         comentContent.innerText = `${comment.name}`;
//                                         let commentEmail = document.createElement('p');
//                                         commentEmail.innerText = `${comment.email}`;
//                                         let commentBody = document.createElement('p');
//                                         commentBody.innerText = `${comment.body}`;
//                                         comentWrap.appendChild(comentContent);
//                                         comentWrap.appendChild(commentEmail);
//                                         comentWrap.appendChild(commentBody);
//                                     }
//                                 })
//                             })
//                     }else {
//                         comentWrapDefined.remove();
//                     }
//                 })
//
//             }
//         }
//     );

