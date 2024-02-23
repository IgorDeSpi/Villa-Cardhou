document.addEventListener('DOMContentLoaded', function() {
	var calendarEl = document.getElementById('calendar');
	var calendar = new FullCalendar.Calendar(calendarEl, {
		headerToolbar: {
			start: 'title',
			center: '',
			end: 'prev,today,next'
		},
		initialView: 'multiMonthThreeMonths',
		views: {
			multiMonthThreeMonths: {
				type: 'multiMonth',
				duration: { months: 2 }
			}
		},
		// multiMonthMaxColumns: 0,
		height: "auto",
		showNonCurrentDates: false,
		fixedWeekCount: false,
	});
	calendar.setOption('locale', 'fr');
	calendar.render();
});
