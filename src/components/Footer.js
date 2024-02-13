import React from 'react';
import {
    MDBFooter,
    MDBContainer,
} from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <MDBFooter className='text-center text-white' fixed='bottom' style={{backgroundColor: '#0b5ed7'}}>
            <MDBContainer className='p-4'></MDBContainer>

            <div className='text-center p-3' style={{backgroundColor: '#0b5ed7'}}>
                ©️ 2024 Copyright:
                <a className='text-white' href='https://ahmetsimsek.be/'>
                     Owner
                </a>
            </div>
        </MDBFooter>
    );
}

export default Footer;