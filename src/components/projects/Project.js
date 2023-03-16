import React from 'react'
import "./Projects.scss"
import logo from "./logo192.png";

// import { Link } from '@mui/material'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';

import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
const projectLinks = [
  { icon: <GitHubIcon />, name: 'GitHub' },
  { icon: <LanguageIcon />, name: 'www' },
]
let tic1 = 'https://i.imgur.com/5RvAeCD.png'
let tic2 = 'https://i.imgur.com/rSEqpBH.png'

let surf1 = 'https://i.imgur.com/K3pVBKp.png'
let surf2 = 'https://i.imgur.com/BlgdTYj.png'



let home1 = 'https://i.imgur.com/IGiN5E6.jpg'
let home2 = 'https://i.imgur.com/CEYNAzq.png'
let home3 = 'https://i.imgur.com/Ri82oKt.png'
let home4 = 'https://i.imgur.com/BP4z9tH.png'


let poke1 = 'https://i.imgur.com/bm3WoUT.jpg'
let poke2 = 'https://i.imgur.com/LJ5cebT.jpg'
let poke3 = 'https://i.imgur.com/orTjwnv.jpg'
let poke4 = 'https://i.imgur.com/qLDS1HU.jpg'
let poke5 = 'https://i.imgur.com/pjQLVw5.png'
let poke6 = 'https://i.imgur.com/4tEeCTy.png'
let poke7 = 'https://i.imgur.com/18Nmo6L.png'

const Projects = () => {

const allProjects = [
      {
      name: 'Home Harvest (Final Project)',
      images: [home1, home2, home3, home4],
      gitHub: "https://github.com/OB-CODE/Home-Harvest",
      url: 'https://mitchell-home-harvest.surge.sh/',
      description: [`TECH STACK: React/JS/MUI, Postman, Surge`, `Home Harvest is designed to reduce the barriers of entry for the everyday person trying to grow produce.`, `3 API's intergrated and a personal database.`, `Renders 12 months of weather data in table and graph format.`, `Calculates ideal planting times based off growing conditions for each crop.` ]
      },
      {
      name: 'Pokemon EXPRESS game',
      images: [poke1, poke2, poke3, poke4, poke5, poke6, poke7],
      gitHub: "https://github.com/OB-CODE/pokemon-game",
      url: 'https://pokebattles.mitch-obrien.com/',
      description: [`TECH STACK: Epress/Node.js/JS, SQL, Middleware, AWS EC2 deployed with Docker`, `Craft thoughtful user stories together, as a team`, `Manage team contributions and collaboration using a standard Git flow on Github`, `Layout and style your front-end with clean & well-formatted CSS`, `Include separate HTML / CSS / JavaScript files`, `GOAL: Work with other classmates to architect, design, and collaboratively build a product.`]
      },
      {
      name: 'Surf Spot - Fly.io currenlty down)',
      images: [surf1, surf2],
      gitHub: "https://github.com/OB-CODE/Surf-spot-SEI-Project-2",
      url: 'https://github.com/OB-CODE/Surf-spot-SEI-Project-2',
      description: [`TECH STACK: Ruby, SQL:`, `Use API calls to SQL tables`, `Include sign up/log in functionality, encrypted passwords & an authorization flow`, `Have complete RESTful routes for at least one of your resources with GET, POST, PATCH, and DELETE`, `DESCRIPTION: Surf Spot allows full CRUD features and is a full stack application build using Ruby. It intergrates with a custome backend API and global weather data.` ]
      },
      {
      name: 'Tic-Tac-Toe',
      images: [tic1, tic2],
      gitHub: "https://github.com/OB-CODE/Tic-Tac-Toe",
      url: 'https://ob-code.github.io/Tic-Tac-Toe/',
      description: [`TECH STACK: JS/HTML/CSS, Github hosting:`, `Render a game in the browser`, `Switch turns between more than one player`, `Design logic for winning & visually display which player won`, `Include separate HTML / CSS / JavaScript files`, `Use Javascript for DOM manipulation`]
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
        <div className="host">Hosted on:</div>
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
                <p className='pad4'>{project.description[0]}</p>
                
                PROJECT LINKS
                <div className='buttonsPro'>
                    <div className='git'>
                      GITHUB
                      <a href={project.gitHub}>
                          <div className="icon">{projectLinks[0].icon}
                          </div>
                      </a>
                    </div>
                    <div className='url'>
                      WWW LINK
                      <a href={project.url}>
                          <div className="icon">{projectLinks[1].icon}
                          </div> 
                      </a>
                    </div>
                </div>
              
                <div className='description'>

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

