import React, { useState } from 'react';
import "./Alert.scss"
// import { X } from 'lucide-react';
import { Ialert } from '../interface';
import { fromAlirt } from '../data';

interface IProps {
    user: Ialert;
}

const Alert: React.FC<IProps> = ({ user }) => {
    const [isClosed, setIsClosed] = useState(false);

    const handleChange = () => {
        setIsClosed(true);
    };

    if (isClosed) {
        return null; // عندما يتم إغلاق الـ alert، لا تقوم برender أي شيء
    }

    return (
        <section className={`${user.class} ${isClosed ? 'done' : ''}`}>
            <div>
                <div>
                    {user.icon}
                    <h2>{user.title}</h2>
                </div>
                <p className='x' onClick={handleChange}>
                    X
                </p>
            </div>
            <p>{user.des}</p>
        </section>
    );
}

// ...

const AlertsContainer: React.FC = () => {
    return (
        <div>
            {fromAlirt.map((user, index) => (
                <Alert key={index} user={user} />
            ))}
        </div>
    );
}

// ...


export default AlertsContainer;