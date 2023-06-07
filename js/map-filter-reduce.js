(() => {

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


    const filteredUsers = users.filter(user => user.languages.length >= 3);
    console.log(filteredUsers)

    const emails = users.map(user => user.email);
    console.log(emails)


    const totalYearsOfExperience = users.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.yearsOfExperience;
    }, 0);

    console.log(totalYearsOfExperience);

    const averageYearsOfExperience = totalYearsOfExperience / users.length;

    console.log(averageYearsOfExperience);

    const longestEmail = users.reduce((acc, cur) => {
        return acc.email.length > cur.email.length ? acc : cur;
    });

    console.log(longestEmail.email);

    const names = users.reduce((acc, { name }, index) => {
        const isLast = index === users.length - 1;
        return `${acc}${name}${isLast ? '' : ', '}`;
    }, '');

    console.log(names);


    const uniqueLanguages = users.reduce((languages, user) => {
        user.languages.forEach(language => {
            if (!languages.includes(language)) {
                languages.push(language);
            }
        });
        return languages;
    }, []);

    console.log(uniqueLanguages);
})()
