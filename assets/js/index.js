
async function get(){
    let project = await fetch(
        "projects.json "
      );
      let data = await project.json();
     console.log(data)
    var box=''
    for(var i=0;i<data.length;i++){
        box+=`
          <div class="col-md-3 col-sm-12" data-aos="zoom-up">
                    <div class="card bg-dark text-white p-2" style="height:300px">
                    <a href="Showone.html?id=${i}">
                     <img src="assets/images/${data[i].image}" class=" w-100" alt="Project photo">
                    </a>
                        <div class="card-body pt-4">
                          <h5 class="card-title pb-3">${data[i].name}</h5>
                           ${data[i].liveDemo ? `<a href="${data[i].liveDemo}" class="btn btn-secondary">Demo</a>` : ''}
                          <a href="${data[i].sourceCode}" class="btn btn-yellow">Repo on Github</a>
                        </div>
                      </div>
                </div>`
    }

    document.getElementById('projects').innerHTML=box
}
get()