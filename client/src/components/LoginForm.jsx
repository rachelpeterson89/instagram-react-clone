import React from 'react';
import { FormControl, InputLabel, Input, Button, Container, Grid } from '@material-ui/core';

const LoginForm = props => {
    return (
        <Container>
            <Grid justify="center">
                <div>
                    <FormControl>
                        <Input placeholder="Email"></Input>
                    </FormControl>
                </div>

                <div>
                    <FormControl>
                        <Input placeholder="Password"></Input>
                    </FormControl>
                </div>
                <Button color="primary">Log In</Button>
            </Grid>
        </Container>
    )
}

export default LoginForm;
