import PropTypes from 'prop-types';
import './css/App.css';

const UserData = [
    {
        name: 'john doe',    
        place: 'chennai',
        role: 'software developer',
        Skills: ['nodejs', 'reactjs', 'java', 'python', 'php', 'html'],
        online: true,
        Profile: '/vite.svg'
    },
    {
        name: 'jane doe',    
        place: 'chennai',
        role: 'software developer',
        Skills: ['nodejs', 'reactjs', 'java', 'python', 'php', 'html'],
        online: true,
        Profile: '/vite.svg'
    },
    {
        name: 'peter parker',    
        place: 'chennai',
        role: 'software developer',
        Skills: ['nodejs', 'reactjs', 'java', 'python', 'php', 'html'],
        online: false,
        Profile: '/vite.svg'
    },  
    {
        name: 'mary jane',    
        place: 'chennai',
        role: 'software developer',
        Skills: ['nodejs', 'reactjs', 'java', 'python', 'php', 'html'],
        online: true,
        Profile: '/vite.svg'
    }, 
    {
        name: 'dr domains',    
        place: 'chennai',
        role: 'software developer',
        Skills: ['nodejs', 'reactjs', 'java', 'python', 'php', 'html'],
        online: false,
        Profile: '/vite.svg'
    },   
    {
        name: 'harry porter',    
        place: 'chennai',
        role: 'software developer',
        Skills: ['nodejs', 'reactjs', 'java', 'python', 'php', 'html'],
        online: false,
        Profile: '/vite.svg'
    },
];

function User(props) {
    return (
        <div className="Card-Container">
            <span className={props.online ? "Pro online" : "Pro offline"}>
                {props.online ? "Online" : "Offline"}
            </span>
            <img src={props.Profile} className="Profile" alt="Profile" />
            <h3>{props.name}</h3>
            <h6>{props.place}</h6>
            <p>{props.role}</p>
            <div className="Button">
                <button className="primary">Follow</button>
                <button className="outline">Message</button>
            </div>
            <div className="Skills">
                <h6>Skills</h6>
                <ul>
                    {props.Skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    Skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    online: PropTypes.bool.isRequired,
    Profile: PropTypes.string.isRequired,
};

export const UserCard = () => {
    return (
        <div id="root">
            {UserData.map((user, index) => (
                <User 
                    key={index}
                    name={user.name}
                    place={user.place}
                    role={user.role}
                    Skills={user.Skills}
                    online={user.online}
                    Profile={user.Profile}
                />
            ))}
        </div>
    );
}
