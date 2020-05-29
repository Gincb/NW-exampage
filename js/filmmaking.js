window.addEventListener('DOMContentLoaded', getData);

const linkFM = "http://colorless.in/wordpress-portfolio/nw-exam-wordpress/wp-json/wp/v2/posts?categories=5&_embed";

function getData() {
    const urlParams = new URLSearchParams(window.location.search);
    const the_work_id = urlParams.get("work_id");

    if(the_work_id) {
        fetch("http://colorless.in/wordpress-portfolio/nw-exam-wordpress/wp-json/wp/v2/posts/" + the_work_id + "?_embed")
        .then(res => res.json())
        .then(showWorkFM)
    } else {
        fetch(linkFM)
        .then(res => res.json())
        .then(handleData)
    }
}

function handleData(workFM) {
    console.log(workFM);
    workFM.forEach(showWorkFM);
}

function showWorkFM(workFM) {
    console.log(workFM);

    const FMTemplate = document.querySelector(".work-fm-template").content;
    const FMCopy = FMTemplate.cloneNode(true); // made copy

    FMCopy.querySelector(".work-fm-title").textContent = workFM.title.rendered;
    FMCopy.querySelector(".work-fm-year").textContent = workFM.year;

    const image = FMCopy.querySelector(".work-fm-img");
    if (image) {
        image.src = workFM._embedded["wp:featuredmedia"][0].media_details.sizes.medium_large.source_url;
    }

    const trailer = FMCopy.querySelector(".work-fm-trailer");
    if (trailer) {
        trailer.src = workFM.link;
    }

    const description = FMCopy.querySelector(".work-fm-description");
    if (description) {
        description.innerHTML = workFM.description;
    }

    const a = FMCopy.querySelector(".overlay-link");

    if (a) {
        a.href += workFM.id;
    }

    document.querySelector(".work-items").appendChild(FMCopy);

} 