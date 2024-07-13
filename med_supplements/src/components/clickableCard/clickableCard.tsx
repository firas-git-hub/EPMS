import { FC } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { CardActionArea, Typography } from "@mui/material";

interface clickableCardProps {
    onClickFunc: Function;
    imgSrc: string;
    actionButton?: JSX.Element;
    cssClass?: string;
    title?: string;
    description?: string;
    backgroundColor?: string;
}

const ClickableCard: FC<clickableCardProps> = (props) => {

    return (
        <>
            <Card
                sx={{
                    backgroundColor: props.backgroundColor ? props.backgroundColor : ""
                }}
                variant="outlined"
                className={props.cssClass}
            >
                <div className="supplements-card-image-container">
                    <CardMedia component="img" image={props.imgSrc} />
                </div>
                <CardActionArea aria-label="AH" onClick={(e) => props.onClickFunc(e)}>
                    <CardContent>
                        <Typography className="card-header" variant="h4">
                            {props.title}
                        </Typography>
                        <Typography>
                            {props.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    );
}

export default ClickableCard;