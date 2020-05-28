window.addEventListener('DOMContentLoaded', getData);

const linkFM = "http://colorless.in/wordpress-portfolio/nw-exam-wordpress/wp-json/wp/v2/posts?categories=5&_embed";

function getData() {
    fetch(linkFM)
        .then(res => res.json())
        .then(handleData)
}

function handleData(workFM) {
    console.log(workFM);
    workFM.forEach(showWorkFM);
}

function showWorkFM(workFM) {
    console.log(workFM);

    const FMTemplate = document.querySelector(".work-fm-template").content;
    const FMCopy = FMTemplate.cloneNode(true); // made copy

    FMCopy.querySelector(".work-fm-model").textContent = workFM.title.rendered;
    FMCopy.querySelector(".work-fm-year").textContent = workFM.year;

    FMCopy.querySelector(".work-fm-img").src = workFM._embedded["wp:featuredmedia"][0].media_details.sizes.medium_large.source_url;

    document.querySelector(".work-items").appendChild(FMCopy);

} 