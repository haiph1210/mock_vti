import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './DOnationCart.scss'
import Horizone from './Horizone';
import { NumberFormat } from 'intl';
import ModalRequest from '../../request/ModalRequest';
import { useDispatch, useSelector } from 'react-redux';
import { createDonateAction } from '../redux/DonationAction';
import { selectDonationCount, selectDonationPrice } from '../redux/DonationSelect';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function DonationCard() {
    const [isRequest,setIsRequest] = React.useState(false);
    const [expanded, setExpanded] = React.useState(false);
    const totalPrice = useSelector(selectDonationPrice);
    const count = useSelector(selectDonationCount);


    const handleSend = () => {
        setIsRequest(true);

    }
    const formatPrice = (price) => {
        const formatter = new NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        });
        return formatter.format(price);
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader

                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Thông Tin Quyên Góp"
            />
            <CardContent>
                <div className='config-card'>
                    <div><h3>{formatPrice(totalPrice)}</h3></div>
                    <div><Horizone></Horizone></div>
                    <div>
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Lượt Quyên Góp</th>
                                        <th>Đạt Được</th>
                                        <th>Thời Gian Còn Lại</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>{count}</td>
                                        <td>{ }</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <button className='button-config' onClick={handleSend}>Quyên Góp</button>
                </div>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
        </Card>
         {isRequest&& (
            <ModalRequest
            show= {isRequest}
            onHide = {() => setIsRequest(false)}
            />
        )}
        </div>
    );
}
