import {getLastCommit} from './promises-module.js';

(async()=> {

    // GET USER
    // let user = await getGithubUsers();
    // // console.log(user);

    let lastCommit = await getLastCommit('cbgamer97');
    console.log(lastCommit.created_at);
    // RENDER USER


})();