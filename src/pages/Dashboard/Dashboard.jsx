import React from 'react';
import styled from 'styled-components';
import Calendar from '../../components/Calendar/Calendar';
import Statistics from '../../components/d3/Statistics';
import { DashboardContainer } from './DashboardStyled';

const CardsView = styled.div`
    display: flex;
    gap: 5%;
    margin: 0 5%;
`;

const CalendarView = styled.div`
    width: 40%;
    background-color: #FFFFFF;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0px 4px 4px #00000005;
`;

const StatsView = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    background-color: #FFFFFF;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0px 4px 4px #00000005;
`;

const Dashboard = () => {
    return (
        <DashboardContainer>
            <h1>Dashboard</h1>

            <CardsView>
                <CalendarView>
                    <Calendar></Calendar>
                </CalendarView>
                <StatsView>
                    <Statistics></Statistics>
                </StatsView>
            </CardsView>
        </DashboardContainer>
    );
}

export default Dashboard;
