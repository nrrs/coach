Template.calendar.helpers({
    calendarOptions: {
        // Standard fullcalendar options
        height: 'auto',
        hiddenDays: [ ],
        slotDuration: '01:00:00',
        minTime: '08:00:00',
        maxTime: '19:00:00',
        lang: 'en',
        header: {
            left: 'title',
            center: '',
            right: 'today prev next month basicWeek'
        },
        defaultView: 'basicWeek',
        // Function providing events reactive computation for fullcalendar plugin
        events: function(start, end, timezone, callback) {
            // set current year for filtering
            var currentYearDate = new Date(new Date().getFullYear(), 0, 1);
            // filter workouts older than this year
            var workouts = wods.find().fetch().filter(function(wod) {
                return wod.date > currentYearDate;
            });
            // filter lifts older than this year
            var liftMovements = lifts.find().fetch().filter(function(lift) {
                return lift.date > currentYearDate;
            });
            // concat workouts and lifts into one array
            var exercises = workouts.concat(liftMovements);
            // manipulate object display
            exercices = exercises.map(function(exercise) {

                // if exercise = wod
                if (exercise.collectionName == 'wods') {
                    exercise.color = 'green';
                }

                // if exercise = lifts
                if (exercise.collectionName == 'lifts') {
                    exercise.color = 'red';
                }

                exercise.title = exercise._id;
            
                return exercise;
            });
            callback(exercises);
        },
        eventClick: function(exercise) {
            
            // send user to single page
            console.log(exercise.collectionName);
            
            if (exercise.collectionName == 'wods') {
                Router.go('/workout/' + exercise._id);
            } else if (exercise.collectionName == 'lifts') {
                Router.go('/lift/' + exercise._id);
            }
        },
        // Optional: id of the calendar
        id: "calendar1",
        // Optional: Additional classes to apply to the calendar
        addedClasses: "col-md-8",
        // Optional: Additional functions to apply after each reactive events computation
        autoruns: [
            function () {
                console.log("user defined autorun function executed!");
            }
        ]
    },
});