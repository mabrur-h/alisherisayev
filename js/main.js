const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {


        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if(accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else {
            accordionItemBody.style.maxHeight = 0;
        }

    });
});

window.onscroll = function () {
    scrollFunction()
}

function scrollFunction() {

    var  intElemScrollTop = document.documentElement.scrollTop;
    console.log(intElemScrollTop)



    const checkpoint = 750;
     const doc = document.getElementById("about")
    // window.addEventListener("scroll", () => {
    //     const currentScroll = window.pageYOffset;
    //     if (currentScroll <= checkpoint) {
    //         opacity = 1 - currentScroll / checkpoint;
    //     } else {
    //         opacity = 0;
    //     }
    //     document.querySelector("#about").style.opacity = opacity;
    // });

    if (document.body.scrollTop > checkpoint || document.documentElement.scrollTop > checkpoint) {
        doc.classList.add("sticky");
    } else {
        doc.classList.remove("sticky");
    }
    if (document.body.scrollTop > checkpoint + 2100 || document.documentElement.scrollTop > checkpoint + 2100) {
        doc.style.opacity = 0;
    } else {
        doc.style.opacity = 1;
    }
}
