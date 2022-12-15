import React from 'react';
import {
    Table,
    HeaderTitle,
} from '../Blocks/Blocks';
import UsersRow from './UsersRow';
import { Checkbox } from '../Blocks/Blocks';
import { IntUser } from '../../interfaces/Users';

type Users = {
    data: IntUser[];
}

const UsersTable = ({ data }: Users) => {
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <HeaderTitle>
                            <Checkbox>
                                <input type="checkbox" className="checkbox-input" id="checkbox" />
                                <label>
                                    <span className="checkbox">
                                    </span>
                                </label>
                            </Checkbox>
                        </HeaderTitle>
                        <HeaderTitle>Name</HeaderTitle>
                        <HeaderTitle>Job Desk</HeaderTitle>
                        <HeaderTitle>Contact</HeaderTitle>
                        <HeaderTitle>Status</HeaderTitle>
                        <HeaderTitle></HeaderTitle>
                    </tr>
                </thead>
                <tbody>
                    {data.map((obj: IntUser, index: number) => (
                        <UsersRow key={index} user={obj}></UsersRow>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default UsersTable;
