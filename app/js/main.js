const btn = document.querySelector('.burger');
const menu = document.querySelector('.mobile-menu');
const body = document.querySelector('body');

btn.addEventListener('click', ()=>{
	btn.classList.toggle('burger--active');
	menu.classList.toggle('burger--active');
	body.classList.toggle('noscroll');
});

const tabBtn = document.querySelectorAll('.tabs__btn');
const tabContent = document.querySelectorAll('.tabs__content');

tabBtn.forEach(function (element){
	element.addEventListener('click', open);
})

function open(evt){
	const tabTarget = evt.currentTarget;
	const button = tabTarget.dataset.button;

	tabBtn.forEach(function (item){
		item.classList.remove('tabs__btn--active');
	})

	tabTarget.classList.add('tabs__btn--active');

	tabContent.forEach(function (item){
		item.classList.remove('tabs__content--active');
	});

	document.querySelector(`#${button}`).classList.add('tabs__content--active');
}

const swiper = new Swiper(".testimonials__slider", {
	navigation: {
		prevEl: ".swiper-button-prev",
		nextEl: ".swiper-button-next",
	},
});
