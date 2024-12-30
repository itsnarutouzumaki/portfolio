$(document).ready(function () {
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });
});

function getProjects() {
    return fetch("projects.json")
        .then(response => response.json())
        .then(data => data);
}

function showProjects(projects) {
    let projectsContainer = document.querySelector(".work .box-container");
    let projectsHTML = "";

    // Show only the first six projects by default
    let initialProjects = projects.slice(0, 6);
    initialProjects.forEach(project => {
        projectsHTML += `
        <div class="grid-item ${project.category}">
            <div class="box tilt" style="width: 380px; margin: 1rem">
                <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="project" />
                <div class="content">
                    <div class="tag">
                        <h3>${project.name}</h3>
                    </div>
                    <div class="desc">
                        <p>${project.desc}</p>
                        <div class="btns">
                            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
                            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    });

    projectsContainer.innerHTML = projectsHTML;

    if (projects.length > 6) {
        let viewMoreButton = `
        <div class="view-more-container">
            <button id="view-more-btn" class="btn">View More</button>
        </div>`;
        projectsContainer.insertAdjacentHTML('afterend', viewMoreButton);

        document.getElementById("view-more-btn").addEventListener("click", () => {
            projectsHTML = "";
            projects.forEach(project => {
                projectsHTML += `
                <div class="grid-item ${project.category}">
                    <div class="box tilt" style="width: 380px; margin: 1rem">
                        <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="project" />
                        <div class="content">
                            <div class="tag">
                                <h3>${project.name}</h3>
                            </div>
                            <div class="desc">
                                <p>${project.desc}</p>
                                <div class="btns">
                                    <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
                                    <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
            });
            projectsContainer.innerHTML = projectsHTML;
            document.querySelector(".view-more-container").remove();
        });
    }

    var $grid = $('.box-container').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        masonry: {
            columnWidth: 200
        }
    });

    $('.button-group').on('click', 'button', function () {
        $('.button-group').find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
}

getProjects().then(data => showProjects(data));
