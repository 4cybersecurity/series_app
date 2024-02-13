import React from 'react';
import {
    MDBFooter,
    MDBContainer,
} from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <MDBFooter className='text-center text-white' fixed='bottom' style={{backgroundColor: 'blue'}}>
            <MDBContainer className='p-4'></MDBContainer>

            <div className='text-center p-3' style={{backgroundColor: 'blue'}}>
                ©️ 2020 Copyright:
                <a className='text-white' href='https://ahmetsimsek.be/'>
                    MyPage
                </a>
            </div>
        </MDBFooter>
    );
}

export default Footer;