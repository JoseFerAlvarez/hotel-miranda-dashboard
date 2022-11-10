import React from 'react';
import GuestsTable from '../components/guestsTable';
import data from "../db/guest.json";
import styled from 'styled-components';
import Topbar from '../components/topbar';

const BookingsContainer = styled.div`
    width: 100%;

    .content{
        padding: 50px 5%;
    }
`;

const Bookings = () => {
    return (
        <BookingsContainer>
            <Topbar title="Bookings"></Topbar>
            <div className='content'>
                <GuestsTable data={data}></GuestsTable>
            </div>
        </BookingsContainer>
    );
}

export default Bookings;
