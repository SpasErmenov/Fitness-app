import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { FC } from "react";

interface IFeedbackCardProps {
  name: string;
  imgPath: string;
}

const FeedbackCard: FC<IFeedbackCardProps> = (props: IFeedbackCardProps) => {
  const { name, imgPath } = props;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={imgPath} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default FeedbackCard;
