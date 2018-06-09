/* Simplified Chinese translation for the jQuery Timepicker Addon /
/ Written by Will Lu */
define(['jqueryUiTimepickerAddon'] ,function($){
	$.timepicker.regional['zh-CN'] = {
		timeOnlyTitle: '选择时间',
		timeText: '时间',
		hourText: '小时',
		minuteText: '分钟',
		secondText: '秒钟',
		millisecText: '毫秒',
		microsecText: '微秒',
		timezoneText: '时区',
		currentText: '现在时间',
		closeText: '关闭',
		timeFormat: 'HH:mm',
		timeSuffix: '',
		amNames: ['AM', 'A'],
		pmNames: ['PM', 'P'],
		monthNamesShort:["1","2","3","4","5","6","7","8","9","10","11","12"],
		monthNames:["1","2","3","4","5","6","7","8","9","10","11","12"],
		isRTL: false
	};
	$.timepicker.setDefaults($.timepicker.regional['zh-CN']);
	
	$.datepicker.regional['zh-CN'] = {
			timeOnlyTitle: '选择时间',
			timeText: '时间',
			hourText: '小时',
			minuteText: '分钟',
			secondText: '秒钟',
			millisecText: '毫秒',
			microsecText: '微秒',
			timezoneText: '时区',
			currentText: '现在时间',
			closeText: '关闭',
			timeFormat: 'HH:mm',
			timeSuffix: '',
			amNames: ['AM', 'A'],
			pmNames: ['PM', 'P'],
			monthNamesShort:["1","2","3","4","5","6","7","8","9","10","11","12"],
			monthNames:["1","2","3","4","5","6","7","8","9","10","11","12"],
			isRTL: false
		};
		$.datepicker.setDefaults($.datepicker.regional['zh-CN']);
});