import {extendTheme} from '@chakra-ui/react';

export const theme = extendTheme({
    fonts:{
        heading: 'Roboto',
        body: 'Roboto'
    },
    styles: {
        global: {
            body: {
                bgGradient:"linear(to-r, #002853, #040C18)", 
                bgClip:"border-box",
                color: '#ffffff'
            },
            section:{
                width: "100%" ,
                float: "left",
                height: "100vh"
            }
        }
    }
})