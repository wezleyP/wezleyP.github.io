'use strict'
let R = null;
let t1 = document.querySelector('#t1');
let b1 = document.querySelector('#b1').addEventListener('click', loadStates);

let g1 = null;


async function loadStates() {
  let url = `https://juxinglong.github.io/static/data/states.json`;
  let opts = {};
    let r = await fetch(url, opts);
    let rj = await r.json();
    R = rj;
    if(g1 != null){
      g1.destroy();
    }
    t1.innerHTML = '';
    let tblOpts = {
      data: rj,
      width: 500,
      pagination: {limit: 5},
      sort: true,
      search: true,
      columns: [{id: 'st', name: 'state'}, {id: 'p', name: 'population'}]
    }
    g1 = new gridjs.Grid(tblOpts);
    g1.render(t1);
    console.log(rj);
    Swal.fire("Data Loaded")
}


//load gridjs table for cities.json

  let gribTbl = null;
  let btn1 = document.querySelector('#btn1');


  btn1.addEventListener('click', () =>{
    showTbl();
  })
    async function showTbl() {
      let url = `https://juxinglong.github.io/static/data/cities.json`;
      let opts = {};
      let r = await fetch(url, opts);
      let rj = await r.json();

      let tbldiv = document.querySelector('#tbldiv');

      if(gribTbl != null){
        gribTbl.destroy();
      } 
      tbldiv.innerHTML = '';
      let tblOpts = {
        data: rj,
        pagination: {limit: 5},
        sort: true,
        search: true,
      }
      let gridTbl = new gridjs.Grid(tblOpts);
      gridTbl.render(tbldiv);
    }
  
// load states.json

