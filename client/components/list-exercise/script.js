Template.listExercise.onRendered(function() {

	$(".collapsible").collapsible();

});

// Template.listExercise.events({

//   "click .delete": function () {
//     lifts.remove(this._id);
//     // if (confirm('Confirm Deletion')) {
//     // 	console.log('true');
//     // 	lifts.remove(this._id);
//     // } else {
//     // 	console.log('flase');
//     // }
//   }

// });

Template.listExercise.events({

  "click .delete": function () {
    lifts.remove(this._id);
    console.log('deleted clicked hererkjelkafjeajf');
  }

});

Template.listExercise.helpers({

});