import React from 'react'
import "./Projects.scss"
import logo from "./logo192.png";
import tic1 from './assets/tic1.png'
import tic2 from './assets/tic2.png'
import surf1 from './assets/surf1.png'
import surf2 from './assets/surf2.png'
import poke1 from './assets/poke1.png'
import poke2 from './assets/poke2.png'
import HomeH1 from './assets/HomeH1.png'
import HomeH2 from './assets/HomeH2.png'
// import { Link } from '@mui/material'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';


const Projects = () => {

const allProjects = [
      {
      name: 'Home Harvest (Final Project)',
      images: [HomeH1, HomeH2],
      gitHub: "https://github.com/OB-CODE/Home-Harvest",
      url: 'https://mitchell-home-harvest.surge.sh/',
      description: [`About:`, `Home Harvest is designed to reduce the barriers of entry for the everyday person trying to grow produce.`, `3 API's intergrated and a personal database.`, `Renders 12 months of weather data in table and graph format.`, `Calculates ideal planting times based off growing conditions for each crop.` ]
      },
      {
      name: 'Pokemon EXPRESS game',
      images: [poke1, poke2],
      gitHub: "https://github.com/OB-CODE/pokemon-game",
      url: 'https://github.com/OB-CODE/pokemon-game/blob/main',
      description: [`Requirements:`, `Craft thoughtful user stories together, as a team`, `Manage team contributions and collaboration using a standard Git flow on Github`, `Layout and style your front-end with clean & well-formatted CSS`, `Include separate HTML / CSS / JavaScript files`, `GOAL: Work with other classmates to architect, design, and collaboratively build a product.`]
      },
      {
      name: 'Surf Spot - Currently down (Need to change hositng from Fly.io)',
      images: [surf1, surf2],
      gitHub: "https://github.com/OB-CODE/Surf-spot-SEI-Project-2",
      url: '',
      description: [`Requirements:`, `Have at least 2 resources(tables) (more if they make sense) – one representing someone using your application, and one that represents the main functional idea for your app`, `Include sign up/log in functionality(if they make sense), with encrypted passwords & an authorization flow`, `Have complete RESTful routes for at least one of your resources with GET, POST, PATCH, and DELETE`, `DESCRIPTION: Surf Spot allows full CRUD features and is a full stack application build using Ruby. It intergrates with a custome backend API and global weather data.` ]
      },
      {
      name: 'Tic-Tac-Toe',
      images: [tic1, tic2],
      gitHub: "https://github.com/OB-CODE/Tic-Tac-Toe",
      url: 'https://ob-code.github.io/Tic-Tac-Toe/',
      description: [`Requirements:`, `Render a game in the browser`, `Switch turns between more than one player`, `Design logic for winning & visually display which player won`, `Include separate HTML / CSS / JavaScript files`, `Use Javascript for DOM manipulation`]
      }

]

// for modal - not is use atm.
// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// const [open, setOpen] = React.useState(false);
// const handleOpen = () => setOpen(true);
// const handleClose = () => setOpen(false);

  return (
  <section id="projects">
    <div className='projectContainer'>

    <div className='botLeft'>
      <div className="rows">
        <div className="made">Made with React:</div>
        <div className="landContainer">
          <img className='rotate' src={logo} alt="" />
        </div>
      </div>

      <div className="rows">
        <div className="host">Hosted on</div>
        <div className="landContainer">
          <img src='https://techinscribed.com/wp-content/uploads/2020/01/aws-amplify.png' alt="" />       
        </div>
      </div>
    </div>

        <h1 className='heading'>GA COURSE PROJECTS</h1>

          {allProjects.map((project, index) =>
          <div key={index}>
            <h1 className='titles'>Project {4 - index}: {project.name}</h1>
            <div className='eachContainer'>
              <div className="leftDetails">
                {/* <div className='name' >Project Name: {project.name}</div> */}
                <div className='buttonsPro'>
                    <div className='git'><a href={project.gitHub}>Link to project's GITHUB</a></div>
                    <div className='url'><a href={project.url}>Link to LIVE URL</a></div>
                </div>
              
                <div className='description'>

                  <p>{project.description[0]}</p>
                  <p className='pad1'>- {project.description[1]}</p>
                  <p className='pad2'>- {project.description[2]}</p>
                  <p className='pad3'>- {project.description[3]}</p>
                  <p className='pad4'>- {project.description[4]}</p>
                </div>
              </div>

              <div  
              // onClick={handleOpen} 
              className="rightContent">
                <h2>PROJECT IMAGES</h2>
                <Slide>
                  {project.images.map((image, index) =>
                  <div key={index}
                  className="images">
                    <div className='containProjectImages'>
                      <img src={image} alt="" />
                    </div>
                  </div>
                  )}
                </Slide>
              </div>
              {/* <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography className='modalSplit' id="modal-modal-title" variant="h6" component="h2">
                    Looking for a link? 
                    <span 
                    className='close'
                    onClick={handleClose}
                    >Close X</span>
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    They are above the images on the main page.              

                    <p>Have fun!</p>
                  </Typography>
                </Box>
              </Modal> */}
            </div>   
          </div>
          )}
      </div>
    </section>
  )
}

export default Projects

