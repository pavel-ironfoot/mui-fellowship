import { RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { OneCard } from '../OneCard';
import { useEffect } from 'react';
import { getResponse } from '../../common/request-functions';
import { MAIN_URL } from '../../common/consts';
import { updateCards } from '../../store/cardSlice';
import { Grid } from '@mui/material';

export const Main = () => {
    const allCards = useSelector((state: RootState) => state.allCards.allCards);
    const dispatch = useDispatch();
    const showCards = allCards.map((elem, index) => <Grid key={elem.age + index} item xs={12} sm={6} md={3} lg={2} xl={1}><OneCard poster={elem.poster} index={777} name={elem.name} basket={false} id={elem.id} title={elem.title} age={elem.age} /></Grid>);

    useEffect(() => {
        getResponse(MAIN_URL)
            .then(data => {
                dispatch(updateCards(data))
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <Grid container spacing={2}>
            {showCards}
        </Grid>
    );
}