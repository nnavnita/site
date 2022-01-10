import {
    Box,
    Paper
} from '@mui/material';

const Homepage = () => {
    return (
        <div style= {{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Paper style={{
                minHeight: '50vh',
                minWidth: '50vw',
                backgroundColor: 'rgba(173, 195, 183, 0.3)',

            }}>
                {/* add something here */}
            </Paper>
        </div>
    )
}

export default Homepage;