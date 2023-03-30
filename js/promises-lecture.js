import {getGithubUsers, renderGithubUser} from './github.js'


(async()=> {

    // GET USERS

    let users = await getGithubUsers();
    console.log(users);

    // RENDER USERS

    const usersGrid = document.querySelector('#userGrid');
    users.forEach(user => {
        renderGithubUser(user, usersGrid);
    })

})();