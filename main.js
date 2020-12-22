

const listContainer = document.getElementsByClassName("article");
const bottomContainer = document.getElementsByClassName("article-bottom");
const sideContainer = document.getElementsByClassName("side-wrap");

//Způsob jedna
const adOne = document.getElementById("adOne");
const adTwo = document.getElementById("adTwo");
const adBottom = document.getElementById("adBottom");
const adSide = document.getElementById("adSide");

listContainer[1].insertAdjacentElement("afterend", adOne);
listContainer[4].insertAdjacentElement("afterend", adTwo);
bottomContainer[0].insertAdjacentElement("afterend", adBottom);
sideContainer[0].insertAdjacentElement("afterbegin", adSide);


  /* 
const adText = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam bibendum elit eget erat. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Maecenas lorem.";
const adName = "Reklamní jednotka";

const createAd = () => {
    // create Img wrap
const adImg = document.createElement("div");
adImg.classList.add("ad-img")
const adImgWrap = document.createElement("div");
adImgWrap.appendChild(adImg);
adImgWrap.classList.add("img-wrap");

    // create text Wrap 
const title = document.createTextNode(adName);
const adTitle = document.createElement("h1");
adTitle.appendChild(title);

const content = document.createTextNode(adText);
const adContent = document.createElement("p");
adContent.appendChild(content);

const adTextWrap = document.createElement("div");
adTextWrap.appendChild(adTitle);
adTextWrap.appendChild(adContent);
adTextWrap.classList.add("text-wrap");

    // create whole article
const ad = document.createElement("div");
ad.classList.add("ad");
ad.appendChild(adImgWrap);
ad.appendChild(adTextWrap); 

return ad
}

const adJedna = createAd();
const adDva = createAd();

listContainer[1].insertAdjacentElement("afterend", adJedna);
listContainer[3].insertAdjacentElement("afterend", adDva);
atd..

 */
