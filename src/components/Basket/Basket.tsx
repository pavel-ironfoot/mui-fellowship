import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { OneCard } from '../OneCard';
import { useEffect } from 'react';
import { updateBasketCards } from '../../store/cardSlice';
import { Box, Grid, Typography } from '@mui/material';

export const Basket = () => {
    const basketCards = useSelector((state: RootState) => state.allCards.cards);
    const dispatch = useDispatch();

    useEffect(() => {
        const storedCards = localStorage.getItem('basketCards');
        if (storedCards) {
            dispatch(updateBasketCards(JSON.parse(storedCards)));
        }
    }, []);

    return (
        <Box sx={{ maxWidth: '250px', height: 'fit-content', padding: '20px' }}>
            <Typography sx={{ padding: '0 10px' }} variant='h5' component={'h5'} color="black">
                {(basketCards && basketCards.length > 0) ? <>{basketCards.length} members</> : <></>}
            </Typography>
            <Grid container rowSpacing={1} columnSpacing={1}>
                {(basketCards && basketCards.length > 0) ? <>
                    {basketCards.map((elem, index) => <OneCard index={index} name={elem.name} poster={elem.poster} basket={true} id={elem.id} key={elem.age + index} title={elem.title} age={elem.age} />)}
                </> : <Grid item xs={12}>
                    <p>No friends in the fellowship.</p>
                </Grid>}
            </Grid>
        </Box>
    );
}