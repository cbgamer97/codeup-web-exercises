export const getGithubUsers = async(username) => {
    try {
        let options = {
            header: {
                "Authorization": `token ${GITHUB_APPID}`
            }
        }
        let response = await fetch(`https://api.github.com/users/${username}`);
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getGithubEvents = async (username) => {
    try {
        let options = {
            header: {
                "Authorization": `token ${GITHUB_APPID}`
            }
        }
        let response = await fetch(`https://api.github.com/users/${username}/events/public`);
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getLastCommit = async (username) => {
    let events = await getGithubEvents(username);
    let lastCommit = events.find(function(e){
        return e.type === 'PushEvent';
    })
    return lastCommit;
};
