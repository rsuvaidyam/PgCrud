import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import BeneficiForm from '../BeneficiForm/BeneficiForm';
import User from '../User/User';
import MasterState from '../Master/MasterState/MasterState';
import MasterStateTable from '../Master/MasterState/MasterStateTable';
import MasterDistrict from '../Master/MasterDistrict/MasterDistrict';
import MasterDistrictTable from '../Master/MasterDistrict/MasterDistrictTable';
import MasterBlock from '../Master/MasterBlock/MasterBlock';
import MasterBlockTable from '../Master/MasterBlock/MasterBlockTable';
import MasterVillage from '../Master/MasterVillage/MasterVillage';
import MasterVillageTable from '../Master/MasterVillage/MasterVillageTable';
import BeneficiTable from '../BeneficiForm/BeneficiTable/BeneficiTable';
import UserRegister from '../User/UserRegister';
import UserTable from '../User/UserTable';
import Protected from '../Protected/Protected';

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<User />} />
                    <Route path='/beneficiary' element={<Protected Component={BeneficiForm} />} />
                    <Route path='/beneficiarytable' element={<Protected Component={BeneficiTable} />} />
                    <Route path='/state'  element={<Protected Component={MasterState} />}/>
                    <Route path='/statetable' element={<Protected Component={MasterStateTable} />}/>
                    <Route path='/district' element={<Protected Component={MasterDistrict} />}/>
                    <Route path='/districttable' element={<Protected Component={MasterDistrictTable} />}/>
                    <Route path='/block' element={<Protected Component={MasterBlock} />}/>
                    <Route path='/blocktable' element={<Protected Component={MasterBlockTable} />}/>
                    <Route path='/village' element={<Protected Component={MasterVillage} />}/>
                    <Route path='/villagetable' element={<Protected Component={MasterVillageTable} />}/>
                    <Route path='/user'element={<Protected Component={UserRegister} />}/>
                    <Route path='/usertable' element={<Protected Component={UserTable} />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router