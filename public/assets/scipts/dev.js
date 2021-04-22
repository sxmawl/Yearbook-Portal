let toggleScheme = true;

document.querySelector(".dark-mode-container").addEventListener("click", ()=>{
  
  console.log("Togglee is" + toggleScheme);

  let lightColorScheme = {
    background: "#F0F2F5",
    mainContentBackground: "#FFFFFF",
    nameTextHeading: "#354353",
    otherHeadings: "#000000",
    linksClasses: "nav-links",
    linksPadding: "2% 4% 5% 2%",
    searchClasses: "search-bar",
    commentText: "#000000",
    commentBackground: "#ffffff",
    inputBackground: "#F0F3F5",
    quoteBackground: "rgb(48, 76, 253, 0.18)",
    inputColor: "#5b6673",
    iconClass: "fas fa-moon",
    topPosition: "-68px"
  }

  let darkColorScheme = {
    background: "#121212",
    mainContentBackground: "#1f1f1f",
    nameTextHeading: "#cac9c9",
    otherHeadings: "#FFFFFF",
    linksClasses: "nav-links dark-mode",
    linksPadding: "2% 4%",
    searchClasses: "search-bar dark-mode",
    commentText: "#dedede",
    commentBackground: "#333333",
    inputBackground: "#333333",
    quoteBackground: "rgb(48, 76, 253, 0.33)",
    inputColor: "#cac9c9",
    iconClass: "fas fa-sun",
    topPosition: "-58px"
  }

  let usedTheme = toggleScheme ? darkColorScheme: lightColorScheme;

  const backgroundSection = document.querySelector("section");
  const headings = document.querySelectorAll("h1");
  const paragraphs = document.querySelectorAll("p");
  const container = document.querySelector(".container");
  const searchBar = document.querySelector(".search-bar");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelector(".links");
  const icons = document.querySelectorAll("i");
  const navLinksColor = document.querySelectorAll("a");
  const social = document.querySelector(".social");
  const commentBox = document.querySelectorAll(".c");
  const inputBar = document.querySelector(".search-container");
  const yearbookQuote = document.querySelector(".yearbook-quote");
  const search = document.querySelector("#search");
  const toggleIcon = document.querySelectorAll("#toggleIcon")[1];

  backgroundSection.style.backgroundColor = `${usedTheme.background}`;


  /////////////////// WHITE OR BLACK TEXT ////////////////

  headings.forEach( heading =>{
    heading.style.color = `${usedTheme.otherHeadings}`;
  })

  document.querySelectorAll("h2").forEach( item =>{
    item.style.color =`${usedTheme.otherHeadings}`
  } ) 
  document.querySelector("span").style.color =`${usedTheme.otherHeadings}`

  /////////////// NAVBAR   /////////////////

  
  searchBar.style.backgroundColor = `${usedTheme.mainContentBackground}`;
  links.style.backgroundColor = `${usedTheme.mainContentBackground}`;
  navLinksColor[0].style.color = `${usedTheme.otherHeadings}`
  navLinksColor[1].style.color = `${usedTheme.otherHeadings}`
  
  /////////////// Curves of NAVBAR /////////////////////
  searchBar.className = `${usedTheme.searchClasses}`
  navLinks.className = `${usedTheme.linksClasses}`;
  links.style.padding = `${usedTheme.linksPadding}`;
  links.style.top = `${usedTheme.topPosition}`


  ///////////////////// Paragraphs ////////////////////////
  
  paragraphs.forEach( paragraph =>{
    paragraph.style.color = `${usedTheme.nameTextHeading}`;
  })
  
  //////////////////// SOCIAL ////////////////////

  social.style.background = `${usedTheme.mainContentBackground}`

  icons.forEach( icon =>{
    icon.style.color = `${usedTheme.nameTextHeading}`;
  })

  ///////////////////Comment Box ////////////////
  commentBox.forEach( comment =>{
    comment.style.color =`${usedTheme.commentText}`
    comment.style.background = `${usedTheme.commentBackground}`
  } )

  ////////////////// SEARCH BAR ////////////////////

  inputBar.style.backgroundColor=`${usedTheme.inputBackground}`

  container.style.backgroundColor = `${usedTheme.mainContentBackground}`;

  search.style.color = `${usedTheme.inputColor}`


  ///////////////////// Quote BACKGROUND //////////////////



///////////// Button Toggle //////////////
   document.querySelector(".dark-mode-container").style.backgroundColor = `${usedTheme.commentBackground}`;
   document.querySelector(".developer-container").style.backgroundColor = `${usedTheme.commentBackground}`;
 
   /////////Toggle Icon////////////

   toggleIcon.className = `${usedTheme.iconClass}`
  console.log(usedTheme);

  toggleScheme = !toggleScheme;


})
