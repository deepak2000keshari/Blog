import * as React from 'react';
import {useRef, forwardRef, useImperativeHandle} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import EditCard from './EditCard';
import {useSelector,useDispatch} from 'react-redux';
import { Updateblog } from '../../../../APP/features/Blog/BlogSlice';
import Learn from './Learn';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const Modal = forwardRef(({LikeAction,setFormSubmitted,paramsId}, ref) => {   // 👈 forwardRef added here
const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const blog1 = useSelector((state) => state.Blog);
  // const [autoOpen, setAutoOpen] = useState(false); // <-- 👈 important
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpen1 = () => {
    // dispatch(Updateblog({...blog1,mode:""}));
    dispatch(Updateblog({ documentID: '',id:'', Title:'', Context:'', Image:'',modal_Open: true,mode: "",CurrentLike: "",Like:""}));
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };
  const submitRef = useRef();

  const Submit = () => {
    submitRef.current?.();
    setOpen(false);
  };

  // 👇 Exposing functions to Parent
  useImperativeHandle(ref, () => ({
    openModal: handleClickOpen,
    closeModal: handleClose
  }));
  const blog = useSelector((state) => state.Blog);
  
  return (
    <React.Fragment>
      {paramsId && ( <Button style = {{"marginTop":"10px"}} variant="outlined" onClick={handleClickOpen1}>
        Create New Blog
      </Button>)}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                {blog.mode == "Edit" ? "Edit Blog" : (blog.mode == "Learn" ? "Read Blog" : "Create New Blog")}
            </Typography>
            <Button autoFocus color="inherit" onClick={Submit}>
              {blog.mode != "Learn" ? "Save" : ""}
            </Button>
          </Toolbar>
        </AppBar>
        {blog.mode != "Learn" ?  <EditCard setFormSubmitted={setFormSubmitted} onRef={(ref) => (submitRef.current = ref)}  /> : <Learn LikeAction = {LikeAction}/> }
      </Dialog>
    </React.Fragment>
  );
});

export default Modal;
