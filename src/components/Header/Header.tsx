import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { searchInCards } from '../../common/helpfulFunction';
import { updateCards } from '../../store/cardSlice';
import { getResponse } from '../../common/request-functions';
import { MAIN_URL } from '../../common/consts';
import { AppBar, Badge, Button, Container, TextField, Toolbar, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { ShoppingBasket } from '@mui/icons-material';
import { RootState } from '../../store';
import { HeaderProps } from '../../common/types-and-interfaces';

export const Header: React.FC<HeaderProps> = ({ openCart }) => {
    const basketCards = useSelector((state: RootState) => state.allCards.cards);

    const [allCards, setAllCards] = useState([]);
    const [valueInp, setValueInp] = useState<string>('');
    const dispatch = useDispatch();

    useEffect(() => {
        getResponse(MAIN_URL)
            .then(data => {
                setAllCards(data);
            })
            .catch(error => console.log(error));
    }, []);

    const handlerChange = (e: any) => {
        setValueInp(e.target.value);
    }

    const searchCards = () => {
        const searchArr = searchInCards(valueInp, allCards);
        dispatch(updateCards(searchArr));
    }

    return (
        <header>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' component="div" sx={{ flexGrow: 1 }}>
                        Mui-Little Application
                    </Typography>
                    <IconButton
                        color='inherit'
                        onClick={openCart}
                    >
                        <Badge
                            color="secondary"
                            badgeContent={basketCards.length}
                        >
                            <ShoppingBasket />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Container
                sx={{
                    mt: '20px',
                    mb: '60px'
                }}
            >
                <TextField
                    sx={{
                        width: '80%',
                        height: '40px'
                    }}
                    onChange={(e) => handlerChange(e)}
                    value={valueInp}
                    id="search"
                    type='search'
                    label="Search ..."
                    placeholder="type here"
                    variant="outlined"
                />
                <Button
                    sx={{
                        ml: '10px',
                        height: '55px',
                        minWidth: '100px',
                        fontSize: '1rem',
                    }}
                    size="medium"
                    onClick={searchCards}
                    variant="contained">Search</Button>
            </Container>

        </header>
    );
}