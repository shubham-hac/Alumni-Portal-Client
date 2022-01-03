export const events = [
    {
        id: 1,
        userid: 1,
        title: 'INSTITUTE INSIGHTS || THE TECHNOBER',
        desc: 'The Alumni Cell is proud to announce the Alumni Magazine IIT Indore 2019. Articles curated from our Alumni and students around different topics and categories. Enjoy reading the magazine and do let us know your feedback and views.',
        eventImg: 'post8.jpg',
        likes: 5,
        postDate: '1 hour ago',
        scheduleDate: '24 Dec 2021',
        upcoming: true,
    },
    {
        id: 2,
        userid: 2,
        title: 'Some national universities and organizations where IIT Indore Alumni are pursuing Masters’ or Ph.D. degrees',
        desc: 'The Alumni Cell is proud to announce the Alumni Magazine IIT Indore 2019. Articles curated from our Alumni and students around different topics and categories. Enjoy reading the magazine and do let us know your feedback and views.',
        eventImg: 'post2.jpg',
        likes: 5,
        postDate: '5 hours ago',
        scheduleDate: '24 Dec 2021',
        upcoming: true,
    },
    {
        id: 3,
        userid: 3,
        title: 'INSTITUTE INSIGHTS || THE TECHNOBER',
        desc: 'The Alumni Cell is proud to announce the Alumni Magazine IIT Indore 2019. Articles curated from our Alumni and students around different topics and categories. Enjoy reading the magazine and do let us know your feedback and views.',
        eventImg: '',
        likes: 5,
        postDate: '6 days ago',
        scheduleDate: '24 Dec 2021',
        upcoming: false,
    },
    {
        id: 4,
        userid: 2,
        title: 'INSTITUTE INSIGHTS || THE TECHNOBER',
        desc: 'The Alumni Cell is proud to announce the Alumni Magazine IIT Indore 2019. Articles curated from our Alumni and students around different topics and categories. Enjoy reading the magazine and do let us know your feedback and views.',
        eventImg: 'post3.jpg',
        likes: 5,
        postDate: '1 month ago',
        scheduleDate: '24 Dec 2021',
        upcoming: false,
    },
]

export const Alumnis = [
    {
        name: 'Yash Patil',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident architecto numquam beatae?',
        profilePicture: 'person2.jpg'
    },
    {
        name: 'Jeet Patil',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident architecto numquam beatae?',
        profilePicture: 'person4.jpg'
    },
    {
        name: 'Abhinav Rawat',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident architecto numquam beatae?',
        profilePicture: 'person6.jpg'
    },
    {
        name: 'Dishant Tare',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident architecto numquam beatae?',
        profilePicture: 'person3.jpg'
    },
    {
        name: 'Ashish Kumar',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident architecto numquam beatae?',
        profilePicture: 'person7.jpg'
    },
    {
        name: 'Aashutosh Singh',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident architecto numquam beatae?',
        profilePicture: 'person8.jpg'
    },
]

export const jobs = [
    {
        id: 1,
        jobProfile: 'Senior Software Developer',
        company: 'JP Morgan',
        location: 'NYC',
        deadline: 'July 21, 2022',
        salary: '12 LPA',
        linkClicks: 28,
        userId: 'Jeet Patil',
        profilePicture: 'person3.jpg'
    },
    {
        id: 2,
        jobProfile: 'System Engineer',
        company: 'TCS',
        location: 'Mumbai',
        deadline: 'Apr 13, 2022',
        salary: '7 LPA',
        linkClicks: 76,
        userId: 'Yash Patil',
        profilePicture: 'person5.jpg'
    },
    {
        id: 3,
        jobProfile: 'SDE 2',
        company: 'Microsoft',
        location: 'Pune',
        deadline: 'Mar 8, 2022',
        salary: '15 LPA',
        linkClicks: 41,
        userId: 'Dishant Tare',
        profilePicture: 'person1.jpg'
    },
    
]

export const Users = [
    {
        id: 1,
        name: 'Yash Patil',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident architecto numquam beatae?',
        profilePicture: 'person2.jpg',
        alumni: true,
    },
    {
        id: 2,
        name: 'Jeet Patil',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident architecto numquam beatae?',
        profilePicture: 'person4.jpg',
        alumni: true,
    },
    {
        id: 3,
        name: 'Abhinav Rawat',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident architecto numquam beatae?',
        profilePicture: 'person6.jpg',
        alumni: true,
    },
    {
        id: 4,
        name: 'Dishant Tare',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident architecto numquam beatae?',
        profilePicture: 'person3.jpg',
        alumni: true,
    },
    {
        id: 5,
        name: 'Ashish Kumar',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident architecto numquam beatae?',
        profilePicture: 'person7.jpg',
        alumni: false,
    },
    {
        id: 6,
        name: 'Aashutosh Singh',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident architecto numquam beatae?',
        profilePicture: 'person8.jpg',
        alumni: false,
    },
    {
        id: 7,
        name: 'Nitesh Kumar',
        desc: 'I am mod,fear me.',
        profilePicture: 'no-avatar.png',
        admin: true,
        alumni: false
    },
    {
        id: 8,
        name: 'Anil Kumar',
        desc: 'I am mod,fear me.',
        profilePicture: 'no-avatar.png',
        admin: true,
        alumni: false
    }
]

export const ModerationActions=[
    {
        id:1,
        type:'addUser',
        desc:'Added User'
    },
    {
        id:2,
        type:'editUser',
        desc:'Edited User Profile'
    },
    {
        id:3,
        type:'delUser',
        desc:'Deleted User'
    },
    {
        id:4,
        type:'approveApplication',
        desc:'Approved Application'
    },
    {
        id:5,
        type:'rejectApplication',
        desc:'Rejected Application'
    }
    //TODO: ADD OTHER ACTIONS[DEL POST/COMMENT;MAKE PRIORITY ANNOUNCEMENT,ETC.] and ADD SPECIAL ICONS FOR ACTIONS
]
export const ModerationHistory=[
    {
        id:1,
        action_type:ModerationActions[2].type,
        admin_name:Users[6].name,
        action_desc:ModerationActions[2].desc,
        action_timestamp:'1 wk(s) ago',
    },
    {
        id:2,
        action_type:ModerationActions[4].type,
        admin_name:Users[7].name,
        action_desc:ModerationActions[4].desc,
        action_timestamp:'2 mnth(s) ago',
    },
    {
        id:3,
        action_type:ModerationActions[0].type,
        admin_name:Users[6].name,
        action_desc:ModerationActions[0].desc,
        action_timestamp:'2 yr(s) ago',
    },
    {
        id:4,
        action_type:ModerationActions[3].type,
        admin_name:Users[7].name,
        action_desc:ModerationActions[3].desc,
        action_timestamp:'2 yr(s) ago',
    },
    {
        id:5,
        action_type:ModerationActions[1].type,
        admin_name:Users[6].name,
        action_desc:ModerationActions[1].desc,
        action_timestamp:'2 yr(s) ago',
    }
]