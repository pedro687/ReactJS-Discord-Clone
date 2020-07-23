import React from 'react'

import ServerButton from '../ServerButton';

import { Container, Separator } from './style'

const ServerList: React.FC = () => {
    return(
        <Container>
            <ServerButton isHome />

            <Separator />

            <ServerButton  />
            <ServerButton hasNotifications  />
            <ServerButton  mentions={3} />
            <ServerButton  />
            <ServerButton  />
            <ServerButton  />
            <ServerButton  />
            <ServerButton  hasNotifications />
            <ServerButton  />
            <ServerButton  />
            <ServerButton  mentions={3}/>
            <ServerButton  />



        </Container>
    )
}

export default ServerList