
function healer(){
    

fetch(`https://raw.githubusercontent.com/healer-op/HealCloud/main/json/zionl.json`)
.then(response =>{
    if(!response.ok){
        throw Error("ERROR");
    }
    return response.json();})
.then(data => {
    var time = new Date();
    var randomName = data.name[Math.floor(Math.random() * data.name.length)];
    var orderId = (Math.random() + 1).toString(36).substring(7);
    var orderId = orderId.toUpperCase()
    var index = Math.floor(Math.random() * data.imgs.length);
    var datas = data.temp;
    // console.log(data);
    const html = data.temp1.map((img, i) =>{
        return `
        <div class="list-item">
				<div class="list-item-company">
					<figure class="list-item-company-logo">
						<img src="${data.imgs[index]}" />
					</figure>
					<div class="list-item-company-info">
						<h4 class="list-item-company-name">${randomName} Just Bought ${data.product[index]}</h4>
						<a href="#" class="list-item-company-hashtag">Order Id: #${orderId}</a>
					</div>
				</div>
				<div class="list-item-transaction">
					<div class="list-item-transaction-values">
						<span class="list-item-transaction-value list-item-transaction-value--positive"> +$${data.price[index]}
						</span>
						<time class="list-item-transaction-time" datetime="${time.toLocaleTimeString()}">${time.toLocaleTimeString()}</time>
					</div>
					<button class="list-item-transaction-action">
						<i class="ph-caret-down-bold"></i>
					</button>
				</div>
			</div>`;
    }).join('');
    // document.querySelector("#limited").insertAdjacentHTML("afterbegin", html);
    document.querySelector("#limited").innerHTML = html + document.querySelector("#limited").innerHTML;
})
}
healer()
setInterval(function() {healer()}, 2500);
