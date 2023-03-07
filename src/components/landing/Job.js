import React from 'react'


const Job = () => {

  let job = `<01101000 01101001 />`
  let job1 = `<S1101001 011010e1 />`
  let job2 = `<S1f01001 E11010e1 />`
  let job3 = `<Sof01001 E1g010e1 />`
  let job4 = `<Soft1001 E1g010er />`
  let job5 = `<Softw001 Eng010er />`
  let job6 = `<Softwa01 Engi10er />`
  let job7 = `<Softwar1 Engin0er />`
  let job8 = `<Software Engineer />`

 // eslint-disable-next-line
  let binary1 = setTimeout(changeJob1, 2500,);
  
  function changeJob1() {
    var changed = document.getElementById("changeJob");
    changed.textContent = job1
  }
   // eslint-disable-next-line
  let binary2 = setTimeout(changeJob2, 3000,);
  function changeJob2() {
    var changed = document.getElementById("changeJob");
    changed.textContent = job2
  }
   // eslint-disable-next-line
  let binary3 = setTimeout(changeJob3, 3500,);
  function changeJob3() {
    var changed = document.getElementById("changeJob");
    changed.textContent = job3
  }
   // eslint-disable-next-line
  let binary4 = setTimeout(changeJob4, 4000,);
  function changeJob4() {
    var changed = document.getElementById("changeJob");
    changed.textContent = job4
  }
   // eslint-disable-next-line
  let binary5 = setTimeout(changeJob5, 4400,);
  function changeJob5() {
    var changed = document.getElementById("changeJob");
    changed.textContent = job5
  }
   // eslint-disable-next-line
  let binary6 = setTimeout(changeJob6, 4800,);
  function changeJob6() {
    var changed = document.getElementById("changeJob");
    changed.textContent = job6
  }
   // eslint-disable-next-line
  let binary7 = setTimeout(changeJob7, 5200,);
  function changeJob7() {
    var changed = document.getElementById("changeJob");
    changed.textContent = job7
  }
   // eslint-disable-next-line
  let binary8 = setTimeout(changeJob8, 5500,);
  function changeJob8() {
    var changed = document.getElementById("changeJob");
    changed.textContent = job8
  }



  return (
    <div id='changeJob'>{job}</div>
  )
}

export default Job