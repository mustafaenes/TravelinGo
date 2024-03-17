import React, { useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";

function MainPage() {

    const [userInfo, setUserInfo] = useState({
        userId: '',
        userName: '',
        userSurname: '',
        userEmail: '',
        userBirthDate: '',
        userRegistrationDate: ''
    });

    useEffect(() => {
        // Local storage'dan accessToken'i alın
        const accessToken = localStorage.getItem('accessToken');

        // accessToken varsa, decode edin ve kullanıcı bilgilerini alın
        if (accessToken) {
            const decodedToken = jwtDecode(accessToken);
            console.log(decodedToken);
            const { nameid, unique_name, family_name, email, DateOfBirth, RegistrationDate } = decodedToken;

            // Kullanıcı bilgilerini state'e kaydedin
            setUserInfo({
                userId: nameid,
                userName: unique_name,
                userSurname: family_name,
                userEmail: email,
                userBirthDate: DateOfBirth,
                userRegistrationDate: RegistrationDate
            });
        }
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <div>
                <p><strong>User ID:</strong> {userInfo.userId}</p>
                <p><strong>User Name:</strong> {userInfo.userName}</p>
                <p><strong>User Surname:</strong> {userInfo.userSurname}</p>
                <p><strong>User Email:</strong> {userInfo.userEmail}</p>
                <p><strong>Date of Birth:</strong> {userInfo.userBirthDate}</p>
                <p><strong>Registration Date:</strong> {userInfo.userRegistrationDate}</p>
            </div>
        </div>
    );

}

export default MainPage;
