(() => {
    fetch('https://api.github.com/users', {headers: {'Authorization': promiseKey}})
        .then(r => response => console.log(response))
        .catch(error => console.error(error));


    function getLastCommitDate(username) {
        return fetch(`https://api.github.com/users/${username}/events`)
            .then(response => response.json())
            .then(data => {
                const lastPush = data.find(event => event.type === "PushEvent");
                if (!lastPush) {
                    throw new Error("No push events found");
                }
                const lastCommitDate = new Date(lastPush.created_at);
                return lastCommitDate.toDateString();
            })
            .catch(error => {
                console.error(error);
                return null;
            });
    }

    console.log(getLastCommitDate('ZackaryKHughes'));

    function wait(ms) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(ms);
            }, ms);
        });
    }

    console.log(wait(1000).then(() => console.log('You\'ll see this after 1 second')));
    console.log(wait(3000).then(() => console.log('You\'ll see this after 3 seconds')));
})()