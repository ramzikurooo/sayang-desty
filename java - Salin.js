
const bubbleLayer = document.querySelector(".bubble-layer");

function createBubble() {
    if (!bubbleLayer) return;

    const bubble = document.createElement("span");
    bubble.className = "soap-bubble";

    const maxX = Math.max(0, bubbleLayer.clientWidth - 55);
    const maxY = Math.max(0, bubbleLayer.clientHeight - 55);

    bubble.style.left = Math.random() * maxX + "px";
    bubble.style.top = Math.random() * maxY + "px";

    bubbleLayer.appendChild(bubble);

    bubble.addEventListener("animationend", () => bubble.remove());
}

createBubble();
setInterval(createBubble, 2200);
