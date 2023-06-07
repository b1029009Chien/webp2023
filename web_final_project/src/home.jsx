import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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
  
  const CenteredContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  });

export default function Home() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <CenteredContainer>
    <Card sx={{ maxWidth: 500 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="郵遞區號系統"
        subheader="June 7, 2023"
      />
      <CardMedia
        component="img"
        height="194"
        src="https://csr.post.gov.tw/post/images/%E4%B8%AD%E8%8F%AF%E9%83%B5%E6%94%BFlogo.png"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          這個網頁是用來輸入地址轉換3+2郵遞區號或者輸入3+2郵遞區號轉換地址，
          至於3+3郵遞區號等到開放資料庫有相關資料，我們再重新更新資料
          (因為懶得爬資料下來_(:3 」∠ )_)，反正希望大家可以用得開心(ゝ∀･)
        </Typography>
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
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>使用方法:<hr /></Typography>
          <Typography paragraph>
            地址轉3+2郵遞區號模式:
          </Typography>
          <Typography paragraph>
            有City, Distrist, Road三個輸入框，需要輸入正確的名稱才能查詢到郵遞區號
            注意:<br />
            <ul>
                <li>臺(台)北市一律輸入台北市</li>
                <li>有些路名為數字，因此需要輸入全形數字</li>
            </ul><hr />
          </Typography>
          <Typography paragraph>
            3+2郵遞區號轉地址模式:
          </Typography>
          <Typography paragraph>
            需在PostCode輸入框內填入正確的5碼郵遞區號，
            就能查詢到到底誰寄東西給你(,,・ω・,,)<hr />
          </Typography>
          <Typography>
            另外在兩個模式中都有Map給大家參考，祝大家期末加油(ง๑ •̀_•́)ง
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </CenteredContainer>
  );
}