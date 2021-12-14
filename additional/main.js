//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
let wrapUsers = document.createElement('div');
wrapUsers.classList.add('wrap_user');
document.body.appendChild(wrapUsers);
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const user of users) {
            let userItem = document.createElement('div');
            userItem.classList.add('user');
            wrapUsers.appendChild(userItem);
            let userName = document.createElement('h2');
            userName.innerText = `Name: ${user.name}`;
            let userUsername = document.createElement('p');
            userUsername.innerText = `Username: ${user.username}`;
            let userEmail = document.createElement('p');
            userEmail.innerText = `Email: ${user.email}`;
            let userAdresContainer = document.createElement('div');
            userAdresContainer.innerText = `Adress User`;
            userAdresContainer.classList.add('user_adress_container');
            let userAdressWrap = document.createElement('div');
            let userStreet = document.createElement('p');
            userStreet.innerText = `Street: ${user.address.street}`;
            let userSuite = document.createElement('p');
            userSuite.innerText = `Suite: ${user.address.suite}`;
            let userCity = document.createElement('p');
            userCity.innerText = `City: ${user.address.city}`;
            let userZipcode = document.createElement('p');
            userZipcode.innerText = `Zipcode ${user.address.zipcode}`;
            let userGeoContainer = document.createElement('div');
            userGeoContainer.classList.add('user_geo_container');
            userGeoContainer.innerText = `User Geo`;
            let userWrapGeo = document.createElement('div');
            let userGeoLat = document.createElement('p');
            userGeoLat.innerText = `Lat: ${user.address.geo.lat}`;
            let userGeoLng = document.createElement('p');
            userGeoLng.innerText = `Lng: ${user.address.geo.lng}`;
            let userPhone = document.createElement('p');
            userPhone.innerText = `Phone: ${user.phone}`;
            let userWebsite = document.createElement('p');
            userWebsite.innerText = `Website: ${user.website}`;
            let userCompany = document.createElement('div');
            userCompany.classList.add('user_company_wrap')
            userCompany.innerText = `Company`;
            let userCompanyWrap = document.createElement('div');
            let userCompanyName = document.createElement('p');
            userCompanyName.innerText = `Company name: ${user.company.name}`
            let userCompanyCatchPhrase = document.createElement('p');
            userCompanyCatchPhrase.innerText = `Catch Phrase: ${user.company.catchPhrase}`;
            let userCompanyBs = document.createElement('p');
            userCompanyBs.innerText = `BS: ${user.company.bs}`
            let userBtn = document.createElement('button');
            userBtn.innerText = `Show posts`;
            userItem.appendChild(userName);
            userItem.appendChild(userUsername);
            userItem.appendChild(userEmail);
            userItem.appendChild(userAdresContainer);
            userAdresContainer.appendChild(userAdressWrap);
            userAdressWrap.appendChild(userStreet);
            userAdressWrap.appendChild(userSuite);
            userAdressWrap.appendChild(userCity);
            userAdressWrap.appendChild(userZipcode);
            userAdresContainer.appendChild(userGeoContainer);
            userGeoContainer.appendChild(userWrapGeo);
            userWrapGeo.appendChild(userGeoLat);
            userWrapGeo.appendChild(userGeoLng);
            userItem.appendChild(userPhone);
            userItem.appendChild(userWebsite);
            userItem.appendChild(userCompany);
            userCompany.appendChild(userCompanyWrap);
            userCompanyWrap.appendChild(userCompanyName);
            userCompanyWrap.appendChild(userCompanyCatchPhrase);
            userCompanyWrap.appendChild(userCompanyBs);
            userItem.appendChild(userBtn);
            userBtn.addEventListener('click', function () {
                let postsDefined = document.getElementById('postsDefined')
                if (postsDefined === null){
                    let userPosrContainer = document.createElement('div');
                    userPosrContainer.setAttribute(`id`,`postsDefined`);
                    userItem.appendChild(userPosrContainer);
                    fetch('https://jsonplaceholder.typicode.com/posts')
                        .then(response => response.json())
                        .then(posts =>{
                            for (const post of posts) {
                                if (user.id === post.userId){
                                    let postContainer = document.createElement('div');
                                    let postTitle = document.createElement('h3');
                                    postTitle.innerText =`${post.title}`;
                                    let postBody = document.createElement('p');
                                    postBody.innerText = `${post.body}`;
                                    let postBtn = document.createElement('button');
                                    postBtn.innerText = `Show coments`;
                                    userPosrContainer.appendChild(postContainer);
                                    postContainer.appendChild(postTitle);
                                    postContainer.appendChild(postBody);
                                    postContainer.appendChild(postBtn);
                                    postBtn.addEventListener('click', function () {
                                        let comentsDefined = document.getElementById('comentsDefined');
                                        if (comentsDefined === null) {
                                            let userPosrComentsContainer = document.createElement('div');
                                            userPosrComentsContainer.setAttribute(`id`, `comentsDefined`);
                                            postContainer.appendChild(userPosrComentsContainer);
                                            fetch('https://jsonplaceholder.typicode.com/comments')
                                                .then(response => response.json())
                                                .then(comments =>{
                                                    for (const comment of comments) {
                                                        if (post.userId === comment.postId){
                                                            let comentContainer = document.createElement('div');
                                                            let commentName = document.createElement('h4');
                                                            commentName.innerText =`Name: ${comment.name}`;
                                                            let commentEmail = document.createElement('p');
                                                            commentEmail.innerText = `Email: ${comment.email}`;
                                                            let commentBody = document.createElement('p');
                                                            commentBody.innerText = `${comment.body}`;
                                                            userPosrComentsContainer.appendChild(comentContainer);
                                                            comentContainer.appendChild(commentName);
                                                            comentContainer.appendChild(commentEmail);
                                                            comentContainer.appendChild(commentBody);
                                                        }
                                                    }
                                                })
                                        }else {
                                            comentsDefined.remove();
                                        }
                                    })
                                }
                            }
                        })
                }else {
                    postsDefined.remove();
                }

            })

        }

        }
    );