// key=AIzaSyDOxh9YvHOan9FdKwlPz4EJ9GSypNAuZlM
// url = ` https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search_item}&type=video&key=[YOUR_API_KEY]`;
// trend=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=IN&key=AIzaSyDOxh9YvHOan9FdKwlPz4EJ9GSypNAuZlM`
// iframe src-- https://www.youtube.com/embed/53cM-0boiCk
document.getElementById("yticon").addEventListener("click", tren);
tren();
async function tren() {
  let res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=IN&key=AIzaSyDOxh9YvHOan9FdKwlPz4EJ9GSypNAuZlM`
  );
  let data = await res.json();
  let trendArr = data.items;
  document.getElementById("sea").value = "";
  appendTrend(trendArr);
}

function appendTrend(arr) {
  document.getElementById("con").innerHTML = "";
  document.getElementById("let").innerHTML = "";
  document.getElementById("ryt").innerHTML = "";
  arr.map((elem) => {
    // console.log("elem:", elem);
    let {
      id,
      snippet: {
        title,
        description,
        thumbnails: {
          medium: { url },
        },
      },
    } = elem;
    let div = document.createElement("div");
    div.addEventListener("click", () => {
      playVideoTrend(elem, arr);
    });

    let thumb = document.createElement("img");
    thumb.src = url;

    let heading = document.createElement("h3");
    heading.innerText = title;

    // let desc = document.createElement("p");
    // desc.innerText = description;

    div.append(thumb, heading);

    document.getElementById("con").append(div);
  });
}

async function searchVideo() {
  let enter = document.getElementById("sea").value;

  let response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${enter}&type=video&key=AIzaSyDOxh9YvHOan9FdKwlPz4EJ9GSypNAuZlM`
  );

  let data = await response.json();
  let el = data.items;
  document.getElementById("con").innerHTML = "";
  appendNorm(el);
}

function appendNorm(arr) {
  document.getElementById("con").innerHTML = "";
  document.getElementById("let").innerHTML = "";
  document.getElementById("ryt").innerHTML = "";
  arr.map((elem) => {
    console.log("elem:", elem);
    let {
      id: { videoId },
      snippet: {
        title,
        description,
        thumbnails: {
          medium: { url },
        },
      },
    } = elem;
    let div = document.createElement("div");
    div.addEventListener("click", () => {
      playVideoNorm(elem, arr);
    });

    let thumb = document.createElement("img");
    thumb.src = url;

    let heading = document.createElement("h3");
    heading.innerText = title;

    div.append(thumb, heading);

    document.getElementById("con").append(div);
  });
}

