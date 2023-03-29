const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const atLeast3Languages = users.filter(user => user.languages.length >= 3);

// console.log(atLeast3Languages);

const emails = users.map(user => user.email);

// console.log(emails)


const totalExperience = users.reduce((acc,user, index, array) => {
    acc = acc + user.yearsOfExperience;
    if (index === array.length - 1) {
        return acc/array.length;
    } else {
        return acc;
    }
}, 0);

// console.log(totalExperience);


const longestEmail = users.reduce((acc, user)=>{
    if (acc.length < user.email.length) {
        return user.email;
    } else {
        return acc;
    }
});

// console.log(longestEmail)


const stringOfUsers = users.reduce((acc, user,index) => {
    user.languages.forEach(function(language){
        if (!acc.includes(language)){
            acc.push(language)
        }
        return acc;
    })
    }, 0)
