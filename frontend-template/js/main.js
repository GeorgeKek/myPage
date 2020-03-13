"use strict"

/**
 * инициализация всех инициализаций
 */
$(document).ready(function()
{
	o2.init();
});

/**
 * основной объект
 * @type {object}
 */
const o2 =
{
	/*
	 * вызов функций, которые должны запускаться при загрузке страницы
	 */
	init: function()
	{
		this.slider();
		this.getStrategies();
		this.setStrategies();
		this.selectStrategy();
	},
	slider()
	{
		let tapSlider = $('.strategy__line-slider')[0];
		let noUiYear = $('.strategy__count:last')[0];
		let noUiMonth = $('.strategy__count:first')[0];
		let summInvest = $('.strategy__item:eq(0)');
		let heightInvest = $('.strategy__change:first');
		let incomeInvest = $('.strategy__change:last');
		let maxIncome = $('.strategy__item:eq(9)');
		let countFormat = wNumb({
				decimals: 0,
				thousand: ' '
			});
		noUiSlider.create(tapSlider, {
			start: 400000,
			behaviour: 'tap',
			connect: [true, false],
			step: 1000,
			range: {
				'min': 50000,
				'max': 1000000
			},
			format: wNumb({
				decimals: 0,
				thousand: ' '
			}),
		});

		tapSlider.noUiSlider.on('update', function (values) {
			noUiYear.value = values.join();
			noUiMonth.value = countFormat.to(Math.round(parseInt(countFormat.from(noUiYear.value)) / 12));
			summInvest.text(noUiYear.value);
			heightInvest.text(countFormat.to(Math.round(parseInt(countFormat.from(noUiYear.value)) * 0.25)));
			incomeInvest.text(countFormat.to(Math.round(parseInt(countFormat.from(noUiYear.value)) * 0.05)));
			maxIncome.text('=' + countFormat.to(Math.round(parseInt(countFormat.from(noUiYear.value)) * 1.30)));

		});
		console.log();
	},
	getStrategies()
	{
		let ul = $('.strategy__option').find('ul');
		for (let i = 1; i < $('.strategies').length; i++)
		{
			let risks = $($('.strategies')[i]).data('risk');
			let percent = $($('.strategies')[i]).data('percent');
			$('<li class="strategy__wrap"><div class="strategy__percent"><span>до </span>'+percent+'%</div><div class="strategy__specification">'+risks+'</div></li>').appendTo(ul);
			ul.find($('.strategy__wrap')[i]).attr('data-risk', risks);
			ul.find($('.strategy__wrap')[i]).attr('data-percent', percent);

		}
		ul.css('display', 'none');
	},
	setStrategies()
	{
		$('.strategy__option').on('click', function(){
		let ul = $('.strategy__option').find('ul');
		ul.slideToggle();
		})

	},
	selectStrategy()
	{
		$('li.strategy__wrap').on('click', function() {
		})
	}


}
// console.log('hello');

// var stepSlider = document.getElementById('strategy__line-slider');

// noUiSlider.create(stepSlider, {
//     start: 300,
//     step: 100,
//     range: {
//         'min': [0],
//         'max': [1000]
//     }
// });