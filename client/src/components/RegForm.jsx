import React from 'react';
import { FormControl, InputLabel, Input, Button, Container, Grid } from '@material-ui/core';

const RegForm = props => {
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
                        <Input placeholder="Full Name"></Input>
                    </FormControl>
                </div>

                <div>
                    <FormControl>
                        <Input placeholder="Username"></Input>
                    </FormControl>
                </div>

                <div>
                    <FormControl>
                        <Input placeholder="Password"></Input>
                    </FormControl>
                </div>
                <Button color="primary">Sign up</Button>
            </Grid>
        </Container>
    )
}

export default RegForm;
