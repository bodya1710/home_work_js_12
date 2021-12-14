//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
// let posrWrap = document.createElement('div');
// posrWrap.classList.add('post_wrap');
// document.body.appendChild(posrWrap);
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(json => {
//         for (const post of json) {
//             let postContainer = document.createElement('div');
//             postContainer.classList.add('post_container');
//             posrWrap.appendChild(postContainer);
//             let postUserId = document.createElement('div');
//             postUserId.innerText =`${post.userId}`;
//             let idpost = document.createElement('div');
//             idpost.innerText = `${post.id}`;
//             let postTitle = document.createElement('div');
//             postTitle.innerText = `${post.title}`;
//             let postBody = document.createElement('div');
//             postBody.innerText = `${post.body}`;
//
//             postContainer.appendChild(postUserId);
//             postContainer.appendChild(idpost);
//             postContainer.appendChild(postTitle);
//             postContainer.appendChild(postBody);
//
//         }
//     })
//2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
// let commetWrap = document.createElement('div');
// document.body.appendChild(commetWrap);
// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(response => response.json())
//     .then(json => {
//         for (const comment of json) {
//             let commentcontainer = document.createElement('div');
//             let commentName = document.createElement('h2');
//             commentName.innerText = `${comment.name}`;
//             let commentEmail = document.createElement('p');
//             commentEmail.innerText = `${comment.email}`;
//             let commentBody = document.createElement('p');
//             commentBody.innerText = `${comment.body}`;
//             commetWrap.appendChild(commentcontainer);
//             commentcontainer.appendChild(commentName);
//             commentcontainer.appendChild(commentEmail);
//             commentcontainer.appendChild(commentBody);
//         }
//     })






