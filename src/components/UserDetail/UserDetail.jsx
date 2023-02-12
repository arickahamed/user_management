import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PhoneIcon from '@mui/icons-material/Phone';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import "./UserDetail.css";

const UserDetail = () => {
    const { id } = useParams();
    const user = useSelector(state => state);
    const targetedUser = user?.userInfo?.find(u => u.id == id);
    console.log(user, id, targetedUser);
    return (
        <div className='userdetail_container'>
            <h2>{`${targetedUser.name} (${targetedUser.username})`}</h2>
            <h4><EmailIcon/>:{targetedUser.email}</h4>
            <h4><PhoneIcon/>:{targetedUser.phone}</h4>
            <h4><LanguageIcon/>:       {targetedUser.website}</h4>
            <h4><LocationCityIcon/>:{`${targetedUser.address.street}, ${targetedUser.address.suit}, ${targetedUser.address.city}. `}</h4>
        </div>
    )
};

export default UserDetail;