let headersList = {
 "Accept": "*/*"
}

let response = await fetch("https://www.googleapis.com/blogger/v3/blogs/3966493491498803495/posts?key=AIzaSyDCAU3BfPkqCsSLcle9mlMHuEUPNuKBIi0", { 
  method: "GET",
  headers: headersList
});

let data = await response.text();
console.log(data);
