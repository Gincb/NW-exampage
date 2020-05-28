window.addEventListener('DOMContentLoaded', getData);

const linkRH = "http://colorless.in/wordpress-portfolio/nw-exam-wordpress/wp-json/wp/v2/posts?categories=4&_embed";

function getData() {
    fetch(linkRH)
        .then(res => res.json())
        .then(handleData)
}

function handleData(workRH) {
    console.log(workRH);
    workRH.forEach(showWorkRH);
}

function showWorkRH(workRH) {
    console.log(workRH);

    const RHTemplate = document.querySelector(".work-rh-template").content;
    const RHCopy = RHTemplate.cloneNode(true); // made copy

    RHCopy.querySelector(".work-rh-title").textContent = workRH.title.rendered;
    RHCopy.querySelector(".work-rh-guest").textContent = workRH.guest;

    RHCopy.querySelector(".work-rh-img").src = workRH._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;

    document.querySelector(".work-items").appendChild(RHCopy);

} 