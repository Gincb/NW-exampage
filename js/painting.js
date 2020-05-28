window.addEventListener('DOMContentLoaded', getData);

const linkPD = "http://colorless.in/wordpress-portfolio/nw-exam-wordpress/wp-json/wp/v2/posts?categories=2&_embed";

function getData() {
    const urlParams = new URLSearchParams(window.location.search);
    const the_work_id = urlParams.get("work_id");

    if(the_work_id) {
        fetch("http://colorless.in/wordpress-portfolio/nw-exam-wordpress/wp-json/wp/v2/posts/" + the_work_id + "?_embed")
        .then(res => res.json())
        .then(showWorkPD)
    } else {
        fetch(linkPD)
        .then(res => res.json())
        .then(handleData)
    }
}

function handleData(workPD) {
    console.log(workPD);
    workPD.forEach(showWorkPD);
}

function showWorkPD(workPD) {
    console.log(workPD);

    const PDTemplate = document.querySelector(".work-pd-template").content;
    const PDCopy = PDTemplate.cloneNode(true); // made copy

    PDCopy.querySelector(".work-pd-model").textContent = workPD.title.rendered;
    PDCopy.querySelector(".work-pd-year").textContent = workPD.year;

    PDCopy.querySelector(".work-pd-img").src = workPD._embedded["wp:featuredmedia"][0].media_details.sizes.medium_large.source_url;

    const a = PDCopy.querySelector(".overlay-link");

    if (a) {
        a.href += workPD.id;
    }

    document.querySelector(".work-items").appendChild(PDCopy);

} 