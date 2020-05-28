window.addEventListener('DOMContentLoaded', getData);

const linkS = "http://colorless.in/wordpress-portfolio/nw-exam-wordpress/wp-json/wp/v2/posts?categories=3&_embed";

function getData() {
    fetch(linkS)
        .then(res => res.json())
        .then(handleData)
}

function handleData(workS) {
    console.log(workS);
    workS.forEach(showWorkS);
}

function showWorkS(workS) {
    console.log(workS);

    const STemplate = document.querySelector(".work-s-template").content;
    const SCopy = STemplate.cloneNode(true); // made copy

    SCopy.querySelector(".work-s-model").textContent = workS.title.rendered;
    SCopy.querySelector(".work-s-year").textContent = workS.year;

    SCopy.querySelector(".work-s-img").src = workS._embedded["wp:featuredmedia"][0].media_details.sizes.medium_large.source_url;

    document.querySelector(".work-items").appendChild(SCopy);

} 