import { useDispatch, useSelector } from 'react-redux';
import { OneCardProps } from '../../common/types-and-interfaces';
import { RootState } from '../../store';
import { addCard, deleteCurrentCard } from '../../store/cardSlice';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Snack } from '../Snack';

export const OneCard: React.FC<OneCardProps> = ({ index, name, basket, id, title, age, poster }) => {
    const basketCards = useSelector((state: RootState) => state.allCards.cards);
    const allCards = useSelector((state: RootState) => state.allCards.allCards);
    const [addSnack, setAddSnack] = useState(false);
    const dispatch = useDispatch();

    const addToBasket = (id: number) => {
        const addCardToBasket = allCards.filter(elem => elem.id === id);
        dispatch(addCard(addCardToBasket[0]));

        const newBasketCards = [...basketCards];
        newBasketCards.unshift(addCardToBasket[0]);
        localStorage.setItem('basketCards', JSON.stringify(newBasketCards));
    }

    const deleteFromBasket = (id: number) => {
        dispatch(deleteCurrentCard(id));
        const newBasketCards = basketCards.filter((elem, ind) => ind !== id);
        localStorage.setItem('basketCards', JSON.stringify(newBasketCards));
    }

    return (
        <Card sx={{ bgcolor: 'rgb(238, 240, 243)', maxWidth: 345, mt: 1, mr: 1 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={poster}
                title="green iguana"
            />
            <CardContent>
                <Typography variant='h5' component={'h5'} color="black">
                    {name}
                </Typography>
                {basket ? <></> : <>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" >
                        {title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        age:{age}
                    </Typography>
                </>}
            </CardContent>
            <CardActions>
                {basket ? <Button variant="outlined" onClick={() => deleteFromBasket(index)} size="small">Remove from Fellowship</Button> : <Button variant="contained" onClick={() => { addToBasket(id); setAddSnack(true); }} size="small">Add to Fellowship</Button>}
            </CardActions>
            <Snack
                setAddSnack={setAddSnack}
                addSnack={addSnack}
            />
        </Card>
    );
}