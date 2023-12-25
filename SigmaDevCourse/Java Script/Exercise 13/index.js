function createCard(title, cName, views, monthsOld, duration, thumbnail) {

  let viewStr;
  if (views < 100000) {
    viewStr = views;
  }
  else if (views > 1000000) {
    viewStr = views / 1000000 + 'M';
  }
  else {
    viewStr = views / 1000 + "K";
  }

  let html = `<div class="card">
    <div class="image">
      <img
        src="${thumbnail}"
      />
      <div class="capsule"> ${duration} </div>
    </div>
    <div class="text">
      <h1>${title}</h1>
      <p>${cName} . ${viewStr} views . ${monthsOld} months ago  </p>
    </div>
  </div>`

  document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}

// button to create more cards -

document.getElementById('addCard').addEventListener('click', addCard);

function addCard() {
  const container = document.querySelector('.container');

  const card = document.createElement('div');
  card.className = 'card';

  const imageDiv = document.createElement('div');
  imageDiv.className = 'image';

  const img = document.createElement('img');
  img.src = 'https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw';
  imageDiv.appendChild(img);

  const capsule = document.createElement('div');
  capsule.className = 'capsule';
  capsule.textContent = '31:07';
  imageDiv.appendChild(capsule);

  const textDiv = document.createElement('div');
  textDiv.className = 'text';

  const h1 = document.createElement('h1');
  h1.textContent = 'Introduction to Backend | Sigma Web Dev video #2';
  textDiv.appendChild(h1);

  const p = document.createElement('p');
  p.textContent = 'CodeWithHarry. 737k views. 2 months ago';
  textDiv.appendChild(p);

  card.appendChild(imageDiv);
  card.appendChild(textDiv);

  container.appendChild(card);
}


createCard(
  "Introduction to Backend | Sigma Web Dev video #2",
  "CodeWithHarry",
  560000,
  7,
  "31:22",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);
