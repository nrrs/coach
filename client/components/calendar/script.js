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
            var currentYearDate = moment( new Date(new Date().getFullYear(), 0, 1) ).format();
            
            // filter workouts older than this year
            var w = workouts.find().fetch().filter(function(workout) {
                return moment.utc(workout.date).format() > currentYearDate;
            });

            // filter lifts older than this year
            var l = lifts.find().fetch().filter(function(lift) {
                // return lift.date > currentYearDate;
                return moment.utc(lift.date).format() > currentYearDate;
            });
            
            // concat workouts and lifts into one array
            var exercises = w.concat(l);
            
            // manipulate object display
            exercices = exercises.map(function(exercise) {
                exercise.date = moment.utc(exercise.date).format();
                
                // if exercise = wod
                if (exercise.collectionName == 'workouts') {
                    exercise.color = '#90a4ae'; // blue-grey lighten 2
                    exercise.title = exercise.name;
                }

                // if exercise = lifts
                if (exercise.collectionName == 'lifts') {
                    exercise.color = '#546e7a';
                    exercise.title = !exercise.liftType ? exercise.customLift : exercise.liftType;
                }

                // exercise.title = exercise._id;
            
                return exercise;
            });
            callback(exercises);
        },
        eventClick: function(exercise) {
            // send user to single page
            if (exercise.collectionName == 'workouts') {
                Session.set('pageTitle', exercise.name);
                Router.go('/workout/' + exercise._id);
            } else if (exercise.collectionName == 'lifts') {
                var pgTitle = !exercise.liftType ? exercise.customLift : exercise.liftType;
                Session.set('pageTitle', pgTitle);
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