window.addEventListener('DOMContentLoaded', getData);

const linkRH = "http://colorless.in/wordpress-portfolio/nw-exam-wordpress/wp-json/wp/v2/posts?categories=4&_embed";

function getData() {
    const urlParams = new URLSearchParams(window.location.search);
    const the_work_id = urlParams.get("work_id");

    if(the_work_id) {
        fetch("http://colorless.in/wordpress-portfolio/nw-exam-wordpress/wp-json/wp/v2/posts/" + the_work_id + "?_embed")
        .then(res => res.json())
        .then(showWorkRH)
    } else {
        fetch(linkRH)
        .then(res => res.json())
        .then(handleData)
    }
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

    const image = RHCopy.querySelector(".work-rh-img");
    if (image) {
        image.src = workRH._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;
    }

    const description = RHCopy.querySelector(".work-rh-description");
    if (description) {
        description.innerHTML = workRH.description;
    }

    const link = RHCopy.querySelector(".work-rh-link");
    if (link) {
        link.src = workRH.link;
    }

    const a = RHCopy.querySelector(".overlay-link");

    if (a) {
        a.href += workRH.id;
    }

    document.querySelector(".work-items").appendChild(RHCopy);

} 