function playVideoTrend(elem, arr) {
  console.log("arr:", arr);
  document.getElementById("con").innerHTML = "";
  document.getElementById("let").innerHTML = "";
  document.getElementById("ryt").innerHTML = "";
  let {
    id,
    snippet: {
      title,
      description,
      thumbnails: {
        medium: { url },
      },
    },
  } = elem;
  let vDiv = document.createElement("div");
  vDiv.style.width = "800px";
  vDiv.style.height = "410px";
  let i = document.createElement("iframe");
  i.src = `https://www.youtube.com/embed/${id}`;
  i.width = "800px";
  i.height = "410px";
  i.setAttribute("allowfullscreen", true);

  arr.map(function (elm, index) {
    let rytDiv = document.createElement("div");
    let img = document.createElement("img");
    img.src = elm.snippet.thumbnails.medium.url;
    let p = document.createElement("p");
    p.innerText = elm.snippet.title;
    rytDiv.addEventListener("click", function () {
      // arr.splice(index, 1);
      playVideoTrend(elm, arr);
    });
    rytDiv.append(img, p);
    document.getElementById("ryt").append(rytDiv);
  });

  let like = document.createElement("div");
  like.id = "like";

  let ik1 = document.createElement("i");
  ik1.setAttribute("class", "material-icons");
  ik1.id = "likeOne";
  ik1.innerText = "thumb_up";
  ik1.style.background = "none";
  ik1.style.color = "white";
  ik1.style.margin = "10px 0 0 10px";

  let ik2 = document.createElement("i");
  ik2.setAttribute("class", "material-icons");
  ik2.innerText = "thumb_down";
  ik2.style.background = "none";
  ik2.style.color = "white";
  ik2.style.margin = "10px 0 0 10px";

  let ik3 = document.createElement("i");
  ik3.setAttribute("class", "material-icons");
  ik3.innerText = "share";
  ik3.style.background = "none";
  ik3.style.color = "white";
  ik3.style.margin = "10px 0 0 10px";

  let ik4 = document.createElement("i");
  ik4.setAttribute("class", "material-icons");
  ik4.innerText = "download";
  ik4.style.background = "none";
  ik4.style.color = "white";
  ik4.style.margin = "10px 0 0 10px";

  let ch1 = document.createElement("i");
  ch1.setAttribute("class", "material-icons");
  ch1.innerText = "notification_add";
  ch1.style.background = "none";
  ch1.style.color = "white";
  ch1.style.margin = "10px 0 0 10px";

  let ch = document.createElement("h3");
  ch.style.color = "white";
  ch.innerText = elem.snippet.channelTitle;

  like.append(ch, ch1, ik1, ik2, ik3, ik4);
  vDiv.append(i);
  document.getElementById("let").append(vDiv, like);
}
function playVideoNorm(elem, arr) {
  document.getElementById("con").innerHTML = "";
  document.getElementById("let").innerHTML = "";
  document.getElementById("ryt").innerHTML = "";
  let {
    id: { videoId },
    snippet: {
      title,
      description,
      thumbnails: {
        medium: { url },
      },
    },
  } = elem;
  let vDiv = document.createElement("div");
  vDiv.style.width = "800px";
  vDiv.style.height = "410px";
  let i = document.createElement("iframe");
  i.src = `https://www.youtube.com/embed/${videoId}`;
  i.width = "800px";
  i.height = "410px";
  i.setAttribute("allowfullscreen", true);

  arr.map(function (elm, index) {
    let rytDiv = document.createElement("div");
    let img = document.createElement("img");
    img.src = elm.snippet.thumbnails.medium.url;
    let p = document.createElement("p");
    p.innerText = elm.snippet.title;
    rytDiv.addEventListener("click", function () {
      // arr.splice(index, 1);
      playVideoNorm(elm, arr);
    });
    rytDiv.append(img, p);
    document.getElementById("ryt").append(rytDiv);
  });

  let like = document.createElement("div");
  like.id = "like";

  let ik1 = document.createElement("i");
  ik1.setAttribute("class", "material-icons");
  ik1.id = "likeOne";
  ik1.innerText = "thumb_up";
  ik1.style.background = "none";
  ik1.style.color = "white";
  ik1.style.margin = "10px 0 0 10px";

  let ik2 = document.createElement("i");
  ik2.setAttribute("class", "material-icons");
  ik2.innerText = "thumb_down";
  ik2.style.background = "none";
  ik2.style.color = "white";
  ik2.style.margin = "10px 0 0 10px";

  let ik3 = document.createElement("i");
  ik3.setAttribute("class", "material-icons");
  ik3.innerText = "share";
  ik3.style.background = "none";
  ik3.style.color = "white";
  ik3.style.margin = "10px 0 0 10px";

  let ik4 = document.createElement("i");
  ik4.setAttribute("class", "material-icons");
  ik4.innerText = "download";
  ik4.style.background = "none";
  ik4.style.color = "white";
  ik4.style.margin = "10px 0 0 10px";

  let ch1 = document.createElement("i");
  ch1.setAttribute("class", "material-icons");
  ch1.innerText = "notification_add";
  ch1.style.background = "none";
  ch1.style.color = "white";
  ch1.style.margin = "10px 0 0 10px";

  let ch = document.createElement("h3");
  ch.style.color = "white";
  ch.innerText = elem.snippet.channelTitle;

  like.append(ch, ch1, ik1, ik2, ik3, ik4);

  vDiv.append(i);
  document.getElementById("let").append(vDiv, like);
}
