import { Divider, Drawer, Typography } from "@mui/material";
import { Basket } from "../Basket/Basket";
import { BasketContainerProps } from "../../common/types-and-interfaces";


export const BasketContainer: React.FC<BasketContainerProps> = ({ cartOpen, closeCart }) => {
    return (
        <Drawer
            anchor="right"
            open={cartOpen}
            onClose={closeCart}
        >
            <Typography sx={{ mt: '20px', padding: '10px' }} variant='h5' component={'h5'} color="black">
                Fellowship of the ring
            </Typography>
            <Divider />
            <Basket />
        </Drawer>
    );
}